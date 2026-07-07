const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    group: "Languages & Frameworks",
    items: ["JavaScript (ES6+)", "React.js", "Next.js", "Node.js", "Spring Boot"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "SCM", "AWS (S3, Lambda)", "Kibana", "Google Analytics", "Postman"],
  },
  {
    group: "Concepts",
    items: ["SDLC", "Agile", "CI/CD", "Application Resiliency", "System Design"],
  },
  {
    group: "AI-Assisted Development",
    items: ["Cursor AI", "Windsurf AI", "Codeium", "ChatGPT", "Claude"],
  },
];

const experience = [
  {
    company: "IndiaMART InterMESH Ltd.",
    role: "Senior System Engineer",
    location: "Noida",
    period: "July 2022 - Present",
    points: [
      "Designed and maintained UI components for IndiaMART's large-scale B2B marketplace using React.js and modern JavaScript (ES6+).",
      "Collaborated across multiple teams to implement Module Federation, enhancing scalability and micro-frontend integration.",
      "Worked on Next.js page directory structure for SSR integration and routing consistency.",
      "Enhanced website responsiveness and reduced page load time through frontend optimization.",
      "Integrated Kibana and Google Analytics for system monitoring and performance analysis.",
      "Partnered with server, gateway, and backend teams for API development and deployment.",
      "Led a team for a UI modernization project, ensuring stable and on-time delivery.",
      "Conducted knowledge transfer (KT) sessions to guide teams on shared module adoption.",
    ],
    achievements: [
      "Delivered two standalone modules from design to deployment.",
      "Recognized for enhancing UI stability and maintaining operational excellence.",
      "Best Performer of the Month - Sep 2025, Feb 2024, Jul 2023.",
      "Continuous Excellence Award - Oct 2023.",
    ],
  },
  {
    company: "Philips India Limited",
    role: "M.Tech Internship",
    location: "Bangalore",
    period: "September 2021 - July 2022",
    points: [
      "Worked on Philips HealthSuite Digital Platform (HSDP), a cloud-based infrastructure built on Cloud Foundry.",
      "Developed components using Spring Boot, integrated Postgres, and managed microservices.",
      "Gained hands-on experience with Agile processes, JUnit testing, and Fortify issue resolution.",
      "Learned about host services including Logging, Auditing, Notification, PKI, and S3 credentials.",
    ],
    achievements: [],
  },
];

const projects = [
  {
    title: "Savage Savy Interview Coach",
    tag: "AI-powered app",
    description:
      "A single-page, AI-powered interview prep dashboard built entirely in vanilla HTML/CSS/JS with no backend. Generates personalized daily study plans, AI tutoring, and mock tests in real time using live LLM calls, and persists all user progress client-side via localStorage.",
    highlights: [
      "5-phase roadmap engine for structured, adaptive daily study plans.",
      "AI tutoring chat and auto-graded mock tests powered by live LLM calls.",
      "Spaced-repetition revision scheduling and DSA problem log.",
      "Full progress tracking (history, streaks) persisted client-side, no backend or database.",
    ],
    stack: ["Vanilla JavaScript", "HTML/CSS", "LLM API integration", "localStorage"],
    note: "Built and hosted within Claude Cowork. Link available on request; demo can be shown live.",
  },
  {
    title: "Scrum Tracker",
    tag: "Personal project",
    description:
      "A lightweight Scrum and Kanban board for tracking sprint tasks across To Do, In Progress, and Done stages, built as a single self-contained HTML file for quick, no-install task tracking.",
    highlights: [],
    stack: ["HTML", "CSS", "JavaScript"],
    note: "Static single-file build. Source available on request.",
  },
];

