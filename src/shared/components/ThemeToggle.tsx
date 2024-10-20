import { cn } from '@lib/utils';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { Separator } from './Separator';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme('light')}
        className={cn({
          'text-muted-foreground hover:bg-background': theme === 'light',
        })}
      >
        {t('theme.light', 'Light')}
      </Button>
      <Separator orientation="vertical" className="h-3 bg-foreground" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme('dark')}
        className={cn({
          'text-muted-foreground bg-background': theme === 'dark',
        })}
      >
        {t('theme.dark', 'Dark')}
      </Button>
    </div>
  );
};

export default ThemeToggle;
