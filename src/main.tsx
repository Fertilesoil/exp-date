import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProductProvider } from './context/ContextApi.tsx'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={routes} />
    </ProductProvider>
  </StrictMode>,
)
