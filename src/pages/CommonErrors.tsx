import React from 'react';
import { Layout } from '../components/layout/Layout';
import { AlertTriangle, CheckCircle2, ShieldOff } from 'lucide-react';

export const CommonErrors: React.FC = () => {
  return (
    <Layout>
      <section className="py-20 bg-danger/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AlertTriangle className="w-12 h-12 text-danger mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6 text-text">Häufige Fehler</h1>
          <p className="text-xl text-muted">Jede zweite Abrechnung ist fehlerhaft. Hier sind die Klassiker.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {[
            {
              title: "Fehlerhafte Verteilerschlüssel",
              error: "Vermieter legt Kosten nach Personenanzahl um, obwohl laut Mietvertrag die Wohnfläche gilt.",
              fix: "Prüfe deinen Mietvertrag und vergleiche den Schlüssel in der Abrechnung."
            },
            {
              title: "Nicht umlagefähige Verwaltungskosten",
              error: "In der Abrechnung taucht der Punkt 'Hausverwaltung' oder 'Kontogebühren' auf.",
              fix: "Diese Kosten müssen vom Vermieter selbst getragen werden. Fordere eine Korrektur."
            },
            {
              title: "Fehlende Belege",
              error: "Große Summen werden ohne detaillierte Einzelrechnungen aufgeführt.",
              fix: "Fordere Einsicht in die Originalbelege beim Vermieter an."
            },
            {
              title: "Verspätung der Abrechnung",
              error: "Die Abrechnung für 2022 kommt erst im Januar 2024.",
              fix: "Nachforderungen sind verjährt, sofern der Vermieter die Verspätung selbst verschuldet hat."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
               <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 font-serif">{item.title}</h3>
                  <div className="p-4 bg-red-50 rounded-xl text-danger border border-red-100 flex gap-3 text-sm">
                    <ShieldOff className="w-5 h-5 shrink-0" />
                    <span>{item.error}</span>
                  </div>
               </div>
               <div className="md:w-1/2 flex flex-col justify-center">
                  <h4 className="font-bold text-accent mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Was du tun kannst
                  </h4>
                  <p className="text-muted">{item.fix}</p>
               </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
