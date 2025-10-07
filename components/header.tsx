"use client"

import { useState } from "react"
import { translations, type Language } from "@/lib/translations"
import { LoginModal } from "./login-modal"

interface HeaderProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const t = translations[language]

  return (
    <>
      <header className="fixed right-0 top-0 z-40 flex items-center gap-4 p-6">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="border border-neutral-300 bg-white/90 px-6 py-2 text-sm font-medium text-neutral-900 backdrop-blur-sm transition-colors hover:bg-white hover:border-primary"
        >
          {t.loginButton}
        </button>

        <div className="flex gap-2 border border-neutral-300 bg-white/90 backdrop-blur-sm">
          <button
            onClick={() => onLanguageChange("ru")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              language === "ru" ? "bg-primary text-white" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            RU
          </button>
          <button
            onClick={() => onLanguageChange("en")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              language === "en" ? "bg-primary text-white" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            EN
          </button>
        </div>
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} language={language} />
    </>
  )
}
