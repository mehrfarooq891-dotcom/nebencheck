import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Mail, 
  Download, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { CitySelector } from '../components/tool/CitySelector';
import { Button } from '../components/ui/Button';
import { RiskBadge } from '../components/ui/RiskBadge';
import { calculateNebenCheck } from '../lib/calculations';
import { City } from '../lib/benchmarks';
import { cn } from '../lib/utils';

export const Tool: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    city: '' as City | string,
    sqm: 0,
    persons: 1,
    totalBill: 0,
    heatingCost: 0,
    year: '2023',
    hasBreakdown: 'Yes',
    lateDelivery: 'No'
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const result = useMemo(() => {
    if (step < 5) return null;
    return calculateNebenCheck(
      formData.city as City,
      formData.sqm,
      formData.totalBill
    );
  }, [formData, step]);

  const chartData = useMemo(() => {
    if (!result) return [];
    return [
      { name: 'Deine Kosten', value: Math.round(formData.totalBill), color: result.riskScore === 'RED' ? '#DC2626' : (result.riskScore === 'YELLOW' ? '#D97706' : '#16A34A') },
      { name: 'Stadt-Schnitt', value: Math.round(result.benchmarkCost), color: '#1B4FD8' },
      { name: 'Bund Schnitt', value: Math.round(result.benchmarkCost * 0.95), color: '#6B7280' }
    ];
  }, [result, formData]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        {step < 5 && (
          <div className="mb-12">
            <div className="flex justify-between mb-4 text-xs font-bold uppercase tracking-widest text-muted">
              <span>Schritt {step} von 4</span>
              <span>{Math.round((step / 4) * 100)}% abgeschlossen</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                initial={false}
                animate={{ width: `${(step / 4) * 100}%` }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 lg:p-12"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 font-serif text-text">In welcher Stadt wohnst du?</h2>
                  <p className="text-muted">Benötigt für den regionalen Betriebskostenspiegel.</p>
                </div>
                <CitySelector 
                  value={formData.city} 
                  onChange={(city) => {
                    setFormData({...formData, city});
                    setTimeout(nextStep, 300);
                  }} 
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 lg:p-12 space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-2 font-serif text-text">Details zur Wohnung</h2>
                  <p className="text-muted">Die Quadratmeterzahl ist entscheidend für den Vergleich.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="font-bold text-sm uppercase tracking-wider text-muted">Wohnfläche (m²)</label>
                    <input 
                      type="number" 
                      value={formData.sqm || ''}
                      onChange={(e) => setFormData({...formData, sqm: Number(e.target.value)})}
                      className="w-full h-16 px-6 rounded-xl border-2 border-gray-100 focus:border-primary outline-none text-xl font-bold transition-all"
                      placeholder="z.B. 65"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="font-bold text-sm uppercase tracking-wider text-muted">Personen im Haushalt</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, '5+'].map(num => (
                        <button
                          key={num}
                          onClick={() => setFormData({...formData, persons: typeof num === 'string' ? 5 : num})}
                          className={cn(
                            "flex-1 h-16 rounded-xl border-2 font-bold text-lg transition-all",
                            formData.persons === (typeof num === 'string' ? 5 : num) ? "border-primary bg-primary-light text-primary" : "border-gray-100 text-muted hover:border-primary/20"
                          )}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="ghost" onClick={prevStep}><ChevronLeft className="mr-2" /> Zurück</Button>
                  <Button size="lg" disabled={!formData.sqm} onClick={nextStep}>Weiter <ChevronRight className="ml-2" /></Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 lg:p-12 space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-2 font-serif text-text">Beträge der Abrechnung</h2>
                  <p className="text-muted">Entnimm diese Werte bitte deiner aktuellen Abrechnung.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="font-bold text-sm uppercase tracking-wider text-muted">Gesamtbetrag (€)</label>
                    <input 
                      type="number" 
                      value={formData.totalBill || ''}
                      onChange={(e) => setFormData({...formData, totalBill: Number(e.target.value)})}
                      className="w-full h-16 px-6 rounded-xl border-2 border-gray-100 focus:border-primary outline-none text-xl font-bold transition-all"
                      placeholder="z.B. 2450.00"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="font-bold text-sm uppercase tracking-wider text-muted">Davon Heizkosten (€)</label>
                    <input 
                      type="number" 
                      value={formData.heatingCost || ''}
                      onChange={(e) => setFormData({...formData, heatingCost: Number(e.target.value)})}
                      className="w-full h-16 px-6 rounded-xl border-2 border-gray-100 focus:border-primary outline-none text-xl font-bold transition-all"
                      placeholder="Optional"
                    />
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="ghost" onClick={prevStep}><ChevronLeft className="mr-2" /> Zurück</Button>
                  <Button size="lg" disabled={!formData.totalBill} onClick={nextStep}>Analyse starten <Zap className="ml-2 w-4 h-4" /></Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 lg:p-12 space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-2 font-serif text-text">Letzte Checks</h2>
                  <p className="text-muted">Formale Kriterien können die Abrechnung bereits ungültig machen.</p>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-surface rounded-2xl flex items-center justify-between">
                    <span className="font-semibold text-lg">Enthält die Abrechnung eine Heizkostenaufschlüsselung?</span>
                    <div className="flex gap-2">
                       <Button variant={formData.hasBreakdown === 'Yes' ? 'primary' : 'outline'} size="sm" onClick={() => setFormData({...formData, hasBreakdown: 'Yes'})}>Ja</Button>
                       <Button variant={formData.hasBreakdown === 'No' ? 'primary' : 'outline'} size="sm" onClick={() => setFormData({...formData, hasBreakdown: 'No'})}>Nein</Button>
                    </div>
                  </div>
                  <div className="p-6 bg-surface rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-lg block">Pünktlich zugestellt?</span>
                      <span className="text-xs text-muted">Innerhalb von 12 Monaten nach Abrechnungszeitraum.</span>
                    </div>
                    <div className="flex gap-2">
                       <Button variant={formData.lateDelivery === 'No' ? 'primary' : 'outline'} size="sm" onClick={() => setFormData({...formData, lateDelivery: 'No'})}>Ja</Button>
                       <Button variant={formData.lateDelivery === 'Yes' ? 'primary' : 'outline'} size="sm" onClick={() => setFormData({...formData, lateDelivery: 'Yes'})}>Nein</Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="ghost" onClick={prevStep}><ChevronLeft className="mr-2" /> Zurück</Button>
                  <Button size="lg" onClick={nextStep}>Ergebnis anzeigen <ChevronRight className="ml-2" /></Button>
                </div>
              </motion.div>
            )}

            {step === 5 && result && (
              <motion.div 
                key="step5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 lg:p-12"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                   <div className="flex-1 space-y-4">
                      <RiskBadge score={result.riskScore} className="px-6 py-2 text-base" />
                      <h2 className="text-4xl font-bold font-serif leading-tight">
                        Dein Ergebnis: {result.riskMessage}
                      </h2>
                      {result.overpayment > 0 && (
                        <p className="text-2xl text-danger font-bold">
                          Mögliche jährliche Ersparnis: € {result.overpayment.toFixed(2)}
                        </p>
                      )}
                      {formData.lateDelivery === 'Yes' && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-danger text-sm flex gap-3">
                          <AlertTriangle className="w-5 h-5 shrink-0" />
                          <p>
                            <strong>Fristüberschreitung erkannt!</strong> Dein Vermieter hat die Abrechnung zu spät zugestellt. Du musst diese möglicherweise NICHT bezahlen (§ 556 Abs. 3 BGB).
                          </p>
                        </div>
                      )}
                   </div>
                   <div className="w-full md:w-64 h-64 bg-surface rounded-3xl p-4 flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-extrabold text-primary mb-2">
                         {Math.round(result.percentOver > 0 ? result.percentOver : 0)}%
                      </div>
                      <p className="text-xs font-bold uppercase tracking-tighter text-muted">Über Durchschnitt</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Tooltip 
                          cursor={{ fill: '#F9FAFB' }}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                        />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                       <Info className="w-5 h-5 text-primary" /> Analyse-Details
                    </h4>
                    <div className="space-y-4">
                       <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                          <span className="text-muted font-medium">Deine Kosten / m²</span>
                          <span className="font-bold">€ {(result.userCostPerSqm / 12).toFixed(2)}</span>
                       </div>
                       <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                          <span className="text-muted font-medium">Durchschnitt {formData.city} / m²</span>
                          <span className="font-bold underline text-primary">€ 2.17</span>
                       </div>
                       <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                          <span className="text-muted font-medium">Zustellung</span>
                          <span className={cn("font-bold", formData.lateDelivery === 'Yes' ? 'text-danger' : 'text-accent')}>
                            {formData.lateDelivery === 'Yes' ? 'Verspätet' : 'Pünktlich'}
                          </span>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-[2rem] p-8 lg:p-12 text-center border border-primary/10">
                   <h3 className="text-2xl font-bold mb-4">Vollständigen Bericht erhalten?</h3>
                   <p className="text-muted mb-8 max-w-lg mx-auto">
                     Wir senden dir eine detaillierte Analyse inkl. Widerspruchs-Vorlage als PDF zu.
                   </p>
                   <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                        <input 
                          type="email" 
                          placeholder="deine@email.de" 
                          className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-100 focus:border-primary outline-none transition-all"
                        />
                      </div>
                      <Button size="lg" className="h-14">
                        Bericht senden <Download className="ml-2 w-4 h-4" />
                      </Button>
                   </form>
                   <p className="mt-4 text-[10px] text-muted uppercase tracking-widest font-bold">Kein Spam. Nur wertvolle Tipps. Abmeldung jederzeit möglich.</p>
                </div>

                <div className="flex justify-center mt-8">
                   <Button variant="ghost" onClick={() => setStep(1)} className="text-muted">Prüfung wiederholen</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="p-6 bg-white rounded-2xl border border-gray-100 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h5 className="font-bold mb-1">Was ist NebenCheck?</h5>
                <p className="text-sm text-muted">Wir nutzen aktuelle Daten des Mieterbundes und Mietspiegel der größten 50 Städte für verlässliche Ergebnisse.</p>
              </div>
           </div>
           <div className="p-6 bg-white rounded-2xl border border-gray-100 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-bold mb-1">Deine Privatsphäre</h5>
                <p className="text-sm text-muted">Deine Eingaben werden anonymisiert verarbeitet und niemals ohne deine Zustimmung weitergegeben.</p>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
};
