import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// IMPORT ROUTER NPM PACKAGE
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import './index.css';

// IMPORT PAGES
import App from './App.jsx';
import Home from './Pages/Home/Home.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';

// this setup only testing purpose using //
// SETUP ROUTER
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
