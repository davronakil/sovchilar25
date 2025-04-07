import { i18n } from 'next-i18next';

export const locales = ['en', 'ru', 'uz'];
export const defaultLocale = 'en';

export const getMessages = async (locale: string) => {
  const messages = await import(`./messages/${locale}.json`);
  return messages.default;
};

export const getTranslation = (key: string, locale: string = defaultLocale) => {
  const parts = key.split('.');
  let current: any = i18n?.t || {};

  // Try to get from i18n instance if available
  if (i18n?.t) {
    return i18n.t(key);
  }

  // Fallback to manual lookup in the messages
  return key;
};
