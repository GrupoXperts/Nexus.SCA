import { MessageCircle } from "lucide-react";

const PHONE = "573195992929";
const MESSAGE = "Hola, estoy interesado en los servicios de Nexus Protect.";

const WhatsAppFloat = () => (
  <a
    href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppFloat;
