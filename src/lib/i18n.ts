import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  de: {
    translation: {
      "nav": {
        "home": "Home",
        "check": "Prüfen",
        "tool": "Checker Tool",
        "heizkosten": "Heizkosten",
        "co2": "CO2-Rechner",
        "verjaehrung": "Verjährung",
        "glossar": "Glossar",
        "blog": "Blog"
      },
      "hero": {
        "title": "Deine Nebenkostenabrechnung in 60 Sekunden prüfen",
        "subtitle": "Zahlen Mieter in Deutschland im Schnitt 20% zu viel — ohne es zu wissen. Finde jetzt heraus, ob du betroffen bist.",
        "cta": "Jetzt kostenlos prüfen →",
        "subtext": "Keine Registrierung. Kein Risiko. 100% DSGVO-konform."
      },
      "steps": {
        "step1": "Daten eingeben",
        "step1_desc": "Wohnfläche, Gesamtkosten, Stadt",
        "step2": "KI analysiert",
        "step2_desc": "Vergleich mit Betriebskostenspiegel 2023/2024",
        "step3": "Ergebnis erhalten",
        "step3_desc": "Risiko-Score + mögliche Ersparnis in €"
      }
      // ... more added as needed
    }
  },
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "check": "Check",
        "tool": "Checker Tool",
        "heizkosten": "Heating Costs",
        "co2": "CO2 Calculator",
        "verjaehrung": "Deadlines",
        "glossar": "Glossary",
        "blog": "Blog"
      },
      "hero": {
        "title": "Check your utility bill in 60 seconds",
        "subtitle": "Tenants in Germany pay on average 20% too much without knowing it. Find out if you are affected.",
        "cta": "Check now for free →",
        "subtext": "No registration. No risk. 100% GDPR compliant."
      }
    }
  },
  tr: {
    translation: {
      "nav": {
        "home": "Ana Sayfa",
        "check": "Kontrol Et",
        "tool": "Hesaplama Aracı",
        "heizkosten": "Isınma Giderleri",
        "co2": "CO2 Hesaplayıcı",
        "verjaehrung": "Zaman Aşımı",
        "glossar": "Sözlük",
        "blog": "Blog"
      },
      "hero": {
        "title": "Yan gider faturanızı 60 saniyede kontrol edin",
        "subtitle": "Almanya'daki kiracılar bilmeden ortalama %20 fazla ödüyor. Etkilenip etkilenmediğinizi şimdi öğrenin.",
        "cta": "Hemen ücretsiz kontrol et →",
        "subtext": "Kayıt yok. Risk yok. %100 KVKK uyumlu."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
