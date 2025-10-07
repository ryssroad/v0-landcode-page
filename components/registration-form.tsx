"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { translations, type Language } from "@/lib/translations"

export function RegistrationForm() {
  const [lang, setLang] = useState<Language>("ru")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitStatus("success")
    setIsSubmitting(false)

    setTimeout(() => {
      setFormData({ fullName: "", email: "", phone: "", message: "" })
      setSubmitStatus("idle")
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="registration" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 tracking-tight text-balance">
            {t.formTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            {t.formSubtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground">
                {t.formFullName} *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                {t.formEmail} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-foreground">
              {t.formPhone} *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              {t.formMessage}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
              placeholder={t.formMessagePlaceholder}
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="w-full md:w-auto px-12 py-4 bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.formSubmitting : submitStatus === "success" ? t.formSuccess : t.formSubmit}
            </button>

            {submitStatus === "success" && <p className="text-sm text-secondary">{t.formSuccessMessage}</p>}

            <p className="text-sm text-muted-foreground text-center text-pretty">{t.formPrivacy}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
