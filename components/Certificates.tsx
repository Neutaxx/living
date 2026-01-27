import React from 'react';
import { Award } from 'lucide-react';

const Certificates: React.FC = () => {
    const certificates = [
        { id: 1, src: '/fotos/Certificados Living 1.jpg', title: 'Certificado de Seguridad' },
        { id: 2, src: '/fotos/Certificados Living 2.jpg', title: 'Mención Excelencia' },
        { id: 3, src: '/fotos/Certificados Living 3.jpg', title: 'Reconocimiento Occidental' },
        { id: 4, src: '/fotos/Certificados Living 4.jpg', title: 'Reconocimiento Living Línea Viva' }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-living-orange/10 rounded-full mb-4">
                        <Award className="text-living-orange" size={32} />
                    </div>
                    <span className="block text-living-orange font-bold text-xs uppercase tracking-widest mb-3">
                        Reconocimientos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-living-slate mb-4">
                        Certificaciones y Diplomas
                    </h2>
                    <div className="w-20 h-1 bg-living-orange mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
                        Salvaguardamos la vida con FP acorde a la actividad a ejecutar y herramientas dieléctricas certificadas.
                        Invertimos en el entrenamiento técnico continuo de nuestro personal.
                    </p>
                </div>

                {/* Certificates Grid - Similar to Clients */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="group relative bg-white p-4 md:p-6 rounded-sm border-2 border-gray-100 hover:border-living-orange transition-all duration-300 hover:shadow-xl flex items-center justify-center min-h-[280px] md:min-h-[320px]"
                        >
                            {/* Certificate number badge */}
                            <div className="absolute top-3 left-3 w-10 h-10 bg-living-orange rounded-full flex items-center justify-center shadow-md z-10">
                                <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-living-orange/0 border-r-living-orange/0 group-hover:border-t-living-orange/10 group-hover:border-r-living-orange/10 transition-all duration-300"></div>

                            {/* Certificate Image */}
                            <img
                                src={cert.src}
                                alt={cert.title}
                                className="max-w-full max-h-[240px] md:max-h-[280px] w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                            />

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-living-orange/0 group-hover:bg-living-orange/5 transition-colors duration-300 rounded-sm pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Trust badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-living-orange/10 px-6 py-3 rounded-full">
                        <Award className="text-living-orange" size={20} />
                        <span className="text-living-slate font-semibold text-sm">
                            Certificados que respaldan nuestra excelencia operativa
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
