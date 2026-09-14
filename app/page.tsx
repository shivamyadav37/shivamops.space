"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const experience = [
  {
    period: "JAN 2026 — PRESENT",
    role: "Site Reliability Engineer",
    company: "Pitney Bowes · Pune, India",
    description:
      "Incident Commander for business-critical shipping platforms. Rebuilt observability to cut MTTD 35% and alert noise 40%, owned GitLab delivery for 30–50 production deploys per week, and automated AWS operations across 10+ accounts.",
    tags: ["AWS", "GitLab CI/CD", "Grafana", "Incident response"],
  },
  {
    period: "OCT 2025 — JAN 2026",
    role: "Site Reliability Engineer",
    company: "Syensqo · Pune, India",
    description:
      "Managed Azure AD identity lifecycle, SSO integrations, Conditional Access, MFA and RBAC across the organization.",
    tags: ["Entra ID", "SSO", "RBAC", "MFA"],
  },
  {
    period: "SEP 2022 — OCT 2025",
    role: "Site Reliability Engineer",
    company: "Wipro · Pune, India",
    description:
      "Automated infrastructure across 100+ environments, defined SLOs, improved fault tolerance and reduced Keycloak upgrade downtime by 85% while maintaining 99.9% uptime.",
    tags: ["Terraform", "Ansible", "Kubernetes", "SLOs"],
  },
  {
    period: "APR 2022 — JUN 2022",
    role: "Trainee",
    company: "Wipro · Gurgaon, India",
    description:
      "Deployed a Spring Boot and Angular application on AWS using VPC, CloudWatch, Lambda, S3, SQS, DynamoDB and IAM services.",
    tags: ["AWS", "Spring Boot", "Angular", "CloudWatch"],
  },
];

const stackGroups = [
  { title: "Cloud", code: "01", items: ["AWS", "Azure", "EC2", "VPC", "Lambda", "CloudWatch"] },
  { title: "Containers", code: "02", items: ["Kubernetes", "Docker", "Rancher", "Helm", "Longhorn"] },
  { title: "Delivery", code: "03", items: ["Terraform", "Ansible", "GitLab CI/CD", "ArgoCD", "Jenkins", "GitHub Actions"] },
  { title: "Observability", code: "04", items: ["Prometheus", "Grafana", "Loki", "Sumo Logic", "Site24x7"] },
  { title: "Systems", code: "05", items: ["Python", "Bash", "Git", "PostgreSQL", "MongoDB"] },
  { title: "Security + AI", code: "06", items: ["Keycloak", "Entra ID", "RBAC", "MFA", "GitHub Copilot"] },
];

const focus = [
  ["01", "Reliability", "SLOs, fault tolerance and operational readiness for production systems."],
  ["02", "Automation", "Terraform, Python, CI/CD and runbooks that remove repetitive work."],
  ["03", "Observability", "Metrics, logs and alerts shaped into signals teams can act on."],
];

const hobbies = [
  ["01", "Systems thinking", "Reliable systems, operational clarity and what keeps production steady."],
  ["02", "Homelabbing", "Small experiments at home to learn, break things safely and understand systems from the inside out."],
  ["03", "Electronics tinkering", "Taking circuits apart, following signals and learning by making small things work."],
  ["04", "IoT", "Connecting devices, sensors and everyday spaces to the systems behind them."],
  ["05", "Reading & writing", "Books, notes and ideas worth slowing down to understand."],
  ["06", "3D printing", "Turning digital designs into physical objects and iterating until the idea fits in your hands."],
];

const certifications = [
  "CKA — Certified Kubernetes Administrator",
  "AWS Certified Security — Specialty (SCS-C02)",
  "AWS Certified Developer — Associate (DVA-C02)",
  "AWS Certified Solutions Architect — Associate (SAA-C03)",
  "AWS Certified Cloud Practitioner (CLF-C01)",
  "GCP Associate Cloud Engineer",
  "GitHub Foundations Certified",
];

const navItems = [
  ["about", "About"],
  ["work", "Work"],
  ["experience", "Experience"],
  ["stack", "Stack"],
  ["hobby", "Hobby"],
  ["books", "Books"],
  ["contact", "Contact"],
];

const terminalStates = [
  ["uptime", "production: stable"],
  ["status --services", "all systems operational"],
  ["incident_mode --status", "ready for production"],
];

function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-marker">
      <span>{number}</span>
      <i />
      <strong>{label}</strong>
    </div>
  );
}

