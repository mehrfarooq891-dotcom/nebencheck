import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Tool } from './Tool';
import { ShieldCheck, Info, HelpCircle } from 'lucide-react';

export const SeoLanding: React.FC = () => {
  return (
    <Layout>
      <div className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6">Nebenkostenabrechnung prüfen — So geht's richtig</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">Vermeide überhöhte Abrechnungen und spare bis zu 20% deiner jährlichen Kosten. Starte direkt mit unserem kostenlosen Check.</p>
        </div>
      </div>
      
      {/* Tool Component Embedded */}
      <div className="bg-white">
        <Tool />
      </div>

      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-blue max-w-none">
            <h2 className="text-3xl font-bold font-serif mb-8">Was ist eine Nebenkostenabrechnung?</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Die Nebenkostenabrechnung (auch Betriebskostenabrechnung genannt) ist die Aufstellung aller Kosten, die dem Vermieter durch das Eigentum am Grundstück oder durch den bestimmungsgemäßen Gebrauch des Gebäudes entstehen und die er laut Mietvertrag auf die Mieter umlegen darf.
            </p>

            <h2 className="text-3xl font-bold font-serif my-8 flex items-center gap-3">
              <ShieldCheck className="text-danger" /> Diese 7 Kosten darf dein Vermieter NICHT umlegen
            </h2>
            <div className="space-y-6">
              {[
                { t: "1. Verwaltungskosten", d: "Personalkosten für Hausverwaltung, Porto, Telefon oder Bankgebühren des Vermieters gehören nicht in die Abrechnung." },
                { t: "2. Reparaturen und Instandhaltung", d: "Der Erhalt der Mietsache ist Sache des Vermieters. Instandsetzungsrücklagen oder Reparaturrechnungen dürfen nicht umgelegt werden." },
                { t: "3. Leerstandskosten", d: "Sind Wohnungen im Haus nicht vermietet, muss der Vermieter die darauf entfallenden Nebenkosten selbst tragen." },
                { t: "4. Kosten für Gewerbeeinheiten", d: "Befinden sich Läden im Haus, müssen deren (oft höhere) Kosten separat abgerechnet und vom Mieteranteil abgezogen werden." },
                { t: "5. Bankgebühren des Vermieters", d: "Die Kontoführung für das Mietkonto ist private Verwaltungssache des Eigentümers." },
                { t: "6. Kosten ohne Belegeinsicht", d: "Du hast ein Recht darauf, die Originalrechnungen einzusehen. Kann der Vermieter diese nicht vorlegen, musst du nicht zahlen." },
                { t: "7. Verspätet zugestellte Abrechnungen", d: "Nach Ablauf der 12-monatigen Abrechnungsfrist sind Nachforderungen rechtlich meist nicht mehr durchsetzbar." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{item.t}</h3>
                  <p className="text-muted">{item.d}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold font-serif my-12">Fristen bei der Nebenkostenabrechnung (§ 556 BGB)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               <div className="bg-primary-light/30 p-8 rounded-[2rem] border border-primary/10">
                  <h4 className="text-primary font-bold text-xl mb-4">Für den Vermieter</h4>
                  <p className="text-sm text-muted">Abrechnung muss spätestens 12 Monate nach Ende des Abrechnungszeitraums beim Mieter sein.</p>
               </div>
               <div className="bg-accent/5 p-8 rounded-[2rem] border border-accent/10">
                  <h4 className="text-accent font-bold text-xl mb-4">Für den Mieter</h4>
                  <p className="text-sm text-muted">Widerspruch muss spätestens 12 Monate nach Erhalt der Abrechnung schriftlich eingelegt werden.</p>
               </div>
            </div>

            <h2 className="text-3xl font-bold font-serif mb-8">Was tun wenn die Nebenkosten zu hoch sind?</h2>
            <div className="space-y-4">
               {[
                 { s: "Schritt 1 — Prüfen mit unserem Tool", d: "Finde in 60 Sekunden heraus, ob deine Kosten über dem Durchschnitt liegen." },
                 { s: "Schritt 2 — Belege anfordern", d: "Schreibe deinem Vermieter und bitte um Einsicht in die Originalrechnungen." },
                 { s: "Schritt 3 — Frist beachten", d: "Du hast 12 Monate Zeit für den Widerspruch, aber handel so schnell wie möglich." },
                 { s: "Schritt 4 — Widerspruch schreiben", d: "Formuliere einen sachlichen Widerspruch mit Bezug auf die fehlerhaften Positionen." }
               ].map((step, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">{i+1}</div>
                    <div>
                      <h4 className="font-bold text-lg">{step.s}</h4>
                      <p className="text-muted leading-relaxed">{step.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </article>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-serif mb-8">Hast du weitere Fragen?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
               <div className="p-6 bg-surface rounded-2xl">
                  <h4 className="font-bold mb-2">Wie erkenne ich Schätzungen?</h4>
                  <p className="text-sm text-muted">Wenn in der Abrechnung nur Pauschalen ohne verbrauchabhängige Daten stehen, ist Vorsicht geboten.</p>
               </div>
               <div className="p-6 bg-surface rounded-2xl">
                  <h4 className="font-bold mb-2">Was ist der Mietspiegel?</h4>
                  <p className="text-sm text-muted">Ein Verzeichnis, das die ortsübliche Vergleichsmiete und Betriebskosten ausweist.</p>
               </div>
            </div>
        </div>
      </section>
    </Layout>
  );
};
