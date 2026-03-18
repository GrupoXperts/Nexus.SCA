import { motion } from "framer-motion";
import { ScanFace, ShieldAlert, BellRing } from "lucide-react";

const steps = [
  {
    icon: ScanFace,
    step: "01",
    title: "Detección de Patrones",
    description: "El sistema analiza cada acceso y aprende los patrones normales de comportamiento de su edificio.",
  },
  {
    icon: ShieldAlert,
    step: "02",
    title: "Anomalía Identificada",
    description: "Si una tarjeta se usa en dos puntos geográficamente imposibles en un lapso corto, el sistema lo detecta.",
  },
  {
    icon: BellRing,
    step: "03",
    title: "Bloqueo y Alerta",
    description: "Se bloquea el acceso automáticamente y se alerta a su equipo de seguridad en tiempo real.",
  },
];

const DeepDiveSection = () => (
  <section id="deep-dive" className="py-20 bg-section-dark text-primary-foreground">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Seguridad Basada en Comportamiento
        </h2>
        <p className="text-primary-foreground/60 font-body max-w-2xl mx-auto">
          Nuestro mecanismo único no solo cierra puertas; analiza patrones. Eso es tecnología 2026 aplicada a su tranquilidad.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4 glow-accent">
              <s.icon className="w-8 h-8 text-accent" />
            </div>
            <span className="text-accent font-heading font-bold text-sm tracking-widest">{s.step}</span>
            <h3 className="font-heading font-bold text-xl mt-2 mb-2">{s.title}</h3>
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DeepDiveSection;
