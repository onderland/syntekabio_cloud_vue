import { createI18n } from 'vue-i18n';

import en from './en.json';
import ko from './ko.json';

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  fallbackLocale: 'en',
  messages: {
    en,
    ko
  }
});
