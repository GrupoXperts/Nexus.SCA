import NexusNavbar from "@/components/NexusNavbar";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import AnchorSection from "@/components/sections/AnchorSection";
import DeepDiveSection from "@/components/sections/DeepDiveSection";
import FAQSection from "@/components/sections/FAQSection";
import CTAFinalSection from "@/components/sections/CTAFinalSection";
import FooterSection from "@/components/sections/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen">
    <NexusNavbar />
    <WhatsAppFloat />
    <HeroSection />
    <IntroSection />
    <BenefitsSection />
    <SocialProofSection />
    <GuaranteeSection />
    <AnchorSection />
    <DeepDiveSection />
    <FAQSection />
    <CTAFinalSection />
    <FooterSection />
  </div>
);

export default Index;
