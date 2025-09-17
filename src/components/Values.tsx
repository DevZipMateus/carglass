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
    <section id="values" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos valores</h2>
          <p className="section-subtitle">
            Os pilares que orientam nossa conduta e definem nossa excelência no atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.slice(0, 3).map((value, index) => (
            <div key={index} className="service-card text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-automotive-black mb-4 flex items-center justify-center">
                <span className="mr-2">✨</span>
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {values.slice(3).map((value, index) => (
            <div key={index + 3} className="service-card text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-automotive-black mb-4 flex items-center justify-center">
                <span className="mr-2">✨</span>
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Experimente a diferença Carglass
          </h3>
          <p className="text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Nossos valores se refletem em cada atendimento. Descubra por que somos a 
            escolha de confiança para vidros automotivos na região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5551984065484"
              className="bg-white text-automotive-blue px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              Falar com especialista
            </a>
            <a
              href="tel:5551984065484"
              className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
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