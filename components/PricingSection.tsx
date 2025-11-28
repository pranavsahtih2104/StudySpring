"use client";

import { useState } from "react";
import { Check, Zap, Users, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out StudySprint",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Zap,
    features: [
      "Up to 5 study sessions per week",
      "Basic AI study suggestions",
      "Progress tracking",
      "Mobile app access",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For serious students who want results",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    icon: Crown,
    features: [
      "Unlimited study sessions",
      "Advanced AI study planner",
      "Personalized learning insights",
      "Priority support",
      "Exam preparation mode",
      "Study analytics dashboard",
      "Calendar integrations",
      "Offline mode",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Teams",
    description: "For study groups and institutions",
    monthlyPrice: null,
    yearlyPrice: null,
    icon: Users,
    features: [
      "Everything in Pro",
      "Team collaboration tools",
      "Shared study schedules",
      "Admin dashboard",
      "Custom branding",
      "Dedicated account manager",
      "Advanced analytics",
      "SSO & SAML",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-950 border-b border-slate-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50">
            Simple, student-friendly pricing
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            Start for free, upgrade when you&apos;re ready.
          </p>
        </div>

        {/* Pricing toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span
            className={`text-sm font-medium transition-colors ${
              !isYearly ? "text-slate-100" : "text-slate-500"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 bg-slate-900 border border-slate-700 rounded-full transition-all hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-sky-500 rounded-full transition-transform duration-300 ease-in-out ${
                isYearly ? "translate-x-8" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              isYearly ? "text-slate-100" : "text-slate-500"
            }`}
          >
            Yearly
          </span>
          {isYearly && (
            <span className="text-sm font-semibold text-sky-300 bg-sky-500/10 px-3 py-1 rounded-full">
              Save 17%
            </span>
          )}
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price =
              plan.monthlyPrice !== null
                ? isYearly
                  ? plan.yearlyPrice
                  : plan.monthlyPrice
                : null;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-slate-900 border-sky-500 shadow-lg shadow-sky-500/20"
                    : "bg-slate-900/70 border-slate-800 hover:border-sky-400/40"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-sky-500 text-slate-950 text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 mb-6">
                  <Icon className="w-6 h-6 text-sky-400" />
                </div>

                {/* Plan name and description */}
                <h3 className="text-2xl font-bold text-slate-50 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  {price !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-slate-50">
                        ₹{price}
                      </span>
                      <span className="text-slate-400">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-slate-50">Custom</div>
                  )}
                </div>

                {/* CTA button */}
                <button
                  className={`w-full mb-8 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-sky-500 hover:bg-sky-400 text-slate-950"
                      : "bg-slate-900 border border-slate-600 text-slate-100 hover:border-sky-400 hover:text-sky-300"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features list */}
                <ul className="space-y-4 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-sky-400" />
                      </div>
                      <span className="text-sm text-slate-100 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
