import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './english.json';
import italian from './italian.json';

i18next.use(initReactI18next).init({
    debug: true,
    lng: 'it',
    defaultNS: 'italian',
    resources: {
        en: {english},
        it: {italian}
    },
});