/**
 * The separation this product sells is hard to say in a sentence and obvious in
 * a picture: the files of each micro frontend live in storage the customer
 * owns, the release decisions live in MFE Orchestrator, and the site that ties
 * them together lives somewhere else again. Nothing on the site showed that, so
 * every conversation had to draw it on a whiteboard.
 *
 * Written for the commercial conversation, not the integration: pieces of a
 * site, teams and providers — no bucket paths, no remoteEntry.js.
 */

/** One column of the diagram: a piece of the site, from team to browser. */
const columns = [
  {
    x: 168,
    piece: { name: "Home", team: "team Web", cadence: "ships weekly" },
    storage: {
      name: "Google Cloud",
      detail: "your account",
      note: "your files stay yours",
    },
    live: { name: "Home", version: "version 2.1" },
  },
  {
    x: 376,
    piece: {
      name: "Customer area",
      team: "team Accounts",
      cadence: "ships twice a month",
    },
    storage: {
      name: "Amazon AWS",
      detail: "your account",
      note: "with your own CDN",
    },
    live: { name: "Customer area", version: "version 1.8" },
  },
  {
    x: 584,
    piece: {
      name: "Checkout",
      team: "team Payments",
      cadence: "gradual rollout",
    },
    storage: {
      name: "Microsoft Azure",
      detail: "your tenant",
      note: "data stays in the EU",
    },
    live: { name: "Checkout", version: "4.2 · 10% canary" },
  },
  {
    x: 792,
    piece: {
      name: "Back office",
      team: "team Internal",
      cadence: "ships when needed",
    },
    storage: {
      name: "On-premise",
      detail: "your data centre",
      note: "never leaves your network",
    },
    live: { name: "Back office", version: "version 0.9" },
  },
] as const;

/** Left-hand lane labels. Numbered entries are the four steps of a release. */
const lanes = [
  { y: 138, title: "1 · BUILD", lines: ["each team owns", "its own piece"] },
  {
    y: 212,
    title: "2 · PUBLISH",
    lines: ["files go to the storage", "you picked for that piece"],
  },
  {
    y: 300,
    title: "WHERE FILES LIVE",
    lines: ["one per piece,", "your choice"],
  },
  {
    y: 424,
    title: "4 · GOES LIVE",
    lines: ["without releasing", "the whole site"],
  },
  {
    y: 506,
    title: "YOUR CUSTOMER",
    lines: ["one single", "experience"],
  },
] as const;

const box = "fill-surface stroke-white/25";
const boxControl = "fill-primary/10 stroke-primary";
const chip = "fill-background stroke-white/25";
const hair = "stroke-white/15";
const dataFlow = "stroke-white/70";
const controlFlow = "stroke-primary";

