import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { AppLocale } from '../AppLocale.enum';
import { defaultLocale } from '../defaultLocale';
import { translations } from '../../../i18n/messages';
import { LocaleContext } from '../localeContext/LocaleContext';

export const LocaleContextController: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<AppLocale>(defaultLocale);

  return (
    <IntlProvider defaultLocale={defaultLocale} locale={locale} messages={translations[locale]}>
      <LocaleContext.Provider value={{ defaultLocale, locale, setLocale }}>{children}</LocaleContext.Provider>
    </IntlProvider>
  );
};