import { useNavigate, Link, useParams } from 'react-router-dom'
import { useGetLessonsQuery } from '../data/subjects'
import { motion, AnimatePresence } from 'framer-motion'

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
      <div className="row justify-content-center subjects-container">
        <div className="text-center mb-3">
          <h1>{subjectName}</h1>
          <hr className="title-divider"></hr>
        </div>
        <div className="d-flex justify-content-center">
          {isLoading && (
            <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="sr-only"></span>
            </div>
          )}
          <h3>{error ? 'There has been an error...' : ''}</h3>
        </div>
        <AnimatePresence>
          {data &&
            data.map((lesson, i) => (
              <motion.div
                key="box"
                initial={{ y: '20%', opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: i * 0.2 }}
                exit={{ y: '20%', opacity: 0 }}
                className="d-flex flex-column col-5 justify-content-center align-items-center card-lesson m-3 overflow-hidden">
                <Link className="text-decoration-none" Link to={`${lesson.LessonID}`}>
                  <div>
                    <img
                      className="subject-lesson-image img-fluid"
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
                  <div className="textWrapper text-center mt-2">
                    <h2>{lesson.LessonTitle}</h2>
                  </div>
                </Link>
              </motion.div>
            ))}
        </AnimatePresence>
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
