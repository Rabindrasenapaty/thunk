import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* ✅ This is required for <Link>, <Route>, etc. */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
