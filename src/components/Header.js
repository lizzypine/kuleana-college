import React from 'react'

function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav h3 m-2">
            <a className="nav-item nav-link mx-4" href="/">Home</a>
            <a className="nav-item nav-link mx-4" href="/">About</a>
            <a className="nav-item nav-link mx-4" href="/">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container-fluid d-flex align-items-center justify-content-center flex-column hero">
        <div className="row">
          <div className="col"> 
            <h1 className="">Kuleana College</h1>
          </div>
        </div>

        <div className="row">
          <div className="col"> 
            <h3 className="">Real World Lessons in Life</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header