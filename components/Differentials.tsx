import React from 'react';
import SectionTitle from './SectionTitle';
import { DIFFERENTIALS } from '../constants';

const Differentials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Por qué elegirnos" title="Diferenciales Competitivos" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {DIFFERENTIALS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border-2 border-living-orange/20 mb-6 group-hover:border-living-orange group-hover:bg-living-orange transition-all duration-300">
                  <Icon size={32} className="text-living-brown group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-living-slate mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;