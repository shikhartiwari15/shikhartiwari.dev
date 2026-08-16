/**
 * PROJECTS — this is the file you edit most.
 * Each project renders as a "commissioned system" card on the site.
 *
 * HOW TO EDIT:
 *  - Fill in `links` with real URLs when you have them. Any link left as ""
 *    simply won't render a button — so it's safe to leave blanks.
 *  - `status`: "online" (shipped / in production) or "commissioning" (in progress).
 *  - `layer`: which layer of your SHOP FLOOR → IIoT → MES → ERP → AI pipeline
 *    this project lives in. This is what ties each project to your signature diagram.
 *  - `metrics`: 1–3 punchy numbers. Keep them true.
 *  - Add a screenshot by dropping an image in /public and setting `image`.
 */

export type ProjectStatus = "online" | "commissioning";
export type PipelineLayer = "SHOP FLOOR" | "IIoT" | "MES" | "ERP / CLOUD" | "AI";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  layer: PipelineLayer;
  problem: string;
  approach: string;
  result: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  featured?: boolean;
  image?: string; // e.g. "/projects/mes.png"
  links: {
    demo?: string;      // live demo / dashboard
    repo?: string;      // GitHub
    caseStudy?: string; // write-up
  };
}

export const PROJECTS: Project[] = [
  {
    id: "mes-erp",
    title: "MES ↔ ERP Integration Platform",
    tagline: "Closing the loop between the shop floor and the business.",
    status: "online",
    layer: "MES",
    featured: true,
    problem:
      "Machine-level operations and enterprise systems ran in separate worlds. Production reality on the floor never reached the ERP in real time, so planning and business decisions lagged behind what the machines were actually doing.",
    approach:
      "Built a Manufacturing Execution System that ingests live IIoT data from the floor, models jobs and production state, and syncs it bidirectionally with the enterprise ERP — a single spine for end-to-end OT/IT integration.",
    result:
      "Machine data now flows continuously into business systems, giving planning and management a live, accurate picture of production instead of end-of-shift reports.",
    metrics: [
      { value: "OT↔IT", label: "loop closed" },
      { value: "Real-time", label: "ERP sync" },
    ],
    stack: ["Node.js", "MQTT / OPC-UA", "MongoDB", "REST APIs", "ERP integration"],
    links: { demo: "", repo: "", caseStudy: "" },
  },
  {
    id: "iiot-platform",
    title: "Shop-Floor IIoT Platform",
    tagline: "25 CNC machines, three production lines, one live view.",
    status: "online",
    layer: "IIoT",
    featured: true,
    problem:
      "Data collection was manual and after-the-fact. There was no live visibility into machine status or output across the plant, and no clean data foundation to build analytics or AI on.",
    approach:
      "Connected 25 CNC machines to a centralized IIoT platform via PLC/SCADA integration, and automated data acquisition across three production lines — toughened-glass, gasket & rig, and PVC manufacturing.",
    result:
      "Manual logging was replaced with automated, real-time acquisition and monitoring, and the platform now produces the clean telemetry stream that predictive-maintenance work runs on.",
    metrics: [
      { value: "25", label: "CNC machines" },
      { value: "3", label: "production lines" },
      { value: "0", label: "manual logging" },
    ],
    stack: ["PLC", "SCADA", "IIoT gateway", "Time-series data", "Node.js"],
    links: { demo: "", repo: "", caseStudy: "" },
  },
  {
    id: "ops-dashboards",
    title: "Real-Time Operations Dashboards",
    tagline: "HMI-style visibility for operators and management.",
    status: "online",
    layer: "MES",
    problem:
      "Operators and management had no shared, live view of equipment status, throughput, and performance — problems surfaced late and context was lost between shifts.",
    approach:
      "Designed operator/HMI-style dashboards on top of the IIoT stream: live equipment status, throughput, and production output, built for a control-room reading distance.",
    result:
      "Live status replaced spreadsheets and phone calls; issues are visible the moment they happen rather than at the end of a shift.",
    metrics: [
      { value: "Live", label: "machine status" },
      { value: "24/7", label: "monitoring" },
    ],
    stack: ["React", "Next.js", "TypeScript", "WebSocket / MQTT", "Charting"],
    links: { demo: "", repo: "", caseStudy: "" },
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance Model",
    tagline: "Forecasting equipment failure from the telemetry I already collect.",
    status: "commissioning",
    layer: "AI",
    featured: true,
    problem:
      "The IIoT platform produces rich time-series sensor data, but today it's used for monitoring, not prediction. Unplanned downtime is still reactive.",
    approach:
      "Building ML models on real shop-floor time-series data to forecast equipment failure before it happens — feature engineering on sensor streams, model training in Python, and a live demo deployed for review.",
    result:
      "In active development. The goal: move from 'what happened' to 'what's about to happen', deployed against the live data stream.",
    metrics: [
      { value: "In progress", label: "status" },
      { value: "Streamlit", label: "demo (soon)" },
    ],
    stack: ["Python", "pandas", "scikit-learn", "Time-series ML", "Streamlit"],
    links: { demo: "", repo: "", caseStudy: "" },
  },
  {
    id: "community-platform",
    title: "Multi-Platform Community Ecosystem",
    tagline: "Web, Android and iOS from one codebase, 5,000+ members.",
    status: "online",
    layer: "ERP / CLOUD",
    problem:
      "A community of thousands needed real-time communication across web and mobile without maintaining three separate apps.",
    approach:
      "Architected a cross-platform ecosystem in Flutter/Dart with a scalable Node.js / MongoDB backend and real-time features, serving 5,000+ members.",
    result:
      "Backend APIs sustained 15,000+ daily requests at 99.9% uptime; schema optimization improved query performance by 40%.",
    metrics: [
      { value: "5,000+", label: "members" },
      { value: "99.9%", label: "uptime" },
      { value: "+40%", label: "query perf" },
    ],
    stack: ["Flutter", "Dart", "Node.js", "MongoDB", "Socket.IO"],
    links: { demo: "", repo: "", caseStudy: "" },
  },
];
