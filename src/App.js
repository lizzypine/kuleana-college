import { Provider } from 'react-redux'
import AppRoutes from './router/routes'
import store from './store/store'

// Components
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import './App.css'

function App() {
  // const lessons = [
  //   { id: '9', title: 'responsibility-self' },
  //   { id: '2', title: 'compromise' }
  // ]

  return (
    <Provider store={store}>
      <div className="container">
        <Navbar />
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
