<template>
  <div id="app">
    <p>
        <code>$t('root.plural', { number: 3 })</code>:<br />
        {{ $t('root.plural', { number: 3 }) }}
    </p>

    <p>
        <code>$t('app.plural', { count: 5 })</code><br />
        (<b>NB:</b> passing scalar, `5` instead of `{ count: 5 }`, doesn't work):<br />
        {{ $t('app.plural', { count: 5 }) }}
    </p>

    <p>
        <code>&lt;p v-html="$t('app.md')"&gt;&lt;/p&gt;</code><br />
        <span v-html="$t('app.md')"></span>
    </p>

    <p>
        input placeholder via <a href="https://www.npmjs.com/package/vue-i18n-directives">vue-i18n-directives</a>:<br />
        <code>&lt;input v-tp="'app.placeholder'"&gt;</code><br />
        <input v-tp="'app.placeholder'" />
    </p>

    <p>
        <code>$d(new Date(), 'short')</code>:<br />
        {{ $d(new Date(), 'short') }}
    </p>

    <p>
        <code>$n(10020)</code>:<br />
        {{ $n(10020) }}
    </p>

    <p>
        <code>$n( 1000.50, 'RUR')</code>:<br />
        {{ $n( 1000.50, 'RUR') }}
    </p>

    <p>
        <code>$n( 1000.50, 'USD')</code>:<br />
        {{ $n( 1000.50, 'USD') }}
    </p>

    <p>
        <code>$n( 1000.50, 'USD', 'en')</code>:<br />
        {{ $n( 1000.50, 'USD', 'en') }}
    </p>
  </div>
</template>

<script>

import dict from './App.ru.yaml';

// as for now, have to import formatter in every component.
// look at https://github.com/kazupon/vue-i18n/pull/269
import { locale, formatter } from './formatter.js';

const i18n = {
    locale,
    formatter,
    messages: {
        ru: dict.locales.ru,
    },
};

export default {
  name: 'app',
  i18n
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 30px 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
