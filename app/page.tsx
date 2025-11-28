/* app/page.tsx */
import { HeroSection } from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSectionTEMP";
import { PricingSection } from "@/components/PricingSection";
import { FeaturesSection } from "@/components/FeatureSection";
import { TestimonialsSection } from "@/components/TestimonialsSectionTEMP";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/FooterTemp";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <Navbar/>
        {/* HERO */}
         <HeroSection />

        {/* FEATURES */}
        <FeaturesSection />

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* PRICING */}
        <PricingSection />
        {/* CONTACT */}
        <ContactSection />


      {/* FOOTER */}
      <Footer/>
    </div>
  );
}
