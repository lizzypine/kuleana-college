import { useNavigate, useParams } from 'react-router-dom'
import { useGetLessonDetailQuery } from '../data/subjects'

function LessonDetail() {
  const params = useParams()
  const { data, isLoading, error } = useGetLessonDetailQuery(params.lessonId)
  const navigate = useNavigate()

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-center align-items-center p-1">
      <div className="row justify-content-center">
        <div>{isLoading ? 'Loading...' : ''}</div>
        <div>{error ? 'There has been an error...' : ''}</div>
        {data &&
          data.map((detail) => (
            <div
              className="d-flex flex-column justify-content-center align-items-center "
              key={detail.LessonID}>
              <div className="">
                <img
                  className="subjectImage"
                  src={`/images/${detail.LessonText}` + '.jpg'}
                  alt={detail.LessonTitle + ' Image'}
                />
              </div>
              <div className="textWrapper text-center">
                <h2>{detail.LessonTitle}</h2>
                <p>{detail.LessonText}</p>
              </div>
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

export default LessonDetail
