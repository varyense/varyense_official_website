import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Varyense",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-invert prose-slate max-w-3xl text-sm leading-relaxed">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400">
        Varyense / Privacy Policy
      </p>
      <h1 className="mb-4 mt-3 font-display text-2xl text-slate-50">
        Privacy Policy
      </h1>
      <p className="text-slate-300">
        Your trust matters to us. This Privacy Policy explains what information
        we collect when you visit our website, how we use it, and the choices
        you have. As we grow, we may refine this policy; the most recent version
        will always be available on this page.
      </p>

      <h2>1. Information we collect</h2>
      <p>
        Right now, the Varyense website is intentionally minimal. We limit what
        we collect and use it only to understand how the site is performing and
        how people discover us.
      </p>
      <p>We may collect:</p>
      <ul>
        <li>
          <strong>Basic usage data</strong> such as pages visited, approximate
          region, device and browser type, and time spent on the site.
        </li>
        <li>
          <strong>Technical information</strong> such as IP address and
          anonymous identifiers used by analytics tools.
        </li>
        <li>
          <strong>Information you share</strong> if you contact us directly by
          email (for example, your name, email address, and anything you include
          in your message).
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Understand how people find and move through the site.</li>
        <li>Maintain and improve the performance, stability, and security.</li>
        <li>Respond to inquiries and conversations you initiate with us.</li>
      </ul>
      <p>
        We do not sell your personal information. We do not use dark patterns or
        intentionally confusing flows around privacy choices.
      </p>

      <h2>3. Cookies and similar technologies</h2>
      <p>
        If we use analytics or performance tools, they may rely on cookies or
        similar technologies to function. These are used to understand
        high-level patterns and do not give us direct control over your device.
      </p>

      <h2>4. Third-party services</h2>
      <p>
        We may rely on carefully selected third-party providers (for example,
        analytics or hosting). These providers are only given the minimum data
        necessary to perform their services and are expected to protect it in
        line with applicable laws and good practice.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We keep information only for as long as it is needed for the purposes
        described in this policy, or as required by law. When data is no longer
        needed, we take reasonable steps to delete or anonymize it.
      </p>

      <h2>6. Your choices</h2>
      <p>
        You can control how your browser handles cookies and trackers through
        its settings, including blocking or deleting them. If you contact us and
        later want to update or delete the information you shared, you can email
        us and we will do our best to honor reasonable requests.
      </p>

      <h2>7. Children&apos;s privacy</h2>
      <p>
        Our website is not directed to children under 13, and we do not
        knowingly collect personal information from children. If you believe a
        child has provided us with personal information, please contact us so we
        can take appropriate steps.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy as Varyense evolves. When we do, we
        will update the “Last updated” date at the bottom of this page.
        Continuing to use the site after changes are posted means you accept the
        updated policy.
      </p>

      <h2>9. Contact</h2>
      <p>
        For questions about this Privacy Policy or how we handle data, contact
        us at{" "}
        <a href="mailto:varyense@gmail.com">varyense@gmail.com</a>.
      </p>

      <p className="mt-8 text-xs text-slate-500">
        Last updated: {new Date().getFullYear()}
      </p>
    </article>
  );
}

