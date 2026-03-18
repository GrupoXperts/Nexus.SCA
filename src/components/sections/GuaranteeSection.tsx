import { motion } from "framer-motion";
import { ShieldCheck, XCircle } from "lucide-react";

const GuaranteeSection = () => (
  <section id="garantia" className="py-20 bg-section-light">
    <div className="container mx-auto px-4 max-w-4xl space-y-12">
      {/* Garantía */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-background rounded-2xl p-8 border-2 border-accent/30 text-center"
      >
        <ShieldCheck className="w-14 h-14 text-accent mx-auto mb-4" />
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
          Garantía de Resultados Operativos
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
          Si nuestro sistema no cumple con las métricas de reducción de incidentes o tiempo de respuesta acordadas en su auditoría, trabajamos con usted hasta lograrlo. Su inversión está blindada por nuestra promesa de eficiencia.
        </p>
      </motion.div>

      {/* A quién NO es para */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="bg-background rounded-2xl p-8 border border-destructive/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="w-7 h-7 text-destructive" />
          <h3 className="font-heading font-bold text-xl text-foreground">Este sistema NO es para:</h3>
        </div>
        <ul className="space-y-2 text-muted-foreground font-body">
          <li>• Quienes buscan soluciones temporales de bajo costo (candados tradicionales).</li>
          <li>• Quienes no están dispuestos a digitalizar sus procesos.</li>
          <li>• Instalaciones que no consideran la seguridad como una prioridad estratégica.</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
