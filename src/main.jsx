import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './features/store.js'
import { Provider } from 'react-redux'
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
       <ToastContainer />
    </Provider>
  </StrictMode>,
)