const ArchitectureDiagram = () => (
  <figure className="bg-surface/50 backdrop-blur-sm border border-border/50 rounded-xl shadow-card p-5 pb-1">
    {/* The diagram keeps its own width rather than shrinking to phone size,
        so on a narrow screen it has to be scrolled — say so. */}
    <p className="lg:hidden text-xs text-muted-foreground mb-3">
      Scroll the diagram sideways to see all four pieces.
    </p>
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 1240 600"
        role="img"
        className="block w-full min-w-[1020px] h-auto"
        aria-label="Four pieces of a site — home, customer area, checkout and back office — are built by different teams and published to different storage: Google Cloud, AWS, Azure and an on-premise data centre. Each release announces the new version to MFE Orchestrator, the control plane. From the console you decide which version goes live in each environment. When a visitor opens the page, the site asks the control plane which versions to show and then picks up the files straight from the storage that holds them."
      >
        <defs>
          <marker
            id="mfe-arrow-data"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <polygon points="0,0 10,5 0,10" className="fill-white/70" />
          </marker>
          <marker
            id="mfe-arrow-control"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <polygon points="0,0 10,5 0,10" className="fill-primary" />
          </marker>
          <marker
            id="mfe-arrow-control-start"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <polygon points="0,0 10,5 0,10" className="fill-primary" />
          </marker>
        </defs>

        {/* Every publish announces its version on the same bus. */}
        <text
          x="700"
          y="46"
          textAnchor="middle"
          fontSize={11.5}
          className="font-mono fill-primary"
        >
          announces the new version
        </text>
        <path
          d="M 256 60 H 1224"
          fill="none"
          strokeWidth={1.5}
          strokeDasharray="6 4"
          className={controlFlow}
        />
        <path
          d="M 1224 60 V 214"
          fill="none"
          strokeWidth={1.5}
          strokeDasharray="6 4"
          className={controlFlow}
          markerEnd="url(#mfe-arrow-control)"
        />
        {columns.map((column) => (
          <circle
            key={`node-${column.x}`}
            cx={column.x + 88}
            cy={60}
            r={3}
            className="fill-primary"
          />
        ))}

        {/* The site the visitor actually sees. */}
        <rect x="168" y="470" width="800" height="110" rx="8" strokeWidth={1.4} className={box} />
        <line x1="186" y1="544" x2="950" y2="544" strokeWidth={1} className={hair} />
        <text x="186" y="566" fontSize={13.5} className="font-sans font-semibold fill-white">
          Your customer sees one site, assembled when the page opens.
        </text>

        {columns.map((column) => (
          <g key={column.piece.name} transform={`translate(${column.x} 0)`}>
            <path
              d="M 88 110 V 60"
              fill="none"
              strokeWidth={1.5}
              strokeDasharray="6 4"
              className={controlFlow}
            />

            <rect x="0" y="110" width="176" height="80" rx="6" strokeWidth={1.4} className={box} />
            <text x="14" y="137" fontSize={15} className="font-sans font-semibold fill-white">
              {column.piece.name}
            </text>
            <text x="14" y="157" fontSize={11.5} className="font-sans fill-white/60">
              {column.piece.team}
            </text>
            <text x="14" y="176" fontSize={11.5} className="font-sans fill-white/60">
              {column.piece.cadence}
            </text>

            <path
              d="M 88 190 V 248"
              fill="none"
              strokeWidth={1.6}
              className={dataFlow}
              markerEnd="url(#mfe-arrow-data)"
            />

            <rect x="0" y="256" width="176" height="96" rx="6" strokeWidth={1.4} className={box} />
            <text x="14" y="284" fontSize={14} className="font-sans font-semibold fill-white">
              {column.storage.name}
            </text>
            <text x="14" y="304" fontSize={11.5} className="font-sans fill-white/60">
              {column.storage.detail}
            </text>
            <line x1="14" y1="316" x2="162" y2="316" strokeWidth={1} className={hair} />
            <text x="14" y="337" fontSize={11.5} className="font-sans fill-white/60">
              {column.storage.note}
            </text>

            <path
              d="M 88 484 V 360"
              fill="none"
              strokeWidth={1.6}
              className={dataFlow}
              markerEnd="url(#mfe-arrow-data)"
            />

            <rect x="13" y="484" width="150" height="44" rx="5" strokeWidth={1} className={chip} />
            <text
              x="88"
              y="504"
              textAnchor="middle"
              fontSize={13.5}
              className="font-sans font-semibold fill-white"
            >
              {column.live.name}
            </text>
            <text
              x="88"
              y="520"
              textAnchor="middle"
              fontSize={11}
              className="font-mono fill-white/60"
            >
              {column.live.version}
            </text>
          </g>
        ))}

        <text x="268" y="424" fontSize={11.5} className="font-sans fill-white/60">
          picks up the files
        </text>

        {/* Who decides. */}
        <rect x="1000" y="110" width="196" height="80" rx="6" strokeWidth={1.8} className={boxControl} />
        <text x="1016" y="136" fontSize={11} className="font-mono fill-primary tracking-[0.1em]">
          YOU, IN THE CONSOLE
        </text>
        <text x="1016" y="158" fontSize={11.5} className="font-sans fill-white/85">
          Decide what goes live,
        </text>
        <text x="1016" y="176" fontSize={11.5} className="font-sans fill-white/85">
          environment by environment.
        </text>
        <path
          d="M 1044 190 V 214"
          fill="none"
          strokeWidth={1.5}
          strokeDasharray="6 4"
          className={controlFlow}
          markerEnd="url(#mfe-arrow-control)"
        />
        <text x="1054" y="208" fontSize={11.5} className="font-mono fill-primary">
          3 · decide
        </text>

        {/* The control plane. */}
        <rect x="1000" y="222" width="240" height="204" rx="8" strokeWidth={1.8} className={boxControl} />
        <text x="1016" y="250" fontSize={11} className="font-mono fill-primary tracking-[0.1em]">
          THE CONTROL PLANE
        </text>
        <text x="1016" y="276" fontSize={16} className="font-sans font-bold fill-white">
          MFE Orchestrator
        </text>
        {[
          "· which version is live",
          "· separate environments",
          "· gradual rollout and rollback",
        ].map((line, index) => (
          <text
            key={line}
            x="1016"
            y={304 + index * 20}
            fontSize={11.5}
            className="font-sans fill-white/85"
          >
            {line}
          </text>
        ))}
        <line x1="1016" y1="360" x2="1224" y2="360" strokeWidth={1} className={hair} />
        {["TEST", "STAGING", "LIVE"].map((environment, index) => (
          <g key={environment}>
            <rect
              x={1016 + index * 72}
              y="370"
              width="66"
              height="22"
              rx="4"
              strokeWidth={1}
              className={chip}
            />
            <text
              x={1049 + index * 72}
              y="385"
              textAnchor="middle"
              fontSize={11}
              className="font-mono fill-white/60"
            >
              {environment}
            </text>
          </g>
        ))}
        <text x="1016" y="412" fontSize={11.5} className="font-sans fill-white/60">
          Your files never pass through here.
        </text>

        {/* The site asks the control plane what to show. */}
        <path
          d="M 968 556 H 1108 V 434"
          fill="none"
          strokeWidth={1.5}
          strokeDasharray="6 4"
          className={controlFlow}
          markerStart="url(#mfe-arrow-control-start)"
          markerEnd="url(#mfe-arrow-control)"
        />
        <text x="1118" y="474" fontSize={11.5} className="font-mono fill-primary">
          asks which
        </text>
        <text x="1118" y="490" fontSize={11.5} className="font-mono fill-primary">
          versions to show
        </text>

        {lanes.map((lane) => (
          <g key={lane.title}>
            <text
              x="8"
              y={lane.y}
              fontSize={11}
              className="font-mono fill-white tracking-[0.08em]"
            >
              {lane.title}
            </text>
            {lane.lines.map((line, index) => (
              <text
                key={line}
                x="8"
                y={lane.y + 18 + index * 14}
                fontSize={10.5}
                className="font-sans fill-white/60"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
      </svg>
    </div>
    <figcaption className="text-sm text-muted-foreground leading-relaxed border-t border-border/50 mt-2 pt-4 pb-4">
      A release touches one column: the team publishes to its own storage and the control plane
      records the new version. The rest of the site is untouched, and the other three pieces never
      notice. Of these four steps, only the third happens at go-live.
    </figcaption>
  </figure>
);

export default ArchitectureDiagram;
