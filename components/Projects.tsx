"use client";

import { useState } from "react";
import { ArrowUpRight, Github, FileText, ChevronRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/projects";

function StatusTag({ status }: { status: Project["status"] }) {
  const online = status === "online";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
      <span className={`h-1.5 w-1.5 rounded-full ${online ? "bg-signal" : "bg-amber"} animate-led`} />
      <span className={online ? "text-signal" : "text-amber"}>
        {online ? "in production" : "commissioning"}
      </span>
    </span>
  );
}

function LinkButton({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: typeof Github;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-base/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:border-signal/50 hover:text-signal"
    >
      <Icon className="h-3.5 w-3.5" /> {children}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const active = project.status === "commissioning";
  const hasLinks = project.links.demo || project.links.repo || project.links.caseStudy;

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border glass shadow-panel transition-colors ${
        active ? "border-amber/30" : "border-line hover:border-line2"
      }`}
    >
      {/* header strip */}
      <div className="flex items-center justify-between border-b border-line/70 px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          <span className="text-signal/70">▸</span> {project.layer}
        </span>
        <StatusTag status={project.status} />
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold leading-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.tagline}</p>

        {/* metrics */}
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-xl font-bold text-ink">{m.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-wide text-faint">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* expandable case study */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-amber transition-colors hover:text-signal"
        >
          <ChevronRight
            className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-90" : ""}`}
          />
          {open ? "Hide breakdown" : "Read breakdown"}
        </button>

        {open && (
          <dl className="mt-4 space-y-3 border-l border-line pl-4 text-sm leading-relaxed">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">Problem</dt>
              <dd className="mt-0.5 text-muted">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">Approach</dt>
              <dd className="mt-0.5 text-muted">{project.approach}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-faint">Result</dt>
              <dd className="mt-0.5 text-ink">{project.result}</dd>
            </div>
          </dl>
        )}

        {/* stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded border border-line bg-base/60 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>

        {/* links */}
        {hasLinks && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.links.demo && (
              <LinkButton href={project.links.demo} icon={ArrowUpRight}>
                Live demo
              </LinkButton>
            )}
            {project.links.repo && (
              <LinkButton href={project.links.repo} icon={Github}>
                Code
              </LinkButton>
            )}
            {project.links.caseStudy && (
              <LinkButton href={project.links.caseStudy} icon={FileText}>
                Write-up
              </LinkButton>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {featured.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
      {rest.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
