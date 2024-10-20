import Searchbar from '@components/Searchbar';
import { cn } from '@lib/utils';
import { useSearch } from '@shared/context/SearchContext';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  withSearch?: boolean;
  className?: string;
}

const Container = ({
  children,
  withSearch = true,
  className,
}: ContainerProps) => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <section
      className={cn(
        'flex flex-col items-start justify-start w-full h-full gap-4 p-4',
        className
      )}
    >
      {withSearch && (
        <div className="flex items-center justify-end w-full">
          <Searchbar
            value={searchQuery}
            onChange={setSearchQuery}
            className="w-1/4"
          />
        </div>
      )}
      {children}
    </section>
  );
};

export default Container;
