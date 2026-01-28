import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

const Contact: React.FC = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    servicio: '',
    mensaje: ''
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
    const mensaje = `*SOLICITUD DE COTIZACIÓN / ASESORÍA*

 *Datos del Cliente:*
 *Nombre:* ${formData.nombre}
 *Empresa:* ${formData.empresa}
 *Teléfono:* ${formData.telefono}
 *Correo:* ${formData.correo}

 *Servicio Solicitado:*
${formData.servicio}

 *Mensaje:*
${formData.mensaje}


_Solicitud enviada desde www.livingsas.com_`;

    // Número de WhatsApp (formato internacional sin el +)
    const whatsappNumber = '573171111555';

    // URL de WhatsApp con el mensaje codificado
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-living-slate relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col lg:flex-row">

          {/* Contact Info (Orange Side) */}
          <div className="lg:w-1/3 bg-gradient-to-br from-living-orange to-living-darkOrange p-10 text-white">
            <h3 className="text-xl md:text-2xl font-display font-bold mb-6">Información de Contacto</h3>
            <p className="mb-8 text-sm md:text-base text-white/90">
              Estamos listos para atender sus requerimientos técnicos. Contáctenos hoy mismo.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm uppercase text-living-yellow mb-1">Dirección</h4>
                  <p className="text-sm">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm uppercase text-living-yellow mb-1">Teléfonos</h4>
                  <p className="text-sm">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm uppercase text-living-yellow mb-1">Correo Electrónico</h4>
                  <p className="text-sm break-all">{COMPANY_INFO.email}</p>
                  <p className="text-sm break-all mt-1">gerencia.general@livingsas.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-8 h-48 rounded-sm w-full overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4682557382167!2d-74.08229892507748!3d4.688389141859043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ac5d8f8c8e9%3A0x1234567890abcdef!2sCra.%2052%20%2375-23%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Living S.A.S."
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-10 bg-white">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-display font-bold text-living-slate">Solicitud de Cotización / Asesoría</h3>
              <p className="text-gray-500 text-sm mt-2">Complete el formulario y nos contactaremos con usted vía WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded-sm focus:border-living-orange focus:outline-none transition-colors"
                  placeholder="Su nombre"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded-sm focus:border-living-orange focus:outline-none transition-colors"
                  placeholder="Nombre de la empresa"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded-sm focus:border-living-orange focus:outline-none transition-colors"
                  placeholder="Número de contacto"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Correo</label>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded-sm focus:border-living-orange focus:outline-none transition-colors text-sm md:text-base"
                  placeholder="email@empresa.com"
                  required
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Tipo de Servicio</label>
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded-sm focus:border-living-orange focus:outline-none transition-colors text-gray-600"
                  required
                >
                  <option value="">Seleccione una opción...</option>
                  <option>Mantenimiento Línea Viva</option>
                  <option>Inspección y Diagnóstico</option>
                  <option>Pruebas Eléctricas</option>
                  <option>Sistemas de Puesta a Tierra</option>
                  <option>Construcción de Redes</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded-sm h-32 focus:border-living-orange focus:outline-none transition-colors"
                  placeholder="Describa su requerimiento técnico..."
                  required
                ></textarea>
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
                  className="bg-living-slate hover:bg-black text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-sm w-full transition-colors flex items-center justify-center uppercase tracking-widest text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Enviar por WhatsApp
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

export default Contact;