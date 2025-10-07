"use client"

import { useEffect, useState } from "react"
import { translations, type Language } from "@/lib/translations"

export function About() {
  const [lang, setLang] = useState<Language>("ru")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null
    if (saved) setLang(saved)

    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLang(e.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  const t = translations[lang]

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8 tracking-tight text-balance">
              {t.aboutTitle}
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
            </div>
          </div>

          <div className="relative aspect-[3/4]">
            <img
              src="/modern-minimalist-garden-design-with-clean-lines-a.jpg"
              alt="Modern landscape design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
