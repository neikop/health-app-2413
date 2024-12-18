import { MoveTopButton } from 'components';
import { AppFooter, AppHeader } from 'containers';
import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoute } from 'routes';

const PublicLayout = () => {
  return (
    <main>
      <AppHeader />
      <div style={{ minHeight: 'calc(100vh - 64px - 128px)' }}>
        <Routes>
          {Object.values(publicRoute).map(({ path, component: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route path='*' element={<Navigate to={publicRoute.home.path} />} />
        </Routes>
      </div>
      <AppFooter />
      <MoveTopButton />
    </main>
  );
};

export default PublicLayout;
