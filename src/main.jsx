import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToasterProvider } from './context/TosterContext';
import App from './App.jsx'
import 'src/styles/global.css'
import 'src/styles/responsive.css'
import 'rsuite/dist/rsuite.min.css'; 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ToasterProvider>
        <App />
      </ToasterProvider>
    </BrowserRouter>
  </StrictMode>,
)
