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
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-center align-items-center p-1">
      <div className="row justify-content-center">
        <div className="text-center p-5 title-background">
          <h1>{subjectName}</h1>
        </div>
        <div className="d-flex justify-content-center">
          {isLoading && (
            <div className="spinner-border " role="status">
              <span className="sr-only"></span>
            </div>
          )}
        </div>
        <div>{error ? 'There has been an error...' : ''}</div>
        {data &&
          data.map((lesson) => (
            <div
              className="d-flex flex-column col-5 justify-content-center align-items-center card sub-topic m-3 overflow-hidden"
              key={lesson.LessonID}>
              <Link className="text-decoration-none" Link to={`${lesson.LessonID}`}>
                <div className="">
                  <img
                    className="subjectImage"
                    src={`/images/${lesson.LessonTitle}` + '.jpg'}
                    alt={lesson.LessonTitle + ' Image'}
                  />
                </div>
                <div className="textWrapper text-center">
                  <h2>{lesson.LessonTitle}</h2>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="m-5">
        <button type="button" className="btn btn-info nav-item" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  )
}

export default LessonsList
