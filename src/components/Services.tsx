import { Car, Shield, Wrench, Clock, CheckCircle2, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Instalação de vidros",
      description: "Instalação completa de para-brisas, vidros laterais e traseiros para todas as marcas e modelos de veículos.",
      features: ["Todas as marcas", "Atendimento domiciliar", "Garantia de qualidade"]
    },
    {
      icon: Wrench,
      title: "Manutenção preventiva",
      description: "Verificação e manutenção dos vidros do seu veículo para garantir segurança e durabilidade.",
      features: ["Inspeção completa", "Reparo de pequenos danos", "Orientação técnica"]
    },
    {
      icon: Shield,
      title: "Substituição de vidros",
      description: "Troca rápida e segura de vidros danificados, utilizando produtos de alta qualidade.",
      features: ["Vidros de primeira linha", "Instalação profissional", "Teste de qualidade"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">Nossos serviços</h2>
          <p className="section-subtitle text-base sm:text-lg">
            Especialistas em vidros automotivos com atendimento personalizado onde você estiver
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-automotive-black mb-3 sm:mb-4 text-center sm:text-left">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base text-center sm:text-left">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 justify-center sm:justify-start">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-automotive-blue flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-card rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 border border-border">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-automotive-black mb-4">
              Como funciona nosso atendimento
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Processo simples e eficiente para garantir sua comodidade e a qualidade do serviço
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2 text-sm sm:text-base">1. Entre em contato</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Ligue ou envie mensagem via WhatsApp para solicitar seu orçamento
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2 text-sm sm:text-base">2. Agendamento</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Escolha o melhor horário e local para o atendimento
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Car className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2 text-sm sm:text-base">3. Atendimento</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Nossa equipe vai até você com todo equipamento necessário
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2 text-sm sm:text-base">4. Finalização</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Serviço executado com qualidade e garantia assegurada
              </p>
            </div>
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <a
              href="https://wa.me/5551984065484"
              className="hero-button inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
            >
              Solicitar atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;