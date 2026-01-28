import React from 'react';
import SectionTitle from './SectionTitle';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Nuestros Servicios"
          title="Especialidades Técnicas de Alto Nivel"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            // Determine if it's the "Complementary" service to span full width on last row if odd
            const isLast = index === SERVICES.length - 1;

            return (
              <div
                key={service.id}
                className={`group bg-gray-50 border border-gray-100 hover:border-living-orange/30 p-6 md:p-8 rounded-sm transition-all duration-300 hover:shadow-lg ${isLast ? 'md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto' : ''}`}
              >
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="p-3 md:p-4 bg-white rounded-lg shadow-sm group-hover:bg-living-orange transition-colors duration-300">
                    <Icon size={28} className="text-living-darkOrange group-hover:text-white md:hidden" />
                    <Icon size={32} className="text-living-darkOrange group-hover:text-white hidden md:block" />
                  </div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-gray-100 group-hover:text-living-beige/30 transition-colors select-none">
                    {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-living-slate mb-3 group-hover:text-living-darkOrange transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 h-auto">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-living-yellow mt-1 flex-shrink-0" />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Beneficio: <span className="text-gray-700 normal-case font-medium">{service.benefit}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-16 bg-gradient-to-r from-living-darkOrange to-living-orange rounded-sm p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="mb-6 md:mb-0 max-w-2xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white mb-2">¿Requiere una solución técnica personalizada?</h3>
            <p className="text-sm md:text-base text-white/90">Nuestros ingenieros están listos para analizar la complejidad de su red y proponer el plan de mantenimiento más eficiente.</p>
          </div>
          <a href="#contacto" className="bg-white text-living-darkOrange hover:bg-living-slate hover:text-white font-bold py-3 px-8 rounded-sm transition-colors uppercase shadow-md whitespace-nowrap">
            Consultar con Experto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;