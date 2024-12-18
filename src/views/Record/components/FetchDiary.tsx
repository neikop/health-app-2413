import { useInfiniteQuery } from '@tanstack/react-query';
import { Button } from 'components/common';
import { useSearch } from 'hooks';
import { Fragment } from 'react';
import { diaryService } from 'services';

const FetchDiary = () => {
  const [dataSearch] = useSearch();

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['diaryService.searchItem', dataSearch],
    ({ pageParam: page }) => diaryService.fetchDiary({ ...dataSearch, page }),
    {
      getNextPageParam: ({ currentPage, totalPage }) => {
        if (currentPage < totalPage) {
          return currentPage + 1;
        }
      },
    },
  );

  return (
    <div className='text-dark-500'>
      <div className='text-[22px]'>MY DIARY</div>

      <div className='flex flex-wrap gap-3'>
        {data?.pages.map(({ data: items }, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div key={item.id} className='h-[231px] flex-grow basis-[20%] border-2 border-dark-400 p-4'>
                <div className='text-[18px] leading-[22px] mb-2 max-w-[60%]'>{item.date}</div>
                <div className='whitespace-pre-line max-line-9 text-xs'>{item.content}</div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>

      <div className='flex justify-center my-7'>
        {hasNextPage && (
          <Button className='w-[296px] font-jp' onClick={() => fetchNextPage()}>
            自分の日記をもっと見る
          </Button>
        )}
      </div>
    </div>
  );
};

export default FetchDiary;
