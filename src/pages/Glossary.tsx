import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Search, BookOpen } from 'lucide-react';

const glossaryItems = [
  { term: "Betriebskosten", definition: "Kosten, die dem Eigentümer durch das Eigentum am Grundstück oder durch den bestimmungsgemäßen Gebrauch des Gebäudes laufend entstehen." },
  { term: "Dienstleistungswasserschein", definition: "Wird oft fälschlicherweise in Abrechnungen aufgeführt, ist aber meist nicht umlagefähig." },
  { term: "Einheitswert", definition: "Basis für die Berechnung der Grundsteuer, die vom Vermieter umgelegt werden darf." },
  { term: "Heizkostenverordnung", definition: "Regelt, wie Heiz- und Warmwasserkosten mindestens zu 50% und höchstens zu 70% nach Verbrauch abzurechnen sind." },
  { term: "Instandhaltungskosten", definition: "Kosten für die Reparatur oder Erneuerung von Gebäudeteilen. Diese darf der Vermieter NICHT umlegen." },
  { term: "Mietspiegel", definition: "Übersicht über die ortsüblichen Vergleichsmieten und durchschnittlichen Betriebskosten einer Stadt." },
  { term: "Umlageschlüssel", definition: "Verteilermaßstab (z. B. Quadratmeter oder Personen), nach dem die Gesamtkosten auf die einzelnen Mieter verteilt werden." },
  { term: "Verwaltungskosten", definition: "Kosten für die Hausverwaltung, Kontoführung oder Porto. Diese sind NICHT umlagefähig." },
  { term: "Wirtschaftlichkeitsgebot", definition: "Der Vermieter ist verpflichtet, nur solche Kosten zu verursachen, die einem vernünftigen Kosten-Nutzen-Verhältnis entsprechen." }
];

export const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = glossaryItems.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <section className="py-20 bg-primary-light/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6 text-text">Glossar & Begriffe</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Von Abwasser bis Zustellungsfrist — wir erklären dir die wichtigsten Fachbegriffe der Nebenkostenabrechnung.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative mb-12">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted" />
            <input 
              type="text" 
              placeholder="Begriff suchen..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-16 pl-16 pr-6 rounded-2xl bg-surface border-2 border-transparent focus:border-primary outline-none text-lg transition-all"
            />
          </div>

          <div className="space-y-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                   <h3 className="text-2xl font-bold text-primary mb-3 font-serif">{item.term}</h3>
                   <p className="text-lg text-muted leading-relaxed">{item.definition}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-surface rounded-3xl">
                 <p className="text-muted text-xl">Keine Ergebnisse für "{searchTerm}" gefunden.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};
