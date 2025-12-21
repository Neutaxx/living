import React from 'react';

interface Props {
  subtitle: string;
  title: string;
  dark?: boolean;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<Props> = ({ subtitle, title, dark = false, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className={`block text-sm font-bold tracking-[0.2em] uppercase mb-2 ${dark ? 'text-living-orange' : 'text-living-darkOrange'}`}>
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-5xl font-display font-bold ${dark ? 'text-white' : 'text-living-slate'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-living-orange ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;