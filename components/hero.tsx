"use client"

import { useEffect, useState } from "react"
import { translations, type Language } from "@/lib/translations"

export function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/elegant-botanical-garden-landscape-with-geometric-.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary-foreground mb-8 tracking-tight text-balance whitespace-pre-line">
          {t.heroTitle}
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed text-pretty">
          {t.heroSubtitle}
        </p>

        <div className="mt-12">
          <a
            href="#registration"
            className="inline-block bg-primary-foreground text-primary px-8 py-4 text-lg font-medium hover:bg-primary-foreground/90 transition-colors"
          >
            {t.heroCta}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-sm">
        <div className="flex flex-col items-center gap-2">
          <span>{t.heroScroll}</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
