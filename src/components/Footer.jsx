import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <hr />
        <ul className="navbar-nav flex-row align-items-center justify-content-center">
          <li className="nav-item mx-3 text-muted">Kuleana College 2023</li>
          <li className="nav-item mx-3 text-muted">
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
