import React, { Component } from 'react'

class Header extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="https://kuleanacollege.com">Home</a>
              <a className="nav-item nav-link " href="https://kuleanacollege.com">Home</a>
              <a className="nav-item nav-link" href="https://kuleanacollege.com">Subjects</a>
              <a className="nav-item nav-link" href="https://kuleanacollege.com">About</a>
              <a className="nav-item nav-link" href="https://kuleanacollege.com">Contact</a>
            </div>
          </div>
        </nav>
        <div className="container-fluid d-flex hero align-items-center text-center">
          <div className="row">
            <h1 className="text-center align-self-center">Kuleana College</h1>
          </div>
          <div className="row">
            <h3 className="text-center align-self-center">Real World Lessons in Life</h3>
          </div>
        </div>
      </div>
    );

  }
}

export default Header;