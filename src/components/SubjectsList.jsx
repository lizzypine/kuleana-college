import { Link } from 'react-router-dom'
import { useGetSubjectsQuery } from '../data/subjects'
import { motion, AnimatePresence } from 'framer-motion'

function SubjectsList() {
  const { data, isLoading, error } = useGetSubjectsQuery()
  // const [move, setMove] = React

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-start align-items-center">
      <div className="row justify-content-center subjects-container">
        <div className="text-center mb-3">
          <h1>Subjects</h1>
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
        {data &&
          data.map((subject, i) => (
            <AnimatePresence key={subject.SubjectID}>
              <motion.div
                key="box"
                initial={{ y: '20%', opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: i * 0.2 }}
                exit={{ x: '20%' }}
                className="d-flex flex-column col-5 justify-content-center align-items-center card-subject m-3 overflow-hidden">
                <Link className="text-decoration-none" Link to={`/${subject.SubjectID}`}>
                  <div>
                    <img
                      className="subject-lesson-image img-fluid"
                      src={`/images/${subject.Subject}` + '.jpg'}
                      alt={subject.Subject + ' Image'}
                    />
                  </div>
                  <div className="textWrapper text-center mt-2">
                    <h2>{subject.Subject}</h2>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          ))}
      </div>
    </div>
  )
}
export default SubjectsList
