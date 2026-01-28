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
              En <span className="text-living-orange font-bold">LIVING S.A.S.</span>, la seguridad no es un requisito: es nuestra identidad. Ejecutamos maniobras en línea viva bajo los más rigurosos estándares internacionales, garantizando la protección absoluta de nuestro equipo y la continuidad operativa de nuestros clientes.
            </p>

            <div className="space-y-6">
              <div className="flex gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-sm border-l-4 border-living-darkOrange">
                <Shield className="text-living-darkOrange flex-shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1">Protocolos de Línea Viva</h4>
                  <p className="text-xs md:text-sm text-gray-400">Certificación bajo estándares globales OSHA y NFPA 70E. Implementamos procesos estandarizados de alta precisión para mitigar el riesgo eléctrico y garantizar la seguridad en trabajos de altura.</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-sm border-l-4 border-living-orange">
                <AlertTriangle className="text-living-orange flex-shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1">Análisis de Riesgo en Sitio</h4>
                  <p className="text-xs md:text-sm text-gray-400">Tolerancia cero al riesgo. Iniciamos cada proyecto con un diagnóstico exhaustivo de variables críticas en terreno. Bajo nuestra política: Si no es 100% seguro, no operamos; aplicación política stop work.</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-sm border-l-4 border-living-yellow">
                <UserCheck className="text-living-yellow flex-shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-1">Protección de Personas</h4>
                  <p className="text-xs md:text-sm text-gray-400">Salvaguardamos la vida con EPP acorde a la actividad a ejecutar y herramientas dieléctricas certificadas. Invertimos en el entrenamiento técnico continuo de nuestro personal.</p>
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


            <div className="bg-living-darkOrange sm:col-span-2 p-6 md:p-8 rounded-sm shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-white" size={32} />
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">Gestión Basada en Estándares Internacionales</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-sm border border-white/10 hover:bg-white/15 transition-colors">
                  <h4 className="text-white font-bold text-sm md:text-base mb-2">
                    <span className="text-living-yellow">Calidad:</span> Procesos alineados a ISO 9001 para la excelencia en el servicio.
                  </h4>
                </div>

                <div className="bg-white/10 p-4 rounded-sm border border-white/10 hover:bg-white/15 transition-colors">
                  <h4 className="text-white font-bold text-sm md:text-base mb-2">
                    <span className="text-living-yellow">SST:</span> Prioridad absoluta en Seguridad y Salud (basado en ISO 45001).
                  </h4>
                </div>

                <div className="bg-white/10 p-4 rounded-sm border border-white/10 hover:bg-white/15 transition-colors">
                  <h4 className="text-white font-bold text-sm md:text-base mb-2">
                    <span className="text-living-yellow">Gestión Ambiental (ISO 14001):</span> Políticas de protección del entorno y manejo de residuos en cada proyecto.
                  </h4>
                </div>

                <div className="bg-white/10 p-4 rounded-sm border border-white/10 hover:bg-white/15 transition-colors">
                  <h4 className="text-white font-bold text-sm md:text-base mb-2">
                    <span className="text-living-yellow">RUC:</span> Operación evaluada bajo criterios de seguridad y medio ambiente.
                  </h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Security;