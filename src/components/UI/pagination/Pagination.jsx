import React from 'react';
import { usePagination } from '../../../hooks/usePagination';
import { MyButton } from '../button/MyButton';

export const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className='page__wrapper'>
      {pagesArray.map((p, i) => (
        <MyButton
          key={i}
          onClick={() => changePage(p)}
          active={page === p ? 'active' : ''}
        >
          {p}
        </MyButton>
      ))}
    </div>
  );
};
