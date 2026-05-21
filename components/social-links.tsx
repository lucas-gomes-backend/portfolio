import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/lucas-gomes-backend",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lucas-gomes-backend/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:zlucasgcruz@gmail.com",
    icon: Mail,
  },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label={link.name}
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}
