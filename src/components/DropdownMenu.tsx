import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { publicRoute } from 'routes';
import { merge } from 'utils/merge';

const MENU_ITEMS = [
  {
    label: '自分の記録',
    url: publicRoute.home.path,
  },
  { label: '体重グラフ' },
  { label: '目標' },
  { label: '選択中のコース' },
  {
    label: 'コラム一覧',
    url: publicRoute.column.path,
  },
  { label: '設定' },
];

const DropdownMenu = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        className='w-12 h-12 rounded-full flex justify-center items-center hover:bg-white/10'
        onClick={() => setOpen((open) => !open)}
      >
        <img src={require('assets/icons/icon_menu.svg').default} />
      </button>

      <div
        className={merge('absolute right-0 w-[240px] bg-[#777777] shadow-md flex flex-col mt-1', {
          hidden: !open,
        })}
        onClick={() => setOpen(false)}
      >
        {MENU_ITEMS.map((item, index) => {
          return (
            <button
              key={index}
              className='text-start font-jp text-[18px] border-b border-white/10 px-8 py-4 hover:bg-white/10'
              onClick={() => {
                if (item.url) {
                  navigate(item.url);
                }
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownMenu;
