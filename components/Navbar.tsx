import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Empresa', href: '#empresa' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Seguridad', href: '#seguridad' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/fotos/logolivingpagina.png"
              alt="Living S.A.S. Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-living-orange ${scrolled ? 'text-living-slate' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-living-darkOrange hover:bg-living-orange text-white text-sm font-bold py-3 px-6 rounded-sm transition-colors uppercase"
            >
              Asesoría Técnica
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-living-orange"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t-4 border-living-orange">
          <div className="flex flex-col py-6 px-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-living-slate font-bold text-lg uppercase border-b border-gray-100 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-living-darkOrange text-white text-center font-bold py-3 rounded-sm uppercase mt-4"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Asesoría
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;