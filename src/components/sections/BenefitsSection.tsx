import { motion } from "framer-motion";
import { Smartphone, KeyRound, BellRing, TrendingDown } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Control Total desde su Celular",
    description: "Gestione permisos y audite ingresos de forma remota, sin importar dónde se encuentre.",
  },
  {
    icon: KeyRound,
    title: "Adiós a las Llaves Físicas",
    description: "Elimine costos por cambios de cerraduras y el riesgo de clonación de tarjetas.",
  },
  {
    icon: BellRing,
    title: "Paz Mental Garantizada",
    description: "Reciba alertas instantáneas ante comportamientos inusuales o accesos no autorizados.",
  },
  {
    icon: TrendingDown,
    title: "Eficiencia Operativa",
    description: "Reduzca costos a largo plazo automatizando reportes de asistencia y flujos de personas.",
  },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-20 bg-section-light">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        Beneficios que Transforman su Seguridad
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-background rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <b.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
