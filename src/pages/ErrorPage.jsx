import { useRouteError, Link } from 'react-router-dom'
function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-center align-items-center">
      <div className="row justify-content-center">
        <div className="d-flex flex-column justify-content-center align-items-center m-3 overflow-hidden">
          <div className="textWrapper text-center">
            <h1>{error.message} ERROR</h1>
            <Link to="/">Back to homepage</Link>
            <hr className="title-divider"></hr>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
