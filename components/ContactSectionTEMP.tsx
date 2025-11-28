"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-slate-950 border-t border-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Have questions?
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Reach out and we’ll help you decide if StudySprint matches your goals.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />

          <textarea
            name="message"
            placeholder="Tell us about your study goals..."
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition resize-none"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-sky-500 px-8 py-3 rounded-full font-semibold text-slate-900 hover:bg-sky-400 transition w-full sm:w-auto"
          >
            Send Message
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-sm text-center text-slate-400 pt-2">
            We respond within 24–48 hours.
          </p>
        </form>
      </div>
    </section>
  )
}
