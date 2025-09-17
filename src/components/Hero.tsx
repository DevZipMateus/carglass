import { Shield, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-gradient-to-br from-automotive-blue to-automotive-blue-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 scale-150"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Carglass Vidros Automotivos
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed">
              Especialista em vidros automotivos desde 2018, oferecendo segurança, qualidade e confiança em serviços de instalação, manutenção e substituição com atendimento personalizado onde você estiver.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Segurança</div>
                  <div className="text-white/80 text-sm">Garantida</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Atendimento</div>
                  <div className="text-white/80 text-sm">Rápido</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Atendimento</div>
                  <div className="text-white/80 text-sm">Domiciliar</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5551984065484"
                className="hero-button text-center"
              >
                Solicitar orçamento
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.offsetTop - headerOffset;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: "smooth"
                    });
                  }
                }}
                className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Conhecer serviços
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-glass-shimmer to-white/20 p-8 rounded-2xl backdrop-blur-sm border border-white/30">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Atendimento personalizado</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Vamos até você! Não perca tempo no trânsito ou esperando na oficina. 
                  Nosso atendimento domiciliar oferece comodidade e agilidade.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Instalação no local</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Todas as marcas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Mão de obra qualificada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Produtos de qualidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;