function ErrorPage() {
  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-center align-items-center">
      <div className="row justify-content-center">
        <div className="d-flex flex-column justify-content-center align-items-center m-3 overflow-hidden">
          <div className="textWrapper text-center">
            <h1>404 Not Found</h1>
            <hr className="title-divider"></hr>
            <h2>Sorry, this page does not exist.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
