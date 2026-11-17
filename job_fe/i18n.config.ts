import en from './locales/en.json'
import ja from './locales/ja.json'

export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ja,
  },
}))
