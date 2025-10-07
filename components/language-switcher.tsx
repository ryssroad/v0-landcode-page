"use client"

import { useEffect, useState } from "react"

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")

  useEffect(() => {
    const saved = localStorage.getItem("language") as "ru" | "en" | null
    if (saved) {
      setLanguage(saved)
      document.documentElement.lang = saved
      window.dispatchEvent(new CustomEvent("languageChange", { detail: saved }))
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === "ru" ? "en" : "ru"
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
    document.documentElement.lang = newLang
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLang }))
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border px-4 py-2 hover:bg-background transition-colors"
      aria-label="Switch language"
    >
      <span className={`text-sm font-medium ${language === "ru" ? "text-foreground" : "text-muted-foreground"}`}>
        RU
      </span>
      <span className="text-muted-foreground">/</span>
      <span className={`text-sm font-medium ${language === "en" ? "text-foreground" : "text-muted-foreground"}`}>
        EN
      </span>
    </button>
  )
}
