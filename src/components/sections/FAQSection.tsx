import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "¿La instalación interrumpirá mi operación?",
    a: "No, nuestro proceso está diseñado para implementaciones modulares sin frenar su flujo diario.",
  },
  {
    q: "¿Qué pasa si se va la luz?",
    a: "El sistema cuenta con respaldos de energía y protocolos de apertura de emergencia certificados.",
  },
  {
    q: "¿Es muy caro comparado con llaves?",
    a: "A largo plazo es más económico, ya que elimina el mantenimiento constante y las pérdidas por brechas de seguridad.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-section-light">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-3xl text-center text-foreground mb-10"
      >
        Preguntas Frecuentes
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border border-border px-6">
              <AccordionTrigger className="font-heading font-semibold text-foreground hover:text-accent">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
