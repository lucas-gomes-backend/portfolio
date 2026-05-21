"use client"

import { useState, useEffect } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:flex flex-col gap-3">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`group flex items-center gap-4 text-xs font-medium uppercase tracking-widest transition-all duration-300 ${
            activeSection === item.href.slice(1)
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span
            className={`h-px transition-all duration-300 ${
              activeSection === item.href.slice(1)
                ? "w-16 bg-foreground"
                : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
            }`}
          />
          {item.name}
        </a>
      ))}
    </nav>
  )
}
