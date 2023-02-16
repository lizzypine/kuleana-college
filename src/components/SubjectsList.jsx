import { Link } from 'react-router-dom'
import { useGetSubjectsQuery } from '../data/apiSlice'
import { motion } from 'framer-motion'

function SubjectsList() {
  const { data, isLoading, error } = useGetSubjectsQuery()

  const parent = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5,
        delay: 0.3,
        default: { ease: 'easeInOut' }
      }
    },
    hidden: {
      opacity: 0,
      x: 1,
      transition: {
        when: 'afterChildren'
      }
    }
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: '20%',
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delayChildren: 200,
        staggerChildren: 0.2,
        ease: 'easeOut'
      }
    },
    exit: {
      x: '-80%',
      transition: { ease: 'easeInOut' }
    }
  }

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-start align-items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={parent}
        className="row justify-content-center subjects-container">
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
          data.map((subject) => (
            <motion.div
              key={subject.SubjectID}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
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