function Pipeline() {
  return (
    <div className="pipeline" aria-label="Delivery path from code to observability">
      {["Git", "CI/CD", "Containers", "Kubernetes", "Observe"].map((item, index) => (
        <div className="pipeline-node" key={item}>
          <span className="pipeline-dot" />
          <span>{item}</span>
          {index < 4 && <b aria-hidden="true">→</b>}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [terminalState, setTerminalState] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -62%", threshold: [0.1, 0.35, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTerminalState((current) => (current + 1) % terminalStates.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  const [command, output] = terminalStates[terminalState];

  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo" aria-label="Shivamops home">
            <span className="logo-mark">S</span>
            <span>SHIVAMOPS<span className="logo-dot">.</span></span>
          </a>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
          <div className={`nav-links ${mobileMenuOpen ? "is-open" : ""}`}>
            {navItems.map(([id, label], index) => (
              <a
                className={activeSection === id ? "active" : ""}
                href={`#${id}`}
                key={id}
                onClick={() => setMobileMenuOpen(false)}
              >
                <small>0{index + 1}</small>{label}
              </a>
            ))}
            <a href="/resume/Shivam-SRE-Resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>
              <small>↓</small>Resume
            </a>
          </div>
          <a className="nav-status" href="#contact"><span />Open to serious systems</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid technical-grid" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" />SRE / DEVOPS / CLOUD / AUTOMATION</div>
            <p className="hero-index">SHIVAM YADAV <span>{"//"}</span> ENGINEERING PROFILE 2026</p>
            <h1>Building systems<br />that don&apos;t wake<br /><em>you up at 3am.</em></h1>
            <p className="hero-description">I build, automate and operate highly available cloud-native systems across Kubernetes, AWS, delivery platforms and observability.</p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Start a conversation <span>↗</span></a>
              <a href="/resume/Shivam-SRE-Resume.pdf" download className="button button-secondary">Download resume <span>↓</span></a>
            </div>
          </div>

          <div className="control-panel">
            <div className="panel-topline"><span>LIVE SYSTEM VIEW</span><span className="panel-live"><i /> ONLINE</span></div>
            <div className="panel-screen">
              <div className="screen-header"><span>~/shivamops</span><span>09:41:22 UTC</span></div>
              <p><span className="terminal-muted">$</span> whoami</p><strong>site reliability engineer</strong>
              <p><span className="terminal-muted">$</span> {command}</p><strong className="live-output">{output}</strong>
              <div className="service-list">
                <div><span>api-gateway</span><b>healthy</b></div>
                <div><span>delivery-pipeline</span><b>deploying</b></div>
                <div><span>observability</span><b>healthy</b></div>
              </div>
              <div className="signal-line"><span /><span /><span /><span /><span /><span /><span /></div>
            </div>
            <div className="panel-footer"><span>INCIDENT READY</span><span>4 YEARS SRE</span></div>
          </div>
        </div>
      </section>

      <section className="impact-rail" aria-label="Selected impact metrics">
        <div className="container impact-grid">
          <div><strong>35%</strong><span>lower MTTD</span></div>
          <div><strong>40%</strong><span>less alert noise</span></div>
          <div><strong>85%</strong><span>less Keycloak upgrade downtime</span></div>
          <div><strong>20–30%</strong><span>faster root-cause investigation</span></div>
        </div>
      </section>

      <section className="section reveal" id="about">
        <div className="container split-layout">
          <SectionMarker number="01" label="ABOUT / PROFILE" />
          <div className="profile-content">
            <div className="profile-kicker">ENGINEER / BUILDER</div>
            <h2>Between <em>code</em><br />and production.</h2>
            <p className="lead">A Site Reliability Engineer with four years of hands-on experience designing, automating and maintaining highly available, scalable and secure cloud-native systems.</p>
            <p>My work spans Kubernetes, Terraform, AWS, CI/CD, observability and incident management, with a focus on reducing downtime and operational overhead.</p>
            <div className="focus-list">
              {focus.map(([number, title, text]) => <div className="focus-row" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark reveal" id="work">
        <div className="container">
          <SectionMarker number="02" label="WORK / SYSTEMS" />
          <div className="section-intro"><h2>Production is<br /><em>the product.</em></h2><p>Predictable platforms, visible signals and delivery paths that give teams room to do their best work.</p></div>
          <Pipeline />
          <Image className="section-visual" src="/observability-panel.svg" alt="Observability dashboard showing uptime, reduced detection time and lower alert noise" width={960} height={420} />
          <div className="case-grid">
            <article className="case-card case-large"><div className="case-meta"><span>CASE 01</span><span>PLATFORM / KUBERNETES</span></div><h3>Continental</h3><p>Rancher-managed Kubernetes clusters, Helm deployments, Longhorn storage, MinIO, Prometheus, Grafana and Loki. Improved MinIO IOPS by 40% while supporting secure, GDPR-compliant storage.</p><div className="tag-row"><span>AWS</span><span>Rancher</span><span>Longhorn</span><span>MinIO</span></div></article>
            <article className="case-card"><div className="case-meta"><span>CASE 02</span><span>RELIABILITY</span></div><h3>Incident command</h3><p>Leading cross-team response from detection and stakeholder communication through postmortems.</p><div className="case-signal">LIVE RESPONSE <i /></div></article>
            <article className="case-card"><div className="case-meta"><span>CASE 03</span><span>DELIVERY / AI</span></div><h3>Operations, accelerated</h3><p>GitHub Copilot, log analysis and incident summaries reduced investigation time by 20–30%.</p><div className="tag-row"><span>Python</span><span>Copilot</span><span>IaC</span></div></article>
            <article className="case-card"><div className="case-meta"><span>CASE 04</span><span>APPLICATION / AWS</span></div><h3>Shop For Home</h3><p>Responsive Angular frontend and Spring Boot backend deployed securely in an AWS VPC with PostgreSQL.</p><div className="tag-row"><span>Angular</span><span>Spring Boot</span><span>PostgreSQL</span></div></article>
          </div>
        </div>
      </section>

      <section className="section reveal" id="experience">
        <div className="container">
          <SectionMarker number="03" label="EXPERIENCE / HISTORY" />
          <div className="section-intro compact"><h2>Operational<br /><em>history.</em></h2><p>Roles, systems and responsibilities across cloud infrastructure, identity, delivery and production support.</p></div>
          <div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.period}><div className="timeline-marker"><span>0{index + 1}</span><i /></div><div className="timeline-date">{item.period}</div><div className="timeline-body"><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </div>
      </section>

      <section className="section section-dark reveal" id="stack">
        <div className="container">
          <SectionMarker number="04" label="STACK / CAPABILITIES" />
          <div className="section-intro compact"><h2>Tools grouped by<br /><em>how they work.</em></h2><p>No arbitrary skill bars. Just the systems and capabilities used to ship and operate.</p></div>
          <div className="capability-grid">{stackGroups.map((group) => <article className="capability-card" key={group.code}><div><span>{group.code}</span><h3>{group.title}</h3></div><div className="tag-row">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
          <div className="credentials"><div><span className="mono-label">CERTIFICATIONS</span><ul>{certifications.map((cert) => <li key={cert}>{cert}</li>)}</ul></div><div><span className="mono-label">EDUCATION</span><h3>Bachelor of Technology</h3><p>GLA University, Uttar Pradesh<br />2018 — 2022</p></div></div>
        </div>
      </section>

      <section className="section reveal" id="hobby">
        <div className="container">
          <SectionMarker number="05" label="OFFLINE / CURIOSITY" />
          <div className="section-intro compact"><h2>Beyond<br /><em>the terminal.</em></h2><p>Curiosity is part of the operating system too.</p></div>
          <div className="hobby-grid">{hobbies.map(([number, title, text]) => <article className={`hobby-card ${title === "Homelabbing" ? "is-highlighted" : ""}`} key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section section-dark reveal" id="books">
        <div className="container book-layout"><SectionMarker number="06" label="BOOKS / CURRENT READ" /><div className="book-content"><div className="book-mark">READ / 01</div><h2>The Last Days<br />of <em>Socrates.</em></h2><p>Plato</p><div className="book-note">Reading Plato&apos;s dialogues to think about ethics, belief and how people reason under pressure.</div></div></div>
      </section>

      <section className="contact-section reveal" id="contact">
        <div className="container contact-layout"><SectionMarker number="07" label="CONTACT / OPEN CHANNEL" /><div className="contact-content"><p className="profile-kicker">READY WHEN YOU ARE</p><h2>Let&apos;s build something<br /><em>reliable.</em></h2><p>I&apos;m interested in difficult infrastructure problems, distributed systems, reliability and automation.</p><div className="contact-links"><a href="mailto:shivamy7318@gmail.com">Email ↗</a><a href="https://www.linkedin.com/in/shivamyadav37" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/shivamyadav37" target="_blank" rel="noreferrer">GitHub ↗</a><a href="tel:+917318083485">Call ↗</a></div></div></div>
      </section>

      <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} Shivam Yadav</span><span>SHIVAMOPS / STATICALLY DEPLOYED</span></div></footer>
    </main>
  );
}
