import React from 'react';
import SectionTitle from './SectionTitle';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="empresa" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">

          {/* Image Grid */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-living-orange/20 z-0 rounded-sm"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-32 md:h-32 border-4 border-living-beige/30 z-0 rounded-sm"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {/* First Image with decorative frame */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-living-orange/20 to-transparent rounded-sm transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                <img
                  src="/fotos/Trabajando2.png"
                  alt="Equipo técnico de LIVING S.A.S. realizando mantenimiento de redes eléctricas energizadas en campo en Colombia"
                  className="w-full h-56 md:h-64 object-cover rounded-sm shadow-xl border-4 border-white relative z-10 group-hover:shadow-2xl transition-shadow"
                  loading="lazy"
                />
              </div>

              {/* Second Image with decorative frame */}
              <div className="relative group sm:mt-8">
                <div className="absolute inset-0 bg-gradient-to-br from-living-yellow/20 to-transparent rounded-sm transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                <img
                  src="/fotos/Trabajando.png"
                  alt="Ingeniero eléctrico de LIVING realizando inspección técnica especializada en infraestructura de media y alta tensión"
                  className="w-full h-56 md:h-64 object-cover rounded-sm shadow-xl border-4 border-white relative z-10 group-hover:shadow-2xl transition-shadow"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <SectionTitle subtitle="Nuestra Empresa" title="Sobre nosotros:" align="left" />

            <p className="text-base md:text-lg text-living-slate mb-6 font-medium">
              <span className="text-living-orange font-bold">Línea Viva Ingenieros S.A.S.</span> es una empresa colombiana fundada en 1997, especializada en servicios de ingeniería eléctrica, obras civiles, automatización electrónica, telecomunicaciones e intervención en sistemas avanzados.
            </p>

            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
              Contamos con personal altamente calificado, tecnología especializada y una sólida trayectoria en el sector eléctrico, brindando soluciones seguras, confiables y eficientes a nuestros clientes.
            </p>

            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
              Disponemos de personal técnico y profesional altamente capacitado, maquinaria especializada, equipos certificados y herramientas adecuadas para la ejecución segura y eficiente de trabajos en redes eléctricas energizadas y desenergizadas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-4 border-living-beige pl-4">
                <h4 className="font-display font-bold text-living-brown text-base md:text-lg uppercase mb-1">Especialidad</h4>
                <p className="text-xs md:text-sm text-gray-500">Redes aéreas y subterráneas Media y Alta Tensión, Ensayos especializados.</p>
              </div>
              <div className="border-l-4 border-living-darkOrange pl-4">
                <h4 className="font-display font-bold text-living-brown text-base md:text-lg uppercase mb-1">Compromiso</h4>
                <p className="text-xs md:text-sm text-gray-500">Seguridad, calidad y confianza en cada proyecto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;