import type { ContentDetails } from "../../plugins/emitters/contentIndex";
import {
  SimulationNodeDatum,
  SimulationLinkDatum,
  Simulation,
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceLink,
  forceCollide,
  forceRadial,
  zoomIdentity,
  select,
  drag,
  zoom,
} from "d3";
import { Text, Graphics, Application, Container, Circle } from "pixi.js";
import { Group as TweenGroup, Tween as Tweened } from "@tweenjs/tween.js";
import { registerEscapeHandler, removeAllChildren } from "./util";
import {
  FullSlug,
  SimpleSlug,
  getFullSlug,
  joinSegments,
  pathToRoot,
  resolveRelative,
  simplifySlug,
} from "../../util/path";
import { D3Config } from "../Graph";

type GraphicsInfo = {
  color: string;
  gfx: Graphics;
  alpha: number;
  active: boolean;
};

// In the bipartite relationship graph a node is an OBJECT (a primitive,
// assumption, or class), a REDUCTION (a hyperedge), or a BARRIER. Everything
// else — reference pages, notes — stays "page".
type NodeKind = "page" | "object" | "reduction" | "barrier";

// A link is either an ordinary wikilink, or one of the three typed edges of the
// hypergraph. `hypothesis` and `conclusion` are the two halves of a hyperedge:
// drawing them as one object-to-object arrow is exactly the misrepresentation
// the bipartite layout exists to prevent.
type LinkKind = "link" | "hypothesis" | "conclusion" | "barrier";

type NodeData = {
  id: SimpleSlug;
  text: string;
  tags: string[];
  kind?: NodeKind;
} & SimulationNodeDatum;

type SimpleLinkData = {
  source: SimpleSlug;
  target: SimpleSlug;
  kind?: LinkKind;
  /** barrier links only: "unconditional" draws solid, "conditional" dashed */
  strength?: string;
};

type LinkData = {
  source: NodeData;
  target: NodeData;
  kind?: LinkKind;
  strength?: string;
} & SimulationLinkDatum<NodeData>;

type LinkRenderData = GraphicsInfo & {
  simulationData: LinkData;
};

type NodeRenderData = GraphicsInfo & {
  simulationData: NodeData;
  label: Text;
};

const localStorageKey = "graph-visited";
function getVisited(): Set<SimpleSlug> {
  return new Set(JSON.parse(localStorage.getItem(localStorageKey) ?? "[]"));
}

function addToVisited(slug: SimpleSlug) {
  const visited = getVisited();
  visited.add(slug);
  localStorage.setItem(localStorageKey, JSON.stringify([...visited]));
}

type TweenNode = {
  update: (time: number) => void;
  stop: () => void;
};

