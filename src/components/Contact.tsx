import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender você com a qualidade e agilidade que você merece
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-automotive-black mb-6">
                Fale conosco
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Entre em contato através de qualquer um dos canais abaixo. Nosso atendimento 
                é personalizado e estamos sempre prontos para oferecer as melhores soluções 
                em vidros automotivos.
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5551984065484"
                className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover:shadow-glass transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-black">WhatsApp</h4>
                  <p className="text-muted-foreground">(51) 98406-5484</p>
                  <p className="text-sm text-green-600">Resposta rápida garantida</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:5551984065484"
                className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover:shadow-glass transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-automotive-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-black">Telefone</h4>
                  <p className="text-muted-foreground">(51) 98406-5484</p>
                  <p className="text-sm text-automotive-blue">Atendimento direto</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:fabiocantoferreira@gmail.com"
                className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover:shadow-glass transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-automotive-blue-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-black">E-mail</h4>
                  <p className="text-muted-foreground">fabiocantoferreira@gmail.com</p>
                  <p className="text-sm text-automotive-blue-light">Orçamentos por e-mail</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl">
                <div className="w-14 h-14 bg-automotive-black rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-black">Endereço</h4>
                  <p className="text-muted-foreground">Rua da República, 510</p>
                  <p className="text-sm text-automotive-black">Atendimento domiciliar disponível</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl">
                <div className="w-14 h-14 bg-automotive-blue-dark rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-black">Horário de funcionamento</h4>
                  <p className="text-muted-foreground">Segunda a sábado</p>
                  <p className="text-sm text-automotive-blue-dark">8h às 18h</p>
                </div>
              </div>

              {/* Social Media */}
              <a
                href="https://instagram.com/carglass_vidros_automotivos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover:shadow-glass transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-black">Instagram</h4>
                  <p className="text-muted-foreground">@carglass_vidros_automotivos</p>
                  <p className="text-sm text-purple-600">Acompanhe nosso trabalho</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-automotive-black mb-6">
              Solicite seu orçamento
            </h3>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário abaixo e entraremos em contato rapidamente para 
              oferecer o melhor orçamento para seu veículo.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-automotive-black mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-automotive-blue focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-automotive-black mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-automotive-blue focus:border-transparent"
                    placeholder="(51) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-automotive-black mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-automotive-blue focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-automotive-black mb-2">
                    Marca do veículo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-automotive-blue focus:border-transparent"
                    placeholder="Ex: Volkswagen"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-automotive-black mb-2">
                    Modelo e ano
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-automotive-blue focus:border-transparent"
                    placeholder="Ex: Gol 2020"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-automotive-black mb-2">
                  Tipo de serviço
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-automotive-blue focus:border-transparent">
                  <option>Selecione o serviço</option>
                  <option>Instalação de para-brisa</option>
                  <option>Instalação de vidro lateral</option>
                  <option>Instalação de vidro traseiro</option>
                  <option>Reparo de vidro</option>
                  <option>Manutenção preventiva</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-automotive-black mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-automotive-blue focus:border-transparent resize-none"
                  placeholder="Descreva sua necessidade ou dúvida..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={() => {
                  // Redirect to WhatsApp with pre-filled message
                  window.open('https://wa.me/5551984065484?text=Olá! Gostaria de solicitar um orçamento para vidros automotivos.', '_blank');
                }}
                className="w-full hero-button text-center"
              >
                Enviar solicitação via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;