import React from 'react';
import SectionTitle from './SectionTitle';
import { Network } from 'lucide-react';

const Clients: React.FC = () => {
  const clientLogos = [
    { id: 1, name: 'Acueducto', src: '/fotos/Clientes/AcueductoLogo.png' },
    { id: 2, name: 'Alcaldía Mayor', src: '/fotos/Clientes/AlcaldiamayorLogo.png' },
    { id: 3, name: 'Dispac', src: '/fotos/Clientes/DispacLogo.png' },
    { id: 4, name: 'EBSA', src: '/fotos/Clientes/EBSALOGO.png' },
    { id: 5, name: 'Ecopetrol', src: '/fotos/Clientes/EcopetrolLogo.png' },
    { id: 6, name: 'Enel Codensa', src: '/fotos/Clientes/EnelCodensaLogo.png' },
    { id: 7, name: 'Frontera Energy', src: '/fotos/Clientes/FRONTERAENERGYLOGO.png' },
    { id: 8, name: 'Grupo Energía', src: '/fotos/Clientes/GrupoenergiaLogo.png' },
    { id: 9, name: 'OXY', src: '/fotos/Clientes/OXYLOGO.png' },
    { id: 10, name: 'Petroeléctrica', src: '/fotos/Clientes/PetroelectricaLogo.png' },
    { id: 11, name: 'Schneider', src: '/fotos/Clientes/SchneiderLogo.png' },
    { id: 12, name: 'Parex', src: '/fotos/Clientes/ParexLogo.png' },
    { id: 13, name: 'Gran Tierra Energy', src: '/fotos/Clientes/grantierraenergyLogo.png' },
    { id: 14, name: 'Mansarovar', src: '/fotos/Clientes/MansarovarLogo.png' },
    { id: 15, name: 'Geopark', src: '/fotos/Clientes/GeoparkLogo.png' },
    { id: 16, name: 'Sierracol', src: '/fotos/Clientes/SierracolLogo.png' }
  ];

  return (
    <section id="clientes" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Network className="text-living-orange mb-4" size={40} />
          <SectionTitle
            subtitle="Nuestros Clientes"
            title="Aliados Estratégicos del Sector Energético"
          />
          <p className="max-w-2xl text-center text-gray-600 -mt-8 mb-8">
            Hemos construido relaciones sólidas con los líderes del sector energético e industrial a nivel nacional.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="group relative bg-white p-6 md:p-8 rounded-sm border-2 border-gray-100 hover:border-living-orange transition-all duration-300 hover:shadow-xl flex items-center justify-center min-h-[120px] md:min-h-[140px]"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-living-orange/0 border-r-living-orange/0 group-hover:border-t-living-orange/10 group-hover:border-r-living-orange/10 transition-all duration-300"></div>

              <img
                src={client.src}
                alt={`Logo de ${client.name} - Cliente de LIVING S.A.S. en servicios de ingeniería eléctrica y mantenimiento de redes en Colombia`}
                className="max-w-full max-h-[80px] md:max-h-[100px] w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-living-orange/0 group-hover:bg-living-orange/5 transition-colors duration-300 rounded-sm pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 italic">
            Confianza construida proyecto a proyecto
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;