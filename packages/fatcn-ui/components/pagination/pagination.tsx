import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  MoreHorizontalIcon,
} from 'hugeicons-react';
import * as React from 'react';
import { cn } from '../../lib';
import { Button } from '../button';

interface PaginationProps {
  length: number;
  onClick: (value: number) => void;
  className?: string;
  currentPage?: number;
}

const Pagination = ({
  length,
  onClick,
  className,
  currentPage = 1,
}: PaginationProps) => {
  const getPageNumbers = () => {
    if (length <= 5) {
      return Array.from({ length }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    pages.push(1);

    if (currentPage <= 3) {
      pages.push(2, 3, 4);
      pages.push('_blank');
    } else if (currentPage >= length - 2) {
      pages.push('_blank');
      pages.push(length - 3, length - 2, length - 1);
    } else {
      pages.push('_blank');
      pages.push(currentPage - 1, currentPage, currentPage + 1);
      pages.push('_blank');
    }

    pages.push(length);

    return pages;
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
    >
      <div className="flex flex-row items-center gap-1">
        <Button
          size="xs"
          variant="ghost"
          onClick={() => onClick(Math.max(1, currentPage - 1))}
          className={cn(currentPage === 1 && 'invisible', 'gap-1')}
          aria-label="Go to previous page"
        >
          <ArrowLeft01Icon size={16} />
        </Button>

        {getPageNumbers().map((pageNumber, index) => (
          <div key={index}>
            {pageNumber === '_blank' ? (
              <span className="px-3 py-2">
                <MoreHorizontalIcon size={16} />
              </span>
            ) : (
              <Button
                size="xs"
                variant={'ghost'}
                onClick={() => onClick(pageNumber as number)}
                className={cn(pageNumber === currentPage ? 'bg-accent' : '')}
                aria-current={pageNumber === currentPage ? 'page' : undefined}
              >
                {pageNumber}
              </Button>
            )}
          </div>
        ))}

        <Button
          size="xs"
          variant="ghost"
          onClick={() => onClick(Math.min(length, currentPage + 1))}
          className={cn(currentPage === length && 'invisible', 'gap-1')}
          aria-label="Go to next page"
        >
          <ArrowRight01Icon size={16} />
        </Button>
      </div>
    </nav>
  );
};

export { Pagination };
