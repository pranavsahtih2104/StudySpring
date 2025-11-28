import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/50 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Brand section */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-sky-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">
                Study<span className="text-sky-400">Sprint</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              AI-powered study planning for focused students.
            </p>
          </div>

          {/* Links sections */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#features" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/help" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {currentYear} StudySprint. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-sm text-slate-500 hover:text-sky-400 transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-slate-500 hover:text-sky-400 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
