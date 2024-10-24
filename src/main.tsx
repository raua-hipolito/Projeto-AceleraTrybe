import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Provider from './context/Provider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Provider>
    <App />
  </Provider>
  </BrowserRouter>,
)
