import { Link } from 'react-router-dom'
import { MortarBoardIcon } from '@primer/octicons-react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-5">
      <div className="p-2">
        <MortarBoardIcon size={40} class="mr-2" />
        <Link class="navbar-brand ms-3" Link to="/">
          Kuleana College
        </Link>
      </div>
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
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav h3 m-2">
          <Link className="nav-item nav-link mx-4" Link to="/about">
            About
          </Link>
          <Link className="nav-item nav-link mx-4" Link to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
