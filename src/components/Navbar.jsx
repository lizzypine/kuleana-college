import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-4 mb-4">
      <Link className="navbar-brand ms-3 text-uppercase" Link to="/">
        <div className="d-flex">
          <div>
            <FontAwesomeIcon
              icon={faSchool}
              width="1.5em"
              className="d-inline-block me-3 align-baseline"
            />
          </div>
          <div>Kuleana College</div>
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
