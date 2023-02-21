import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const vectorCreators = [
  { id: 1, title: 'Nakin Poonsri', link: 'https://www.vecteezy.com/members/yellow-people' },
  { id: 2, title: 'cozydesign', link: 'https://www.vecteezy.com/members/cozydesign' },
  { id: 3, title: 'Dooder', link: 'https://www.vecteezy.com/members/doodervector' },
  { id: 4, title: 'imajin noasking', link: 'https://www.vecteezy.com/members/imajin-noasking' },
  {
    id: 5,
    title: 'illustration4stock224427',
    link: 'https://www.vecteezy.com/members/illustration4stock224427'
  }
]

function Credits() {
  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap align-items-center">
      <div className="row justify-content-center">
        <div className="text-center mb-2">
          <motion.h1
            key="credits"
            initial={{ y: '20%', opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            exit={{ opacity: 0 }}>
            Vector Image Credits
          </motion.h1>
          <hr className="title-divider"></hr>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center m-3 overflow-hidden">
          <div className="text-center">
            <motion.ul className="text-start image-credits">
              {vectorCreators.map((vectorCreator, i) => (
                <motion.li
                  key={vectorCreator.id}
                  initial={{ y: '20%', opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
                  exit={{ opacity: 0 }}>
                  <FontAwesomeIcon
                    icon={faStar}
                    width=".5em"
                    className="d-inline-block me-3 align-center"
                  />
                  <a href={vectorCreator.link} target="_blank" rel="noreferrer">
                    {vectorCreator.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credits
