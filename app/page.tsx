"use client"

import { useState, useEffect } from "react"
import { RegistrationForm } from "@/components/registration-form"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type { Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("ru")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "ru" || savedLang === "en")) {
      setLanguage(savedLang)
    }
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <main className="min-h-screen">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <About language={language} />
      <Features language={language} />
      <RegistrationForm language={language} />
      <Footer language={language} />
    </main>
  )
}
