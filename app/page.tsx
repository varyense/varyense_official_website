import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

const highlights = [
  {
    label: "Support when you need it",
    value: "We keep your systems running and fix issues quickly so your business doesn’t stall.",
  },
  {
    label: "Tools that fit",
    value: "We build software and online tools tailored to how you work, not one-size-fits-all.",
  },
  {
    label: "Built to grow with you",
    value: "We start with what you need now and design so you can scale without starting over.",
  },
];

const pillars = [
  {
    title: "Support & peace of mind",
    body: "We handle setup, maintenance, and troubleshooting so your technology works reliably. You get help when you need it, explained in plain language.",
  },
  {
    title: "Products & SaaS",
    body: "We design and build software and web-based tools—from internal tools to customer-facing apps—so your business gets exactly what it needs.",
  },
  {
    title: "Clear and reliable",
    body: "We spell out what we’ll do, timelines, and costs up front. No jargon, no surprises. Straightforward support and solutions you can count on.",
  },
];

const projects = [
  {
    name: "Attend Exam",
    tagline: "Student exam portal",
    description:
      "Students take exams online. Teachers earn by evaluating answers and helping students perform better.",
  },
  {
    name: "Play on Turf",
    tagline: "Turf management system",
    description:
      "Manage bookings, slots, and operations for turf and sports facilities in one place.",
  },
  {
    name: "Biggapon360",
    tagline: "Local business discovery",
    description:
      "Any business can promote themselves here. Customers find them and book or use their services easily.",
  },
  {
    name: "Connect Followers",
    tagline: "Influencer platform",
    description:
      "A platform for social media influencers to connect, follow each other, and grow their reach together.",
  },
];

export default function Home() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero */}
      <section className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <FadeIn className="space-y-10" y={20}>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-slate-400">
            What we do
          </p>
          <h1 className="font-varyense text-3xl leading-tight text-slate-50 sm:text-[2.5rem] sm:leading-[1.12] lg:text-[2.9rem]">
            Support and{" "}
            <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">
              solutions
            </span>{" "}
            that keep your business moving.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            We help you run smoothly—keeping your systems up, fixing issues when
            they happen, and building software and online tools so your team can
            do more. We plan to expand into more sectors as we grow.
          </p>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-2">
            <Button asChild>
              <Link href="/#contact">Get in touch</Link>
            </Button>
            <Button variant="ghost" className="text-sm text-slate-300">
              Clear pricing. No jargon. Reliable support.
            </Button>
          </div>

          <dl className="grid gap-6 text-sm text-slate-300 sm:grid-cols-3 pt-6">
            {highlights.map((item) => (
              <div key={item.label} className="space-y-2">
                <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                  {item.label}
                </dt>
                <dd className="text-[14px] leading-relaxed text-slate-200">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn className="relative" y={26} delay={0.06}>
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.75),_transparent_55%)] opacity-80" />
          <Card className="relative overflow-hidden border-slate-600/70 bg-gradient-to-b from-slate-900/85 to-slate-950/95">
            <div className="absolute inset-0 opacity-50 mix-blend-screen">
              <div className="absolute -left-10 top-[-80px] h-56 w-56 rounded-full bg-gradient-to-br from-slate-100/80 to-slate-500/40 blur-3xl" />
              <div className="absolute -right-16 bottom-[-80px] h-64 w-64 rounded-full bg-gradient-to-tr from-zinc-500/30 via-slate-400/40 to-slate-200/10 blur-3xl" />
            </div>

            <div className="relative flex flex-col gap-8 p-1">
              <header className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-slate-400">
                    Our services
                  </p>
                  <p className="text-sm leading-relaxed text-slate-200">
                    Support and software solutions you can count on.
                  </p>
                </div>
                <div className="flex h-10 items-center gap-1 rounded-full border border-slate-600/80 bg-slate-900/70 px-3 text-[11px] text-slate-300 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  <span className="font-mono uppercase tracking-[0.22em]">
                    Open
                  </span>
                </div>
              </header>

              <div className="grid gap-6 text-sm text-slate-200 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                <div className="space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                    What we offer
                  </p>
                  <ul className="space-y-3 text-[14px] leading-relaxed text-slate-200">
                    <li>— Support: keep systems running, fix issues, stay secure.</li>
                    <li>— Products & SaaS: custom software and web-based tools.</li>
                    <li>— We’re expanding into more sectors over time.</li>
                  </ul>
                </div>
                <div className="space-y-4 rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-slate-400">
                    Who we work with
                  </p>
                  <p className="text-[14px] leading-relaxed text-slate-200">
                    Small teams and growing businesses. Tell us your goals and
                    we’ll propose a clear plan—what we’ll do, how long it takes,
                    and what it costs.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      </section>

      {/* What we offer */}
      <section className="space-y-12 pt-4">
        <FadeIn className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" y={18}>
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-slate-400">
              What we offer
            </p>
            <h2 className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight">
              Support and solutions that fit your business.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            We focus on support and product or SaaS work today. As we grow,
            we’ll add more services and sectors—this site will stay updated.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3 pt-4">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} y={22} delay={0.04 * index}>
              <Card className="border-slate-700/80 p-7">
                <div className="space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-slate-400">
                    {pillar.title}
                  </p>
                  <p className="text-[14px] leading-relaxed text-slate-200">
                    {pillar.body}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 space-y-12 pt-8">
        <FadeIn className="space-y-4" y={18}>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-slate-400">
            Our work
          </p>
          <h2 className="font-varyense text-xl text-slate-50 sm:text-2xl leading-tight max-w-2xl">
            Projects we’ve built—helping students, businesses, and creators.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            From exam portals to turf management and local discovery, we build
            products that solve real problems for real users.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-4">
          {projects.map((project, index) => (
            <FadeIn key={project.name} y={24} delay={0.05 * index}>
              <Card className="border-slate-700/80 p-6 flex flex-col gap-4">
                <div className="space-y-1">
                  <h3 className="font-varyense text-[0.9rem] text-slate-50">
                    {project.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    {project.tagline}
                  </p>
                </div>
                <p className="text-[14px] leading-relaxed text-slate-300 flex-1">
                  {project.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 space-y-6 pt-8">
        <FadeIn y={18}>
          <Card className="border-slate-700/80 bg-slate-950/80 p-8 sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  Get in touch
                </p>
                <p className="text-base text-slate-50 sm:text-lg leading-relaxed max-w-xl">
                  Need support or a custom product or SaaS solution? Send us your
                  requirements and we’ll get back to you with next steps.
                </p>
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:varyense@gmail.com"
                    className="underline underline-offset-4 decoration-slate-500 hover:text-slate-100"
                  >
                    varyense@gmail.com
                  </a>
                </p>
                <p className="text-[12px] text-slate-500">
                  Tell us what you need. We’ll respond with a clear plan.
                </p>
              </div>
            </div>
          </Card>
        </FadeIn>
      </section>
    </div>
  );
}
