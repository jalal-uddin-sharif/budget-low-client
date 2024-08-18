import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './authentication/authprovider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
