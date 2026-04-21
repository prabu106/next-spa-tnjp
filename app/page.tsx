import Link from "next/link";
import Image from "next/image";
import type { ComponentType } from "react";
import { CallToActionSection } from "./service/page";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

const featureCards = [
  {
    title: "Workshops & Training",
    description: "Join our hands-on workshops to learn new skills.",
    icon: PresentationIcon,
  },
  {
    title: "Project Support",
    description: "Get expert guidance and mentorship for your projects.",
    icon: ToolsIcon,
  },
  {
    title: "Resources & Tools",
    description: "Access equipment and materials for your projects.",
    icon: MonitorIcon,
  },
];

const projectCards = [
  {
    title: "Robotics Challenge",
    description: "A robotics competition building and programming autonomous robots.",
    image:
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Smart Home System",
    description: "An IoT-based smart home automation project.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Eco-Friendly Drone",
    description: "A sustainable drone made from eco-friendly materials.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80",
  },
];

const reasons = [
  {
    title: "Experienced Mentors",
    description:
      "Learn from guides who have helped students take ideas from concept to polished prototype.",
    icon: MentorIcon,
  },
  {
    title: "Modern Facilities",
    description:
      "Use practical lab space, testing setups, and focused support for building with confidence.",
    icon: FacilityIcon,
  },
  {
    title: "Innovative Resources",
    description:
      "Access the tools, kits, and reference material needed to keep projects moving forward.",
    icon: ResourceIcon,
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#1d2b4f]">
      <Header />
      <HeroSection />
      <FeatureSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-[linear-gradient(180deg,#174c99_0%,#0e3f87_100%)] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
            <CubeLogo />
          </div>
          <div className="text-xl font-bold tracking-tight sm:text-2xl">
            <span className="text-white">Student </span>
            <span className="text-[#f6a028]">Project Centre</span>
          </div>
        </div>

        <div className="flex items-center gap-6 lg:gap-8">
          <nav className="hidden items-center gap-8 text-base font-bold lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-[#ffd18a] ${
                  item.href === "/" ? "border-b-2 border-white pb-1 text-white" : "text-white/95"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button className="rounded-md bg-[linear-gradient(180deg,#f6a028_0%,#ea7d16_100%)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(234,125,22,0.35)] transition hover:brightness-105">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#154b97_0%,#0f3f83_45%,#164e9f_100%)] bg-[url('/hero.png')] bg-top bg-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_36%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl items-stretch gap-0 px-6 py-10 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:py-0">
        <div className="flex items-center py-10 lg:py-16">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Students
              <br />
              to <span className="text-[#ffbf42]">Innovate</span> &{" "}
              <span className="text-[#ffbf42]">Create</span>
            </h1>
            <div className="mt-5 h-px w-full max-w-md bg-white/35" />
            <p className="mt-5 max-w-lg text-base leading-7 text-white/85 sm:text-lg">
              Get the tools, resources, and support to bring your ideas to life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-[linear-gradient(180deg,#f7a12a_0%,#ee7e14_100%)] px-8 py-3.5 text-base font-bold text-white shadow-[0_10px_22px_rgba(238,126,20,0.35)] transition hover:-translate-y-0.5"
              >
                Get Started
              </a>
              <a
                href="#projects"
                className="rounded-lg bg-white px-8 py-3.5 text-base font-bold text-[#234e91] shadow-[0_10px_24px_rgba(7,27,72,0.24)] transition hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[560px]">
          <div className="absolute inset-y-0 left-0 z-10 hidden w-28 bg-gradient-to-r from-[#154b97] via-[#154b97]/60 to-transparent lg:block" />
          {/* <Image
            src="/hero.png"
            alt="Students building a project together"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          /> */}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="relative z-10 -mt-1 px-6 pb-10 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {featureCards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <article className="rounded-2xl border border-[#dde4f1] bg-white px-6 py-6 shadow-[0_14px_40px_rgba(28,52,99,0.12)]">
      <div className="flex items-start gap-4">
        <div className="mt-1 text-[#164c99]">
          <Icon className="h-11 w-11" />
        </div>
        <div className="min-w-0">
          <h3 className="border-b border-[#d8e1f0] pb-2 text-2xl font-bold text-[#1c4a91]">
            {title}
          </h3>
          <p className="pt-3 text-base leading-7 text-[#37435f]">{description}</p>
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
      <SectionHeading
        title="Recent Projects"
        description="Check out what our students have been working on."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projectCards.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#d8dfec] bg-white shadow-[0_12px_30px_rgba(29,43,79,0.12)]">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="border-b border-[#d9e2ef] pb-3 text-2xl font-bold text-[#21498d]">
          {title}
        </h3>
        <p className="pt-4 text-base leading-7 text-[#37435f]">{description}</p>
        <button className="mt-5 rounded-md bg-[linear-gradient(180deg,#1f5aad_0%,#144487_100%)] px-6 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(19,68,135,0.25)] transition hover:brightness-110">
          View Project
        </button>
      </div>
    </article>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f3f6fc_0%,#eef2f8_100%)] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          title="Why Choose Us?"
          description="Providing the best environment for student innovation."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <article className="rounded-2xl bg-white/70 px-6 py-8 text-center shadow-[0_10px_28px_rgba(30,48,90,0.08)] backdrop-blur-sm">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[linear-gradient(180deg,#1e5fb6_0%,#154588_100%)] text-white shadow-[0_14px_30px_rgba(21,69,136,0.24)]">
        <Icon className="h-9 w-9" />
      </div>
      <h3 className="mt-6 text-2xl font-bold text-[#21498d]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#3c4862]">{description}</p>
    </article>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.95fr]">
        <div>
          <SectionHeading
            title="Get In Touch"
            description="Have questions or need support? Contact us today!"
          />
          <form className="mt-8 space-y-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Input placeholder="Subject" />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-md border border-[#d5deeb] bg-white px-4 py-3 text-base text-[#243250] shadow-[0_6px_16px_rgba(24,43,79,0.06)] outline-none transition placeholder:text-[#7d8aa8] focus:border-[#2a5cac]"
            />
          </form>
        </div>

        <div className="rounded-xl bg-[linear-gradient(180deg,#1d5aa7_0%,#0f3e7e_100%)] p-8 text-white shadow-[0_18px_36px_rgba(16,51,105,0.28)]">
          <h3 className="text-4xl font-bold leading-tight">Get In Touch</h3>
          <p className="mt-3 text-base text-white/85">
            Have questions or need support? Contact us today!
          </p>

          <form className="mt-8 space-y-4">
            <DarkInput placeholder="Your Name" />
            <DarkInput placeholder="Your Email" type="email" />
            <DarkInput placeholder="Subject" />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full rounded-md border border-white/30 bg-white px-4 py-3 text-base text-[#243250] outline-none transition placeholder:text-[#7d8aa8] focus:border-[#ffd18a]"
            />
            <div className="pt-2 text-center">
              <button className="rounded-md bg-[linear-gradient(180deg,#f7a02b_0%,#ea7e18_100%)] px-8 py-3 text-lg font-bold text-white shadow-[0_10px_24px_rgba(238,126,20,0.35)] transition hover:brightness-105">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#103a78_0%,#0d326a_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
        <div className="grid gap-8 border-b border-white/20 pb-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="pr-4 xl:border-r xl:border-white/20">
            <div className="flex items-center gap-3">
              <CubeLogo />
              <div className="text-xl font-bold">
                <span className="text-white">Student </span>
                <span className="text-[#f5a025]">Project Centre</span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-lg leading-8 text-white/88">
              Empowering students to innovate, create, and lead through hands-on
              learning and real-world projects.
            </p>
            <div className="mt-6 flex gap-4">
              <SocialIcon label="f" className="bg-[#2d68d8]" />
              <SocialIcon label="t" className="bg-[#35a8ff]" />
              <SocialIcon
                label="ig"
                className="bg-[linear-gradient(180deg,#ff5f6d_0%,#ff7f11_100%)]"
              />
              <SocialIcon label="in" className="bg-[#2a7abf]" />
            </div>
          </div>

          <div className="xl:border-r xl:border-white/20 xl:px-8">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <div className="mt-4 space-y-3 text-lg text-white/92">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-[#ffd189]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="xl:border-r xl:border-white/20 xl:px-8">
            <h3 className="text-2xl font-bold">Contact Info</h3>
            <div className="mt-4 space-y-4 text-lg text-white/92">
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-1 h-5 w-5 shrink-0" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-start gap-3">
                <MailIcon className="mt-1 h-5 w-5 shrink-0" />
                <span>info@studentprojectcentre.com</span>
              </div>
              <div className="flex items-start gap-3">
                <PinIcon className="mt-1 h-5 w-5 shrink-0" />
                <span>123, Innovation Lab, Tech Park, Bengaluru - 560100, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div className="xl:px-8">
            <h3 className="text-2xl font-bold">Subscribe to Our Newsletter</h3>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#f5a025]" />
            <p className="mt-4 text-lg leading-8 text-white/90">
              Stay updated with our latest projects, workshops, and news.
            </p>
            <div className="mt-6 flex overflow-hidden rounded-md bg-white shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 px-4 py-3 text-base text-[#243250] outline-none placeholder:text-[#7d8aa8]"
              />
              <button className="bg-[linear-gradient(180deg,#f7a12a_0%,#ef8217_100%)] px-5 py-3 text-base font-bold text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <p className="pt-5 text-center text-lg text-white/90">
          ? 2025 Student Project Centre. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 text-4xl font-bold tracking-tight text-[#21498d]">{title}</h2>
        <div className="h-px flex-1 bg-[#d7deea]" />
      </div>
      <p className="mt-3 text-lg text-[#3f4b66]">{description}</p>
    </div>
  );
}

function Input({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border border-[#d5deeb] bg-white px-4 py-3 text-base text-[#243250] shadow-[0_6px_16px_rgba(24,43,79,0.06)] outline-none transition placeholder:text-[#7d8aa8] focus:border-[#2a5cac]"
    />
  );
}

function DarkInput({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border border-white/30 bg-white px-4 py-3 text-base text-[#243250] outline-none transition placeholder:text-[#7d8aa8] focus:border-[#ffd18a]"
    />
  );
}

function CubeLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-9 w-9">
      <path d="M32 5 53 16.5 32 28 11 16.5 32 5Z" fill="#F7B13A" />
      <path d="M11 16.5 32 28v23L11 39.5v-23Z" fill="#8FB2E6" />
      <path d="M53 16.5 32 28v23l21-11.5v-23Z" fill="#F08A1C" />
      <path d="M32 28 22.5 22.8v22.9l9.5 5.3V28Z" fill="#C8DCF6" />
      <path d="M32 28 41.5 22.8v22.9L32 51V28Z" fill="#FFD38B" />
      <path
        d="M32 5 53 16.5 32 28 11 16.5 32 5Zm0 0v23m-21-11.5 21 11.5 21-11.5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PresentationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <rect x="8" y="8" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="3" />
      <path d="M24 30v10m-7 0h14M14 40l10-10 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 18h12m-6-4v8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ToolsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 10a10 10 0 0 0 0 20c1.5 0 3-.3 4.2-.9l12.8 12.8 4-4-12.8-12.8A10 10 0 1 0 20 10Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="m30 8 10 10M32 28l-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <rect x="6" y="8" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="3" />
      <path d="M18 40h12m-6-8v8M14 18h9l3 4h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MentorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <circle cx="24" cy="14" r="6" fill="currentColor" />
      <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10M10 22h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function FacilityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <rect x="8" y="10" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="3" />
      <path d="M16 18h8v8h-8zm12 0h4m-4 8h8M14 38h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ResourceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path d="M8 14h14v20H8zM26 14h14v8H26zM26 26h14v8H26z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M22 24h4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}


function SocialIcon({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <div
      className={`grid h-12 w-12 place-items-center rounded-lg text-lg font-bold uppercase text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] ${className}`}
    >
      {label}
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M7 4h3l1.5 4-2 1.7a15 15 0 0 0 4.8 4.8L16 12l4 1.5v3c0 1.1-.9 2-2 2C10.3 18.5 5.5 13.7 5.5 8c0-1.1.9-2 2-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" />
      <path d="m5 7 7 6 7-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" />
    </svg>
  );
}
