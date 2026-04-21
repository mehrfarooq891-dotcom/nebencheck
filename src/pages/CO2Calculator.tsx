import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Leaf, Info, Calculator, Gavel } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { calculateCO2Tax } from '../lib/calculations';

export const CO2Calculator: React.FC = () => {
  const [heatingType, setHeatingType] = useState('Gas');
  const [cost, setCost] = useState(1200);
  const [energyClass, setEnergyClass] = useState('E');
  const [showResult, setShowResult] = useState(false);

  const result = calculateCO2Tax(heatingType, cost, energyClass);

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex p-3 bg-accent/10 rounded-2xl mb-6">
            <Leaf className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6 text-text">CO2-Abgabe Rechner</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Seit 2023 regelt das CO2KostAufG die Aufteilung der CO2-Kosten zwischen Mieter und Vermieter. Finde heraus, wie viel dein Vermieter übernehmen muss.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            <div className="flex-1 p-8 lg:p-12 space-y-8 bg-surface/30">
              <h3 className="text-2xl font-bold flex items-center gap-3"><Calculator className="text-primary" /> Eingaben</h3>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="font-bold text-xs uppercase tracking-widest text-muted">Heizquelle</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Gas', 'Öl', 'Fernwärme', 'andere'].map(type => (
                      <button 
                        key={type}
                        onClick={() => setHeatingType(type)}
                        className={`py-3 rounded-xl border-2 font-bold transition-all ${heatingType === type ? 'border-accent bg-green-50 text-accent' : 'border-gray-100 text-muted hover:border-accent/20'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="font-bold text-xs uppercase tracking-widest text-muted">Jährliche Heizkosten (€)</label>
                  <input 
                    type="number" 
                    value={cost} 
                    onChange={(e) => setCost(Number(e.target.value))}
                    className="w-full h-14 px-6 rounded-xl border-2 border-gray-100 focus:border-accent outline-none font-bold text-lg"
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-bold text-xs uppercase tracking-widest text-muted flex justify-between">
                    Energieklasse des Gebäudes
                    <span className="text-[10px] font-normal lowercase italic text-muted">Siehe Energieausweis</span>
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {['A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '?'].map(cls => (
                      <button 
                        key={cls}
                        onClick={() => setEnergyClass(cls === '?' ? 'unknown' : cls)}
                        className={`h-12 rounded-lg border-2 font-bold transition-all ${energyClass === (cls === '?' ? 'unknown' : cls) ? 'border-accent bg-green-50 text-accent' : 'border-gray-100 text-muted hover:border-accent/20'}`}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                </div>

                <Button className="w-full h-14 bg-accent hover:bg-accent/90" onClick={() => setShowResult(true)}>Jetzt berechnen</Button>
              </div>
            </div>

            <div className="flex-1 p-8 lg:p-12 bg-white relative">
              {!showResult ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-40">
                   <div className="w-20 h-20 rounded-full border-4 border-dashed border-gray-200 animate-spin-slow" />
                   <p className="font-medium">Warte auf Eingabe...</p>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="text-center pb-8 border-b border-gray-100">
                    <p className="text-muted font-bold tracking-widest uppercase text-xs mb-2">Ersparnis für dich</p>
                    <div className="text-6xl font-extrabold text-accent">€ {result.landlordAmount.toFixed(2)}</div>
                    <p className="text-sm font-medium mt-2">Diesen Betrag muss dein Vermieter übernehmen.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-surface rounded-xl">
                       <span className="text-muted font-medium">Vermieter Anteil</span>
                       <span className="font-bold text-accent">{result.landlordSharePercent}%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-surface rounded-xl">
                       <span className="text-muted font-medium">Geschätzte CO2-Gesamtkosten</span>
                       <span className="font-bold">€ {result.estimatedCO2Total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3 text-sm text-primary">
                    <Info className="w-5 h-5 shrink-0" />
                    <p>Die exakte CO2-Abgabe findest du auf deinem Gas- oder Heizöl-Lieferschein oder direkt in der Abrechnung.</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4 flex items-center gap-3"><Gavel className="text-primary" /> Rechtliche Grundlage</h2>
            <p className="text-lg text-muted leading-relaxed">
              Seit dem 1. Januar 2023 gilt das Kohlendioxidkosten-Aufteilungsgesetz (CO2KostAufG). Es führt ein 10-Stufen-Modell ein, das die Kosten basierend auf der Energieeffizienz des Gebäudes verteilt.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-gray-100">
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-50 font-bold italic">
                 <span>Gebäudezustand (CO2 Ausstoß)</span>
                 <span>Vermieter Anteil</span>
              </div>
              {[
                { l: "Effizienzhaus A+ / A (< 12 kg CO2/m²)", s: "0%" },
                { l: "Mittelmaß E (22-27 kg CO2/m²)", s: "50%" },
                { l: "Schlechter Zustand H (> 52 kg CO2/m²)", s: "95%" }
              ].map((row, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-gray-50 text-muted">
                   <span>{row.l}</span>
                   <span className="font-bold text-text">{row.s}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">
              *Hinweis: Dies ist eine vereinfachte Darstellung. Die exakte Einstufung erfolgt jährlich durch den Vermieter in der Abrechnung.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
