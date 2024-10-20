import { useTranslation } from 'react-i18next';
import { SearchIcon } from './Icons';
import { Input } from './Input';

type SearchbarProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Searchbar = ({ value, onChange, className }: SearchbarProps) => {
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder={t('searchbar.placeholder', 'Search...')}
      className={className}
      iconBefore={<SearchIcon className="text-input" />}
    />
  );
};

export default Searchbar;
