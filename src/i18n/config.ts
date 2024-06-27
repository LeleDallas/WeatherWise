import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './english.json';
import italian from './italian.json';

i18next.use(initReactI18next).init({
    debug: import.meta.env.MODE === 'development',
    lng: 'it',
    defaultNS: 'translation',
    resources: {
        en: { translation: english },
        it: { translation: italian },
    },
});
