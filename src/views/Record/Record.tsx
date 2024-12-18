import { ExerciseGraph, ExerciseTable, FetchDiary } from './components';

const RECORD_TYPES = [
  {
    id: 'body_record',
    label: 'BODY RECORD',
    description: '自分のカラダの記録',
    picture: require('assets/images/recommend_01.jpg'),
  },
  {
    id: 'my_exercise',
    label: 'MY EXERCISE',
    description: '自分の運動の記録',
    picture: require('assets/images/recommend_02.jpg'),
  },
  {
    id: 'my_diary',
    label: 'MY DIARY',
    description: '自分の日記',
    picture: require('assets/images/recommend_03.jpg'),
  },
];

const Record = () => {
  const handleSectionClick = (section: string) => {
    console.log(document.getElementById(section));
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className='container-lg space-y-[56px] my-[56px]'>
      <div className='flex justify-between'>
        {RECORD_TYPES.map((item, index) => (
          <div
            key={index}
            className='w-[288px] h-[288px] bg-dark-600 border-[24px] border-primary-300 flex flex-col justify-center items-center relative'
          >
            <img
              src={item.picture}
              className='h-full absolute top-0 left-0 object-cover mix-blend-luminosity opacity-25 hover:brightness-125 cursor-pointer'
              onClick={() => handleSectionClick(item.id)}
            />
            <div className='text-primary-300 text-[25px] z-10'>{item.label}</div>
            <div className='w-[160px] bg-primary-500 text-center font-jp z-10'>{item.description}</div>
          </div>
        ))}
      </div>

      <ExerciseGraph />
      <ExerciseTable />
      <FetchDiary />
    </div>
  );
};

export default Record;
