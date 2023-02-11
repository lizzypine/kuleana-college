import { useNavigate, useParams } from 'react-router-dom'
import { useGetLessonDetailQuery } from '../data/apiSlice'
import { motion, AnimatePresence } from 'framer-motion'
import reactStringReplace from 'react-string-replace'

function LessonDetail() {
  const params = useParams()
  const { isLoading, error } = useGetLessonDetailQuery(params.lessonId)
  const { data } = useGetLessonDetailQuery(params.lessonId)
  const navigate = useNavigate()

  // const lessonNames = {
  //   Compromise: 2,
  //   Steadfastness: 3,
  //   Integrity: 4,
  //   Seriousness: 5,
  //   Focus: 6,
  //   'Doing Your Best': 7,
  //   'Pursuing Goals': 8,
  //   Self: 9,
  //   Others: 10,
  //   Work: 11,
  //   Checkbooks: 12,
  //   Debt: 13,
  //   Paychecks: 14,
  //   Benefits: 15,
  //   Taxes: 16,
  //   Investment: 17,
  //   Accountant: 18,
  //   'Real Numbers': 19
  // }

  // If one of the lesson names renders, attach a link to it to the appropriate lesson.
  const lessonNames = {
    "<a href='LessonDetails.aspx?GUID=&Less=2'>Compromise</a>": 'Compromise',
    "<a href='LessonDetails.aspx?GUID=&Less=13'> Debt</a>": 'Debt',
    "<a href='LessonDetails.aspx?GUID=&Less=18'>Accountant</a>": 'Accountant',
    "<a href='LessonDetails.aspx?GUID=&Less=18'> Accountant</a>": 'Accountant'
  }

  const lessonNumbers = {
    "<a href='LessonDetails.aspx?GUID=&Less=2'>Compromise</a>": 2,
    "<a href='LessonDetails.aspx?GUID=&Less=13'> Debt</a>": 13,
    "<a href='LessonDetails.aspx?GUID=&Less=18'>Accountant</a>": 18,
    "<a href='LessonDetails.aspx?GUID=&Less=18'> Accountant</a>": 18
  }

  // Fix Accountant with and without Space. There are examples of both
  // Add bold and italicized text using reactStringReplace
  // Check against every page on the current website

  function formatText(responseText) {
    const newText = responseText
      .replaceAll('<b>', ' ')
      .replaceAll('</b>', ' ')
      .replaceAll('<i>', ' ')
      .replaceAll('</i>', ' ')
      .replaceAll(';', ' ')

    const newText2 = reactStringReplace(
      newText,
      /(<a href='LessonDetails.aspx\?GUID=&Less=\d+'>[^<]*<\/a>)/g,
      (match) => (
        <a key={lessonNumbers[match]} href={lessonNumbers[match]}>
          {lessonNames[match]}
        </a>
      )
    )

    return reactStringReplace(newText2, /(<br \/>)/g, (match, i) => <br />)
  }
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
        <AnimatePresence>
          {data &&
            data.map((detail, i) => (
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                key={detail.LessonID}>
                <motion.h1
                  key={detail.LessonID}
                  initial={{ y: 800 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  exit={{ x: 800, duration: 1.2, ease: 'easeIn' }}
                  className="text-center">
                  {detail.LessonTitle}
                </motion.h1>
                <motion.hr
                  initial={{ y: 800 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut', delay: i * 0.2 }}
                  exit={{ x: '-80%' }}
                  className="title-divider"></motion.hr>
                <motion.div
                  key="box"
                  initial={{ y: '20%', opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: 'easeOut', delay: i * 0.2 }}
                  exit={{ x: '-80%' }}
                  className="row justify-content-center">
                  <img
                    className="subject-lesson-image img-fluid mb-3"
                    id="lesson-detail-image-container"
                    // Image file names are based on the original website's image files.
                    src={`/images/${detail.ImageName.substring(
                      13,
                      detail.ImageName.length - 4
                    )}.jpg`}
                    alt={detail.LessonTitle + ' Image'}
                    // Use a placeholder image if none available.
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null
                      currentTarget.src = '/images/Self.jpg'
                    }}
                  />
                </motion.div>
                <div className="w-75">
                  <motion.p
                    key="box"
                    initial={{ y: '20%', opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.3 }}
                    exit={{ x: '50%' }}>
                    {formatText(detail.LessonText)}
                  </motion.p>
                </div>
              </div>
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

export default LessonDetail
