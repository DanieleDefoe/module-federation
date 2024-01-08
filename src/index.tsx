import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from "@/pages/about";
import { Shop } from "@/pages/shop";

const rootNode = document.getElementById('root')!;

const root = createRoot(rootNode);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
