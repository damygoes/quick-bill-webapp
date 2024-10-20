import { LanguagesIcon, ThemeIcon } from '@components/Icons';
import LanguageSwitch from '@components/LanguageSwitch';
import { NavSwitchItem } from '@components/navigation/NavSwitches';
import ThemeToggle from '@components/ThemeToggle';

const navSwitchItems = () => {
  const items: NavSwitchItem[] = [
    {
      title: <ThemeToggle />,
      icon: ThemeIcon,
    },
    {
      title: <LanguageSwitch />,
      icon: LanguagesIcon,
    },
  ];
  return items;
};

export default navSwitchItems;
