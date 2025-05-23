import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import About from './components/About.tsx'
import Work from './components/Work.tsx'
import ProjectDetail from './components/ProjectDetail.tsx'
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
        element: <Work />,
      },
      {
        path: 'work/:projectId',
        element: <ProjectDetail />,
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
