import React from 'react';
import { Layout } from '../components/layout/Layout';

export const Datenschutz: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-serif font-bold mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-blue prose-lg">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-bold mt-6 mb-2">Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>

          <h3 className="text-xl font-bold mt-6 mb-2">Datenerfassung auf dieser Website</h3>
          <h4 className="font-bold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>

          <h4 className="font-bold">Wie erfassen wir Ihre Daten?</h4>
          <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Google Cloud Platform. Die Übertragung erfolgt verschlüsselt (SSL/TLS).</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        </div>
      </div>
    </Layout>
  );
};
