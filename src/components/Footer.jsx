import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer mt-auto py-5">
      <div className="container">
        <hr />
        <ul className="navbar-nav flex-row align-items-center justify-content-center">
          <li className="footer-nav-item mx-3">Kuleana College {new Date().getFullYear()}</li>
          <li className="footer-nav-item mx-3">
            <Link className="nav-link active" aria-current="page" Link to="/credits">
              Credits
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
