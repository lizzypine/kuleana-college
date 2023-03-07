import { useNavigate, useParams } from 'react-router-dom'
import { useGetLessonDetailQuery } from '../data/apiSlice'
import { motion } from 'framer-motion'
import reactStringReplace from 'react-string-replace'

function LessonDetail() {
  const params = useParams()
  const { data, isLoading, error } = useGetLessonDetailQuery(params.lessonId)
  const navigate = useNavigate()

  function formatText(responseText) {
    let replacedText = responseText

    // Activate live links
    replacedText = reactStringReplace(
      replacedText,
      /(<a href='\s?LessonDetails.aspx\?GUID=&Less=\d+'>[^<]*<\/a>)/g,
      (match, index, item) => (
        <a
          key={lessonNumbers[match] + index + item}
          className="live-link"
          href={lessonNumbers[match]}>
          {lessonNames[match]}
        </a>
      )
    )

    // Add line breaks where originally intended
    replacedText = reactStringReplace(replacedText, /(;|<br \/>)/g, (match, index, item) => (
      <span key={match + index + item} className="line-break"></span>
    ))

    // Updated version
    // Italicize text that originally had <i> tags
    replacedText = reactStringReplace(replacedText, /(?:<i>)([^#]+)(?=<\/i>)/g, (match, index) => (
      <i key={match + index}>{match}</i>
    ))

    // Bold text that originally had <b> tags
    replacedText = reactStringReplace(replacedText, /(?:<b>)([^#]+)(?=<\/b>)/g, (match, index) => (
      <b key={match + index}>{match}</b>
    ))

    // Remove the remaining <i>, <b> and <br /> tags
    replacedText = reactStringReplace(replacedText, /(<i>|<\/i>|<b>|<\/b>|<\/b>)/g, () => '')

    // Bold the tip section on the checkbooks detail page
    replacedText = reactStringReplace(replacedText, /(Tip[^]*.)/g, (match, i) => (
      <b key={match + i}>{match}</b>
    ))

    return replacedText
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
        </div>
        <h2 className="text-center">{error ? 'There has been an error.' : ''}</h2>
        <h2 className="text-center">{params.lessonId > 19 ? 'This page does not exist' : ''}</h2>
        {data &&
          data.map((detail, i) => (
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              key={detail.LessonID + i}>
              <motion.h1
                initial={{ y: 800 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                exit={{ x: '-600%', duration: 1.2, ease: 'easeIn' }}
                className="text-center">
                {detail.LessonTitle}
              </motion.h1>

              <motion.hr
                initial={{ y: 800 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: i * 0.2 }}
                exit={{ x: '-600%', duration: 1.6, ease: 'easeIn' }}
                className="title-divider"></motion.hr>

              <motion.div
                key="box"
                initial={{ y: '20%', opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: i * 0.2 }}
                exit={{ x: '-600%', duration: 1.9, ease: 'easeIn' }}
                className="row justify-content-center">
                <img
                  className="subject-lesson-image img-fluid mb-3"
                  id="lesson-detail-image-container"
                  // Image file names are based on the original website's image files.
                  src={`/images/${detail.ImageName.substring(13, detail.ImageName.length - 4)}.png`}
                  alt={detail.LessonTitle + ' Image'}
                  // Use a placeholder image if none available.
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null
                    currentTarget.src = '/images/Self.png'
                  }}
                />
              </motion.div>
              <div className="w-75">
                <motion.p
                  key="box"
                  initial={{ y: '20%', opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.3 }}
                  exit={{ x: '-600%', duration: 1.6, ease: 'easeIn' }}>
                  {formatText(detail.LessonText)}
                </motion.p>
              </div>
            </div>
          ))}
      </div>
      <div className="m-3">
        <button type="button" className="btn btn-back-nav nav-item" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  )
}

export default LessonDetail

// If one of the lesson names renders, attach a link to it to the appropriate lesson.
const lessonNames = {
  "<a href='LessonDetails.aspx?GUID=&Less=2'>Compromise</a>": 'Compromise',
  "<a href='LessonDetails.aspx?GUID=&Less=3'>Steadfastness</a>": 'Steadfastness',
  "<a href='LessonDetails.aspx?GUID=&Less=4'>Integrity</a>": 'Integrity',
  "<a href=' LessonDetails.aspx?GUID=&Less=4'>Integrity</a>": 'Integrity',
  "<a href='LessonDetails.aspx?GUID=&Less=5'>Seriousness</a>": 'Seriousness',
  "<a href='LessonDetails.aspx?GUID=&Less=6'>Focus</a>": 'Focus',
  "<a href='LessonDetails.aspx?GUID=&Less=9'>Seriousness</a>": 'Seriousness',
  "<a href='LessonDetails.aspx?GUID=&Less=7'>Doing Your Best</a>": 'Doing Your Best',
  "<a href='LessonDetails.aspx?GUID=&Less=8'>Pursuing Goals</a>": 'Pursuing Goals',
  "<a href=' LessonDetails.aspx?GUID=&Less=8'>Goals</a>": 'Pursuing Goals',
  "<a href='LessonDetails.aspx?GUID=&Less=9'>Self</a>": 'Self',
  "<a href=' LessonDetails.aspx?GUID=&Less=9'>Self</a>": 'Self',
  "<a href='LessonDetails.aspx?GUID=&Less=9'>Integrity</a>": 'Integrity',
  "<a href=' LessonDetails.aspx?GUID=&Less=10'>Others</a>": 'Others',
  "<a href='LessonDetails.aspx?GUID=&Less=11'>Work</a>": 'Work',
  "<a href='LessonDetails.aspx?GUID=&Less=12'>Checkbooks</a>": 'Checkbooks',
  "<a href='LessonDetails.aspx?GUID=&Less=13'> Debt</a>": 'Debt',
  "<a href='LessonDetails.aspx?GUID=&Less=14'> Paychecks</a>": 'Paychecks',
  "<a href='LessonDetails.aspx?GUID=&Less=15'> Benefits</a>": 'Benefits',
  "<a href='LessonDetails.aspx?GUID=&Less=13'> Taxes</a>": 'Taxes',
  "<a href='LessonDetails.aspx?GUID=&Less=16'>Taxes</a>": 'Taxes',
  "<a href='LessonDetails.aspx?GUID=&Less=16'> Taxes</a>": 'Taxes',
  "<a href='LessonDetails.aspx?GUID=&Less=17'>Investment</a>": 'Investment',
  "<a href='LessonDetails.aspx?GUID=&Less=18'>Accountant</a>": 'Accountant',
  "<a href='LessonDetails.aspx?GUID=&Less=18'> Accountant</a>": 'Accountant',
  "<a href='LessonDetails.aspx?GUID=&Less=19'>Real Numbers</a>": 'Real Numbers'
}

const lessonNumbers = {
  "<a href='LessonDetails.aspx?GUID=&Less=2'>Compromise</a>": 2,
  "<a href='LessonDetails.aspx?GUID=&Less=3'>Steadfastness</a>": 3,
  "<a href='LessonDetails.aspx?GUID=&Less=4'>Integrity</a>": 4,
  "<a href=' LessonDetails.aspx?GUID=&Less=4'>Integrity</a>": 4,
  "<a href='LessonDetails.aspx?GUID=&Less=6'>Focus</a>": 6,
  "<a href='LessonDetails.aspx?GUID=&Less=9'>Focus</a>": 6,
  "<a href='LessonDetails.aspx?GUID=&Less=7'>Doing Your Best</a>": 7,
  "<a href='LessonDetails.aspx?GUID=&Less=8'>Pursuing Goals</a>": 8,
  "<a href=' LessonDetails.aspx?GUID=&Less=8'>Goals</a>": 8,
  "<a href='LessonDetails.aspx?GUID=&Less=9'>Self</a>": 9,
  "<a href=' LessonDetails.aspx?GUID=&Less=9'>Self</a>": 9,
  "<a href='LessonDetails.aspx?GUID=&Less=9'>Seriousness</a>": 5,
  "<a href='LessonDetails.aspx?GUID=&Less=9'>Integrity</a>": 4,
  "<a href=' LessonDetails.aspx?GUID=&Less=10'>Others</a>": 10,
  "<a href='LessonDetails.aspx?GUID=&Less=11'>Work</a>": 11,
  "<a href='LessonDetails.aspx?GUID=&Less=12'>Checkbooks</a>": 12,
  "<a href='LessonDetails.aspx?GUID=&Less=13'> Debt</a>": 13,
  "<a href='LessonDetails.aspx?GUID=&Less=14'> Paychecks</a>": 14,
  "<a href='LessonDetails.aspx?GUID=&Less=15'> Benefits</a>": 15,
  "<a href='LessonDetails.aspx?GUID=&Less=13'> Taxes</a>": 16,
  "<a href='LessonDetails.aspx?GUID=&Less=16'>Taxes</a>": 17,
  "<a href='LessonDetails.aspx?GUID=&Less=16'> Taxes</a>": 17,
  "<a href='LessonDetails.aspx?GUID=&Less=17'>Investment</a>": 17,
  "<a href='LessonDetails.aspx?GUID=&Less=18'>Accountant</a>": 18,
  "<a href='LessonDetails.aspx?GUID=&Less=18'> Accountant</a>": 18,
  "<a href='LessonDetails.aspx?GUID=&Less=19'>Real Numbers</a>": 19
}
