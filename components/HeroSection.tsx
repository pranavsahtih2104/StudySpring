// components/HeroSection.tsx
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-medium text-slate-100">
              AI-Powered Study Planning
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Master Your Studies with{" "}
            <span className="text-sky-400">StudySprint</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl leading-relaxed">
            Transform your study routine with intelligent AI-powered planning.
            Schedule smarter, learn faster, and achieve your academic goals with
            personalized study plans.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-8 py-3 text-base font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-300 transition"
            >
              See How It Works
            </button>
          </div>

          {/* Social proof */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 border-2 border-slate-950" />
                <div className="w-8 h-8 rounded-full bg-sky-500/30 border-2 border-slate-950" />
                <div className="w-8 h-8 rounded-full bg-sky-500/40 border-2 border-slate-950" />
              </div>
              <span>Join 10,000+ students</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-700" />
            <span>Free to start • No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
