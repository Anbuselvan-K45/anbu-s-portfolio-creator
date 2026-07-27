import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Wrench,
  Boxes,
  GraduationCap,
  Award,
  Briefcase,
  ArrowRight,
  Send,
  MapPin,
} from "lucide-react";
import resumeAsset from "@/assets/resume.asset.json";
import anbuPhoto from "@/assets/anbu.jpg.asset.json";

const aboutImageUrl = "/assets/Anbuselvan.K.jpeg";

const resolveAssetUrl = (
  asset: { url?: string; original_filename?: string } | undefined,
  fallback: string,
) => {
  if (!asset || !asset.url) return fallback;
  // Lovable editor preview URLs begin with /__l5e and won't be served
  // by the dev server. Use a sensible fallback during local development.
  if (import.meta.env.DEV && asset.url.startsWith("/__l5e")) return fallback;
  return asset.url;
};

const anbuUrl = resolveAssetUrl(anbuPhoto as any, "/favicon.ico");
const resumeUrl = resolveAssetUrl(resumeAsset as any, "#");

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anbuselvan K",
  jobTitle: "Python Full Stack Developer",
  email: "mailto:anbuselvan.k1204@gmail.com",
  telephone: "+91-9787008131",
  image: anbuPhoto.url,
  url: "/",
  sameAs: [
    "https://github.com/anbuselvank1204-anbu",
    "https://www.linkedin.com/in/anbuselvan-k-b51aa6423/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Thiruvalluvar University",
  },
  knowsAbout: [
    "Python",
    "Django",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Solidity",
    "Ethers.js",
    "REST APIs",
  ],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Anbuselvan K — Portfolio",
  url: "/",
  author: { "@type": "Person", name: "Anbuselvan K" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anbuselvan K — Python Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Anbuselvan K — Python Full Stack Developer building responsive, scalable web apps with Django, React, Node.js and blockchain.",
      },
      { name: "keywords", content: "Anbuselvan K, Python Developer, Full Stack Developer, Django, React, Node.js, MERN, Blockchain, Solidity, Portfolio" },
      { name: "author", content: "Anbuselvan K" },
      { property: "og:title", content: "Anbuselvan K — Python Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Projects, skills and experience of Anbuselvan K, a Python Full Stack Developer.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: anbuUrl },
      { property: "og:image:alt", content: "Anbuselvan K" },
      { property: "profile:first_name", content: "Anbuselvan" },
      { property: "profile:last_name", content: "K" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Anbuselvan K — Python Full Stack Developer" },
      { name: "twitter:description", content: "Python Full Stack Developer portfolio — projects, skills, and experience." },
      { name: "twitter:image", content: anbuUrl },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(PERSON_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(WEBSITE_JSONLD) },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const SKILLS = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Python", "Django", "Node.js", "Express.js", "REST APIs"],
  },
  { title: "Database", icon: Database, items: ["SQL", "MongoDB"] },
  {
    title: "Blockchain",
    icon: Boxes,
    items: ["Solidity", "Polygon Amoy", "Hardhat", "Ethers.js"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "AI Tools", "GitHub Copilot"],
  },
];

const PROJECTS = [
  {
    title: "Trace the Cotton",
    period: "Jan 2026 – Mar 2026",
    description:
      "A blockchain-based textile supply-chain tracking platform with a dual-ledger architecture spanning MongoDB and Polygon Amoy. Tracks products across 7 supply-chain stages, with 6 stakeholder roles, JWT auth, RBAC, QR verification and real-time notifications.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "Polygon Amoy",
    ],
    github: "https://github.com/anbuselvank1204-anbu",
    demo: "#",
  },
  {
    title: "E-Commerce Website",
    period: "Aug 2026 – Oct 2026",
    description:
      "A responsive e-commerce platform for browsing, searching and filtering products, managing a shopping cart, authentication and secure order processing with product management.",
    tags: ["HTML", "CSS", "JavaScript", "Supabase"],
    github: "https://github.com/anbuselvank1204-anbu",
    demo: "#",
  },
];

const CERTS: {
  title: string;
  issuer: string;
  image?: string;
  accent: string;
}[] = [
  {
    title: "Full Stack Development Internship",
    issuer: "Edu Tantr",
    image: "/certificates/Full-Stack-Development-Internship.jpg",
    accent: "from-blue-500/40 to-cyan-500/30",
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    image: "/certificates/Basics-of-Python.jpg",
    accent: "from-emerald-500/40 to-teal-500/30",
  },
  {
    title: "Introduction to Agile Methodology",
    issuer: "Infosys Springboard",
    image: "/certificates/Introduction-to-Agile-Methodology.jpg",
    accent: "from-yellow-500/40 to-orange-500/30",
  },
  {
    title: "Object-Oriented Programming Using Python",
    issuer: "Infosys Springboard",
    image: "/certificates/Object-Oriented-Programming-Using-Python.jpg",
    accent: "from-violet-500/40 to-fuchsia-500/30",
  },
  {
    title: "Tamil Nadu Innovation Initiatives (TANII) Hackathon",
    issuer: "Government Arts and Science College",
    image: "/certificates/Tamil-Nadu-Innovation-Initiatives-Hackathon.jpg",
    accent: "from-purple-500/40 to-pink-500/30",
  },
  {
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle University",
    image: "/certificates/Oracle-Certified-Foundations-Associate.jpg",
    accent: "from-red-500/40 to-orange-500/30",
  },
];

