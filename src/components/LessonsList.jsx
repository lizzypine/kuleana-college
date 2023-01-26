import { useNavigate, Link, useParams } from 'react-router-dom'

import { useGetLessonsQuery } from '../data/subjects'

function LessonsList() {
  const params = useParams()
  const { data, isLoading, error } = useGetLessonsQuery(params.subjectId)
  const navigate = useNavigate()

  const subjectNames = {
    1: 'Finance',
    2: 'Responsibility',
    3: 'Principles'
  }

  const subjectName = subjectNames[params.subjectId]

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-start align-items-center">
      <div className="row justify-content-center subjectsContainer">
        <div className="text-center mb-3">
          <h1>{subjectName}</h1>
          <hr className="title-divider"></hr>
        </div>
        <div className="d-flex justify-content-center">
          {isLoading && (
            <div className="spinner-border " role="status">
              <span className="sr-only"></span>
            </div>
          )}
          {error ? 'There has been an error...' : ''}
        </div>
        {data &&
          data.map((lesson) => (
            <div
              className="d-flex flex-column col-5 justify-content-center align-items-center card m-3 overflow-hidden"
              key={lesson.LessonID}>
              <Link className="text-decoration-none" Link to={`${lesson.LessonID}`}>
                <div className="">
                  <img
                    className="subjectLessonImage img-fluid mb-3"
                    // Image file names are based on the original website's image files.
                    src={
                      `/images/${lesson.ImageName.substring(13, lesson.ImageName.length - 4)}` +
                      '.jpg'
                    }
                    alt={lesson.LessonTitle + ' Image'}
                    // Use a placeholder image if none available.
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null
                      currentTarget.src = '/images/Self.jpg'
                    }}
                  />
                </div>
                <div className="textWrapper text-center">
                  <h2>{lesson.LessonTitle}</h2>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="m-3">
        <button type="button" className="btn btn-back nav-item" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  )
}

export default LessonsList
