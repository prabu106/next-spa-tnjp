import Link from "next/link";
import Image from "next/image";
import type { ComponentType } from "react";
import Navbar from "../components/Navbar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

const missionCards = [
  {
    title: "Our Mission",
    description:
      "To build a strong ecosystem that encourages innovation, creativity, and practical learning for students of all disciplines.",
    accent: "blue" as const,
    icon: TargetIcon,
  },
  {
    title: "Our Vision",
    description:
      "To become a leading platform for student innovation and research, shaping the next generation of problem solvers.",
    accent: "orange" as const,
    icon: RocketIcon,
  },
  {
    title: "Our Story",
    description:
      "Founded with the belief that every student idea deserves a chance to grow, build, and make an impact.",
    accent: "blue" as const,
    icon: BadgeIcon,
  },
];

const teamMembers = [
  {
    name: "John Doe",
    role: "Project Mentor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sarah Smith",
    role: "Senior Coordinator",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Michael Lee",
    role: "Technical Expert",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fc] text-[#18305c]">
      <AboutHeader />
      <AboutHero />
      <WhoWeAreSection />
      <MissionSection />
      <TeamSection />
      <AboutFooter />
    </main>
  );
}

function AboutHeader() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-[linear-gradient(180deg,#174c99_0%,#0e3f87_100%)] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
            <CubeLogo />
          </div>
          <div className="text-xl font-bold tracking-tight sm:text-2xl">
            <span className="text-white">X </span>
            <span className="text-[#f6a028]">X X</span>
          </div>
        </div>

        <div className="flex items-center gap-6 lg:gap-8">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[url('/aboutbanner.png')] bg-cover bg-center overflow-hidden bg-[linear-gradient(120deg,#123f82_0%,#0f3b7a_42%,#1a4f98_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.08),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-stretch gap-0 px-6 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-0">
        <div className="flex items-center py-8 lg:py-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
              About Us
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <PeopleIcon className="h-16 w-16 text-white" />
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                X <span className="text-[#ffb129]">X X</span>
              </h2>
            </div>

            <p className="mt-6 text-lg leading-8 text-white/90 sm:text-2xl sm:leading-9">
              Empowering Students with Hands-On Learning & Innovation.
            </p>

            <button className="mt-10 rounded-md bg-[linear-gradient(180deg,#f7a12a_0%,#ef8217_100%)] px-10 py-4 text-xl font-bold text-white shadow-[0_12px_28px_rgba(239,130,23,0.35)]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-12">
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionTitle title="Who We Are" />
          <p className="mt-8 text-[17px] leading-10 text-[#1f2636]">
            We are a team of passionate innovators, mentors, and technologists dedicated
            to helping students transform ideas into real-world solutions. Our center
            provides a collaborative environment with advanced tools and expert guidance
            to turn your projects into successful outcomes.
          </p>
        </div>

        <div className="relative h-[260px] overflow-hidden rounded-lg border border-[#dde4ef] bg-white shadow-[0_18px_40px_rgba(19,45,96,0.1)] sm:h-[320px]">
          <Image
            src="/hero.png"
            alt="Team collaborating on a project"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="mx-auto max-w-7xl border-t border-[#dde4ef] px-6 py-10 lg:px-10 lg:py-12">
      <SectionTitle title="Our Mission" />
      <p className="mt-4 max-w-4xl text-[17px] leading-8 text-[#2b3445]">
        Our mission is to bridge the gap between classroom learning and real-world
        application. We aim to inspire creativity, promote technical excellence, and
        support students in developing innovative projects that contribute to a better
        tomorrow.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {missionCards.map((card) => (
          <MissionCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

function MissionCard({
  title,
  description,
  accent,
  icon: Icon,
}: {
  title: string;
  description: string;
  accent: "blue" | "orange";
  icon: ComponentType<{ className?: string }>;
}) {
  const accentClasses =
    accent === "orange"
      ? "bg-[linear-gradient(180deg,#f8a107_0%,#ee810b_100%)] text-white"
      : "bg-[linear-gradient(180deg,#123f82_0%,#0d326a_100%)] text-white";

  const titleClasses = accent === "orange" ? "text-[#f18a0b]" : "text-[#163d83]";

  return (
    <article className="rounded-2xl border border-[#dde4ef] bg-white p-4 shadow-[0_10px_28px_rgba(21,50,99,0.1)]">
      <div className="flex items-start gap-4">
        <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-lg ${accentClasses}`}>
          <Icon className="h-10 w-10" />
        </div>
        <div>
          <h3 className={`text-2xl font-bold ${titleClasses}`}>{title}</h3>
          <p className="mt-3 text-base leading-8 text-[#2f3746]">{description}</p>
        </div>
      </div>
    </article>
  );
}

function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl border-t border-[#dde4ef] px-6 py-10 lg:px-10 lg:py-12">
      <SectionTitle title="Meet Our Team" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}

function TeamCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#d8dfec] bg-white shadow-[0_12px_28px_rgba(20,44,94,0.1)]">
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 1280px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold text-[#163d83]">{name}</h3>
        <p className="mt-1 text-lg text-[#404a5d]">{role}</p>
        <button className="mt-4 rounded-md bg-[linear-gradient(180deg,#1c57a9_0%,#134487_100%)] px-8 py-2.5 text-base font-bold text-white shadow-[0_10px_24px_rgba(19,68,135,0.22)]">
          View Profile
        </button>
      </div>
    </article>
  );
}

function AboutFooter() {
  return (
    <footer className="bg-[linear-gradient(180deg,#103a78_0%,#0d326a_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
        <div className="grid gap-8 border-b border-white/20 pb-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="pr-4 xl:border-r xl:border-white/20">
            <div className="flex items-center gap-3">
              <CubeLogo />
              <div className="text-xl font-bold">
                <span className="text-white">X </span>
                <span className="text-[#f5a025]">X X</span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-lg leading-8 text-white/88">
              Empowering students to innovate, create, and lead through hands-on
              learning and real-world projects.
            </p>
          </div>

          <div className="xl:border-r xl:border-white/20 xl:px-8">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <div className="mt-4 space-y-3 text-lg text-white/92">
              {quickLinks.map((link) => (
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
                <span>info@XXX.com</span>
              </div>
              <div className="flex items-start gap-3">
                <PinIcon className="mt-1 h-5 w-5 shrink-0" />
                <span>123, Innovation Lab, Tech Park, India</span>
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
          © 2025 X X X. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-end gap-5">
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-[#163d83] sm:text-6xl">
          {title}
        </h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-[#f2921b]" />
      </div>
      <div className="mb-3 hidden h-px flex-1 bg-[#d9e1ed] lg:block" />
    </div>
  );
}

function CubeLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-12 w-12">
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

function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <circle cx="32" cy="18" r="8" fill="currentColor" />
      <circle cx="17" cy="22" r="8" fill="currentColor" />
      <circle cx="47" cy="22" r="8" fill="currentColor" />
      <path d="M18 47c0-7.7 6.3-14 14-14s14 6.3 14 14" fill="currentColor" />
      <path d="M5 46c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="currentColor" />
      <path d="M35 46c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="currentColor" />
      <circle cx="32" cy="31" r="7" fill="#F5A025" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <circle cx="22" cy="26" r="14" stroke="currentColor" strokeWidth="3" />
      <circle cx="22" cy="26" r="8" stroke="currentColor" strokeWidth="3" />
      <circle cx="22" cy="26" r="2.5" fill="currentColor" />
      <path d="m28 20 11-11m0 0h-7m7 0v7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M31 8c-6.5 1.2-13.1 6-17 14l-4 10 10-4c8-3.9 12.8-10.5 14-17 0-1.1-.9-2-2-2h-1Z"
        fill="currentColor"
      />
      <circle cx="27" cy="17" r="3" fill="#f8a107" />
      <path d="M18 30c-1.5 3.2-4.3 5.8-7.7 7.2l1.5-6.2L18 30Z" fill="currentColor" />
    </svg>
  );
}

function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="3" />
      <path d="m24 12 2.1 4.3 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7-3.4-3.3 4.7-.7L24 12Z" fill="currentColor" />
      <path d="M18 28v12l6-4 6 4V28" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </svg>
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
