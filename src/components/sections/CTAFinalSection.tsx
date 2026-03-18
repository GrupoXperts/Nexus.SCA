import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Phone, MessageCircle } from "lucide-react";

const CTAFinalSection = () => (
  <section id="cta-final" className="py-24 bg-section-dark text-primary-foreground relative overflow-hidden">
    {/* Decorative glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <Shield className="w-16 h-16 text-accent mx-auto" />
        <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight">
          No espere a que ocurra un incidente para darse cuenta de que su seguridad era vulnerable.
        </h2>
        <p className="text-primary-foreground/60 font-body text-lg max-w-xl mx-auto">
          Proteja a su gente, sus bienes y su tranquilidad con Nexus Protect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="lg" className="text-base px-10 py-6">
            Solicitar Mi Auditoría y Cotización Ahora
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-10 py-6">
            Asegurar Mi Infraestructura Hoy
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTAFinalSection;