const education = [
  {
    school: "Motilal Nehru National Institute of Technology, Allahabad",
    degree: "M.Tech, Software Engineering",
    period: "2020 - 2022",
    detail: "CPI: 8.75",
  },
  {
    school: "Jaypee University of Information Technology, Solan",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2014 - 2018",
    detail: "83%",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight text-zinc-50">
            Saivya Gulati
          </a>
          <ul className="hidden gap-6 text-sm text-zinc-400 sm:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-zinc-50">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        <section id="top" className="flex flex-col gap-6 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Frontend Engineer - React.js / Next.js
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Saivya Gulati
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            Senior System Engineer with 3+ years building high-performance,
            scalable web applications with React.js, Next.js, and modern
            JavaScript. Focused on clean architecture, frontend optimization,
            and shipping stable UI for high-traffic, product-driven platforms.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm">
            <a
              href="mailto:gulatisaivya@gmail.com"
              className="rounded-full bg-zinc-50 px-5 py-2.5 font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/saivya-gulati"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-5 py-2.5 font-medium text-zinc-100 transition-colors hover:border-zinc-500"
            >
              LinkedIn
            </a>
            <a
              href="#projects"
              className="rounded-full border border-zinc-700 px-5 py-2.5 font-medium text-zinc-100 transition-colors hover:border-zinc-500"
            >
              View projects
            </a>
          </div>
        </section>

        <section id="about" className="border-t border-zinc-800 py-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            About
          </h2>
          <p className="max-w-2xl leading-8 text-zinc-300">
            I design and build scalable frontend systems, currently at
            IndiaMART InterMESH Ltd., where I work on a large-scale B2B
            marketplace using React.js, Next.js, and micro-frontend
            architecture (Module Federation). I am proficient in Agile and SDLC
            workflows and CI/CD pipelines, and I actively use AI-assisted
            tools (Cursor AI, Windsurf AI, Claude, ChatGPT) to move faster
            without compromising code quality.
          </p>
        </section>

        <section id="experience" className="border-t border-zinc-800 py-16">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Experience
          </h2>
          <div className="flex flex-col gap-12">
            {experience.map((job) => (
              <div key={job.company} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium text-zinc-50">
                    {job.role} - {job.company}
                  </h3>
                  <span className="text-sm text-zinc-500">{job.period}</span>
                </div>
                <p className="text-sm text-zinc-500">{job.location}</p>
                <ul className="mt-2 flex flex-col gap-2 text-zinc-300">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7">
                      <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {job.achievements.length > 0 && (
                  <div className="mt-2 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Key achievements
                    </p>
                    <ul className="flex flex-col gap-1.5 text-sm text-zinc-400">
                      {job.achievements.map((a) => (
                        <li key={a}>* {a}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="border-t border-zinc-800 py-16">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-emerald-400">
                    {project.tag}
                  </span>
                  <h3 className="mt-1 text-lg font-medium text-zinc-50">
                    {project.title}
                  </h3>
                </div>
                <p className="flex-1 text-sm leading-7 text-zinc-300">
                  {project.description}
                </p>
                {project.highlights.length > 0 && (
                  <ul className="flex flex-col gap-1.5 text-sm text-zinc-400">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2 leading-6">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs italic text-zinc-500">{project.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="border-t border-zinc-800 py-16">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Skills
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="mb-3 text-sm font-medium text-zinc-200">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="border-t border-zinc-800 py-16">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Education
          </h2>
          <div className="flex flex-col gap-6">
            {education.map((ed) => (
              <div
                key={ed.school}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-medium text-zinc-50">{ed.school}</p>
                  <p className="text-sm text-zinc-400">
                    {ed.degree} - {ed.detail}
                  </p>
                </div>
                <span className="text-sm text-zinc-500">{ed.period}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-zinc-400">
            <span className="font-medium text-zinc-300">Publication:</span>{" "}
            "Comparative Analysis of Deep Learning Approaches for the
            Diagnosis of Diabetic Retinopathy," 2022 IEEE Students
            Conference on Engineering and Systems (SCES).
          </p>
        </section>

        <section
          id="contact"
          className="flex flex-col gap-4 border-t border-zinc-800 py-16 pb-24"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Contact
          </h2>
          <p className="max-w-xl leading-7 text-zinc-300">
            Open to frontend engineering roles focused on React.js and
            Next.js. Reach out directly:
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-400">
            <a
              href="mailto:gulatisaivya@gmail.com"
              className="hover:text-zinc-50"
            >
              gulatisaivya@gmail.com
            </a>
            <span>+91-8630174246</span>
            <a
              href="https://linkedin.com/in/saivya-gulati"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-50"
            >
              linkedin.com/in/saivya-gulati
            </a>
            <span>Noida, India</span>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-8 text-center text-xs text-zinc-600">
        Built with Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}
