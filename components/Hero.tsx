import React from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-living-slate overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Ingeniería Eléctrica Alta Tensión"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-living-slate via-living-slate/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-living-lightSlate/50 border border-living-orange/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-living-yellow animate-pulse"></span>
            <span className="text-living-orange text-xs font-bold tracking-widest uppercase">Líderes en Alta Tensión y Línea Viva</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Energía segura, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-living-orange to-living-yellow">
              Soluciones ágiles
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl border-l-4 border-living-orange pl-4">
            Especialistas en ingeniería eléctrica de alta potencia y mantenimiento de redes energizadas.
            Garantizamos la continuidad operativa con precisión técnica y estándares rigurosos de seguridad.
          </p>

          <div className="flex flex-col gap-4">
            <a href="#servicios" className="inline-flex items-center justify-center bg-living-darkOrange hover:bg-living-orange text-white font-bold py-4 px-6 md:px-8 rounded-sm transition-all group">
              Conoce nuestros servicios
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacto" className="inline-flex items-center justify-center border-2 border-living-brown text-white hover:border-living-beige hover:text-living-beige font-bold py-4 px-6 md:px-8 rounded-sm transition-colors">
              <ShieldCheck className="mr-2" size={20} />
              Solicitar asesoría técnica
            </a>
          </div>

          {/* Stats / Indicators */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 border-t border-gray-700 pt-8">
            <div className="text-center sm:text-left">
              <span className="block text-3xl md:text-4xl font-display font-bold text-white">+15</span>
              <span className="text-xs text-living-beige uppercase tracking-wider">Años de Trayectoria</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="block text-3xl md:text-4xl font-display font-bold text-white">100%</span>
              <span className="text-xs text-living-beige uppercase tracking-wider">Seguridad Garantizada</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="block text-3xl md:text-4xl font-display font-bold text-white">24/7</span>
              <span className="text-xs text-living-beige uppercase tracking-wider">Disponibilidad Técnica</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full border-l border-white/5 skew-x-12 hidden md:block pointer-events-none"></div>
      <div className="absolute right-20 bottom-0 w-px h-1/2 bg-gradient-to-t from-living-orange to-transparent hidden md:block"></div>
    </section>
  );
};

export default Hero;