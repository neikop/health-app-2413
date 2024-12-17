import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoute } from 'routes';

const AuthLayout = () => {
  return (
    <main className='flex justify-center items-center'>
      <Routes>
        {Object.values(authRoute).map(({ path, component: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        <Route path='/*' element={<Navigate to={authRoute.login.path} />} />
      </Routes>
    </main>
  );
};

export default AuthLayout;
