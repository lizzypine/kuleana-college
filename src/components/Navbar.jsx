import { Link } from 'react-router-dom'
// import { MortarBoardIcon } from '@primer/octicons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-4 mb-4">
      <Link class="navbar-brand ms-3 text-uppercase" Link to="/">
        <div className="">
          <FontAwesomeIcon
            icon={faSchool}
            width="1.1em"
            class="d-inline-block me-3 align-baseline"
          />
          Kuleana College
        </div>
      </Link>
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
          <Link className="nav-item nav-link mx-4 text-uppercase" Link to="/about">
            About
          </Link>
          <Link className="nav-item nav-link mx-4 text-uppercase" Link to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
