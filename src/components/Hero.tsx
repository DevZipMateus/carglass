import { Shield, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Profissionais da Carglass instalando para-brisa automotivo" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-automotive-blue/90 via-automotive-blue/70 to-automotive-blue-dark/90"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Carglass Vidros Automotivos
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 text-white/90 font-light leading-relaxed">
              Especialista em vidros automotivos desde 2018, oferecendo segurança, qualidade e confiança em serviços de instalação, manutenção e substituição com atendimento personalizado onde você estiver.
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3 bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                  <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">Segurança</div>
                  <div className="text-white/80 text-xs sm:text-sm">Garantida</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                  <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">Atendimento</div>
                  <div className="text-white/80 text-xs sm:text-sm">Rápido</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">Atendimento</div>
                  <div className="text-white/80 text-xs sm:text-sm">Domiciliar</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5551984065484"
                className="hero-button text-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
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
                className="bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
              >
                Conhecer serviços
              </button>
            </div>
          </div>

          <div className="relative lg:flex lg:justify-center mt-8 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 max-w-md mx-auto lg:mx-0">
              <div className="text-center text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Atendimento personalizado</h3>
                <p className="text-white/90 mb-6 leading-relaxed text-sm sm:text-base">
                  Vamos até você! Não perca tempo no trânsito ou esperando na oficina. 
                  Nosso atendimento domiciliar oferece comodidade e agilidade.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90 text-sm sm:text-base">Instalação no local</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90 text-sm sm:text-base">Todas as marcas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90 text-sm sm:text-base">Mão de obra qualificada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90 text-sm sm:text-base">Produtos de qualidade</span>
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