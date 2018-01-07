# 🌐 vue-i18n-babelfish

[nodeca/babelfish](https://github.com/nodeca/babelfish)-based custom formatter for [vue-i18n](https://github.com/kazupon/vue-i18n).

Installation:
```shell
yarn add vue-i18n-babelfish
# or
npm i vue-i18n-babelfish
```

Usage:

```javascript
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import BabelfishFormatter from 'vue-i18n-babelfish';
import App from './App.vue';

Vue.use( VueI18n );

const locale = 'ru';

const formatter = new BabelfishFormatter( {
    locale,
    fallbacks : {
        'uk': 'ru',
    },
} );

const i18n = new VueI18n( {
    locale,
    formatter,
    messages : {},
} );

// eslint-disable-next-line no-new
new Vue( {
    i18n,
    el     : '#app',
    render : h => h( App ),
} );
```

`Example` folder of the project contains webpack-powered example, using [regru/dict-loader](https://github.com/regru/dict-loader).
