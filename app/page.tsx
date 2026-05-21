import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { MouseGlow } from "@/components/mouse-glow"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <MouseGlow />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Fixed on Desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <a href="/">Lucas Gomes</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
                Backend Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
                I build robust and scalable systems using{" "}
                  <span className="font-mono text-primary">ASP.NET Core</span>,{" "}
                  <span className="font-mono text-primary">Azure</span> and{" "}
                  <span className="font-mono text-primary">SQL Server</span>.
              </p>
              <div className="mt-16">
                <Navigation />
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <SocialLinks />
            </div>
          </header>

          {/* Right Column - Scrollable Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <div className="space-y-24 lg:space-y-32">
              <AboutSection />
              <ExperienceSection />
              <ProjectsSection />
              <ContactSection />
            </div>
            <footer className="mt-24 max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
              <p>
                Built with{" "}
                <a
                  href="https://nextjs.org"
                  className="font-medium text-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com"
                  className="font-medium text-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
                , hosted on{" "}
                <a
                  href="https://vercel.com"
                  className="font-medium text-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
                . Inspired by the design of{" "}
                <a
                  href="https://brittanychiang.com"
                  className="font-medium text-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brittany Chiang
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
