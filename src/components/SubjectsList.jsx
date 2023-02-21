import { Link } from 'react-router-dom'
import { useGetSubjectsQuery } from '../data/apiSlice'
import { motion } from 'framer-motion'

function SubjectsList() {
  const { data, isLoading, error } = useGetSubjectsQuery()

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-start align-items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        className="row justify-content-center subjects-container">
        <div className="text-center mb-3">
          <h2 className="text-center">{error ? 'There has been an error.' : ''}</h2>
          <h1>Subjects</h1>
          <hr className="title-divider"></hr>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {isLoading && (
            <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="sr-only"></span>
            </div>
          )}
        </div>
        {data &&
          data.map((subject, i) => (
            <motion.div
              key={subject.SubjectID}
              initial={{ opacity: 0, translateY: 0 }}
              animate={{ opacity: 1, translateY: 20 }}
              transition={{ duration: 0.2, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              exit={{ x: '-600%', ease: 'easeInOut' }}
              className="d-flex flex-column col-5 justify-content-center align-items-center card-subject m-3 overflow-hidden">
              <Link to={`/${subject.SubjectID}`} className="text-decoration-none">
                <div>
                  <img
                    className="subject-lesson-image img-fluid"
                    src={`/images/${subject.Subject}.jpg`}
                    alt={subject.Subject + ' Image'}
                  />
                </div>
                <div className="textWrapper text-center mt-2">
                  <h2>{subject.Subject}</h2>
                </div>
              </Link>
            </motion.div>
          ))}
      </motion.div>
    </div>
  )
}
export default SubjectsList
