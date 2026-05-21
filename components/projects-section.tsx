import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Logistics Shipment Tracking API",
    description:
      "Developed a logistics tracking API for managing shipments, delivery statuses, routes, and notifications. Built with ASP.NET Core, SQL Server, caching, and background jobs to simulate real-world enterprise logistics workflows.",
    image: "/cruise.jpg",
    technologies: [
      "ASP.NET Core",
      "SQL Server",
      "Redis",
      "Hangfire",
      "REST API"
    ],
    githubUrl:
      "https://github.com/lucas-gomes-backend/logistics-shipment-tracking-api",
    liveUrl: null,
  },

  {
    title: "Job Board Booking Platform",
    description:
      "Developed a full-stack platform for job listings or bookings with authentication, search filters, scheduling, and notifications. Focused on scalable architecture, business rules, and production-ready backend design.",
    image: "/books.jpg",
    technologies: [
      "ASP.NET Core",
      "SQL Server",
      "JWT",
      "REST API",
      "Authentication"
    ],
    githubUrl:
      "https://github.com/lucas-gomes-backend/job-board-booking-platform",
    liveUrl: null,
  },

  {
    title: "Real-Time Chat & Notifications",
    description:
      "Built a scalable real-time messaging platform with WebSockets, authentication, notifications, and online presence tracking. Designed for high concurrency using ASP.NET Core, SignalR, caching, and event-driven architecture.",
    image: "/message.jpg",
    technologies: [
      "ASP.NET Core",
      "SignalR",
      "Redis",
      "JWT",
      "WebSockets"
    ],
    githubUrl:
      "https://github.com/lucas-gomes-backend/real-time-chat-and-notifications",
    liveUrl: null,
  },

  {
    title: "SaaS Billing & Subscription Platform",
    description:
      "Developed a scalable SaaS billing platform with subscription management, recurring payments, invoice generation, JWT authentication, Redis caching, background jobs, and Azure deployment using ASP.NET Core.",
    image: "/subs.jpg",
    technologies: [
      "ASP.NET Core",
      "Azure",
      "Redis",
      "JWT",
      "SQL Server",
      "Hangfire"
    ],
    githubUrl:
      "https://github.com/lucas-gomes-backend/saas-billing-and-subscription-platform",
    liveUrl: null,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Projects
      </h2>
      <div className="space-y-12 group/list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span>
                    {project.title}
                    <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 text-muted-foreground transition hover:text-primary"
                  aria-label="Ver no GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 text-muted-foreground transition hover:text-primary"
                    aria-label="Ver projeto ao vivo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <span className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="z-10 sm:order-1 sm:col-span-2">
              <div className="aspect-video overflow-hidden rounded border-2 border-secondary bg-secondary/50 transition group-hover:border-primary/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <a
          href="https://github.com/lucas-gomes-backend?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center font-medium leading-tight text-foreground hover:text-primary"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
            Explore All Projects on GitHub
          </span>
          <span className="ml-1 whitespace-nowrap">
            <Github className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
          </span>
        </a>
      </div>
    </section>
  )
}
