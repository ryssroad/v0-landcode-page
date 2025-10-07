"use client"

import { useEffect, useState } from "react"
import { translations, type Language } from "@/lib/translations"

export function Footer() {
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
    <footer className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-xl mb-4">{t.footerContacts}</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>info@landcode.online</p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4">{t.footerPhone}</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>+7 727 378 40 86</p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4">{t.footerAddress}</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>{t.footerAddressText}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>{t.footerCopyright}</p>
        </div>
      </div>
    </footer>
  )
}