async function renderGraph(graph: HTMLElement, fullSlug: FullSlug) {
  const slug = simplifySlug(fullSlug);
  const visited = getVisited();
  removeAllChildren(graph);

  let {
    drag: enableDrag,
    zoom: enableZoom,
    depth,
    scale,
    repelForce,
    centerForce,
    linkDistance,
    fontSize,
    opacityScale,
    removeTags,
    showTags,
    focusOnHover,
    enableRadial,
    relations: useRelations,
  } = JSON.parse(graph.dataset["cfg"]!) as D3Config;

  const data: Map<SimpleSlug, ContentDetails> = new Map(
    Object.entries<ContentDetails>(await fetchData).map(([k, v]) => [
      simplifySlug(k as FullSlug),
      v,
    ]),
  );
  const links: SimpleLinkData[] = [];
  const tags: SimpleSlug[] = [];
  const validLinks = new Set(data.keys());

  const tweens = new Map<string, TweenNode>();
  for (const [source, details] of data.entries()) {
    const outgoing = details.links ?? [];

    for (const dest of outgoing) {
      if (validLinks.has(dest)) {
        links.push({ source: source, target: dest });
      }
    }

    if (showTags) {
      const localTags = details.tags
        .filter((tag) => !removeTags.includes(tag))
        .map((tag) => simplifySlug(("tags/" + tag) as FullSlug));

      tags.push(...localTags.filter((tag) => !tags.includes(tag)));

      for (const tag of localTags) {
        links.push({ source: source, target: tag });
      }
    }
  }

  // ---------------------------------------------------------------- relations
  // The hypergraph replaces every link incident to a reduction or barrier page
  // with its TYPED edges. Ordinary wikilinks between other pages are untouched,
  // so reference pages keep a useful local graph.
  const nodeKind = new Map<SimpleSlug, NodeKind>();
  if (useRelations) {
    try {
      // Same addressing Quartz uses for static/contentIndex.json: relative to
      // the page root, so it resolves from any depth and under a subpath.
      const res = await fetch(
        joinSegments(pathToRoot(fullSlug), "static/relations.json"),
      );
      const manifest = res.ok ? await res.json() : null;
      if (manifest) {
        const asSlug = (g: string) => simplifySlug(g as FullSlug);
        for (const o of manifest.objects ?? []) {
          if (o.kind === "variant") continue; // variants live on their host page
          nodeKind.set(asSlug(o.graphSlug), "object");
        }
        for (const r of manifest.reductions ?? [])
          nodeKind.set(asSlug(r.graphSlug), "reduction");
        for (const b of manifest.barriers ?? [])
          nodeKind.set(asSlug(b.graphSlug), "barrier");

        // Where an endpoint is a variant, the edge attaches to its host page.
        const hostOf = new Map<string, SimpleSlug>();
        for (const o of manifest.objects ?? [])
          hostOf.set(o.id, asSlug(o.graphSlug));

        const typed: SimpleLinkData[] = [];
        for (const r of manifest.reductions ?? []) {
          const self = asSlug(r.graphSlug);
          for (const h of r.hypotheses ?? []) {
            const from = hostOf.get(h);
            if (from && from !== self)
              typed.push({ source: from, target: self, kind: "hypothesis" });
          }
          const to = hostOf.get(r.conclusion);
          if (to && to !== self)
            typed.push({ source: self, target: to, kind: "conclusion" });
        }
        for (const b of manifest.barriers ?? []) {
          const self = asSlug(b.graphSlug);
          // A barrier constrains an ARROW, never a pair of objects. When a
          // reduction page exists for the same hyperedge the barrier attaches
          // to it. When none does — the usual case, since a barrier normally
          // rules out a reduction nobody has — the BARRIER NODE ITSELF occupies
          // the arrow position, so the drawn shape is still
          // object — barrier — object and never a direct object-to-object edge,
          // which would read as the implication the barrier denies.
          const key =
            [...(b.hypotheses ?? [])].sort().join("+") + "=>" + b.conclusion;
          const target = (manifest.reductions ?? []).find(
            (r: any) =>
              [...(r.hypotheses ?? [])].sort().join("+") +
                "=>" +
                r.conclusion ===
              key,
          );
          if (target) {
            typed.push({
              source: self,
              target: asSlug(target.graphSlug),
              kind: "barrier",
              strength: b.strength,
            });
          } else {
            for (const o of [...(b.hypotheses ?? []), b.conclusion]) {
              const other = hostOf.get(o);
              if (other && other !== self)
                typed.push({
                  source: self,
                  target: other,
                  kind: "barrier",
                  strength: b.strength,
                });
            }
          }
        }

        // Drop untyped links that touch the reduction layer, then add ours.
        const isEdgeNode = (s: SimpleSlug) => {
          const k = nodeKind.get(s);
          return k === "reduction" || k === "barrier";
        };
        for (let i = links.length - 1; i >= 0; i--) {
          if (isEdgeNode(links[i].source) || isEdgeNode(links[i].target))
            links.splice(i, 1);
        }
        for (const t of typed) {
          if (validLinks.has(t.source) && validLinks.has(t.target))
            links.push(t);
        }
      }
    } catch {
      // A missing or malformed manifest degrades to the ordinary link graph.
    }
  }

  const neighbourhood = new Set<SimpleSlug>();
  const wl: (SimpleSlug | "__SENTINEL")[] = [slug, "__SENTINEL"];
  if (depth >= 0) {
    while (depth >= 0 && wl.length > 0) {
      // compute neighbours
      const cur = wl.shift()!;
      if (cur === "__SENTINEL") {
        depth--;
        wl.push("__SENTINEL");
      } else {
        neighbourhood.add(cur);
        const outgoing = links.filter((l) => l.source === cur);
        const incoming = links.filter((l) => l.target === cur);
        wl.push(
          ...outgoing.map((l) => l.target),
          ...incoming.map((l) => l.source),
        );
      }
    }
  } else {
    validLinks.forEach((id) => neighbourhood.add(id));
    if (showTags) tags.forEach((tag) => neighbourhood.add(tag));
  }

  const nodes = [...neighbourhood].map((url) => {
    const text = url.startsWith("tags/")
      ? "#" + url.substring(5)
      : (data.get(url)?.title ?? url);
    return {
      id: url,
      text,
      tags: data.get(url)?.tags ?? [],
      kind: nodeKind.get(url) ?? "page",
    };
  });
  const graphData: { nodes: NodeData[]; links: LinkData[] } = {
    nodes,
    links: links
      .filter((l) => neighbourhood.has(l.source) && neighbourhood.has(l.target))
      .map((l) => ({
        source: nodes.find((n) => n.id === l.source)!,
        target: nodes.find((n) => n.id === l.target)!,
        kind: l.kind ?? "link",
        strength: l.strength,
      })),
  };

  const width = graph.offsetWidth;
  const height = Math.max(graph.offsetHeight, 250);

  // we virtualize the simulation and use pixi to actually render it
  const simulation: Simulation<NodeData, LinkData> = forceSimulation<NodeData>(
    graphData.nodes,
  )
    .force("charge", forceManyBody().strength(-100 * repelForce))
    .force("center", forceCenter().strength(centerForce))
    .force("link", forceLink(graphData.links).distance(linkDistance))
    .force(
      "collide",
      forceCollide<NodeData>((n) => nodeRadius(n)).iterations(3),
    );

  const radius = (Math.min(width, height) / 2) * 0.8;
  if (enableRadial)
    simulation.force("radial", forceRadial(radius).strength(0.2));

  // precompute style prop strings as pixi doesn't support css variables
  const cssVars = [
    "--secondary",
    "--tertiary",
    "--gray",
    "--light",
    "--lightgray",
    "--dark",
    "--darkgray",
    "--bodyFont",
  ] as const;
  const computedStyleMap = cssVars.reduce(
    (acc, key) => {
      acc[key] = getComputedStyle(document.documentElement).getPropertyValue(
        key,
      );
      return acc;
    },
    {} as Record<(typeof cssVars)[number], string>,
  );

  // calculate color
  const color = (d: NodeData) => {
    const isCurrent = d.id === slug;
    if (isCurrent) {
      return computedStyleMap["--secondary"];
    } else if (d.kind === "reduction" || d.kind === "barrier") {
      // The reduction layer reads as structure, not content.
      return computedStyleMap["--lightgray"];
    } else if (visited.has(d.id) || d.id.startsWith("tags/")) {
      return computedStyleMap["--tertiary"];
    } else {
      return computedStyleMap["--gray"];
    }
  };

  // Link styling. `hypothesis` and `conclusion` are the two halves of one
  // hyperedge and are deliberately drawn differently, so a reader can see which
  // way the arrow runs without arrowheads at this node size.
  const linkStyle = (kind?: LinkKind, active?: boolean) => {
    switch (kind) {
      case "hypothesis":
        return {
          width: 1,
          color: computedStyleMap[active ? "--darkgray" : "--gray"],
        };
      case "conclusion":
        return {
          width: 1.6,
          color: computedStyleMap[active ? "--secondary" : "--tertiary"],
        };
      case "barrier":
        return {
          width: 1.4,
          color: computedStyleMap[active ? "--darkgray" : "--gray"],
        };
      default:
        return {
          width: 1,
          color: computedStyleMap[active ? "--gray" : "--lightgray"],
        };
    }
  };

  function nodeRadius(d: NodeData) {
    // A hyperedge is not an object, so it does not grow with its degree — a
    // reduction always has exactly (hypotheses + 1) links, and sizing it like an
    // object would make the two layers hard to tell apart.
    if (d.kind === "reduction") return 2.5;
    if (d.kind === "barrier") return 3;
    const numLinks = graphData.links.filter(
      (l) => l.source.id === d.id || l.target.id === d.id,
    ).length;
    return 2 + Math.sqrt(numLinks);
  }

  let hoveredNodeId: string | null = null;
  let hoveredNeighbours: Set<string> = new Set();
  const linkRenderData: LinkRenderData[] = [];
  const nodeRenderData: NodeRenderData[] = [];
  function updateHoverInfo(newHoveredId: string | null) {
    hoveredNodeId = newHoveredId;

    if (newHoveredId === null) {
      hoveredNeighbours = new Set();
      for (const n of nodeRenderData) {
        n.active = false;
      }

      for (const l of linkRenderData) {
        l.active = false;
      }
    } else {
      hoveredNeighbours = new Set();
      for (const l of linkRenderData) {
        const linkData = l.simulationData;
        if (
          linkData.source.id === newHoveredId ||
          linkData.target.id === newHoveredId
        ) {
          hoveredNeighbours.add(linkData.source.id);
          hoveredNeighbours.add(linkData.target.id);
        }

        l.active =
          linkData.source.id === newHoveredId ||
          linkData.target.id === newHoveredId;
      }

      for (const n of nodeRenderData) {
        n.active = hoveredNeighbours.has(n.simulationData.id);
      }
    }
  }

  let dragStartTime = 0;
  let dragging = false;

  function renderLinks() {
    tweens.get("link")?.stop();
    const tweenGroup = new TweenGroup();

    for (const l of linkRenderData) {
      let alpha = 1;

      // if we are hovering over a node, we want to highlight the immediate neighbours
      // with full alpha and the rest with default alpha
      if (hoveredNodeId) {
        alpha = l.active ? 1 : 0.2;
      }

      l.color = linkStyle(l.simulationData.kind, l.active).color;
      tweenGroup.add(new Tweened<LinkRenderData>(l).to({ alpha }, 200));
    }

    tweenGroup.getAll().forEach((tw) => tw.start());
    tweens.set("link", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop());
      },
    });
  }

  function renderLabels() {
    tweens.get("label")?.stop();
    const tweenGroup = new TweenGroup();

    const defaultScale = 1 / scale;
    const activeScale = defaultScale * 1.1;
    for (const n of nodeRenderData) {
      const nodeId = n.simulationData.id;

      if (hoveredNodeId === nodeId) {
        tweenGroup.add(
          new Tweened<Text>(n.label).to(
            {
              alpha: 1,
              scale: { x: activeScale, y: activeScale },
            },
            100,
          ),
        );
      } else {
        tweenGroup.add(
          new Tweened<Text>(n.label).to(
            {
              alpha: n.label.alpha,
              scale: { x: defaultScale, y: defaultScale },
            },
            100,
          ),
        );
      }
    }

    tweenGroup.getAll().forEach((tw) => tw.start());
    tweens.set("label", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop());
      },
    });
  }

  function renderNodes() {
    tweens.get("hover")?.stop();

    const tweenGroup = new TweenGroup();
    for (const n of nodeRenderData) {
      let alpha = 1;

      // if we are hovering over a node, we want to highlight the immediate neighbours
      if (hoveredNodeId !== null && focusOnHover) {
        alpha = n.active ? 1 : 0.2;
      }

      tweenGroup.add(
        new Tweened<Graphics>(n.gfx, tweenGroup).to({ alpha }, 200),
      );
    }

    tweenGroup.getAll().forEach((tw) => tw.start());
    tweens.set("hover", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop());
      },
    });
  }

  function renderPixiFromD3() {
    renderNodes();
    renderLinks();
    renderLabels();
  }

  tweens.forEach((tween) => tween.stop());
  tweens.clear();

  const app = new Application();
  await app.init({
    width,
    height,
    antialias: true,
    autoStart: false,
    autoDensity: true,
    backgroundAlpha: 0,
    preference: "webgpu",
    resolution: window.devicePixelRatio,
    eventMode: "static",
  });
  graph.appendChild(app.canvas);

  const stage = app.stage;
  stage.interactive = false;

  const labelsContainer = new Container<Text>({
    zIndex: 3,
    isRenderGroup: true,
  });
  const nodesContainer = new Container<Graphics>({
    zIndex: 2,
    isRenderGroup: true,
  });
  const linkContainer = new Container<Graphics>({
    zIndex: 1,
    isRenderGroup: true,
  });
  stage.addChild(nodesContainer, labelsContainer, linkContainer);

  for (const n of graphData.nodes) {
    const nodeId = n.id;

    const label = new Text({
      interactive: false,
      eventMode: "none",
      text: n.text,
      alpha: 0,
      anchor: { x: 0.5, y: 1.2 },
      style: {
        fontSize: fontSize * 15,
        fill: computedStyleMap["--dark"],
        fontFamily: computedStyleMap["--bodyFont"],
      },
      resolution: window.devicePixelRatio * 4,
    });
    label.scale.set(1 / scale);

    let oldLabelOpacity = 0;
    const isTagNode = nodeId.startsWith("tags/");
    const r = nodeRadius(n);
    const gfx = new Graphics({
      interactive: true,
      label: nodeId,
      eventMode: "static",
      hitArea: new Circle(0, 0, Math.max(r, 4)),
      cursor: "pointer",
    });
    // Shape carries the node kind: objects are discs, reductions are squares
    // (a hyperedge, not a thing), barriers are hollow rings.
    if (n.kind === "reduction") gfx.rect(-r, -r, r * 2, r * 2);
    else if (n.kind === "barrier") gfx.circle(0, 0, r);
    else gfx.circle(0, 0, r);
    gfx
      .fill({
        color: isTagNode
          ? computedStyleMap["--light"]
          : n.kind === "barrier"
            ? computedStyleMap["--light"]
            : color(n),
      })
      .on("pointerover", (e) => {
        updateHoverInfo(e.target.label);
        oldLabelOpacity = label.alpha;
        if (!dragging) {
          renderPixiFromD3();
        }
      })
      .on("pointerleave", () => {
        updateHoverInfo(null);
        label.alpha = oldLabelOpacity;
        if (!dragging) {
          renderPixiFromD3();
        }
      });

    if (isTagNode) {
      gfx.stroke({ width: 2, color: computedStyleMap["--tertiary"] });
    } else if (n.kind === "barrier") {
      // Hollow ring: a barrier is a statement ABOUT edges, not a node in the
      // implication structure.
      gfx.stroke({ width: 1.5, color: computedStyleMap["--darkgray"] });
    }

    nodesContainer.addChild(gfx);
    labelsContainer.addChild(label);

    const nodeRenderDatum: NodeRenderData = {
      simulationData: n,
      gfx,
      label,
      color: color(n),
      alpha: 1,
      active: false,
    };

    nodeRenderData.push(nodeRenderDatum);
  }

  for (const l of graphData.links) {
    const gfx = new Graphics({ interactive: false, eventMode: "none" });
    linkContainer.addChild(gfx);

    const linkRenderDatum: LinkRenderData = {
      simulationData: l,
      gfx,
      color: linkStyle(l.kind).color,
      alpha: 1,
      active: false,
    };

    linkRenderData.push(linkRenderDatum);
  }

  let currentTransform = zoomIdentity;
  if (enableDrag) {
    select<HTMLCanvasElement, NodeData | undefined>(app.canvas).call(
      drag<HTMLCanvasElement, NodeData | undefined>()
        .container(() => app.canvas)
        .subject(() => graphData.nodes.find((n) => n.id === hoveredNodeId))
        .on("start", function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(1).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
          event.subject.__initialDragPos = {
            x: event.subject.x,
            y: event.subject.y,
            fx: event.subject.fx,
            fy: event.subject.fy,
          };
          dragStartTime = Date.now();
          dragging = true;
        })
        .on("drag", function dragged(event) {
          const initPos = event.subject.__initialDragPos;
          event.subject.fx =
            initPos.x + (event.x - initPos.x) / currentTransform.k;
          event.subject.fy =
            initPos.y + (event.y - initPos.y) / currentTransform.k;
        })
        .on("end", function dragended(event) {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
          dragging = false;

          // if the time between mousedown and mouseup is short, we consider it a click
          if (Date.now() - dragStartTime < 500) {
            const node = graphData.nodes.find(
              (n) => n.id === event.subject.id,
            ) as NodeData;
            const targ = resolveRelative(fullSlug, node.id);
            window.spaNavigate(new URL(targ, window.location.toString()));
          }
        }),
    );
  } else {
    for (const node of nodeRenderData) {
      node.gfx.on("click", () => {
        const targ = resolveRelative(fullSlug, node.simulationData.id);
        window.spaNavigate(new URL(targ, window.location.toString()));
      });
    }
  }

  if (enableZoom) {
    select<HTMLCanvasElement, NodeData>(app.canvas).call(
      zoom<HTMLCanvasElement, NodeData>()
        .extent([
          [0, 0],
          [width, height],
        ])
        .scaleExtent([0.25, 4])
        .on("zoom", ({ transform }) => {
          currentTransform = transform;
          stage.scale.set(transform.k, transform.k);
          stage.position.set(transform.x, transform.y);

          // zoom adjusts opacity of labels too
          const scale = transform.k * opacityScale;
          let scaleOpacity = Math.max((scale - 1) / 3.75, 0);
          const activeNodes = nodeRenderData
            .filter((n) => n.active)
            .flatMap((n) => n.label);

          for (const label of labelsContainer.children) {
            if (!activeNodes.includes(label)) {
              label.alpha = scaleOpacity;
            }
          }
        }),
    );
  }

  let stopAnimation = false;
  function animate(time: number) {
    if (stopAnimation) return;
    for (const n of nodeRenderData) {
      const { x, y } = n.simulationData;
      if (!x || !y) continue;
      n.gfx.position.set(x + width / 2, y + height / 2);
      if (n.label) {
        n.label.position.set(x + width / 2, y + height / 2);
      }
    }

    for (const l of linkRenderData) {
      const linkData = l.simulationData;
      const style = linkStyle(linkData.kind, l.active);
      const x1 = linkData.source.x! + width / 2;
      const y1 = linkData.source.y! + height / 2;
      const x2 = linkData.target.x! + width / 2;
      const y2 = linkData.target.y! + height / 2;
      l.gfx.clear();
      // A CONDITIONAL barrier rests on an oracle or an unproven assumption, so
      // it is drawn dashed: the reader should not read it as settled.
      if (linkData.kind === "barrier" && linkData.strength === "conditional") {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy) || 1;
        const dash = 4;
        const gap = 3;
        for (let d = 0; d < len; d += dash + gap) {
          const e = Math.min(d + dash, len);
          l.gfx.moveTo(x1 + (dx * d) / len, y1 + (dy * d) / len);
          l.gfx.lineTo(x1 + (dx * e) / len, y1 + (dy * e) / len);
        }
        l.gfx.stroke({ alpha: l.alpha, width: style.width, color: l.color });
      } else {
        l.gfx.moveTo(x1, y1);
        l.gfx
          .lineTo(x2, y2)
          .stroke({ alpha: l.alpha, width: style.width, color: l.color });
      }
    }

    tweens.forEach((t) => t.update(time));
    app.renderer.render(stage);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
  return () => {
    stopAnimation = true;
    app.destroy();
  };
}

