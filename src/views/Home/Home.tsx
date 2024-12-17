import { useInfiniteQuery } from '@tanstack/react-query';
import { Button, HexagonButton } from 'components';
import { useSearch } from 'hooks';
import { Fragment } from 'react';
import { mealService } from 'services';
import { merge } from 'utils/merge';

const FITLER_BUTTONS = [
  {
    icon: require('assets/icons/icon_knife.svg').default,
    label: 'Morning',
    value: 'm',
  },
  {
    icon: require('assets/icons/icon_knife.svg').default,
    label: 'Lunch',
    value: 'l',
  },
  {
    icon: require('assets/icons/icon_knife.svg').default,
    label: 'Dinner',
    value: 'd',
  },
  {
    icon: require('assets/icons/icon_cup.svg').default,
    label: 'Snack',
    value: 's',
  },
];

const Home = () => {
  const [dataSearch, onSearchChange] = useSearch();

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['marketService.searchItem', dataSearch],
    ({ pageParam: page }) => mealService.fetchMeal({ ...dataSearch, page }),
    {
      getNextPageParam: ({ currentPage, totalPage }) => {
        if (currentPage < totalPage) {
          return currentPage + 1;
        }
      },
    },
  );

  return (
    <>
      <div className='container-xl'>
        <div className='flex'>
          <div
            className='h-[320px] w-[540px]'
            style={{ background: `url(${require('assets/images/meal_d_01.jpg')}) no-repeat center / cover` }}
          />
          <div className='flex-1 bg-dark-200'></div>
        </div>
      </div>

      <div className='container-lg pb-7'>
        <div className='flex justify-evenly my-8'>
          {FITLER_BUTTONS.map((item, index) => {
            const isSelected = dataSearch.type === item.value;
            return (
              <HexagonButton
                key={index}
                className={merge('flex flex-col justify-center items-center', {
                  'brightness-110': isSelected,
                })}
                onClick={() => onSearchChange({ type: isSelected ? undefined : item.value })}
              >
                <img src={item.icon} className='w-[56px]' />
                <span>{item.label}</span>
              </HexagonButton>
            );
          })}
        </div>

        <div className='flex flex-wrap gap-2'>
          {data?.pages.map(({ data: items }, index) => (
            <Fragment key={index}>
              {items.map((item) => (
                <div
                  key={item.id}
                  className='relative h-[234px] flex-grow basis-[20%]'
                  style={{ background: `url(${item.picture}) no-repeat center / cover` }}
                >
                  <div className='absolute left-0 bottom-0 bg-primary-300 w-[50%] h-[32px] flex items-center px-2 py-1'>
                    {item.name}
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>

        <div className='flex justify-center my-7'>
          {hasNextPage && (
            <Button className='w-[296px]' onClick={() => fetchNextPage()}>
              記録をもっと見る
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
