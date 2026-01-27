import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const MissionVision: React.FC = () => {
  const values = [
    { name: 'Ética', description: 'Valor supremo que rige la conducta de todo ser humano' },
    { name: 'Lealtad', description: 'Confianza depositada en cada ser' },
    { name: 'Confianza', description: 'Fe depositada en cada persona' },
    { name: 'Autenticidad', description: 'Manifestación espontánea de la conducta' },
    { name: 'Honestidad', description: 'Virtud que refleja integridad y justicia personal' },
    { name: 'Colaboración', description: 'Disposición en querer realizar actividades en equipo' },
    { name: 'Respeto', description: 'Valorar a cada persona en todos sus aspectos' },
    { name: 'Compromiso', description: 'Disposición auténtica y profunda hacia objetivos' },
    { name: 'Proactividad', description: 'Actitud que acompaña a las personas para actuar' },
    { name: 'Productividad', description: 'Capacidad de llevar a cabo ideas originales' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-16">

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

        {/* Company Values Section */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Heart className="text-living-orange" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-living-slate mb-3 uppercase">
              Valores Corporativos
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Línea Viva Ingenieros S.A.S. reconoce la importancia de la identidad y cultura corporativa que identifica a la organización.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-sm border-2 border-gray-100 hover:border-living-orange transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-living-orange/10 flex items-center justify-center group-hover:bg-living-orange transition-colors">
                    <span className="text-living-orange group-hover:text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <h4 className="font-display font-bold text-living-slate text-center mb-2 text-base group-hover:text-living-orange transition-colors">
                  {value.name}
                </h4>
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;