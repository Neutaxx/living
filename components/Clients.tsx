import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { CLIENTS } from '../constants';
import { Zap, ChevronRight, MapPin, Network } from 'lucide-react';

const Clients: React.FC = () => {
  const [activeClient, setActiveClient] = useState(CLIENTS[0]);

  return (
    <section id="clientes" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Network className="text-living-orange mb-4" size={40} />
          <SectionTitle 
            subtitle="Red de Confianza" 
            title="Aliados Estratégicos" 
          />
          <p className="max-w-2xl text-center text-gray-600 -mt-8 mb-8">
            Hemos construido relaciones sólidas con los líderes del sector energético e industrial a nivel nacional.
          </p>
        </div>

        {/* Interactive Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* The Network Grid (Left Side) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {CLIENTS.map((client) => (
              <button
                key={client.id}
                onClick={() => setActiveClient(client)}
                className={`relative group p-6 h-40 rounded-sm border-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer outline-none overflow-hidden
                  ${activeClient.id === client.id 
                    ? 'border-living-orange bg-white shadow-xl scale-105 z-10' 
                    : 'border-white bg-white hover:border-living-beige hover:shadow-md grayscale hover:grayscale-0'
                  }`}
              >
                {/* Connecting lines simulation (Pseudo-elements could do this but keeping it simple for React) */}
                {activeClient.id === client.id && (
                  <div className="absolute inset-0 border-4 border-living-orange/10 animate-pulse"></div>
                )}

                {/* Simulated Logo (Text for now as per constraints, styled to look logo-ish) */}
                <span className={`font-display font-bold text-xl uppercase tracking-wider mb-2 ${activeClient.id === client.id ? 'text-living-slate' : 'text-gray-400'}`}>
                  {client.logoPlaceholder}
                </span>
                
                <span className={`text-xs font-bold ${activeClient.id === client.id ? 'text-living-orange' : 'text-gray-400'}`}>
                  {client.name}
                </span>

                {/* Active Indicator */}
                {activeClient.id === client.id && (
                  <div className="absolute bottom-2 right-2">
                    <div className="w-2 h-2 bg-living-orange rounded-full animate-ping"></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* The Info Panel (Right Side) - "Monitor Screen" */}
          <div className="lg:col-span-5 relative">
            <div className="bg-living-slate text-white rounded-lg shadow-2xl overflow-hidden border border-living-lightSlate h-full min-h-[400px]">
              
              {/* Header of Panel */}
              <div className="bg-living-lightSlate p-4 flex justify-between items-center border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-living-orange uppercase tracking-widest animate-pulse">
                  Conexión Establecida
                </span>
              </div>

              {/* Body of Panel */}
              <div className="p-8 flex flex-col h-full relative">
                {/* Background circuit lines */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent)', backgroundSize: '50px 50px'}}></div>

                <div className="relative z-10">
                  <span className="text-living-orange font-bold text-xs uppercase tracking-widest mb-2 block">Detalles del Cliente</span>
                  <h3 className="text-4xl font-display font-bold mb-1">{activeClient.name}</h3>
                  <span className="inline-block bg-living-darkOrange px-2 py-1 text-xs font-bold rounded mb-6">
                    {activeClient.sector}
                  </span>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Zap className="text-living-yellow mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-sm uppercase text-gray-400 mb-1">Servicios Prestados</h4>
                        <p className="text-white text-lg leading-tight">{activeClient.serviceType}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="text-living-yellow mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-sm uppercase text-gray-400 mb-1">Impacto del Proyecto</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {activeClient.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <button className="flex items-center text-living-yellow hover:text-white transition-colors text-sm font-bold uppercase tracking-wider group">
                      Ver Ficha Técnica
                      <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-living-orange/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;