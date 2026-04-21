import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border-t border-gray-200 h-16 flex items-center px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center gap-4">
        <div className="flex items-center gap-8">
          <span className="text-[10px] font-bold text-muted uppercase tracking-widest hidden sm:inline-block">Zertifiziert durch</span>
          <div className="flex gap-6 md:gap-8 opacity-50 grayscale hover:grayscale-0 transition-all font-bold text-[10px] md:text-sm tracking-tighter sm:tracking-normal">
            <span className="flex items-center gap-1 shrink-0">🔒 SSL ENCRYPTED</span>
            <span className="flex items-center gap-1 shrink-0">⚖️ DMB DATA</span>
            <span className="flex items-center gap-1 shrink-0">🇪🇺 DSGVO KONFORM</span>
          </div>
        </div>
        <div className="text-[10px] text-muted font-medium hidden md:block">
          © 2024 NebenCheck. Entwickelt für deutschen Mieterschutz.
        </div>
      </div>
    </div>
  );
};
