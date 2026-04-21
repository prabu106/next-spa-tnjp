"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { ChangeEvent, ComponentType, FormEvent } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

const contactDetails = [
  {
    title: "Phone",
    lines: ["+91 12345 67890"],
    icon: PhoneIcon,
  },
  {
    title: "Email",
    lines: ["info@studentprojectcentre.com"],
    icon: MailIcon,
  },
  {
    title: "Address",
    lines: ["123, Innovation Lab,", "Tech Park, Bengaluru - 560100,", "Karnataka, India"],
    icon: PinIcon,
  },
  {
    title: "Working Hours",
    lines: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
    icon: ClockIcon,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#17325d]">
      <ContactHeader />
      <ContactHero />
      <ContactSection />
      <LocationSection />
      <ContactFooter />
    </main>
  );
}

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialFormValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactHeader() {
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
                  item.href === "/contact" ? "border-b-2 border-white pb-1 text-white" : "text-white/95"
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

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(115deg,#123f82_0%,#0f3b7a_43%,#1a4f98_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.08),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-stretch gap-0 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-0">
        <div className="flex items-center py-8 lg:py-12">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
              Contact Us
            </h1>
            <p className="mt-6 text-2xl font-semibold leading-9 text-white">
              We’d love to hear from you!
            </p>
            <div className="mt-4 h-1 w-28 rounded-full bg-[#f5a025]" />
            <p className="mt-6 text-lg leading-9 text-white/90 sm:text-2xl">
              Have a question, idea, or want to collaborate? Reach out to us and
              we’ll get back to you soon.
            </p>
          </div>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[420px]">
          <div className="absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[#123f82] via-[#123f82]/60 to-transparent lg:block" />
          <Image
            src="/hero.png"
            alt="Students building a project together"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(initialFormValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitMessage, setSubmitMessage] = useState("");

  function validate(nextValues: ContactFormValues) {
    const nextErrors: ContactFormErrors = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!nextValues.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (!nextValues.message.trim()) {
      nextErrors.message = "Please enter your message.";
    } else if (nextValues.message.trim().length < 20) {
      nextErrors.message = "Message must be at least 20 characters long.";
    }

    return nextErrors;
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    const nextValues = {
      ...values,
      [name]: value,
    };

    setValues(nextValues);
    setErrors(validate(nextValues));
    setSubmitMessage("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitMessage("Please fix the highlighted fields before submitting.");
      return;
    }

    setSubmitMessage("Your message has been validated and is ready to send.");
    setValues(initialFormValues);
    setErrors({});
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside>
          <SectionHeading title="Get In Touch" />
          <div className="mt-6 rounded-2xl bg-transparent">
            {contactDetails.map((item, index) => (
              <ContactInfoCard
                key={item.title}
                title={item.title}
                lines={item.lines}
                icon={item.icon}
                bordered={index < contactDetails.length - 1}
              />
            ))}
          </div>
        </aside>

        <div className="rounded-2xl border border-[#dce3ef] bg-white p-6 shadow-[0_14px_32px_rgba(18,44,97,0.1)] lg:p-10">
          <SectionHeading title="Send Us a Message" />
          <form className="mt-6 space-y-4" noValidate onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="name"
                placeholder="Your Name"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
              />
              <Input
                name="email"
                placeholder="Email Address"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <Input
              name="subject"
              placeholder="Subject"
              value={values.subject}
              onChange={handleChange}
              error={errors.subject}
            />
            <div>
              <textarea
                name="message"
                rows={7}
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
                className={`w-full rounded-md border bg-white px-4 py-4 text-base text-[#243250] outline-none transition placeholder:text-[#7d8aa8] focus:border-[#2a5cac] ${
                  errors.message ? "border-[#de3f32]" : "border-[#d5deeb]"
                }`}
              />
              {errors.message ? (
                <p className="mt-2 text-sm font-medium text-[#de3f32]">{errors.message}</p>
              ) : null}
            </div>
            {submitMessage ? (
              <p
                className={`text-sm font-semibold ${
                  Object.keys(errors).length > 0 ? "text-[#de3f32]" : "text-[#1e7a43]"
                }`}
              >
                {submitMessage}
              </p>
            ) : null}
            <div className="pt-2 text-center md:text-left">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-[linear-gradient(180deg,#1c57a9_0%,#134487_100%)] px-8 py-4 text-xl font-bold text-white shadow-[0_10px_24px_rgba(19,68,135,0.24)]"
              >
                Send Message
                <PaperPlaneIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({
  title,
  lines,
  icon: Icon,
  bordered,
}: {
  title: string;
  lines: string[];
  icon: ComponentType<{ className?: string }>;
  bordered: boolean;
}) {
  return (
    <div className={`flex gap-5 py-5 ${bordered ? "border-b border-[#d8e1ef]" : ""}`}>
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[linear-gradient(180deg,#123f82_0%,#0d326a_100%)] text-white shadow-[0_10px_20px_rgba(17,51,106,0.18)]">
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#1d4388]">{title}</h3>
        <div className="mt-1 space-y-1 text-lg leading-8 text-[#3b4559]">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function LocationSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#dde5f0] bg-[#eef3f9]">
      <div className="absolute inset-0 opacity-70">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(30,91,173,0.06)_1px,transparent_1px),linear-gradient(rgba(30,91,173,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(60,120,200,0.12),transparent_18%),radial-gradient(circle_at_70%_60%,rgba(60,120,200,0.1),transparent_20%),radial-gradient(circle_at_88%_20%,rgba(60,120,200,0.1),transparent_16%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-2xl border border-[#dce3ef] bg-white p-6 shadow-[0_14px_30px_rgba(19,44,94,0.12)]">
            <SectionHeading title="Our Location" />
            <div className="mt-6 flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#123f82] text-white">
                <PinIcon className="h-6 w-6" />
              </div>
              <div className="text-lg leading-8 text-[#364055]">
                <p>123, Innovation Lab,</p>
                <p>Tech Park, Bengaluru - 560100,</p>
                <p>Karnataka, India</p>
              </div>
            </div>
            <button className="mt-8 inline-flex items-center gap-3 rounded-md bg-[linear-gradient(180deg,#1c57a9_0%,#134487_100%)] px-6 py-3 text-lg font-bold text-white shadow-[0_10px_24px_rgba(19,68,135,0.22)]">
              View on Google Maps
              <ExternalLinkIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[#dce3ef] bg-[linear-gradient(180deg,#fbfdff_0%,#f1f6fb_100%)] shadow-[0_14px_30px_rgba(19,44,94,0.08)]">
            <div className="absolute inset-0 opacity-80">
              <div className="absolute left-[12%] top-[24%] h-16 w-16 rounded-full border border-[#bfd1ea]" />
              <div className="absolute left-[28%] top-[18%] h-24 w-24 rounded-full border border-[#d5e1f2]" />
              <div className="absolute left-[48%] top-[36%] h-20 w-20 rounded-full border border-[#d3deee]" />
              <div className="absolute right-[16%] top-[24%] h-28 w-28 rounded-full border border-[#d3deee]" />
              <div className="absolute left-[16%] bottom-[22%] h-20 w-20 rounded-full border border-[#d3deee]" />
              <div className="absolute right-[24%] bottom-[16%] h-16 w-16 rounded-full border border-[#d3deee]" />
            </div>

            <div className="absolute inset-x-0 top-[48%] h-px bg-[#cbd8eb]" />
            <div className="absolute inset-y-0 left-[50%] w-px bg-[#cbd8eb]" />
            <div className="absolute left-[20%] top-[34%] h-[2px] w-[34%] -rotate-12 bg-[#cfdcf0]" />
            <div className="absolute left-[38%] top-[48%] h-[2px] w-[30%] rotate-[20deg] bg-[#cfdcf0]" />
            <div className="absolute left-[54%] top-[26%] h-[2px] w-[18%] rotate-[26deg] bg-[#cfdcf0]" />

            <div className="absolute left-[52%] top-[46%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-3">
              <MapPinMarker />
              <span className="text-xl font-bold text-[#de3521]">Student Project Centre</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
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
          © 2025 Student Project Centre. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-4xl font-bold tracking-tight text-[#163d83] sm:text-5xl">{title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-[#f2921b]" />
    </div>
  );
}

function Input({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}: {
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-md border bg-white px-4 py-4 text-base text-[#243250] outline-none transition placeholder:text-[#7d8aa8] focus:border-[#2a5cac] ${
          error ? "border-[#de3f32]" : "border-[#d5deeb]"
        }`}
      />
      {error ? <p className="mt-2 text-sm font-medium text-[#de3f32]">{error}</p> : null}
    </div>
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

function MapPinMarker() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-12 w-12">
      <path
        d="M32 58s16-15.2 16-30A16 16 0 1 0 16 28c0 14.8 16 30 16 30Z"
        fill="#ef3b2d"
      />
      <circle cx="32" cy="28" r="8" fill="#fff3f1" />
    </svg>
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

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PaperPlaneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M21 4 10 15m11-11-7 17-4-6-6-4 17-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14 5h5v5m-1-4-8 8M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
