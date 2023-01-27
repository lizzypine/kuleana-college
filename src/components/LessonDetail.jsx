import { useNavigate, useParams } from 'react-router-dom'
import { useGetLessonDetailQuery } from '../data/subjects'

function LessonDetail() {
  const params = useParams()
  const { data, isLoading, error } = useGetLessonDetailQuery(params.lessonId)
  const navigate = useNavigate()

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap align-items-center">
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          {isLoading && (
            <div
              className="spinner-border "
              role="status"
              style={{ width: '3rem', height: '3rem' }}>
              <span className="sr-only"></span>
            </div>
          )}
          <h3>{error ? 'There has been an error...' : ''}</h3>
        </div>
        {data &&
          data.map((detail) => (
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              key={detail.LessonID}>
              <div className="row justify-content-center">
                <img
                  className="subject-lesson-image img-fluid mb-3"
                  id="lesson-detail-image-container"
                  // Image file names are based on the original website's image files.
                  src={
                    `/images/${detail.ImageName.substring(13, detail.ImageName.length - 4)}` +
                    '.jpg'
                  }
                  alt={detail.LessonTitle + ' Image'}
                  // Use a placeholder image if none available.
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null
                    currentTarget.src = '/images/Self.jpg'
                  }}
                />
              </div>
              <div className="w-75">
                <h1 className="text-center">{detail.LessonTitle}</h1>
                <hr className="title-divider"></hr>
                <p className="mt-4">{detail.LessonText}</p>
              </div>
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

export default LessonDetail
