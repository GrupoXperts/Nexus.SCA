import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const SocialProofSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-card rounded-2xl p-8 md:p-12 border border-border"
      >
        <Quote className="w-10 h-10 text-accent/30 absolute top-6 left-6" />
        <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-body italic pl-8">
          "Desde que implementamos Nexus, el control de nuestro edificio residencial cambió por completo. Ahora sabemos exactamente quién entra y la sensación de inseguridad desapareció."
        </blockquote>
        <p className="mt-6 text-sm text-muted-foreground font-heading font-semibold pl-8">
          — Administrador de Edificio Comercial
        </p>
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
