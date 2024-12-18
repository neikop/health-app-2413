const generateRecord = () => ({
  id: Math.random(),
  label: '家事全般（立位・軽い）',
  kcal: 26,
  time: '10 min',
});

type RecordType = {
  id: number;
  label: string;
  kcal: number;
  time: string;
};

const Record = ({ record }: { record: RecordType }) => (
  <div className='flex gap-2 pr-3 py-1 border-b border-dark-400'>
    <div className='text-xs'>●</div>
    <div className='text-sm'>
      <div className='font-jp'>{record.label}</div>
      <div className='text-primary-300'>{record.kcal}kcal</div>
    </div>
    <div className='ml-auto text-primary-300 text-lg'>{record.time}</div>
  </div>
);

const ExerciseTable = () => {
  return (
    <div className='h-[280px] bg-dark-500 px-6 py-4 flex flex-col scroll-mt-24' id='my_exercise'>
      <div className='flex'>
        <div className='text-sm w-[96px] pr-3'>MY EXERCISE</div>
        <div className='text-[22px]'>2021.05.21</div>
      </div>
      <div className='flex items-start gap-10 mt-2'>
        <div className='flex-grow basis-[40%] h-[196px] pr-2 overflow-y-auto'>
          {Array.from({ length: 4 })
            .map(() => generateRecord())
            .map((item) => (
              <Record key={item.id} record={item} />
            ))}
        </div>
        <div
          className='flex-grow basis-[40%] h-[196px] pr-2 overflow-y-auto'
          style={{ scrollbarColor: 'var(--color-primary-300) var(--color-dark-400)', scrollbarWidth: 'thin' }}
        >
          {Array.from({ length: 14 })
            .map(() => generateRecord())
            .map((item) => (
              <Record key={item.id} record={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseTable;
