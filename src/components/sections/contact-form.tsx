"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = name
      ? `Portfolio contact from ${name}`
      : "Portfolio contact";
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)] p-5"
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-[color:var(--soft)]">
          Name
          <input
            name="name"
            className="focus-ring rounded-[4px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-3 text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] transition-colors focus:border-[color:var(--accent)]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[color:var(--soft)]">
          Email
          <input
            name="email"
            type="email"
            className="focus-ring rounded-[4px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-3 text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] transition-colors focus:border-[color:var(--accent)]"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[color:var(--soft)]">
          Message
          <textarea
            name="message"
            rows={6}
            className="focus-ring resize-none rounded-[4px] border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-3 text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] transition-colors focus:border-[color:var(--accent)]"
            placeholder="Tell me what you want to build."
          />
        </label>
      </div>
      <button
        type="submit"
        className="focus-ring mt-5 inline-flex items-center gap-2 rounded-[4px] border border-[color:var(--accent)] bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-[color:var(--button-text)] transition-colors hover:bg-[color:var(--accent-hover)]"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Message
      </button>
    </form>
  );
}
