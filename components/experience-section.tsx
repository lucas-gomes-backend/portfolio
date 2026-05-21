import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2026 — Present",
    title: "Mid Software Engineer II",
    company: "BDS DataSolution",
    companyUrl: "https://bdsdatasolution.com.br/",
    description:
      "Developing backend solutions, APIs, and complex integrations using .NET and Azure technologies. Building scalable, high-performance systems focused on reliability, maintainability, and distributed architectures while contributing to technical decisions and strategic initiatives.",
    technologies: [
      ".NET",
      "ASP.NET Core",
      "Azure",
      "SQL Server",
      "Microservices",
      "REST APIs",
      "Distributed Systems"
    ],
  },

  {
    period: "2024 — 2026",
    title: "Mid Software Engineer I",
    company: "BDS DataSolution",
    companyUrl: "https://bdsdatasolution.com.br/",
    description:
      "Designed, developed, and maintained backend solutions focused on scalability, performance, and integrations. Built REST APIs with .NET/C#, optimized SQL Server and PostgreSQL databases, developed ETL processes using Python, and contributed to Azure cloud projects.",
    technologies: [
      ".NET",
      "C#",
      "Azure",
      "SQL Server",
      "PostgreSQL",
      "Python",
      "ETL",
      "REST APIs"
    ],
  },

  {
    period: "2023 — 2024",
    title: "Junior Software Developer III",
    company: "BDS DataSolution",
    companyUrl: "https://bdsdatasolution.com.br/",
    description:
      "Developed scalable APIs and microservices supporting business operations. Implemented asynchronous integrations, improved backend performance, maintained ETL pipelines, and monitored production systems.",
    technologies: [
      ".NET",
      "Microservices",
      "SQL",
      "Python",
      "ETL",
      "Asynchronous Processing",
      "Monitoring"
    ],
  },

  {
    period: "2022 — 2023",
    title: "Junior Software Developer I",
    company: "BDS DataSolution",
    companyUrl: "https://bdsdatasolution.com.br/",
    description:
      "Developed and maintained backend solutions and APIs using .NET/C#. Built integrations between systems, optimized SQL queries, participated in ETL processes, and supported continuous improvements in Agile environments.",
    technologies: [
      ".NET",
      "C#",
      "SQL",
      "PostgreSQL",
      "ETL",
      "Agile",
      "APIs"
    ],
  },

  {
    period: "2021 — 2022",
    title: "Systems Development Intern",
    company: "BDS DataSolution",
    companyUrl: "https://bdsdatasolution.com.br/",
    description:
      "Supported the development and maintenance of internal systems, API integrations, SQL queries, and database optimization. Assisted with testing, bug fixing, and Agile delivery processes.",
    technologies: [
      "C#",
      "SQL",
      "APIs",
      "Scrum",
      "Kanban",
      "Testing"
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Experience
      </h2>
      <div className="mt-12">
        <a
          href="/Profile.pdf"
          className="group inline-flex items-center font-medium leading-tight text-foreground hover:text-primary"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <span className="ml-1 whitespace-nowrap">
            <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
          </span>
        </a>
      </div>
      <div className="flex">
        <br />
      </div>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {exp.period}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span>
                    {exp.title} ·{" "}
                    <span className="inline-block">
                      {exp.company}
                      <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                {exp.description}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <li key={tech}>
                    <span className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>      
    </section>
  )
}
