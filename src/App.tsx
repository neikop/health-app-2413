import { QueryClientProvider } from '@tanstack/react-query';
import { AuthLayout, PublicLayout } from 'layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { queryClient } from 'services';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/auth/*' element={<AuthLayout />} />
          <Route path='/*' element={<PublicLayout />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
