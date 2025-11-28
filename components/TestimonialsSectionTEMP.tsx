"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "StudySprint helped me break down my GATE syllabus into manageable chunks. I went from feeling overwhelmed to confidently tracking my progress every single day.",
    name: "Ananya",
    role: "GATE Aspirant",
    rating: 5,
    avatar: "AS",
  },
  {
    quote:
      "The AI-powered task breakdown is a game changer. It knows exactly how to split complex topics into bite-sized goals that actually fit my schedule.",
    name: "Rohan Mehta",
    role: "Medical Student",
    rating: 5,
    avatar: "RM",
  },
  {
    quote:
      "I used to procrastinate on big assignments. StudySprint keeps me accountable with daily reminders and realistic milestones. My grades have never been better.",
    name: "Priya Singh",
    role: "Computer Science, IIT Delhi",
    rating: 5,
    avatar: "PS",
  },
  {
    quote:
      "Finally, a study planner that actually understands how students think. The interface is clean, fast, and gets out of my way so I can focus on learning.",
    name: "Arjun Patel",
    role: "JEE Aspirant",
    rating: 5,
    avatar: "AP",
  },
  {
    quote:
      "I've tried countless productivity apps, but StudySprint is the only one that made studying feel less stressful. It's like having a personal study coach.",
    name: "Sneha Reddy",
    role: "MBA Candidate",
    rating: 5,
    avatar: "SR",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-950 border-b border-slate-800 py-20 md:py-28"
    >
      {/* Background blur accents */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-balance font-sans text-3xl font-bold leading-tight tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
            Loved by focused students
          </h2>
          <p className="text-pretty text-lg text-slate-400 md:text-xl">
            Thousands of learners use StudySprint to stay consistent and achieve their academic goals.
          </p>
        </div>

        {/* Scrollable carousel */}
        <div className="relative -mx-4 px-4">
          <div className="flex gap-6 overflow-x-auto pb-4 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[320px] flex-shrink-0 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-500/20 md:min-w-[380px] md:p-8"
              >
                {/* Avatar */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20 text-sm font-semibold text-sky-300 ring-2 ring-sky-500/30">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-50">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mb-4 text-pretty leading-relaxed text-slate-100/90">
                  "{testimonial.quote}"
                </blockquote>

                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-sky-400 text-sky-400"
                          : "text-slate-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-950 to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-950 to-transparent md:w-16" />
        </div>

        {/* Scroll hint text */}
        <div className="mt-8 text-center text-sm text-slate-500">
          ← Scroll to see more →
        </div>
      </div>
    </section>
  );
}
