import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nexus.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Tecnología de acceso inteligente Nexus Protect" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6"
        >
          Blindaje Total:{" "}
          <span className="text-gradient-cyan">
            Tome el control absoluto
          </span>{" "}
          de sus accesos y elimine el riesgo humano en su seguridad física.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed font-body"
        >
          Implemente el Ecosistema de Seguridad Inteligente 2026: Trazabilidad digital en tiempo real, auditoría automática y protección proactiva para su infraestructura, sin las fallas de los sistemas tradicionales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="cta" size="lg" className="text-base px-10 py-6" onClick={() => scrollTo("cta-final")}>
            Solicitar Mi Auditoría Ahora
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-10 py-6" onClick={() => scrollTo("beneficios")}>
            Ver Beneficios
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
