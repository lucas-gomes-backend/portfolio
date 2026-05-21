export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Contact
      </h2>

      <div className="max-w-xl">
        <h3 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Let's Connect
        </h3>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          I'm always open to discussing new projects, challenging
          opportunities, or simply exchanging ideas about software
          architecture and development best practices.
        </p>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          Currently seeking opportunities where I can contribute my
          experience in{" "}
          <span className="text-foreground">distributed systems</span> and{" "}
          <span className="text-foreground">cloud architecture</span>.
        </p>

        <div className="mt-8">
          <a
            href="mailto:zlucasgcruz@gmail.com"
            className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  )
}