const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.tags)));

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const body = `Hi Anbuselvan,%0D%0A%0D%0A${message}%0D%0A%0D%0A— ${name} (${email})`;
    window.location.href = `mailto:anbuselvan.k1204@gmail.com?subject=Portfolio contact from ${name}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <div className="min-h-screen font-sans">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled ? "glass shadow-card" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-bold">
            <span className="text-gradient">Anbuselvan</span>
            <span className="text-foreground">.dev</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-foreground transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resumeUrl}
            download="Anbuselvan_K_Resume.pdf"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-md p-2 text-foreground"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden glass border-t border-border">
            <ul className="flex flex-col px-6 py-4 gap-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 text-muted-foreground hover:text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
                  <a
                    href={resumeUrl}
                download="Anbuselvan_K_Resume.pdf"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
      >
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Anbuselvan K</span>
            </h1>
            <h2 className="mt-3 text-xl md:text-2xl text-muted-foreground font-display">
              Python Full Stack Developer
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground leading-relaxed">
              Motivated and detail-oriented developer passionate about building
              responsive, scalable, and user-friendly web applications using modern
              technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
              >
                View My Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={resumeUrl}
                download="Anbuselvan_K_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a
                href="https://github.com/anbuselvank1204-anbu"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anbuselvan-k-b51aa6423/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:anbuselvan.k1204@gmail.com"
                className="hover:text-foreground transition"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Terminal */}
          <div
            data-reveal
            className="opacity-0 translate-y-6 transition-all duration-700 delay-150"
          >
            <div className="glass rounded-2xl overflow-hidden shadow-card animate-float">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-secondary/40">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                  anbu@dev — zsh
                </span>
              </div>
              <pre className="p-5 text-sm font-mono leading-relaxed text-muted-foreground">
{`$ whoami
`}<span className="text-foreground">anbuselvan_k</span>{`
$ cat role.txt
`}<span className="text-foreground">Python Full Stack Developer</span>{`
$ ls skills/
`}<span className="text-[color:var(--accent)]">python  django  react  node.js</span>{`
`}<span className="text-[color:var(--accent)]">mongodb  sql  solidity  ethers.js</span>{`
$ echo "Let's build something great"
`}<span className="text-foreground">Let's build something great</span>
<span className="animate-blink">▍</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me" eyebrow="Introduction">
        <div className="glass rounded-2xl p-6 md:p-10 grid gap-8 md:grid-cols-[auto_1fr] items-center">
          <div className="relative mx-auto md:mx-0 shrink-0">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-primary opacity-40 blur-2xl" />
            <img
              src={aboutImageUrl}
              alt="Portfolio hero illustration"
              loading="lazy"
              className="relative h-56 w-56 md:h-64 md:w-64 rounded-3xl object-cover border border-border shadow-card"
            />
          </div>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            I'm a Python Full Stack Developer with hands-on experience in{" "}
            <span className="text-foreground">Python, Django, HTML, CSS, JavaScript, React, SQL,
            REST APIs, authentication, database management, Git, GitHub, and deployment.</span>{" "}
            I enjoy turning ideas into reliable, well-crafted products — from clean
            frontends to secure APIs and blockchain-backed systems.
          </p>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills & Stack" eyebrow="What I use">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group) => (
            <div
              key={group.title}
              data-reveal
              className="opacity-0 translate-y-6 transition-all duration-700 glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-secondary/60 border border-border px-3 py-1 text-xs text-foreground/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience" eyebrow="Work">
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4 min-w-0">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold">
                  Full Stack Developer
                </h3>
                <p className="text-muted-foreground">Edu Tantr · Internship</p>
              </div>
            </div>
            <span className="rounded-full bg-secondary/60 border border-border px-3 py-1 text-xs text-muted-foreground">
              May 2025 – June 2025
            </span>
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Completed a MERN Stack Development Summer Internship. Built full-stack web
            applications using MongoDB, Express.js, React.js, and Node.js. Worked on
            responsive frontend interfaces, REST APIs, backend services, database-driven
            applications, API integration, Git, and full-stack development.
          </p>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" eyebrow="Selected work">
        <div className="mb-6 flex flex-wrap gap-2">
          {["All", ...ALL_TAGS].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-3 py-1 text-xs border transition ${
                filter === t
                  ? "bg-gradient-primary text-primary-foreground border-transparent"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <p className="mb-4 text-xs text-muted-foreground">
          Showing <span className="text-foreground font-medium">{filtered.length}</span> of{" "}
          {PROJECTS.length} projects
          {filter !== "All" && (
            <>
              {" "}
              tagged{" "}
              <span className="text-[color:var(--accent)] font-medium">{filter}</span>
            </>
          )}
        </p>
        {filtered.length === 0 ? (
          <div className="glass rounded-2xl p-8 text-center text-sm text-muted-foreground">
            No projects match "{filter}" yet.{" "}
            <button
              onClick={() => setFilter("All")}
              className="text-[color:var(--accent)] hover:underline"
            >
              Clear filter
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((p) => (
              <article
                key={p.title}
                className="transition-all duration-300 glass rounded-2xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {p.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary/60 border border-border px-2.5 py-0.5 text-[11px] text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium hover:bg-secondary"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      {/* CERTIFICATES */}
      <Section id="certificates" title="Certificates" eyebrow="Credentials">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c, i) => (
            <button
              key={c.title}
              onClick={() => setLightbox(i)}
              className="group glass rounded-2xl overflow-hidden text-left transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div
                className={`relative aspect-[4/3] w-full bg-gradient-to-br ${c.accent} flex items-center justify-center overflow-hidden`}
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`${c.title} certificate`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 px-4 text-center">
                    <Award className="h-10 w-10 text-foreground/80" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
                      Certificate
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm font-semibold leading-snug">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] text-[color:var(--accent)]">
                  View <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl glass rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/70 hover:bg-background text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <div
              className={`aspect-[4/3] w-full bg-gradient-to-br ${CERTS[lightbox].accent} flex items-center justify-center`}
            >
              {CERTS[lightbox].image ? (
                <img
                  src={CERTS[lightbox].image}
                  alt={`${CERTS[lightbox].title} certificate`}
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-center px-6">
                  <Award className="h-16 w-16 text-foreground/80" />
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Certificate image not uploaded yet. Add an{" "}
                    <span className="font-mono text-foreground">image</span> URL to this
                    entry in the <span className="font-mono text-foreground">CERTS</span>{" "}
                    array to display it here.
                  </p>
                </div>
              )}
            </div>
            <div className="p-5 border-t border-border">
              <h3 className="font-display text-lg font-semibold">
                {CERTS[lightbox].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                Issued by {CERTS[lightbox].issuer}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* EDUCATION + CERTS */}
      <Section id="education" title="Education & Certifications" eyebrow="Background">
        <div className="grid gap-6 md:grid-cols-2">
          <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            <p className="font-medium">Bachelor's Degree in Computer Science</p>
            <p className="text-muted-foreground text-sm">Thiruvalluvar University</p>
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="text-foreground">Relevant coursework:</span> Data
              Structures, Web Development, Database Systems, Software Engineering.
            </p>
          </div>
          <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {CERTS.map((c) => (
                <li key={c.title} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" />
                  <span>
                    <span className="text-foreground">{c.title}</span> — {c.issuer}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#certificates"
              className="mt-4 inline-flex items-center gap-1 text-xs text-[color:var(--accent)] hover:underline"
            >
              View certificate gallery <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get in touch" eyebrow="Contact">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold">
                Let's build something together.
              </h3>
              <p className="mt-3 text-muted-foreground">
                Open to full-stack roles, internships, and freelance work. I'll get back
                to you within a day or two.
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[color:var(--accent)]" />
                <a href="mailto:anbuselvan.k1204@gmail.com" className="hover:text-foreground text-muted-foreground">
                  anbuselvan.k1204@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[color:var(--accent)]" />
                <a href="tel:+919787008131" className="hover:text-foreground text-muted-foreground">
                  +91 97870 08131
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[color:var(--accent)]" />
                <span className="text-muted-foreground">India</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/anbuselvank1204-anbu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs hover:bg-secondary"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anbuselvan-k-b51aa6423/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs hover:bg-secondary"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-4">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            <div>
              <label className="block text-xs font-medium mb-2 text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or role..."
                className="w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm outline-none focus:border-[color:var(--primary)] transition"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && (
              <p className="text-xs text-emerald-400">
                Opening your mail client — thanks for reaching out!
              </p>
            )}
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-16">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Anbuselvan K. Crafted with care.</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-foreground transition">Back to top</a>
            <a href="https://github.com/anbuselvank1204-anbu" target="_blank" rel="noreferrer" className="hover:text-foreground">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/anbuselvan-k-b51aa6423/" target="_blank" rel="noreferrer" className="hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          data-reveal
          className="opacity-0 translate-y-6 transition-all duration-700 mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)] mb-2">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">{title}</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium mb-2 text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm outline-none focus:border-[color:var(--primary)] transition"
      />
    </div>
  );
}
