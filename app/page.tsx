import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Factory,
  Database,
  Server,
  LineChart,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Pipeline from "@/components/Pipeline";

const STATS = [
  { value: "10", unit: "yrs", label: "engineering" },
  { value: "25", unit: "units", label: "CNC machines connected" },
  { value: "03", unit: "lines", label: "production lines automated" },
  { value: "MES", unit: "→ERP", label: "OT/IT integrated" },
];

const NAV = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Experience" },
  { href: "#focus", label: "Focus" },
  { href: "#contact", label: "Contact" },
];

const STACK = [
  {
    icon: Factory,
    title: "Industry 4.0 & Automation",
    items: [
      "PLC",
      "SCADA",
      "MES development",
      "ERP integration",
      "IIoT architecture",
      "OT/IT convergence",
      "Shop-floor data acquisition",
    ],
  },
  {
    icon: LineChart,
    title: "Industrial Data & AI",
    tag: "developing",
    items: [
      "Time-series / sensor data",
      "Data pipelines & ETL",
      "Predictive maintenance",
      "Anomaly detection",
      "Digital twin",
      "Python",
      "Foundational ML",
    ],
  },
  {
    icon: Server,
    title: "Backend & Cloud",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Microservices",
      "AWS (EC2 · S3 · Lambda)",
      "CI/CD",
    ],
  },
  {
    icon: Database,
    title: "Data & Interfaces",
    items: [
      "MongoDB",
      "MySQL",
      "React",
      "Next.js",
      "TypeScript",
      "Real-time dashboards",
    ],
  },
];

const WORK = [
  {
    period: "2022 — Present",
    role: "Senior Software Engineer → Industry 4.0 / IIoT",
    org: "Nortcele Systems Pvt. Ltd.",
    place: "Bengaluru",
    points: [
      "Connected 25 CNC machines to a centralized IIoT platform, replacing manual data collection with automated, real-time acquisition and monitoring.",
      "Automated data acquisition across three production lines — toughened-glass, gasket & rig, and PVC manufacturing.",
      "Developed a Manufacturing Execution System (MES) linking shop-floor IIoT data to the enterprise ERP — end-to-end OT/IT integration.",
      "Built real-time dashboards giving operators and management live visibility into equipment status, throughput, and performance.",
    ],
  },
  {
    period: "2014 — 2022",
    role: "Software Developer",
    org: "Satyam Software Solutions Pvt. Ltd.",
    place: "Noida",
    points: [
      "Built a local business-discovery platform serving 5,000+ registered businesses using ASP.NET and MySQL.",
      "Designed the relational database architecture, advanced search, authentication, and review systems.",
    ],
  },
];

