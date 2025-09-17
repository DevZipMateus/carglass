import { Calendar, Award, Users, Wrench } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">Sobre a Carglass</h2>
          <p className="section-subtitle text-base sm:text-lg">
            Desde 2018 construindo uma trajetória marcada pelo profissionalismo e compromisso com nossos clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-automotive-black mb-4 sm:mb-6">
              Nossa história
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              A Carglass Vidros Automotivos nasceu em 2018 com o objetivo de oferecer segurança, 
              qualidade e confiança em serviços de vidros automotivos. Desde então, construímos 
              uma trajetória marcada pelo profissionalismo e pelo compromisso em atender cada 
              cliente de forma ágil e personalizada.
            </p>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Inovamos no mercado oferecendo atendimento domiciliar, no conforto do seu trabalho 
              ou casa, sem a necessidade de deslocar-se à loja, evitando trânsito e ter que aguardar 
              por horas a finalização da instalação.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Somos especialistas na instalação, manutenção e substituição de vidros automotivos, 
              sempre utilizando produtos de alta qualidade e mão de obra qualificada, garantindo 
              a tranquilidade e a proteção de quem confia em nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="service-card text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2 text-sm sm:text-base">Desde 2018</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Anos de experiência no mercado automotivo
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2 text-sm sm:text-base">Qualidade</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Produtos de alta qualidade e durabilidade
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2 text-sm sm:text-base">Atendimento</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Personalizado e focado no cliente
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2 text-sm sm:text-base">Expertise</h4>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Mão de obra qualificada e especializada
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Nossa Missão</h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Oferecer soluções em vidros automotivos com excelência, segurança e 
                confiabilidade, sempre priorizando a satisfação do cliente.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Nossa Visão</h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Ser referência em vidros automotivos na região, reconhecida pela qualidade, 
                inovação e relacionamento de confiança com clientes e parceiros.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Diferencial</h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Atendimento domiciliar que oferece comodidade, agilidade e economia de tempo, 
                sem comprometer a qualidade do serviço.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;