"use client"

import type React from "react"

import { useState } from "react"
import { translations, type Language } from "@/lib/translations"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  language: Language
}

export function LoginModal({ isOpen, onClose, language }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const t = translations[language]

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-md bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-600 transition-colors"
          aria-label={t.loginClose}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 className="mb-8 font-serif text-3xl font-light text-neutral-900">{t.loginTitle}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-neutral-700">
              {t.loginEmail}
            </label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-neutral-700">
              {t.loginPassword}
            </label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-primary focus:outline-none"
            />
          </div>

          <button type="button" className="text-sm text-primary hover:text-primary/80 transition-colors">
            {t.loginForgot}
          </button>

          <button
            type="submit"
            className="w-full bg-primary px-8 py-4 font-medium text-white transition-colors hover:bg-primary/90"
          >
            {t.loginSubmit}
          </button>
        </form>
      </div>
    </div>
  )
}