const FOCUS = [
  {
    title: "Predictive Maintenance",
    desc: "Applying ML to time-series sensor data to forecast equipment failure before it happens.",
  },
  {
    title: "Digital Twin",
    desc: "Virtual models of assets and processes for simulation, monitoring, and optimization.",
  },
  {
    title: "Anomaly Detection",
    desc: "Spotting abnormal machine behavior from streaming telemetry to protect quality and uptime.",
  },
  {
    title: "MLOps Foundations",
    desc: "Python data workflows and deploying models against live industrial data streams.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-amber">
      <span className="text-faint">//</span>
      {children}
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative mx-auto max-w-5xl px-5 sm:px-8">
      {/* NAV */}
      <header className="sticky top-0 z-40 -mx-5 mb-2 border-b border-line/70 bg-base/80 px-5 backdrop-blur sm:-mx-8 sm:px-8">
        <nav className="flex h-14 items-center justify-between">
          <a
            href="#top"
            className="font-display text-sm font-semibold tracking-widest text-ink"
          >
            ST<span className="text-amber">.</span>
          </a>
          <div className="hidden gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-amber"
              >
                {n.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-wider text-signal transition-colors hover:text-amber"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 sm:pt-24">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]" />
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="h-2 w-2 rounded-full bg-signal animate-led" />
          <span className="uppercase tracking-wider text-signal">
            available for work
          </span>
          <span className="text-faint">·</span>
          <span className="flex items-center gap-1 text-muted">
            <MapPin className="h-3 w-3" /> Bengaluru, India
          </span>
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Shikhar Tiwari
        </h1>
        <p className="mt-4 font-display text-lg font-medium tracking-wide text-amber sm:text-2xl">
          AI &amp; Industrial Automation Engineer
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          I connect factory floors to intelligent systems. Ten years of software
          engineering, now spent turning machines, sensors, and production lines
          into real-time, data-driven operations — and building toward
          industrial AI.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-base transition-transform hover:-translate-y-0.5"
          >
            View the work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:contact@shikhartiwari.dev"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-panel p-4">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-ink">
                  {s.value}
                </span>
                <span className="font-mono text-xs text-amber">{s.unit}</span>
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PIPELINE — signature */}
      <section className="mt-24">
        <Reveal>
          <Eyebrow>system architecture</Eyebrow>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
            The data path I build and operate — from the machine on the floor to
            the business systems above it. Each layer is live; industrial AI is
            the layer I&apos;m commissioning next.
          </p>
          <Pipeline />
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-28 scroll-mt-20">
        <Reveal>
          <Eyebrow>about</Eyebrow>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                I started as a full-stack engineer and spent a decade shipping
                scalable, data-heavy applications. For the past few years my
                work has moved onto the shop floor: integrating{" "}
                <span className="text-ink">PLC and SCADA</span> systems,
                building <span className="text-ink">IIoT pipelines</span>, and
                developing the <span className="text-ink">MES</span> that
                carries machine data up to the ERP.
              </p>
              <p>
                That backend, data, and cloud foundation is exactly what
                industrial AI runs on. I&apos;m now building in that direction —
                predictive maintenance, digital twins, and anomaly detection on
                the real telemetry my systems already produce.
              </p>
              <p className="text-ink">
                The goal: manufacturing systems that don&apos;t just report what
                happened, but anticipate what&apos;s next.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-panel p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-faint">
                focus
              </div>
              <div className="mt-2 font-display text-sm text-ink">
                OT ↔ IT ↔ AI
              </div>
              <div className="mt-5 font-mono text-[11px] uppercase tracking-wider text-faint">
                based in
              </div>
              <div className="mt-2 font-display text-sm text-ink">
                Bengaluru, India
              </div>
              <div className="mt-5 font-mono text-[11px] uppercase tracking-wider text-faint">
                education
              </div>
              <div className="mt-2 space-y-1 text-sm text-muted">
                <div>
                  <span className="text-ink">MBA</span> · UP Technical
                  University
                </div>
                <div>
                  <span className="text-ink">MCA</span> · RML Avadh University
                </div>
                <div>
                  <span className="text-ink">BCA</span> · Dr. B.R. Ambedkar
                  University
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* STACK */}
      <section id="stack" className="mt-28 scroll-mt-20">
        <Reveal>
          <Eyebrow>capabilities</Eyebrow>
          <div className="grid gap-4 sm:grid-cols-2">
            {STACK.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-lg border border-line bg-panel p-5 transition-colors hover:border-line/80 hover:bg-panel2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-amber" strokeWidth={1.5} />
                      <h3 className="font-display text-sm font-semibold tracking-wide text-ink">
                        {group.title}
                      </h3>
                    </div>
                    {group.tag && (
                      <span className="rounded border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber">
                        {group.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-line bg-base px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* EXPERIENCE */}
      <section id="work" className="mt-28 scroll-mt-20">
        <Reveal>
          <Eyebrow>experience</Eyebrow>
        </Reveal>
        <div className="space-y-4">
          {WORK.map((job, i) => (
            <Reveal key={job.org} delay={i * 80}>
              <div className="rounded-lg border border-line bg-panel p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-amber">
                    {job.period}
                  </span>
                </div>
                <div className="mt-1 font-mono text-xs text-muted">
                  {job.org} <span className="text-faint">·</span> {job.place}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOCUS / ROADMAP */}
      <section id="focus" className="mt-28 scroll-mt-20">
        <Reveal>
          <Eyebrow>currently building</Eyebrow>
          <div className="grid gap-4 sm:grid-cols-2">
            {FOCUS.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-lg border border-line bg-panel p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-semibold text-ink">
                    {f.title}
                  </h3>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-amber">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber animate-led" />{" "}
                    in progress
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-28 scroll-mt-20">
        <Reveal>
          <Eyebrow>contact</Eyebrow>
          <div className="rounded-lg border border-line bg-panel p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Let&apos;s build the intelligent factory.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Open to roles and collaborations in industrial AI, IIoT, and
              Industry 4.0. The fastest way to reach me is email.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:contact@shikhartiwari.dev"
                className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-base transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> contact@shikhartiwari.dev
              </a>
              <a
                href="https://linkedin.com/in/shikhertiwari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-signal/50 hover:text-signal"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/shikhartiwari15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-signal/50 hover:text-signal"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-line py-8">
        <div className="flex flex-col items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-faint sm:flex-row">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-led" />{" "}
            all systems operational
          </span>
          <span>
            © {new Date().getFullYear()} Shikhar Tiwari · built with Next.js
          </span>
        </div>
      </footer>
    </main>
  );
}
