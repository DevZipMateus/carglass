import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/gallery/midia_1.jpg",
      alt: "Serviço de reparo de vidros quebrados - atendimento personalizado",
      title: "Vidro quebrado? Nós consertamos!"
    },
    {
      src: "/gallery/midia_2.jpg", 
      alt: "Antes e depois da instalação de para-brisa - qualidade garantida",
      title: "Antes e depois da instalação"
    },
    {
      src: "/gallery/midia_3.jpg",
      alt: "Estoque organizado de vidros automotivos de diversas marcas",
      title: "Estoque completo de vidros"
    },
    {
      src: "/gallery/midia_4.jpg",
      alt: "Variedade de vidros automotivos organizados e catalogados",
      title: "Vidros para todas as marcas"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos trabalhos</h2>
          <p className="section-subtitle">
            Veja alguns exemplos dos nossos serviços e nossa estrutura preparada para atender você
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-automotive-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-automotive-blue transition-colors p-2"
                aria-label="Fechar imagem"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Imagem ampliada dos trabalhos da Carglass"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5551984065484"
            className="hero-button"
          >
            Ver mais trabalhos no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;