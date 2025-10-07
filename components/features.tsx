"use client"

import { useEffect, useState } from "react"
import { translations, type Language } from "@/lib/translations"

export function Features() {
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

  const features = [
    {
      title: t.feature1Title,
      description: t.feature1Desc,
    },
    {
      title: t.feature2Title,
      description: t.feature2Desc,
    },
    {
      title: t.feature3Title,
      description: t.feature3Desc,
    },
    {
      title: t.feature4Title,
      description: t.feature4Desc,
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-foreground mb-16 tracking-tight text-balance">
          {t.featuresTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-serif text-primary">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
