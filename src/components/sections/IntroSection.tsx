import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const IntroSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <p className="text-lg leading-8 text-muted-foreground font-body">
          Usted sabe lo que se siente: la duda constante de si todas las puertas quedaron cerradas, la frustración de no saber quién entró tras un incidente y el riesgo de que una llave perdida se convierta en una invitación abierta al peligro. Los guardias fallan, las bitácoras manuales se pierden y las llaves se clonan. Es momento de dejar de reaccionar ante las crisis y empezar a gestionarlas antes de que ocurran.
        </p>

        <div className="flex items-start gap-4 p-6 rounded-xl border border-accent/30 bg-accent/5">
          <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-1">
              Seguridad Predictiva
            </h3>
            <p className="text-muted-foreground font-body">
              El mecanismo que detecta anomalías en tiempo real y garantiza un 99.9% de operatividad en sus puntos de acceso.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default IntroSection;
