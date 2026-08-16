"use client";

import { Cpu, Radio, Boxes, Cloud, BrainCircuit, type LucideIcon } from "lucide-react";

type NodeStatus = "online" | "commissioning";

interface FlowNode {
  key: string;
  label: string;
  sub: string;
  icon: LucideIcon;
  status: NodeStatus;
}

const NODES: FlowNode[] = [
  { key: "floor", label: "SHOP FLOOR", sub: "CNC · PLC · SCADA", icon: Cpu, status: "online" },
  { key: "iiot", label: "IIoT LAYER", sub: "data acquisition", icon: Radio, status: "online" },
  { key: "mes", label: "MES", sub: "execution system", icon: Boxes, status: "online" },
  { key: "erp", label: "ERP / CLOUD", sub: "business systems", icon: Cloud, status: "online" },
  { key: "ai", label: "INDUSTRIAL AI", sub: "predictive · twin", icon: BrainCircuit, status: "commissioning" },
];

function StatusDot({ status }: { status: NodeStatus }) {
  const online = status === "online";
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`h-1.5 w-1.5 rounded-full ${online ? "bg-signal" : "bg-amber"} animate-led`} />
      <span
        className={`font-mono text-[10px] uppercase tracking-wider ${
          online ? "text-signal" : "text-amber"
        }`}
      >
        {online ? "online" : "commissioning"}
      </span>
    </span>
  );
}

function Node({ node }: { node: FlowNode }) {
  const Icon = node.icon;
  const active = node.status === "commissioning";
  return (
    <div
      className={`group relative flex-1 overflow-hidden rounded-lg border glass p-4 shadow-panel transition-colors ${
        active ? "border-amber/40" : "border-line hover:border-signal/40"
      }`}
    >
      {active && (
        <div className="sweep-mask pointer-events-none absolute inset-0">
          <div className="animate-sweep h-full w-1/3 bg-gradient-to-r from-transparent via-amber/15 to-transparent" />
        </div>
      )}
      <div className="relative flex items-center justify-between">
        <Icon className={`h-5 w-5 ${active ? "text-amber" : "text-signal"}`} strokeWidth={1.5} />
        <StatusDot status={node.status} />
      </div>
      <div className="relative mt-3 font-display text-sm font-semibold tracking-wide text-ink">
        {node.label}
      </div>
      <div className="relative mt-0.5 font-mono text-[11px] text-muted">{node.sub}</div>
    </div>
  );
}

export default function Pipeline() {
  return (
    <div className="w-full">
      {/* Desktop: horizontal flow */}
      <div className="hidden items-stretch md:flex">
        {NODES.map((node, i) => (
          <div key={node.key} className="flex flex-1 items-center">
            <Node node={node} />
            {i < NODES.length - 1 && (
              <div className="relative mx-1 h-px w-8 shrink-0 lg:w-12">
                <div className="absolute inset-0 bg-line" />
                <div className="flow-line-x animate-flowX absolute inset-0" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <div className="flex flex-col md:hidden">
        {NODES.map((node, i) => (
          <div key={node.key} className="flex flex-col">
            <Node node={node} />
            {i < NODES.length - 1 && (
              <div className="relative mx-auto my-1 h-8 w-px shrink-0">
                <div className="absolute inset-0 bg-line" />
                <div className="flow-line-y animate-flowY absolute inset-0" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
