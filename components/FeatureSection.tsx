"use client";

import { Brain, Calendar, TrendingUp, Target, Bell, BookOpen } from "lucide-react";

const features = [
  {
    step: "01",
    icon: Brain,
    title: "AI-Powered Planning",
    description:
      "Automatically break down your syllabus into bite-sized daily tasks that fit your schedule.",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Adaptive study sessions that adjust to your pace and learning style in real-time.",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Visual insights and analytics to keep you motivated and on track every day.",
  },
  {
    step: "04",
    icon: Target,
    title: "Goal Setting",
    description:
      "Set and achieve milestones with intelligent reminders and personalized recommendations.",
  },
  {
    step: "05",
    icon: Bell,
    title: "Stay Accountable",
    description:
      "Smart notifications and check-ins that keep you consistent without overwhelming you.",
  },
  {
    step: "06",
    icon: BookOpen,
    title: "Study Resources",
    description:
      "Organize notes, links, and materials all in one place with AI-powered search.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative w-full border-b border-slate-800 bg-slate-950 py-20 px-4 sm:px-6 lg:py-32"
    >
      {/* Background blur accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-4 text-balance">
            Everything you need to stay consistent
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            StudySprint turns your syllabus into small, manageable tasks and keeps you accountable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.step}
                className="group relative bg-slate-900/70 border border-slate-800 rounded-xl p-6 lg:p-8 hover:border-sky-400/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/20"
              >
                {/* Step number */}
                <div className="absolute top-6 right-6 text-xs font-mono text-slate-600 group-hover:text-sky-300 transition-colors duration-300">
                  {feature.step}
                </div>

                {/* Icon container with glow effect */}
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/30 group-hover:bg-sky-500/20 group-hover:border-sky-400 group-hover:shadow-lg group-hover:shadow-sky-500/40 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-50 mb-2 group-hover:text-sky-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
