import { ScrollArea } from '@components/ScrollArea';
import { cn } from '@lib/utils';
import React, { useMemo, useState } from 'react';

interface ListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  scrollContainerHeight?: string;
  filterFn?: (item: T) => boolean;
  sortFn?: (a: T, b: T) => number;
  searchQuery?: string;
  searchFields?: Array<keyof T>;
  itemsPerPage?: number;
}

//The comma after T is needed to avoid ambiguity between JSX and generic syntax.
const List = <T,>({
  data,
  renderItem,
  scrollContainerHeight,
  filterFn,
  sortFn,
  searchQuery,
  searchFields = [],
  itemsPerPage = 10,
  ...rest
}: ListProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Memoize the filtered, sorted, and searched data
  const processedData = useMemo(() => {
    let filteredData = data;

    // Filtering
    if (filterFn) {
      filteredData = filteredData.filter(filterFn);
    }

    // Searching
    if (searchQuery && searchFields.length > 0) {
      filteredData = filteredData.filter((item) =>
        searchFields.some((field) =>
          String(item[field]).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Sorting
    if (sortFn) {
      filteredData = filteredData.sort(sortFn);
    }

    return filteredData;
  }, [data, filterFn, sortFn, searchQuery, searchFields]);

  // Calculate pagination
  const totalPages = Math.ceil(processedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = processedData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <ScrollArea
        className={cn(
          'w-full h-[200px] p-4 border rounded-md',
          scrollContainerHeight
        )}
        {...rest}
      >
        {currentItems.map((item, index) => (
          <div key={index} className="my-2">
            {renderItem(item, index)}
          </div>
        ))}
      </ScrollArea>

      <div className="flex justify-end w-full gap-4 mt-4">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default List;
