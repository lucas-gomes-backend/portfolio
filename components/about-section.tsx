export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Sobre
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I’m a backend developer passionate about building{" "}
          <span className="text-foreground">
            robust and scalable systems
          </span>{" "}
          that power critical business operations. My focus lies at the
          intersection of clean software architecture and high-performance
          engineering.
        </p>

        <p>
          Currently, I work as a{" "}
          <span className="text-primary">Mid-Level Software Engineer/Backend Developer</span>,
          where I develop and maintain high-availability microservices using{" "}
          <span className="text-foreground">ASP.NET Core</span>,{" "}
          <span className="text-foreground">Azure</span>, and{" "}
          <span className="text-foreground">SQL Server</span>.
        </p>

        <p>
          Over the years, I’ve had the opportunity to build software for{" "}
          <span className="text-foreground">financial institutions</span>,{" "}
          <span className="text-foreground">logistics companies</span>, and{" "}
          <span className="text-foreground">technology startups</span>.
          My main motivation is turning complex requirements into efficient,
          scalable, and well-documented solutions.
        </p>
      </div>
    </section>
  )
}
