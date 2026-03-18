import { Shield } from "lucide-react";

const FooterSection = () => (
  <footer className="py-8 bg-secondary border-t border-accent/10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-accent" />
        <span className="font-heading font-bold text-sm text-primary-foreground/70">
          NEXUS PROTECT
        </span>
      </div>
      <p className="text-xs text-primary-foreground/40 font-body">
        © 2026 Nexus Protect. Todos los derechos reservados. Seguridad Inteligente.
      </p>
    </div>
  </footer>
);

export default FooterSection;
