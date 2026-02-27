import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — Varyense",
};

export default function RefundPolicyPage() {
  return (
    <article className="prose prose-invert prose-slate max-w-3xl text-sm leading-relaxed">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400">
        Varyense / Refund Policy
      </p>
      <h1 className="mb-4 mt-3 font-display text-2xl text-slate-50">
        Refund Policy
      </h1>
      <p className="text-slate-300">
        Varyense provides IT support and product or SaaS solutions. Many of our
        engagements are tailored to your needs. This policy explains how we
        handle refunds and adjustments so expectations are clear from the start.
      </p>

      <h2>1. Project-based work</h2>
      <p>
        For most client projects, scope, fees, and payment structure are defined
        in a separate agreement or statement of work. That agreement will take
        precedence over this page. Typically:
      </p>
      <ul>
        <li>
          An initial deposit or retainer is used to reserve time and begin
          discovery and exploration.
        </li>
        <li>
          Subsequent payments are tied to milestones, deliverables, or time
          spent, as defined in the engagement terms.
        </li>
      </ul>
      <p>
        Because this early work is what allows the rest of the project to move
        forward, deposits and fees already earned are generally non-refundable
        unless explicitly stated otherwise in the agreement.
      </p>

      <h2>2. Productized or packaged services</h2>
      <p>
        If, in the future, Varyense offers more standardized or packaged
        services (for example, fixed-scope audits, strategy sessions, or
        templates), we will clearly state the specific refund or rescheduling
        terms at the point of purchase.
      </p>

      <h2>3. Issues and concerns</h2>
      <p>
        If you believe there is an error with an invoice, payment, or delivery
        of work, contact us as soon as possible. We take long-term trust
        seriously and will review concerns in good faith, including:
      </p>
      <ul>
        <li>Potential billing mistakes.</li>
        <li>Material deviations from the agreed scope.</li>
        <li>Unexpected blockers that make the original plan no longer viable.</li>
      </ul>

      <h2>4. Cancellations</h2>
      <p>
        If a project is cancelled or paused by you, we will invoice for work
        completed and committed time up to the date of cancellation, as outlined
        in the engagement agreement. Any remaining unused future work may be
        cancelled, but previously earned fees are generally non-refundable.
      </p>

      <h2>5. Our commitment</h2>
      <p>
        Our goal is to build relationships that last beyond any single project.
        If you are unhappy, we want to understand why. While we cannot promise a
        refund in every situation, we can promise a thoughtful, human response
        and a sincere attempt to find a fair path forward.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions about this Refund Policy can be sent to{" "}
        <a href="mailto:varyense@gmail.com">varyense@gmail.com</a>.
      </p>

      <p className="mt-8 text-xs text-slate-500">
        Last updated: {new Date().getFullYear()}
      </p>
    </article>
  );
}

