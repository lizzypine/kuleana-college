import AppRoutes from './router/routes'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
