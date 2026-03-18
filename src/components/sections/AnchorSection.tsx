import { motion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";

const AnchorSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-5xl space-y-16">
      {/* Bono */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-accent/5 border-2 border-accent/40 rounded-2xl p-8 overflow-hidden"
      >
        <div className="absolute top-4 right-4 bg-cta text-cta-foreground font-heading font-bold text-xs uppercase px-3 py-1 rounded-full">
          🎁 Gratis
        </div>
        <Gift className="w-10 h-10 text-accent mb-4" />
        <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
          BONO: Auditoría de Seguridad Express
        </h3>
        <p className="text-sm text-muted-foreground mb-1 font-body">Valorado en $500 USD</p>
        <p className="text-muted-foreground font-body leading-relaxed">
          Realizamos un diagnóstico profundo de su infraestructura actual para identificar vulnerabilidades críticas y definir su ruta de automatización hoy mismo.
        </p>
      </motion.div>

      {/* Antes vs Después */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading font-bold text-3xl text-center text-foreground mb-10">
          De Gasto Recurrente a Inversión Inteligente
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <h4 className="font-heading font-bold text-lg text-destructive mb-3">❌ Antes (Gasto)</h4>
            <ul className="space-y-2 text-muted-foreground text-sm font-body">
              <li>• Cambios constantes de cerraduras</li>
              <li>• Guardias con fallas humanas</li>
              <li>• Bitácoras manuales que se pierden</li>
              <li>• Llaves clonables y sin control</li>
            </ul>
          </div>
          <div className="bg-accent/5 border border-accent/30 rounded-xl p-6">
            <h4 className="font-heading font-bold text-lg text-accent mb-3">✅ Después (Inversión)</h4>
            <ul className="space-y-2 text-muted-foreground text-sm font-body">
              <li>• Acceso digital sin llaves físicas</li>
              <li>• Monitoreo automático 24/7</li>
              <li>• Auditoría en tiempo real</li>
              <li>• ROI medible en reducción de incidentes</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AnchorSection;
