import { Link, useLocation } from 'react-router-dom';
import { publicRoute } from 'routes';
import { merge } from 'utils/merge';

type MenuItemProps = {
  path: string;
  name?: string;
  icon?: JSX.Element;
  count?: number;
};

const MenuItem = ({ path, name, icon, count }: MenuItemProps) => {
  const location = useLocation();
  const isHome = location.pathname === publicRoute.home.path;
  const isSelected = !isHome ? location.pathname === path : location.pathname.startsWith(path);

  return (
    <Link to={path}>
      <div
        className={merge('inline-flex items-center gap-2 px-2 py-1 rounded hover:bg-white/20', {
          'bg-white/10': isSelected,
        })}
      >
        <span className='relative'>
          {icon}
          {count && (
            <div className='absolute top-[-2px] right-[-6px] min-w-[16px] min-h-[16px] text-[10px] bg-primary-500 rounded-full flex justify-center items-center px-1'>
              {count}
            </div>
          )}
        </span>
        <span className='text-base font-jp'>{name}</span>
      </div>
    </Link>
  );
};

const Menu = () => {
  return (
    <>
      <MenuItem {...publicRoute.home} icon={<img src={require('assets/icons/icon_memo.svg').default} />} />
      <MenuItem {...publicRoute.record} icon={<img src={require('assets/icons/icon_challenge.svg').default} />} />
      <MenuItem {...publicRoute.column} icon={<img src={require('assets/icons/icon_info.svg').default} />} count={1} />
    </>
  );
};

export default Menu;
