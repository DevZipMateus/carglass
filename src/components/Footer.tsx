import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-automotive-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo-carglass.png" 
                alt="Carglass Vidros Automotivos" 
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              Especialista em vidros automotivos desde 2018. Oferecemos segurança, 
              qualidade e confiança em serviços de instalação, manutenção e 
              substituição com atendimento domiciliar.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5551984065484"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/carglass_vidros_automotivos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Serviços</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <span className="text-white/80 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">
                  Instalação de para-brisas
                </span>
              </li>
              <li>
                <span className="text-white/80 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">
                  Vidros laterais
                </span>
              </li>
              <li>
                <span className="text-white/80 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">
                  Vidros traseiros
                </span>
              </li>
              <li>
                <span className="text-white/80 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">
                  Manutenção preventiva
                </span>
              </li>
              <li>
                <span className="text-white/80 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">
                  Atendimento domiciliar
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/60 flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base">(51) 98406-5484</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-xs sm:text-sm break-all">fabiocantoferreira@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm sm:text-base">Rua da República, 510</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm sm:text-base">Seg. a Sáb. 8h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
            © 2024 Carglass Vidros Automotivos. Todos os direitos reservados.
          </div>
          <div className="text-white/60 text-xs sm:text-sm">
            CNPJ: 91.520.667/0001-49
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;