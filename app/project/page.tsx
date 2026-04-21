import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  "All Projects",
  "Java",
  "Python",
  "Cyber Security",
  "IoT",
  "AI/ML",
];

const projects = [
  {
    title: "Smart Home Monitoring System",
    description:
      "IoT-based smart home monitoring system using sensors and real-time data visualization.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "E-Commerce Website",
    description:
      "Feature-rich e-commerce web application built with Java, Spring Boot, and MySQL database.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Robotics Challenge",
    description:
      "Autonomous robot for line following and obstacle avoidance using Arduino and ultrasonic sensors.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Secure Online Voting System",
    description:
      "A secure online voting system developed using blockchain and encryption.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Rescue Robot Using Sensors",
    description:
      "A robot designed to detect humans in disaster areas using temperature and gas sensors.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "An AI chatbot built with natural language processing to assist users with common queries.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#17325d]">
      <ProjectsHeader />
      <ProjectsHero />
      <ProjectsFilterBar />
      <ProjectsGrid />
      <PaginationBar />
      <ProjectsFooter />
    </main>
  );
}

function ProjectsHeader() {
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

        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-[#ffd18a] ${
                item.href === "/project" ? "border-b-2 border-white pb-1 text-white" : "text-white/90"
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
    </header>
  );
}

function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(115deg,#123f82_0%,#0f3b7a_43%,#1a4f98_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.08),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-stretch gap-0 px-6 py-10 lg:grid-cols-[0.96fr_1.04fr] lg:px-10 lg:py-0">
        <div className="flex items-center py-8 lg:py-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Our Student Projects
            </h1>
            <p className="mt-8 text-lg leading-8 text-white/90 sm:text-2xl sm:leading-9">
              Explore innovative projects created by our talented students.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-md bg-[linear-gradient(180deg,#f7a12a_0%,#ef8217_100%)] px-8 py-4 text-xl font-bold text-white shadow-[0_12px_28px_rgba(239,130,23,0.35)]">
                Get Started
              </button>
              <button className="rounded-md bg-white px-8 py-4 text-xl font-bold text-[#21519b] shadow-[0_12px_28px_rgba(18,52,104,0.2)]">
                All Projects
              </button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[390px]">
          <div className="absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[#123f82] via-[#123f82]/60 to-transparent lg:block" />
          <Image
            src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=1400&q=80"
            alt="3D printer showcasing a student engineering project"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectsFilterBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-8 lg:px-10">
      <div className="overflow-hidden rounded-lg border border-[#dde4ef] bg-white shadow-[0_10px_28px_rgba(20,44,94,0.08)]">
        <div className="grid md:grid-cols-6">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`border-[#dde4ef] px-4 py-5 text-center text-lg font-bold transition ${
                index === 0
                  ? "bg-[linear-gradient(180deg,#f7a12a_0%,#ef8217_100%)] text-white"
                  : "border-l text-[#21498d] hover:bg-[#f8fbff]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
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
    <article className="overflow-hidden rounded-lg border border-[#dce3ef] bg-white shadow-[0_10px_24px_rgba(17,41,90,0.08)]">
      <div className="relative h-60">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold leading-snug text-[#1d4388]">{title}</h3>
        <p className="mt-3 text-[17px] leading-8 text-[#434c5f]">{description}</p>
        <button className="mt-5 rounded-md bg-[linear-gradient(180deg,#1f5aad_0%,#144487_100%)] px-6 py-2.5 text-base font-bold text-white shadow-[0_10px_20px_rgba(20,68,135,0.22)]">
          View Project
        </button>
      </div>
    </article>
  );
}

function PaginationBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10 lg:pb-14">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <PageButton label="‹ Previous" />
        <PageButton label="1" active />
        <PageButton label="2" />
        <PageButton label="3" />
        <PageButton label="4" />
        <PageButton label="Next ›" />
      </div>
    </section>
  );
}

function PageButton({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`rounded-md border px-4 py-2.5 text-base transition ${
        active
          ? "border-[#1f5aad] bg-[#1f5aad] font-bold text-white"
          : "border-[#d6deea] bg-white text-[#4a556b] hover:border-[#1f5aad] hover:text-[#1f5aad]"
      }`}
    >
      {label}
    </button>
  );
}

function ProjectsFooter() {
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
                <span>info@studentprojectcentre.com</span>
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
          © 2025 Student Project Centre. All rights reserved.
        </p>
      </div>
    </footer>
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
