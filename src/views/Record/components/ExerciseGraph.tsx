import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis } from 'recharts';
import { merge } from 'utils/merge';

const data = [
  { name: '6月', v1: 40, v2: 40 },
  { name: '7月', v1: 35, v2: 37 },
  { name: '8月', v1: 20, v2: 25 },
  { name: '9月', v1: 24, v2: 30 },
  { name: '10月', v1: 23, v2: 29 },
  { name: '11月', v1: 19, v2: 28 },
  { name: '12月', v1: 24, v2: 27 },
  { name: '1月', v1: 18, v2: 30 },
  { name: '2月', v1: 17, v2: 26 },
  { name: '3月', v1: 16, v2: 25 },
  { name: '4月', v1: 15, v2: 24 },
  { name: '5月', v1: 10, v2: 22 },
];

const ExerciseGraph = () => {
  return (
    <div className='bg-dark-500 px-6 py-4 scroll-mt-24' id='body_record'>
      <div className='flex'>
        <div className='text-sm w-[96px]'>BODY RECORD</div>
        <div className='text-[22px]'>2021.05.21</div>
      </div>
      <div className='h-[280px] text-xs'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
            <CartesianGrid stroke='#777777' horizontal={false} />
            <Line dataKey='v1' stroke='#FFCC21' strokeWidth={3} />
            <Line dataKey='v2' stroke='#8FE9D0' strokeWidth={3} />
            <XAxis dataKey='name' stroke='#FFFC' axisLine={false} tickLine={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className='flex gap-4'>
        {[{ label: '日' }, { label: '週' }, { label: '月' }, { label: '年', active: true }].map((item, index) => (
          <div
            key={index}
            className={merge(
              'w-[56px] h-[24px] flex justify-center items-center rounded-xl bg-white text-primary-300 font-jp',
              { 'bg-primary-300 text-white': item.active },
            )}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseGraph;
