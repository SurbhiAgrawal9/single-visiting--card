// Stylesheets
import './index.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// React
import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Spin } from 'antd';

// components
import App from './App';
import ErrorPage from './utils/ErrorPage';
import ComingSoon from './utils/ComingSoon';
import Home from './components/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} errorElement={<ErrorPage />}>
        <Route path='' element={<Home />} />
        <Route path='Arjun-Mehta' element={<Home />} />
        <Route path='coming-soon' element={<ComingSoon />} />
      </Route>
    </>
  )
  
);

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Spin />}>
    <RouterProvider router={router} />
  </Suspense>
);