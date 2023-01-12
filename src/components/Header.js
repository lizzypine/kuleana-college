import React, { Component } from 'react'

class Header extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav h3 m-2">
              <a className="nav-item nav-link mx-3" href="/">Home</a>
              <a className="nav-item nav-link mx-3" href="/">About</a>
              <a className="nav-item nav-link mx-3" href="/">Contact</a>
            </div>
          </div>
        </nav>

        <div className="container-fluid d-flex flex-column w-100 hero justify-content-center align-items-center">
          <div className="row text-center">
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
    );

  }
}

export default Header;