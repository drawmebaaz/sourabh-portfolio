import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)] p-8 text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-[color:var(--foreground)]">
          This page is not in the build log.
        </h1>
        <p className="mt-4 text-[color:var(--muted)]">
          The route does not exist yet, but the main portfolio is ready to
          explore.
        </p>
        <Link
          href="/"
          className="focus-ring mt-6 inline-flex rounded-[4px] border border-[color:var(--accent)] bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-[color:var(--button-text)] transition-colors hover:bg-[color:var(--accent-hover)]"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
