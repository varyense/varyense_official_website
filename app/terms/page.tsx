import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Varyense",
};

export default function TermsPage() {
  return (
    <article className="prose prose-invert prose-slate max-w-3xl text-sm leading-relaxed">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400">
        Varyense / Terms &amp; Conditions
      </p>
      <h1 className="mb-4 mt-3 font-display text-2xl text-slate-50">
        Terms &amp; Conditions
      </h1>
      <p className="text-slate-300">
        Welcome to Varyense. These Terms &amp; Conditions set out the basic
        rules that apply when you visit our website or explore our work. As we
        grow, we may refine these terms; the most recent version will always be
        available on this page.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Varyense provides IT support and builds products and SaaS solutions for
        businesses. When this site refers to “we”, “us”, or “our”, it means
        Varyense.
      </p>

      <h2>2. Using this website</h2>
      <p>
        This website introduces our services. You agree to
        use it only for lawful purposes and in a way that does not infringe the
        rights of, restrict, or inhibit anyone else’s use and enjoyment of the
        site.
      </p>

      <ul>
        <li>No attempting to breach or probe our infrastructure.</li>
        <li>
          No automated scraping beyond what is necessary for normal browsing or
          search indexing.
        </li>
        <li>No misuse of any contact forms, email links, or interactive areas.</li>
      </ul>

      <h2>3. Intellectual property</h2>
      <p>
        Unless otherwise noted, all content on this website — including design,
        layout, text, visuals, animations, and code — is owned or licensed by
        Varyense and protected by applicable intellectual property laws. You may
        browse, reference, and share links to our work, but you may not copy,
        reproduce, or redistribute it for commercial purposes without our
        written permission.
      </p>

      <h2>4. No guarantees</h2>
      <p>
        We do our best to keep this website accurate, available, and secure, but
        it is provided on an “as is” and “as available” basis. We do not make
        promises or guarantees about:
      </p>
      <ul>
        <li>the completeness or accuracy of information on the site,</li>
        <li>uninterrupted or error-free operation, or</li>
        <li>compatibility with every device, browser, or configuration.</li>
      </ul>

      <h2>5. Links to other sites</h2>
      <p>
        From time to time, we may link to other websites, tools, or resources we
        find valuable. These links are provided for convenience only and do not
        represent an endorsement or responsibility for the content, policies, or
        security of those third parties.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Varyense will not be liable for
        any indirect, incidental, special, consequential, or punitive damages,
        or any loss of profits or data, arising out of or related to your use
        of this website.
      </p>

      <h2>7. Changes to these terms</h2>
      <p>
        We may update these Terms &amp; Conditions from time to time to reflect
        how Varyense is evolving. When we do, we will update the “Last updated”
        date at the bottom of this page. Continued use of the site after changes
        are posted means you accept the updated terms.
      </p>

      <h2>8. Contact</h2>
      <p>
        If you have questions about these Terms &amp; Conditions, reach out at{" "}
        <a href="mailto:varyense@gmail.com">varyense@gmail.com</a>.
      </p>

      <p className="mt-8 text-xs text-slate-500">
        Last updated: {new Date().getFullYear()}
      </p>
    </article>
  );
}

