"use client";

import { useEffect, useState } from "react";

const experience = [
  {
    period: "JAN 2026 — PRESENT",
    role: "Site Reliability Engineer",
    company: "Pitney Bowes · Pune, India",
    description:
      "Incident Commander for business-critical shipping platforms. Rebuilt observability, owned GitLab delivery for 30–50 production deploys per week, and automated AWS operations across 10+ accounts.",
  },
  {
    period: "OCT 2025 — JAN 2026",
    role: "Site Reliability Engineer",
    company: "Syensqo · Pune, India",
    description:
      "Managed Azure AD identity lifecycle, SSO integrations, Conditional Access, MFA and RBAC across the organization.",
  },
  {
    period: "SEP 2022 — OCT 2025",
    role: "Site Reliability Engineer",
    company: "Wipro · Pune, India",
    description:
      "Automated infrastructure across 100+ environments, defined SLOs, improved fault tolerance and reduced Keycloak upgrade downtime by 85% while maintaining 99.9% uptime.",
  },
  {
    period: "APR 2022 — JUN 2022",
    role: "Trainee",
    company: "Wipro · Gurgaon, India",
    description:
      "Deployed a Spring Boot and Angular application on AWS using VPC, CloudWatch, Lambda, S3, SQS, DynamoDB and IAM services.",
  },
];

const stack = [
  "AWS",
  "Azure",
  "Kubernetes",
  "Docker",
  "Rancher",
  "Helm",
  "Longhorn",
  "Terraform",
  "Ansible",
  "GitLab CI/CD",
  "ArgoCD",
  "Jenkins",
  "Prometheus",
  "Grafana",
  "Loki",
  "Sumo Logic",
  "Site24x7",
  "GitHub Actions",
  "Python",
  "Bash",
  "Git",
  "Keycloak",
  "Entra ID",
  "PostgreSQL",
  "MongoDB",
];

const focus = [
  {
    number: "01",
    title: "Reliability",
    text: "Improving SLO compliance, fault tolerance and operational readiness for production systems.",
  },
  {
    number: "02",
    title: "Automation",
    text: "Replacing manual work with Terraform, Python, CI/CD automation and repeatable runbooks.",
  },
  {
    number: "03",
    title: "Observability",
    text: "Turning metrics, logs and alerts into actionable signals that reduce detection and recovery time.",
  },
];

const hobbies = [
  {
    title: "SRE",
    text: "Thinking deeply about reliable systems, operational clarity and what keeps production steady.",
  },
  {
    title: "Electronics tinkering",
    text: "Taking circuits apart, following signals and learning by making small things work.",
  },
  {
    title: "IoT",
    text: "Connecting devices, sensors and everyday spaces to the systems behind them.",
  },
  {
    title: "Reading & writing",
    text: "Making room for books, notes and ideas that are worth slowing down to understand.",
  },
  {
    title: "3D printing",
    text: "Turning digital designs into physical objects and iterating until the idea fits in your hands.",
  },
];

const certifications = [
  "Certified Kubernetes Administrator",
  "AWS Certified Security — Specialty",
  "AWS Certified Developer — Associate",
  "AWS Certified Solutions Architect — Associate",
  "AWS Certified Cloud Practitioner",
  "GCP Associate Cloud Engineer",
  "GitHub Foundations Certified",
];

const navItems = [
  ["experience", "Experience"],
  ["work", "Work"],
  ["stack", "Stack"],
  ["hobby", "Hobby"],
  ["books", "Books"],
  ["contact", "Contact"],
];

