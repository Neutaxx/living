import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Facebook, Linkedin } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

const Footer: React.FC = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-black text-gray-400 py-12 border-t-4 border-living-orange">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="mb-4">
                <img
                  src="/logolivingpagina.png"
                  alt="Living S.A.S. Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {COMPANY_INFO.slogan}
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/living-sas-colombia/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BvF9r%2FsHZQS6KldQowwII6Q%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-living-orange transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="https://www.facebook.com/profile.php?id=61587121775224" target="_blank" rel="noopener noreferrer" className="hover:text-living-orange transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold uppercase mb-4 text-sm">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#empresa" className="hover:text-living-orange transition-colors">Quiénes Somos</a></li>
                <li><a href="#empresa" className="hover:text-living-orange transition-colors">Misión y Visión</a></li>
                <li><a href="#clientes" className="hover:text-living-orange transition-colors">Nuestros Clientes</a></li>
                <li><a href="#seguridad" className="hover:text-living-orange transition-colors">Política HSEQ</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-white font-bold uppercase mb-4 text-sm">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicios" className="hover:text-living-orange transition-colors">Línea Viva</a></li>
                <li><a href="#servicios" className="hover:text-living-orange transition-colors">Pruebas Eléctricas</a></li>
                <li><a href="#servicios" className="hover:text-living-orange transition-colors">Puesta a Tierra</a></li>
                <li><a href="#servicios" className="hover:text-living-orange transition-colors">Drones</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold uppercase mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-living-orange transition-colors">Aviso de Privacidad</a></li>
                <li><a href="#" className="hover:text-living-orange transition-colors">Términos y Condiciones</a></li>
                <li>
                  <button
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="hover:text-living-orange transition-colors text-left"
                  >
                    Tratamiento de Datos
                  </button>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} LIVING S.A.S. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Diseñado por JDNEUTA</p>
          </div>
        </div>
      </footer>

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </>
  );
};

export default Footer;