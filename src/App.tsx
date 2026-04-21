/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tool } from './pages/Tool';
import { SeoLanding } from './pages/SeoLanding';
import { CO2Calculator } from './pages/CO2Calculator';
import { DeadlineCheck } from './pages/DeadlineCheck';
import { Glossary } from './pages/Glossary';
import { CommonErrors } from './pages/CommonErrors';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import './lib/i18n';

// Simple placeholder components for remaining pages to ensure build succeeds
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-surface">
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold mb-4">{title}</h1>
      <p className="text-muted">Diese Seite wird derzeit erstellt.</p>
      <a href="/" className="text-primary mt-8 inline-block underline">Zurück zur Startseite</a>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nebenkostenabrechnung-pruefen" element={<SeoLanding />} />
        <Route path="/tool" element={<Tool />} />
        <Route path="/heizkosten-check" element={<Tool />} /> {/* Using same tool for now */}
        <Route path="/co2-abgabe-rechner" element={<CO2Calculator />} />
        <Route path="/verjaehrungs-check" element={<DeadlineCheck />} />
        <Route path="/fehler-in-nebenkostenabrechnung" element={<CommonErrors />} />
        <Route path="/glossar" element={<Glossary />} />
        <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
        <Route path="/blog/:slug" element={<PlaceholderPage title="Blog-Artikel" />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
}