const terminalStates = [
  { command: "uptime", output: "production: stable" },
  { command: "status --services", output: "all systems operational" },
  { command: "git status", output: "working tree clean" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("experience");
  const [terminalState, setTerminalState] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });

        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-30% 0px -55%", threshold: [0.1, 0.35, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTerminalState((current) => (current + 1) % terminalStates.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const currentTerminalState = terminalStates[terminalState];

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="logo">
            <span className="logo-mark">S</span>
            <span>shivamops</span>
          </a>

          <div className="nav-links">
            {navItems.map(([id, label]) => (
              <a
                className={activeSection === id ? "active" : ""}
                href={`#${id}`}
                key={id}
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="https://github.com/shivamyadav37"
            target="_blank"
            rel="noreferrer"
            className="nav-github"
          >
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              SITE RELIABILITY ENGINEER · PUNE, INDIA
            </div>

            <h1>
              Shivam
              <br />
              <span>Yadav.</span>
            </h1>

            <p className="hero-role">
              SRE <span>·</span> DevOps <span>·</span> TechOps
            </p>

            <p className="hero-description">
              I build, automate and operate highly available cloud-native systems.
              <br />
              Kubernetes, AWS, observability and everything between code and production.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Let&apos;s connect <span>↗</span>
              </a>

              <a
                href="https://github.com/shivamyadav37"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <span>~/shivamops</span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-muted">$</span> whoami
              </p>
              <p className="terminal-output">shivam</p>

              <p>
                <span className="terminal-muted">$</span> cat role.txt
              </p>
              <p className="terminal-output">
                SRE · 4 years in production
              </p>

              <p>
                <span className="terminal-muted">$</span>{" "}
                {currentTerminalState.command}
              </p>
              <p className="terminal-output terminal-live-output">
                {currentTerminalState.output}
              </p>

              <p>
                <span className="terminal-muted">$</span> kubectl get pods
              </p>

              <div className="pod-row">
                <span>api</span>
                <span className="green">Running</span>
              </div>
              <div className="pod-row">
                <span>worker</span>
                <span className="green">Running</span>
              </div>
              <div className="pod-row">
                <span>monitoring</span>
                <span className="green">Running</span>
              </div>

              <p className="cursor-line">
                <span className="terminal-muted">$</span> _
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container stats">
          <div>
            <strong>04+</strong>
            <span>Years in SRE</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>AWS accounts managed</span>
          </div>
          <div>
            <strong>30–50</strong>
            <span>Production deploys / week</span>
          </div>
          <div>
            <strong>99.9%</strong>
            <span>Uptime achieved</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section reveal">
        <div className="container about-grid">
          <div className="section-label">
            <span>01</span>
            ABOUT
          </div>

          <div className="about-content">
            <h2>
              Between <em>code</em> and production.
            </h2>

            <p>
              I am a Site Reliability Engineer with four years of hands-on
              experience designing, automating and maintaining highly
              available, scalable and secure cloud-native systems.
            </p>

            <p>
              My work spans Kubernetes, Terraform, AWS, CI/CD, observability
              and incident management, with a focus on reducing downtime and
              operational overhead.
            </p>

            <div className="focus-grid">
              {focus.map((item) => (
                <div className="focus-card" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section-dark reveal" id="experience">
        <div className="container">
          <div className="section-label">
            <span>02</span>
            EXPERIENCE
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.period}>
                <div className="experience-period">{item.period}</div>

                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section reveal" id="work">
        <div className="container">
          <div className="section-label">
            <span>03</span>
            WHAT I WORK ON
          </div>

          <div className="work-heading">
            <h2>
              Systems should be
              <br />
              <em>boring.</em>
            </h2>

            <p>
              The best infrastructure is predictable, observable and
              automated enough that teams can focus on the problems that
              actually matter.
            </p>
          </div>

          <div className="work-grid">
            <div className="work-card">
              <span>01</span>
              <h3>Continental · Kubernetes Platform</h3>
              <p>
                Rancher-managed Kubernetes clusters, Helm deployments,
                Longhorn storage, MinIO, Prometheus, Grafana and Loki.
              </p>
            </div>

            <div className="work-card">
              <span>02</span>
              <h3>Incident Command</h3>
              <p>
                Leading cross-team response for production outages, from
                detection and stakeholder communication through postmortems.
              </p>
            </div>

            <div className="work-card">
              <span>03</span>
              <h3>Observability Strategy</h3>
              <p>
                Cut MTTD by 35% and alert noise by 40% across Grafana,
                Site24x7 and Sumo Logic while reducing observability spend.
              </p>
            </div>

            <div className="work-card">
              <span>04</span>
              <h3>Shop For Home · AWS</h3>
              <p>
                Responsive Angular frontend and Spring Boot backend deployed
                securely in an AWS VPC with PostgreSQL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="section section-dark reveal" id="stack">
        <div className="container">
          <div className="section-label">
            <span>04</span>
            STACK
          </div>

          <div className="stack-heading">
            <h2>
              Tools I use to
              <br />
              <em>ship & operate.</em>
            </h2>
          </div>

          <div className="stack-list">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="credentials-grid">
            <div>
              <span className="credentials-label">CERTIFICATIONS</span>
              <ul className="credentials-list">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="credentials-label">EDUCATION</span>
              <p className="education-title">Bachelor of Technology</p>
              <p className="education-detail">GLA University, Uttar Pradesh · 2018 — 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOBBY */}
      <section className="section reveal" id="hobby">
        <div className="container">
          <div className="section-label">
            <span>05</span>
            HOBBY
          </div>

          <div className="hobby-heading">
            <h2>
              More than
              <br />
              <em>the terminal.</em>
            </h2>

            <p>
              The things I return to when I am not designing systems help me
              stay curious, observant and patient with difficult problems.
            </p>
          </div>

          <div className="hobby-grid">
            {hobbies.map((hobby, index) => (
              <article
                className={`hobby-card ${index === hobbies.length - 1 ? "hobby-card-featured" : ""}`}
                key={hobby.title}
              >
                <span>0{index + 1}</span>
                <h3>{hobby.title}</h3>
                <p>{hobby.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section className="section section-dark reveal" id="books">
        <div className="container books-grid">
          <div className="section-label">
            <span>06</span>
            BOOKS
          </div>

          <div className="books-content">
            <h2>
              Stories beyond
              <br />
              <em>production.</em>
            </h2>

            <div className="current-read">
              <span className="current-read-label">CURRENT READ</span>
              <h3>The Last Days of Socrates</h3>
              <p>Plato</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section reveal" id="contact">
        <div className="container contact-content">
          <div className="section-label">
            <span>07</span>
            CONTACT
          </div>

          <h2>
            Have an interesting
            <br />
            <em>problem?</em>
          </h2>

          <p>
            I&apos;m always interested in difficult infrastructure problems,
            distributed systems, reliability and automation.
          </p>

          <div className="contact-links">
            <a href="tel:+917318083485">
              +91 73180 83485 ↗
            </a>

            <a
              href="https://github.com/shivamyadav37"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a href="mailto:shivamy7318@gmail.com">
              Email ↗
            </a>

            <a
              href="https://www.linkedin.com/in/shivamyadav37"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Shivam Yadav</span>
          <span>Built with Next.js · Deployed on GitHub Pages</span>
        </div>
      </footer>
    </main>
  );
}