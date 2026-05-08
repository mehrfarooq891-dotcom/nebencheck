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
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import './lib/i18n';

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
}


