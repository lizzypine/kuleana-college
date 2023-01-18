import { Link } from 'react-router-dom'
import { StarFillIcon } from '@primer/octicons-react'

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav h3 m-2">
            <Link className="nav-item nav-link mx-4" Link to="/">
              Home
            </Link>
            <div className="my-auto">
              <StarFillIcon verticalAlign="middle" size={40} />
            </div>
            <Link className="nav-item nav-link mx-4" Link to="/about">
              About
            </Link>
            <div className="my-auto">
              <StarFillIcon verticalAlign="middle" size={40} />
            </div>
            <Link className="nav-item nav-link mx-4" Link to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
