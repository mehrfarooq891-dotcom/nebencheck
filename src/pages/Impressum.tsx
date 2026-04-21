import React from 'react';
import { Layout } from '../components/layout/Layout';

export const Impressum: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-serif font-bold mb-8">Impressum</h1>
        <div className="prose prose-blue prose-lg">
          <h2 className="text-2xl font-bold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>NebenCheck GmbH<br />
          Musterstraße 123<br />
          10115 Berlin</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Vertreten durch:</h2>
          <p>Max Mustermann (Geschäftsführer)</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Kontakt:</h2>
          <p>Telefon: +49 (0) 30 123 456 78<br />
          E-Mail: info@nebencheck.de</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Registereintrag:</h2>
          <p>Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Berlin (Charlottenburg)<br />
          Registernummer: HRB 123456</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Umsatzsteuer:</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          DE 123 456 789</p>
        </div>
      </div>
    </Layout>
  );
};
