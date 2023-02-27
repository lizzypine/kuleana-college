import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-4 mb-4">
      <Link to="/" className="navbar-brand ms-3 text-uppercase">
        <div className="d-flex">
          <div>
            <FontAwesomeIcon
              icon={faSchool}
              width="1.5em"
              className="d-inline-block me-3 align-baseline"
            />
          </div>
          <div className="navbar-title">Kuleana College</div>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse justify-content-end collapse" id="navbarText">
        <div className="navbar-nav h3 m-2">
          <Link to="/about" className="nav-item nav-link mx-4 text-uppercase">
            About
          </Link>
          <Link to="/contact" className="nav-item nav-link mx-4 text-uppercase">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
