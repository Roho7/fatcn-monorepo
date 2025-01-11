import * as React from 'react';
import { cn } from '../../lib';
import { Pagination } from '../pagination/pagination';
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  data: Record<string, any>[];
  itemsPerPage?: number;
  tableClassName?: string;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, data, itemsPerPage = 10, tableClassName, ...props }, ref) => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const columns = Object.keys(data[0]).map((key) => ({
      header: key.charAt(0).toUpperCase() + key.slice(1),
      accessor: key,
    }));

    return (
      <div
        className={cn(
          'flex flex-col gap-4 overflow-hidden rounded-lg border border-border shadow bg-background',
          className
        )}
      >
        <div className="relative w-full overflow-auto">
          <table
            ref={ref}
            className={cn('w-full caption-bottom text-sm', tableClassName)}
            {...props}
          >
            <thead className="bg-accent/50 [&_tr]:border-b [&_tr]:border-border">
              <tr className="border-b transition-colors">
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="h-10 p-4 text-left align-middle font-medium text-primary-foreground"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {currentData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-border transition-colors hover:bg-accent/50 data-[state=selected]:bg-accent"
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="p-4 align-middle text-foreground"
                    >
                      {row[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="border-t border-border py-1">
            <Pagination
              length={totalPages}
              currentPage={currentPage}
              onClick={setCurrentPage}
            />
          </div>
        )}
      </div>
    );
  }
);

Table.displayName = 'Table';
export { Table };
