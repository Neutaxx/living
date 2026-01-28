import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-living-slate text-white p-6 flex items-center justify-between border-b-4 border-living-orange">
                    <h2 className="text-2xl font-display font-bold">Tratamiento de Datos Personales</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Cerrar modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Al ingresar y registrarse en este sitio web, el usuario autoriza de manera <strong>previa, expresa e informada</strong> a <strong className="text-living-orange">LIVING SAS</strong>, como responsable del tratamiento, para recolectar, almacenar, usar, circular y tratar sus datos personales conforme a las finalidades descritas en la Política de Tratamiento de Datos Personales, en cumplimiento de la <strong>Ley 1581 de 2012</strong>, el <strong>Decreto 1377 de 2013</strong> y demás normas aplicables.
                    </p>

                    <p>
                        El titular manifiesta que conoce sus derechos a <strong>acceder, actualizar, rectificar, suprimir</strong> sus datos y <strong>revocar la autorización</strong>, los cuales podrá ejercer a través de los canales dispuestos por la compañía y publicados en la Política de Tratamiento de Datos Personales disponible en este sitio web.
                    </p>

                    <p className="text-living-slate font-bold">
                        El uso de este sitio implica la aceptación de esta autorización.
                    </p>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 p-4 md:p-6 border-t flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-living-orange hover:bg-living-darkOrange text-white font-bold py-3 px-8 rounded-sm transition-colors"
                    >
                        Entendido
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyModal;
