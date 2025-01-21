import { Pagination } from '@fatcn-ui';
import { useState } from 'react';

const PaginationExample = () => {
    const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination length={10} onClick={setCurrentPage} currentPage={currentPage} />
  )
}

export default PaginationExample