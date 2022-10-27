import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import esTranslation from './es.json';
import caTranslation from './ca.json';

// Obtendremos el idima del navegador del usuario
let languageNavigator = navigator.language;
let language = null;
switch (languageNavigator) {
	case 'en-EN':
		language = 'en';
		break;
	case 'es-ES':
		language = 'es';
		break;
	case 'ca':
		language = 'ca';
		break;
	default:
		language = 'en';
}

const resources = {
	en: {
		translation: enTranslation,
	},
	es: {
		translation: esTranslation,
	},
	ca: {
		translation: caTranslation,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: language,
	keySeparator: false,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
