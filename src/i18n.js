import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

const config = {
    fallbackLng: 'en',
    ns: [ 'translation-namespace' ],
    defaultNS: 'translation-namespace',
    debug: true,
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    backend: {
        // for all available options read the backend's repository readme file
        loadPath: '/lang/{{lng}}.json'
    },
    keySeparator: false, // we use content as keys
    react: {
        wait: true
    }
};

const init = () => {
    i18n
    .use( XHR )
    .use( LanguageDetector )
    .init( config );

    return i18n;
};

export default init;
