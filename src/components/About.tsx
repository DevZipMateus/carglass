import { Calendar, Award, Users, Wrench } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Sobre a Carglass</h2>
          <p className="section-subtitle">
            Desde 2018 construindo uma trajetória marcada pelo profissionalismo e compromisso com nossos clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-automotive-black mb-6">
              Nossa história
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A Carglass Vidros Automotivos nasceu em 2018 com o objetivo de oferecer segurança, 
              qualidade e confiança em serviços de vidros automotivos. Desde então, construímos 
              uma trajetória marcada pelo profissionalismo e pelo compromisso em atender cada 
              cliente de forma ágil e personalizada.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Inovamos no mercado oferecendo atendimento domiciliar, no conforto do seu trabalho 
              ou casa, sem a necessidade de deslocar-se à loja, evitando trânsito e ter que aguardar 
              por horas a finalização da instalação.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Somos especialistas na instalação, manutenção e substituição de vidros automotivos, 
              sempre utilizando produtos de alta qualidade e mão de obra qualificada, garantindo 
              a tranquilidade e a proteção de quem confia em nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="service-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2">Desde 2018</h4>
              <p className="text-muted-foreground text-sm">
                Anos de experiência no mercado automotivo
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2">Qualidade</h4>
              <p className="text-muted-foreground text-sm">
                Produtos de alta qualidade e durabilidade
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2">Atendimento</h4>
              <p className="text-muted-foreground text-sm">
                Personalizado e focado no cliente
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-automotive-black mb-2">Expertise</h4>
              <p className="text-muted-foreground text-sm">
                Mão de obra qualificada e especializada
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-automotive-blue to-automotive-blue-light rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-white/90 leading-relaxed">
                Oferecer soluções em vidros automotivos com excelência, segurança e 
                confiabilidade, sempre priorizando a satisfação do cliente.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-white/90 leading-relaxed">
                Ser referência em vidros automotivos na região, reconhecida pela qualidade, 
                inovação e relacionamento de confiança com clientes e parceiros.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Diferencial</h3>
              <p className="text-white/90 leading-relaxed">
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