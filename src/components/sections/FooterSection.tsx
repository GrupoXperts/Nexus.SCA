import nexusLogo from "@/assets/logo-nexus.png";

const FooterSection = () => (
  <footer className="py-8 bg-secondary border-t border-accent/10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 bg-white/25 rounded-xl blur-md" />
          <img src={nexusLogo} alt="Nexus Protect" className="relative h-[42px] w-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
        </div>
      </div>
      <p className="text-xs text-primary-foreground/40 font-body">
        © 2026 Nexus Protect. Todos los derechos reservados. Seguridad Inteligente.
      </p>
    </div>
  </footer>
);

export default FooterSection;
