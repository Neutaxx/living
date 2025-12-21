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
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Panel de Control"
                  className="w-full h-56 md:h-64 object-cover rounded-sm shadow-xl border-4 border-white relative z-10 group-hover:shadow-2xl transition-shadow"
                />
              </div>

              {/* Second Image with decorative frame */}
              <div className="relative group sm:mt-8">
                <div className="absolute inset-0 bg-gradient-to-br from-living-yellow/20 to-transparent rounded-sm transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Panel de Control"
                  className="w-full h-56 md:h-64 object-cover rounded-sm shadow-xl border-4 border-white relative z-10 group-hover:shadow-2xl transition-shadow"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <SectionTitle subtitle="Nuestra Empresa" title="Ingeniería de vanguardia para la infraestructura eléctrica del mañana." align="left" />

            <p className="text-base md:text-lg text-living-slate mb-6 font-medium">
              <span className="text-living-orange font-bold">LIVING S.A.S.</span> es una compañía especializada en soluciones avanzadas para la construcción y mantenimiento de sistemas eléctricos en media y alta tensión, bajo estrictos protocolos de línea viva.
            </p>

            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
              Nuestra experiencia nos permite ejecutar proyectos de alta complejidad técnica donde la precisión y el manejo del riesgo son los pilares fundamentales. Entendemos que en el sector energético, cada segundo de continuidad cuenta.
            </p>

            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
              Contamos con un equipo humano de élite, certificado internacionalmente, y tecnología de punta para asegurar que los activos de nuestros clientes operen siempre a su máxima capacidad y bajo condiciones óptimas de seguridad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-4 border-living-beige pl-4">
                <h4 className="font-display font-bold text-living-brown text-base md:text-lg uppercase mb-1">Especialidad</h4>
                <p className="text-xs md:text-sm text-gray-500">Media y Alta Tensión, Línea Viva, Ensayos Especializados.</p>
              </div>
              <div className="border-l-4 border-living-darkOrange pl-4">
                <h4 className="font-display font-bold text-living-brown text-base md:text-lg uppercase mb-1">Compromiso</h4>
                <p className="text-xs md:text-sm text-gray-500">Cero accidentes y máxima eficiencia operativa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;