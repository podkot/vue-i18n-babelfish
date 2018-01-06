import BabelfishFormatter from 'vue-i18n-babelfish';

export const locale = 'ru';
export const formatter = new BabelfishFormatter( {
    locale,
    fallbacks : { 'uk': 'ru' },
} );
