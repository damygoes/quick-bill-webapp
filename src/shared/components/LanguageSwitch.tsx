import { resources } from '@services/i18n/i18n';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('quickbill_lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  const switchLanguage = async (lang: string) => {
    try {
      await i18n.changeLanguage(lang);
      localStorage.setItem('quickbill_lang', lang);
    } catch (error) {
      console.error('Error changing language', error);
    }
  };

  const languageOptions = Object.keys(resources).map((lang) => (
    <SelectItem key={lang} value={lang}>
      {lang.toUpperCase()}
    </SelectItem>
  ));

  return (
    <Select defaultValue={i18n.language} onValueChange={switchLanguage}>
      <SelectTrigger className="focus:border-none focus:outline-none focus:ring-0">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>{languageOptions}</SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitch;
