import React from 'react'
import {StarFillIcon} from '@primer/octicons-react'

function NavLink() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav h3 m-2">
            <a className="nav-item nav-link mx-4" href="/">Home</a>
            <div className="my-auto">
              <StarFillIcon verticalAlign="middle" size={40} />
            </div>
            <a className="nav-item nav-link mx-4" href="/">About</a>
            <div className="my-auto">
              <StarFillIcon verticalAlign="middle" size={40} />
            </div>
            <a className="nav-item nav-link mx-4" href="/">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavLink