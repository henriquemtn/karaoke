import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterManager from './routes/router.tsx'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './token/userContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <ToastContainer />
      <RouterManager />
    </UserProvider>
  </React.StrictMode>,
)
