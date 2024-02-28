import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {NextUIProvider} from '@nextui-org/react'
import { Toaster } from 'sonner'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NextUIProvider>
        <App />
        <Toaster 
          position="bottom-left" 
          closeButton 
        />
      </NextUIProvider>
  </React.StrictMode>,
)
