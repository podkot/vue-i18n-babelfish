import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueI18nDirectives from 'vue-i18n-directives';

import { locale, formatter } from './formatter.js';
import App from './App.vue';

Vue.use( VueI18n );
Vue.use( VueI18nDirectives );

const dateTimeFormats = {
    'ru' : {
        short : {
            year  : 'numeric',
            month : 'long',
            day   : 'numeric',
        },
    },
};

const numberFormats = {
    'ru' : {
        RUR : {
            style    : 'currency',
            currency : 'RUB',
        },
        USD : {
            style    : 'currency',
            currency : 'USD',
        },
    },
    'en' : {
        USD : {
            style    : 'currency',
            currency : 'USD',
        },
    },
};

const i18n = new VueI18n( {
    locale,
    formatter,
    dateTimeFormats,
    numberFormats,
    messages : { ru: { root: { plural: '#{number} ((штука|штуки|штук)):number' } } },
} );

// eslint-disable-next-line no-new
new Vue( {
    i18n,
    el     : '#app',
    render : h => h( App ),
} );

