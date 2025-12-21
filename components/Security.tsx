import React from 'react';
import SectionTitle from './SectionTitle';
import { Shield, AlertTriangle, UserCheck, ShieldCheck } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <section id="seguridad" className="py-20 bg-living-lightSlate text-white relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <SectionTitle subtitle="Seguridad & Riesgo" title="Gestión Rigurosa: Tolerancia Cero al Riesgo." dark align="left" />

            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              En <span className="text-living-orange font-bold">LIVING S.A.S.</span>, la seguridad no es una opción, es nuestra cultura. Operamos bajo los más estrictos protocolos internacionales de maniobra en línea viva, asegurando la integridad de nuestro talento humano y la infraestructura de nuestros clientes.
            </p>

            <div className="space-y-6">
              <div className="flex gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-sm border-l-4 border-living-darkOrange">
                <Shield className="text-living-darkOrange flex-shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1">Protocolos de Linea Viva</h4>
                  <p className="text-xs md:text-sm text-gray-400">Certificación total bajo normativas OSHA y NFPA 70E. Procedimientos estandarizados para trabajo seguro en alturas y riesgo eléctrico.</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-sm border-l-4 border-living-orange">
                <AlertTriangle className="text-living-orange flex-shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1">Análisis de Riesgo en Sitio</h4>
                  <p className="text-xs md:text-sm text-gray-400">Cada operación inicia con un diagnóstico exhaustivo de variables críticas. Si no es seguro, no operamos.</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-sm border-l-4 border-living-yellow">
                <UserCheck className="text-living-yellow flex-shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1">Protección de Personas</h4>
                  <p className="text-xs md:text-sm text-gray-400">EPP de última generación, herramientas dieléctricas certificadas y entrenamiento continuo de alto nivel.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-living-slate p-6 rounded-sm shadow-xl flex flex-col justify-end h-48 md:h-64 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield size={80} className="md:hidden" />
                <Shield size={100} className="hidden md:block" />
              </div>
              <span className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Capacitación</span>
              <div className="h-1 w-full bg-living-brown mb-2">
                <div className="h-full bg-living-yellow w-3/4"></div>
              </div>
              <p className="text-xs text-gray-400">Entrenamiento técnico continuo</p>
            </div>

            <div className="bg-living-yellow p-6 rounded-sm shadow-xl flex flex-col justify-center items-center text-center h-48 md:h-64">
              <ShieldCheck size={40} className="text-living-slate mb-4 md:hidden" />
              <ShieldCheck size={48} className="text-living-slate mb-4 hidden md:block" />
              <span className="text-4xl md:text-5xl font-display font-bold text-living-slate">100%</span>
              <span className="text-xs font-bold uppercase tracking-widest text-living-slate mt-2">Cumplimiento RETIE</span>
            </div>

            <div className="bg-living-darkOrange sm:col-span-2 p-6 md:p-8 rounded-sm shadow-xl flex items-center justify-between">
              <div>
                <span className="block text-5xl md:text-6xl font-display font-bold text-white">0</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">Accidentes Graves</span>
              </div>
              <div className="text-white/20">
                <AlertTriangle size={60} className="md:hidden" />
                <AlertTriangle size={80} className="hidden md:block" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Security;