import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './router/routes'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 background">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
