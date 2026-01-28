import React, { useState } from 'react';
import { Send, Briefcase, User, Phone, Mail, FileText } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

const WorkWithUs: React.FC = () => {
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const [formData, setFormData] = useState({
        nombre: '',
        profesion: '',
        telefono: '',
        correo: '',
        cargo: '',
        experiencia: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construir el mensaje para WhatsApp
        const mensaje = `*SOLICITUD DE EMPLEO - TRABAJA CON NOSOTROS*

 *Datos del Postulante:*
 *Nombre:* ${formData.nombre}
 *Profesión/Título:* ${formData.profesion}
 *Teléfono:* ${formData.telefono}
 *Correo:* ${formData.correo}

 *Interés Laboral:*
 *Cargo de interés:* ${formData.cargo}

 *Resumen de Experiencia:*
${formData.experiencia}


_Solicitud enviada desde www.livingsas.com_`;

        // Número de WhatsApp
        const whatsappNumber = '573171111555';

        // URL de WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="trabaja-con-nosotros" className="py-20 bg-gray-50 relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row-reverse">
                    {/* Info Side (Blue/Dark Side to differentiate) */}
                    <div className="lg:w-1/3 bg-living-slate p-10 text-white">
                        <h3 className="text-xl md:text-2xl font-display font-bold mb-6">¿Quieres ser parte de nuestro equipo?</h3>
                        <p className="mb-8 text-sm md:text-base text-gray-300">
                            Buscamos talento apasionado por la seguridad, la excelencia y la innovación en ingeniería eléctrica.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Briefcase className="flex-shrink-0 mt-1 text-living-yellow" />
                                <div>
                                    <h4 className="font-bold text-sm uppercase text-living-yellow mb-1">Crecimiento Profesional</h4>
                                    <p className="text-sm">Oportunidades de capacitación y certificación continua.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <User className="flex-shrink-0 mt-1 text-living-yellow" />
                                <div>
                                    <h4 className="font-bold text-sm uppercase text-living-yellow mb-1">Ambiente Seguro</h4>
                                    <p className="text-sm">Priorizamos tu seguridad y bienestar con los más altos estándares.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-2/3 p-10">
                        <div className="mb-8">
                            <h3 className="text-xl md:text-2xl font-display font-bold text-living-slate">Formulario de Postulación</h3>
                            <p className="text-gray-500 text-sm mt-2">Cuéntanos sobre ti y tu experiencia. Te contactaremos vía WhatsApp.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Nombre Completo</label>
                                <div className="relative">
                                    <User className="absolute top-3 left-3 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-300 p-3 pl-10 rounded-sm focus:border-living-orange focus:outline-none transition-colors"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Profesión / Título</label>
                                <div className="relative">
                                    <Briefcase className="absolute top-3 left-3 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        name="profesion"
                                        value={formData.profesion}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-300 p-3 pl-10 rounded-sm focus:border-living-orange focus:outline-none transition-colors"
                                        placeholder="Ej. Ing. Electricista, Técnico..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Teléfono / WhatsApp</label>
                                <div className="relative">
                                    <Phone className="absolute top-3 left-3 text-gray-400" size={18} />
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-300 p-3 pl-10 rounded-sm focus:border-living-orange focus:outline-none transition-colors"
                                        placeholder="Número de contacto"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Correo Electrónico</label>
                                <div className="relative">
                                    <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
                                    <input
                                        type="email"
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-300 p-3 pl-10 rounded-sm focus:border-living-orange focus:outline-none transition-colors"
                                        placeholder="tucorreo@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Cargo de Interés</label>
                                <select
                                    name="cargo"
                                    value={formData.cargo}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-300 p-3 rounded-sm focus:border-living-orange focus:outline-none transition-colors text-gray-600"
                                    required
                                >
                                    <option value="">Seleccione una opción...</option>
                                    <option>Ingeniero Electricista</option>
                                    <option>Técnico Liniero</option>
                                    <option>Ayudante Técnico</option>
                                    <option>Seguridad y Salud (SST)</option>
                                    <option>Administrativo</option>
                                    <option>Comercial</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Breve Resumen de Experiencia</label>
                                <div className="relative">
                                    <FileText className="absolute top-3 left-3 text-gray-400" size={18} />
                                    <textarea
                                        name="experiencia"
                                        value={formData.experiencia}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-300 p-3 pl-10 rounded-sm h-32 focus:border-living-orange focus:outline-none transition-colors"
                                        placeholder="Cuéntanos brevemente sobre tu experiencia relevante..."
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* Privacy Checkbox */}
                            <div className="md:col-span-2">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={privacyAccepted}
                                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                        className="mt-1 w-4 h-4 text-living-orange border-gray-300 rounded focus:ring-living-orange cursor-pointer"
                                        required
                                    />
                                    <span className="text-sm text-gray-600">
                                        Autorizo el tratamiento de mis datos personales conforme a la{' '}
                                        <button
                                            type="button"
                                            onClick={() => setIsPrivacyModalOpen(true)}
                                            className="text-living-orange hover:text-living-darkOrange font-bold underline"
                                        >
                                            Política
                                        </button>.
                                    </span>
                                </label>
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    disabled={!privacyAccepted}
                                    className="bg-living-orange hover:bg-living-darkOrange text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-sm w-full transition-colors flex items-center justify-center uppercase tracking-widest text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Enviar Postulación por WhatsApp
                                    <Send size={16} className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <PrivacyModal
                isOpen={isPrivacyModalOpen}
                onClose={() => setIsPrivacyModalOpen(false)}
            />
        </section>
    );
};

export default WorkWithUs;
