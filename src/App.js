import AppRoutes from './router/routes'
import './App.css'
import Navbar from './components/Navbar'
// import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
