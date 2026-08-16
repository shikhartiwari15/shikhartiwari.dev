"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

// 1. Get a free access key at https://web3forms.com (250 submissions/mo, no account, no card).
// 2. Paste it below. Submissions arrive in your inbox — no backend, no database.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

type State = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New message from shikhartiwari.dev");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setState("sent");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-signal/30 bg-signal/5 p-8 text-center">
        <CheckCircle2 className="h-8 w-8 text-signal" strokeWidth={1.5} />
        <p className="font-display text-base font-semibold text-ink">Message received.</p>
        <p className="text-sm text-muted">Thanks — I&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      {/* honeypot — hidden from humans, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-faint">
            Name
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-md border border-line bg-base/60 px-3 py-2.5 text-sm text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-faint">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-md border border-line bg-base/60 px-3 py-2.5 text-sm text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-faint">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-md border border-line bg-base/60 px-3 py-2.5 text-sm text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none"
          placeholder="What would you like to build?"
        />
      </label>

      {state === "error" && (
        <p className="flex items-center justify-center gap-2 font-mono text-xs text-amber">
          <AlertTriangle className="h-4 w-4" /> Something went wrong — email me directly instead.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-base transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send message
          </>
        )}
      </button>
    </form>
  );
}
