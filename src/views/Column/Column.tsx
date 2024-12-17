import { FetchColumn } from './components';

const COLUMNS_TYPES = [
  {
    label: 'RECOMMENDED COLUMN',
    name: 'オススメ',
  },
  {
    label: 'RECOMMENDED DIET',
    name: 'ダイエット',
  },
  {
    label: 'RECOMMENDED BEAUTY',
    name: '美容',
  },
  {
    label: 'RECOMMENDED HEALTH',
    name: '健康',
  },
];

const Column = () => {
  return (
    <div className='container-lg space-y-[56px] my-[56px]'>
      <div className='flex justify-between'>
        {COLUMNS_TYPES.map((item, index) => (
          <div key={index} className='w-[216px] h-[144px] bg-dark-600 flex flex-col justify-center items-center'>
            <div className='text-primary-300 text-center text-[22px] leading-[28px]'>{item.label}</div>
            <div className='border-t border-white w-[56px] my-2' />
            <div className='font-jp text-[18px]'>{item.name}</div>
          </div>
        ))}
      </div>

      <FetchColumn />
    </div>
  );
};

export default Column;
