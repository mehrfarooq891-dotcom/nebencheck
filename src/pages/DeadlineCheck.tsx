import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const DeadlineCheck: React.FC = () => {
  return (
    <Layout>
      <section className="py-20 bg-warning/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Calendar className="w-12 h-12 text-warning mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6 text-text">Verjährungs-Check</h1>
          <p className="text-xl text-muted">Prüfe, ob dein Vermieter die gesetzlichen Fristen eingehalten hat.</p>
        </div>
      </section>
      <section className="py-24">
         <div className="max-w-xl mx-auto px-4 bg-white p-12 rounded-3xl shadow-xl border border-gray-100 space-y-8">
            <div className="space-y-4">
               <label className="font-bold">Wann endete der Abrechnungszeitraum?</label>
               <input type="date" className="w-full h-14 px-4 border rounded-xl" />
            </div>
            <div className="space-y-4">
               <label className="font-bold">Wann hast du die Abrechnung erhalten?</label>
               <input type="date" className="w-full h-14 px-4 border rounded-xl" />
            </div>
            <Button size="xl" className="w-full">Fristen prüfen</Button>
            <div className="p-6 bg-surface rounded-2xl flex gap-4 text-sm">
               <AlertCircle className="w-5 h-5 text-primary shrink-0" />
               <p>Regelfrist: 12 Monate nach Ende des Zeitraums. (§ 556 Abs. 3 BGB)</p>
            </div>
         </div>
      </section>
    </Layout>
  );
};
