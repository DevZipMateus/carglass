import { Shield, Eye, Heart, Lightbulb, Users } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Qualidade",
      description: "Trabalhamos com produtos e serviços de alto padrão, garantindo durabilidade e confiabilidade."
    },
    {
      icon: Eye,
      title: "Segurança",
      description: "Cuidamos de cada detalhe pensando na proteção e tranquilidade dos nossos clientes."
    },
    {
      icon: Heart,
      title: "Transparência",
      description: "Construímos relações baseadas na confiança, honestidade e respeito mútuo."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Busca constante por novas soluções, tecnologias e melhorias nos nossos serviços."
    },
    {
      icon: Users,
      title: "Valorização das pessoas",
      description: "Clientes e colaboradores são a base do nosso sucesso e crescimento sustentável."
    }
  ];

  return (
    <section id="values" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">Nossos valores</h2>
          <p className="section-subtitle text-base sm:text-lg">
            Os pilares que orientam nossa conduta e definem nossa excelência no atendimento
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.slice(0, 3).map((value, index) => (
            <div key={index} className="service-card text-center group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-automotive-black mb-3 sm:mb-4 flex items-center justify-center">
                <span className="mr-2">✨</span>
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-4xl mx-auto">
          {values.slice(3).map((value, index) => (
            <div key={index + 3} className="service-card text-center group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-automotive-black mb-3 sm:mb-4 flex items-center justify-center">
                <span className="mr-2">✨</span>
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
            Experimente a diferença Carglass
          </h3>
          <p className="text-white/90 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
            Nossos valores se refletem em cada atendimento. Descubra por que somos a 
            escolha de confiança para vidros automotivos na região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5551984065484"
              className="bg-white text-automotive-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Falar com especialista
            </a>
            <a
              href="tel:5551984065484"
              className="bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
            >
              (51) 98406-5484
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;