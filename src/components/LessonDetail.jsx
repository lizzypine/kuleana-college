import { useNavigate, useParams } from 'react-router-dom'
import { useGetLessonDetailQuery } from '../data/subjects'
import { motion, AnimatePresence } from 'framer-motion'

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
          data.map((detail, i) => (
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              key={detail.LessonID}>
              <motion.h1
                initial={{ y: 800 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="text-center">
                {detail.LessonTitle}
              </motion.h1>
              <motion.hr
                initial={{ y: 800 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: i * 0.2 }}
                className="title-divider"></motion.hr>
              <AnimatePresence>
                <motion.div
                  initial={{ y: 800 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut', delay: i * 0.2 }}
                  className="row justify-content-center">
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
                </motion.div>
              </AnimatePresence>
              <div className="w-75">
                <p>{detail.LessonText}</p>
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
