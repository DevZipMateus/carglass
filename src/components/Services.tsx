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
      features: ["Vidros originais", "Instalação profissional", "Teste de qualidade"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos serviços</h2>
          <p className="section-subtitle">
            Especialistas em vidros automotivos com atendimento personalizado onde você estiver
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-automotive-black mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-automotive-blue flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-automotive-black mb-4">
              Como funciona nosso atendimento
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Processo simples e eficiente para garantir sua comodidade e a qualidade do serviço
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2">1. Entre em contato</h4>
              <p className="text-muted-foreground text-sm">
                Ligue ou envie mensagem via WhatsApp para solicitar seu orçamento
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2">2. Agendamento</h4>
              <p className="text-muted-foreground text-sm">
                Escolha o melhor horário e local para o atendimento
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Car className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2">3. Atendimento</h4>
              <p className="text-muted-foreground text-sm">
                Nossa equipe vai até você com todo equipamento necessário
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2">4. Finalização</h4>
              <p className="text-muted-foreground text-sm">
                Serviço executado com qualidade e garantia assegurada
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/5551984065484"
              className="hero-button inline-block"
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