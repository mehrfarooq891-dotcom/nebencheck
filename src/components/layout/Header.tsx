import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, CheckSquare, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: "Checker Tool", href: "/tool" },
    { name: "Heizkosten", href: "/heizkosten-check" },
    { name: "CO2-Rechner", href: "/co2-abgabe-rechner" },
    { name: "Glossar", href: "/glossar" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto w-full px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg text-white group-hover:scale-110 transition-transform">
            <CheckSquare className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold font-serif text-text tracking-tight">NebenCheck</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                location.pathname === link.href ? 'text-primary bg-primary-light' : 'text-muted hover:text-primary hover:bg-surface'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r pr-4 border-gray-100">
            <Globe className="w-4 h-4 text-muted" />
            <div className="flex gap-1">
              {['de', 'en', 'tr'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={cn(
                    'text-xs font-bold uppercase p-1 rounded transition-all',
                    i18n.language === lng ? 'text-primary underline' : 'text-muted hover:text-primary'
                  )}
                >
                  {lng}
                </button>
              ))}
            </div>
          </div>
          <Link to="/tool">
            <Button variant="primary" size="sm" className="font-semibold">
              {t('nav.check')}
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2 text-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-text border-b border-gray-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-between items-center px-4 pt-2">
            <div className="flex gap-4">
              {['de', 'en', 'tr'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={cn(
                    'font-bold uppercase',
                    i18n.language === lng ? 'text-primary' : 'text-muted'
                  )}
                >
                  {lng}
                </button>
              ))}
            </div>
            <Link to="/tool" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Jetzt prüfen</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
