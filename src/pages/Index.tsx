import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ProfessorSection } from "@/components/landing/ProfessorSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { SocialProofNotification } from "@/components/landing/SocialProofNotification";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <SocialProofNotification />
      <HeroSection />
      <PainPointsSection />
      <ProcessSection />
      <ProfessorSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
