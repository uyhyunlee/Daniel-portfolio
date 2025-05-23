import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import About from './components/About.tsx'
import Layout from './components/Layout.tsx'
import { DrawerProvider } from './contexts/DrawerContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <App />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'work',
        element: <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '80vh',
          fontSize: '2rem'
        }}>
          Work page coming soon...
        </div>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DrawerProvider>
      <RouterProvider router={router} />
    </DrawerProvider>
  </StrictMode>,
)
