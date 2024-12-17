import { Column } from 'views/Column';
import { Home } from 'views/Home';
import { Record } from 'views/Record';

const publicRoute = {
  home: {
    path: '/',
    name: '自分の記録',
    component: Home,
  },
  record: {
    path: '/record',
    name: 'チャレンジ',
    component: Record,
  },
  column: {
    path: '/column',
    name: 'お知らせ',
    component: Column,
  },
};

export default publicRoute;
