import { BannerGraph, FetchMeal } from './components';

const Home = () => {
  return (
    <>
      <div className='container-xl'>
        <div className='flex'>
          <div
            className='h-[320px] w-[540px] flex justify-center items-center'
            style={{ background: `url(${require('assets/images/meal_d_01.jpg')}) no-repeat center / cover` }}
          >
            <div className='w-[180px] h-[180px] rounded-full border-[3px] border-white border-t-transparent flex justify-center items-center -rotate-45 shadow-md'>
              <div className='rotate-45'>
                <span className='text-[18px] shadow-md mr-1'>05/21</span>
                <span className='text-[24px] shadow-md'>75%</span>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <BannerGraph />
          </div>
        </div>
      </div>

      <div className='container-lg'>
        <FetchMeal />
      </div>
    </>
  );
};

export default Home;
