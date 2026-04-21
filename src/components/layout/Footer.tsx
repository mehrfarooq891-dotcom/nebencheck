import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg text-white">
                <CheckSquare className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-serif text-text">NebenCheck</span>
            </Link>
            <p className="text-muted leading-relaxed">
              Dein digitaler Begleiter für Mieterschutz in Deutschland. Fair, transparent und rechtssicher.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-surface rounded-full text-muted hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-surface rounded-full text-muted hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-surface rounded-full text-muted hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text mb-6">Tools</h4>
            <ul className="space-y-4">
              <li><Link to="/tool" className="text-muted hover:text-primary transition-colors">Nebenkosten-Check</Link></li>
              <li><Link to="/heizkosten-check" className="text-muted hover:text-primary transition-colors">Heizkosten-Check</Link></li>
              <li><Link to="/co2-abgabe-rechner" className="text-muted hover:text-primary transition-colors">CO2-Abgabe-Rechner</Link></li>
              <li><Link to="/verjaehrungs-check" className="text-muted hover:text-primary transition-colors">Verjährungs-Check</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text mb-6">Ressourcen</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-muted hover:text-primary transition-colors">Ratgeber Blog</Link></li>
              <li><Link to="/glossar" className="text-muted hover:text-primary transition-colors">Glossar & Begriffe</Link></li>
              <li><Link to="/fehler-in-nebenkostenabrechnung" className="text-muted hover:text-primary transition-colors">Häufige Fehler</Link></li>
              <li><Link to="/nebenkostenabrechnung-pruefen" className="text-muted hover:text-primary transition-colors">Prüf-Anleitung</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted"><Mail className="w-5 h-5" /> info@nebencheck.de</li>
              <li className="flex items-center gap-3 text-muted"><Phone className="w-5 h-5" /> +49 (0) 30 123 456 78</li>
              <li className="flex items-center gap-3 text-muted"><MapPin className="w-5 h-5" /> Berlin, Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} NebenCheck. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[10px] font-bold">
            <Link to="/impressum" className="hover:text-primary">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
