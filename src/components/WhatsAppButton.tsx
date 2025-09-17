import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5551984065484"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>
  );
};

export default WhatsAppButton;