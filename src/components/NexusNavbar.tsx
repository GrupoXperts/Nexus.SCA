import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NexusNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-accent/20">
      {/* Urgency banner */}
      <div className="bg-cta text-cta-foreground text-center py-1.5 text-sm font-heading font-semibold tracking-wide">
        ⚡ Cupos Limitados: Solo 3 auditorías disponibles este mes
      </div>

      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
          <Shield className="w-7 h-7 text-accent" />
          <span className="font-heading font-bold text-xl text-primary-foreground tracking-tight">
            NEXUS <span className="text-accent">PROTECT</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Beneficios", id: "beneficios" },
            { label: "Cómo Funciona", id: "deep-dive" },
            { label: "Garantía", id: "garantia" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-body"
            >
              {item.label}
            </button>
          ))}
          <Button variant="cta" size="lg" onClick={() => scrollTo("cta-final")}>
            Solicitar Auditoría
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-secondary border-t border-accent/20 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {[
                { label: "Beneficios", id: "beneficios" },
                { label: "Cómo Funciona", id: "deep-dive" },
                { label: "Garantía", id: "garantia" },
                { label: "FAQ", id: "faq" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-primary-foreground/70 hover:text-accent py-2 font-body"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="cta" size="lg" onClick={() => scrollTo("cta-final")} className="mt-2">
                Solicitar Auditoría
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NexusNavbar;
