import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { subjectsApi } from './data/apiSlice'
import 'whatwg-fetch'
import { BrowserRouter } from 'react-router-dom'

export function renderWithProviders(
  ui,
  {
    // preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        // Add the generated reducer as a specific top-level slice
        [subjectsApi.reducerPath]: subjectsApi.reducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(subjectsApi.middleware)
      // preloadedState
    }),
    ...renderOptions
  } = {}
) {
  setupListeners(store.dispatch)

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    )
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
