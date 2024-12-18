import { useInfiniteQuery } from '@tanstack/react-query';
import { Button } from 'components/common';
import { useSearch } from 'hooks';
import { Fragment } from 'react';
import { columnService } from 'services';

const FetchColumn = () => {
  const [dataSearch] = useSearch();

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['columnService.fetchColumn', dataSearch],
    ({ pageParam: page }) => columnService.fetchColumn({ ...dataSearch, page }),
    {
      getNextPageParam: ({ currentPage, totalPage }) => {
        if (currentPage < totalPage) {
          return currentPage + 1;
        }
      },
    },
  );

  return (
    <div>
      <div className='flex flex-wrap gap-x-2 gap-y-4'>
        {data?.pages.map(({ data: items }, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div key={item.id} className='flex-grow basis-[20%]'>
                <div
                  className='relative h-[160px]'
                  style={{ background: `url(${item.picture}) no-repeat center / cover` }}
                >
                  <div className='absolute left-0 bottom-0 bg-primary-300 h-[32px] flex items-center px-2 py-1'>
                    {item.date}
                  </div>
                </div>
                <div className='text-dark-400 text-sm font-jp max-line-2 mt-2 mb-1'>{item.description}</div>
                <div className='flex flex-wrap gap-2'>
                  {item.tags.map((item, index) => (
                    <span key={index} className='text-primary-400 text-xs font-jp'>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>

      <div className='flex justify-center my-7'>
        {hasNextPage && (
          <Button className='w-[296px] font-jp' onClick={() => fetchNextPage()}>
            コラムをもっと見る
          </Button>
        )}
      </div>
    </div>
  );
};

export default FetchColumn;
