import { motion } from 'framer-motion'

function About() {
  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap align-items-center">
      <div className="row justify-content-center">
        <div className="text-center mb-4">
          <motion.h1
            key="about"
            initial={{ y: '20%', opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            exit={{ opacity: 0 }}>
            About
          </motion.h1>
          <hr className="title-divider"></hr>
        </div>
        <motion.div
          key="box"
          initial={{ y: '20%', opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          exit={{ y: '20%', opacity: 0 }}
          className="d-flex flex-column justify-content-center px-5 align-items-center overflow-hidden w-75">
          <h3 className="text-center">Kuleana Life Lessons Start Right Here With You.</h3>
          <p>Our lessons begin where the classroom ends.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
