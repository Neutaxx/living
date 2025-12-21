import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

          {/* Misión */}
          <div className="bg-white p-6 md:p-10 rounded-sm shadow-sm border-t-4 border-living-orange hover:shadow-xl transition-shadow duration-300 group">
            <div className="bg-living-orange/10 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-living-orange transition-colors duration-300">
              <Target className="text-living-orange group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-living-slate mb-4 uppercase">Misión</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed italic border-l-2 border-gray-200 pl-4">
              "Proporcionar servicios eléctricos de alto desempeño, gestionando riesgos con precisión y ejecutando proyectos en media y alta tensión con tecnología innovadora, equipos especializados y talento ético y ágil, para asegurar la continuidad del negocio y seguridad de las operaciones de nuestros clientes."
            </p>
          </div>

          {/* Visión */}
          <div className="bg-living-slate p-6 md:p-10 rounded-sm shadow-sm border-t-4 border-living-yellow hover:shadow-xl transition-shadow duration-300 group">
            <div className="bg-living-yellow/20 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-living-yellow transition-colors duration-300">
              <Eye className="text-living-yellow group-hover:text-living-slate" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 uppercase">Visión</h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed italic border-l-2 border-gray-600 pl-4">
              "Ser la organización más diferenciada y confiable en el ámbito eléctrico, impulsada por la pasión de hacer lo extraordinario, sobresalir por nuestra gestión rigurosa del riesgo y cumplir de manera impecable lo que prometemos."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;