import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { subjectsApi } from './data/apiSlice'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApiProvider api={subjectsApi}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ApiProvider>
  </Provider>
)
