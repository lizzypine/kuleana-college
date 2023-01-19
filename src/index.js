import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
