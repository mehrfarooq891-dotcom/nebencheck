import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, LayoutDashboard, ShieldCheck, HelpCircle } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { TrustBar } from '../components/ui/TrustBar';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: "Was ist in der Nebenkostenabrechnung nicht erlaubt?",
      answer: "Vermieter versuchen oft, Verwaltungskosten, Bankgebühren oder Instandhaltungskosten umzulegen. Diese sind jedoch durch die Kaltmiete abgegolten und dürfen nicht in der Betriebskostenabrechnung auftauchen."
    },
    {
      question: "Wie lange habe ich Zeit, Widerspruch einzulegen?",
      answer: "Du hast 12 Monate nach Erhalt der Abrechnung Zeit, um inhaltliche Fehler zu beanstanden. Dennoch solltest du zeitnah handeln, insbesondere wenn Nachzahlungen gefordert werden."
    },
    {
      question: "Was tun wenn Nebenkosten zu hoch sind?",
      answer: "Zuerst mit unserem Tool prüfen. Wenn ein hohes Einsparpotenzial besteht, solltest du vom Vermieter Belegeinsicht fordern und ggf. einen formellen Widerspruch einlegen."
    },
    {
      question: "Welche Kosten darf der Vermieter nicht umlegen?",
      answer: "Typische nicht umlagefähige Kosten sind: Verwaltungskosten, Reparaturen am Gebäude, Kontoführungsgebühren des Vermieters und Kosten für unbewohnte Wohneinheiten (Leerstand)."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[600px]">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 pr-12 space-y-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider">
                🛡️ Mieterschutz 2.0
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif leading-[1.15] text-text font-bold">
                Deine Nebenkostenabrechnung in <span className="text-primary">60 Sekunden</span> prüfen
              </h1>
              <p className="text-xl text-muted leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col gap-4 max-w-sm">
                <Link to="/tool">
                  <Button size="xl" className="w-full h-16 group">
                    {t('hero.cta')}
                  </Button>
                </Link>
                <p className="text-xs text-muted text-center flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" /> {t('hero.subtext')}
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-extrabold text-text">84.230+</div>
                  <div className="text-xs text-muted font-bold uppercase tracking-wide">Prüfungen</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-text">€4.1M</div>
                  <div className="text-xs text-muted font-bold uppercase tracking-wide">Ersparnis</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-accent">98%</div>
                  <div className="text-xs text-muted font-bold uppercase tracking-wide">Zufriedenheit</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block h-full"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden h-full flex flex-col min-h-[500px]">
                <div className="p-6 border-b border-gray-100 bg-surface">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">Nebenkosten-Check</span>
                    <span className="text-xs font-bold text-primary">Schritt 1 von 5</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "20%" }}
                      className="h-full bg-primary" 
                    />
                  </div>
                </div>

                <div className="p-8 flex-grow space-y-8">
                  <h3 className="text-2xl font-bold font-serif">In welcher Stadt wohnst du?</h3>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <select className="w-full appearance-none bg-white border-2 border-gray-100 px-6 py-4 rounded-xl text-lg font-bold focus:border-primary outline-none transition-all">
                        <option>Berlin</option>
                        <option>München</option>
                        <option>Hamburg</option>
                        <option>Frankfurt</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 rounded-2xl border-2 border-primary-light bg-primary-light/30 flex flex-col items-center gap-3 cursor-pointer">
                        <div className="text-3xl">🏢</div>
                        <span className="text-sm font-bold text-primary">Mietwohnung</span>
                      </div>
                      <div className="p-6 rounded-2xl border-2 border-gray-50 bg-white flex flex-col items-center gap-3 cursor-pointer hover:border-primary/20 transition-all">
                        <div className="text-3xl">🏡</div>
                        <span className="text-sm font-bold text-muted">Ganzes Haus</span>
                      </div>
                    </div>
                  </div>

                  <Link to="/tool">
                    <Button className="w-full h-14" size="lg">Weiter zum nächsten Schritt</Button>
                  </Link>
                </div>

                <div className="mt-auto p-6 bg-accent/5 border-t border-accent/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Sofort-Analyse bereit</div>
                      <div className="text-xs text-muted">Referenz: Betriebskostenspiegel 2023/24</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">So einfach funktioniert es</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">In nur drei Schritten zur Gewissheit. Kostenlos und ohne Risiko.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: LayoutDashboard, title: t('steps.step1'), desc: t('steps.step1_desc'), color: 'bg-blue-50 text-blue-600' },
              { icon: Zap, title: t('steps.step2'), desc: t('steps.step2_desc'), color: 'bg-yellow-50 text-yellow-600' },
              { icon: CheckCircle2, title: t('steps.step3'), desc: t('steps.step3_desc'), color: 'bg-green-50 text-green-600' }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className={cn("w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-6 transition-transform group-hover:scale-110", step.color)}>
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Why NebenCheck / Comparison */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Warum NebenCheck?</h2>
            <p className="text-muted text-lg">Ein Vergleich mit herkömmlichen Prüfmethoden.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-6 font-bold">Feature</th>
                  <th className="p-6 font-bold text-primary">NebenCheck</th>
                  <th className="p-6 font-semibold text-muted">Mineko</th>
                  <th className="p-6 font-semibold text-muted">Mieterbund</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { feature: "Sofort-Ergebnis", n: "✅ 60 Sek.", m: "24-48h", mi: "Tage" },
                  { feature: "Kostenlos", n: "✅ Ja", m: "€90+", mi: "€50-100/Jahr" },
                  { feature: "KI-Analyse", n: "✅ Ja", m: "Manuell", mi: "Manuell" },
                  { feature: "Mehrsprachig", n: "✅ Ja", m: "Nein", mi: "Nein" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 font-bold text-primary">{row.n}</td>
                    <td className="p-6 text-muted">{row.m}</td>
                    <td className="p-6 text-muted">{row.mi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Area */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl lg:text-5xl font-bold">Häufige Fragen</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32" />
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Deine Abrechnung könnte Fehler enthalten. <br />
              Prüfe es jetzt — kostenlos.
            </h2>
            <Link to="/tool">
              <Button size="xl" variant="secondary" className="h-16 px-12 group">
                Kostenlose Prüfung starten <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
