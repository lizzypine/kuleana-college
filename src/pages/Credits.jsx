import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Credits() {
  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap align-items-center">
      <div className="row justify-content-center">
        <div className="text-center mb-4">
          <h1>Image Credits</h1>
          <hr className="title-divider"></hr>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center m-3 overflow-hidden">
          <div className="text-center">
            <ul className="text-start image-credits">
              <li>
                <FontAwesomeIcon
                  icon={faStar}
                  width=".5em"
                  className="d-inline-block me-3 align-center"
                />
                <a href="https://www.vecteezy.com/members/yellow-people">Nakin Poonsri</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStar}
                  width=".5em"
                  className="d-inline-block me-3 align-center"
                />
                <a href="https://www.vecteezy.com/members/cozydesign">cozydesign</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStar}
                  width=".5em"
                  className="d-inline-block me-3 align-center"
                />
                <a href="https://www.vecteezy.com/members/doodervector">Dooder</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStar}
                  width=".5em"
                  className="d-inline-block me-3 align-center"
                />
                <a href="https://www.vecteezy.com/members/imajin-noasking">imajin noasking</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStar}
                  width=".5em"
                  className="d-inline-block me-3 align-center"
                />
                <a href="https://www.vecteezy.com/members/illustration4stock224427">
                  illustration4stock224427
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credits