let localGraphCleanups: (() => void)[] = [];
let globalGraphCleanups: (() => void)[] = [];

function cleanupLocalGraphs() {
  for (const cleanup of localGraphCleanups) {
    cleanup();
  }
  localGraphCleanups = [];
}

function cleanupGlobalGraphs() {
  for (const cleanup of globalGraphCleanups) {
    cleanup();
  }
  globalGraphCleanups = [];
}

document.addEventListener("nav", async (e: CustomEventMap["nav"]) => {
  const slug = e.detail.url;
  addToVisited(simplifySlug(slug));

  async function renderLocalGraph() {
    cleanupLocalGraphs();
    const localGraphContainers =
      document.getElementsByClassName("graph-container");
    for (const container of localGraphContainers) {
      localGraphCleanups.push(
        await renderGraph(container as HTMLElement, slug),
      );
    }
  }

  await renderLocalGraph();
  const handleThemeChange = () => {
    void renderLocalGraph();
  };

  document.addEventListener("themechange", handleThemeChange);
  window.addCleanup(() => {
    document.removeEventListener("themechange", handleThemeChange);
  });

  const containers = [
    ...document.getElementsByClassName("global-graph-outer"),
  ] as HTMLElement[];
  async function renderGlobalGraph() {
    const slug = getFullSlug(window);
    for (const container of containers) {
      container.classList.add("active");
      const sidebar = container.closest(".sidebar") as HTMLElement;
      if (sidebar) {
        sidebar.style.zIndex = "1";
      }

      const graphContainer = container.querySelector(
        ".global-graph-container",
      ) as HTMLElement;
      registerEscapeHandler(container, hideGlobalGraph);
      if (graphContainer) {
        globalGraphCleanups.push(await renderGraph(graphContainer, slug));
      }
    }
  }

  function hideGlobalGraph() {
    cleanupGlobalGraphs();
    for (const container of containers) {
      container.classList.remove("active");
      const sidebar = container.closest(".sidebar") as HTMLElement;
      if (sidebar) {
        sidebar.style.zIndex = "";
      }
    }
  }

  async function shortcutHandler(e: HTMLElementEventMap["keydown"]) {
    if (e.key === "g" && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
      e.preventDefault();
      const anyGlobalGraphOpen = containers.some((container) =>
        container.classList.contains("active"),
      );
      anyGlobalGraphOpen ? hideGlobalGraph() : renderGlobalGraph();
    }
  }

  const containerIcons = document.getElementsByClassName("global-graph-icon");
  Array.from(containerIcons).forEach((icon) => {
    icon.addEventListener("click", renderGlobalGraph);
    window.addCleanup(() =>
      icon.removeEventListener("click", renderGlobalGraph),
    );
  });

  document.addEventListener("keydown", shortcutHandler);
  window.addCleanup(() => {
    document.removeEventListener("keydown", shortcutHandler);
    cleanupLocalGraphs();
    cleanupGlobalGraphs();
  });
});
