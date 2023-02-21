import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap align-items-center">
      <div className="row justify-content-center">
        <div className="text-center mb-4">
          <motion.h1
            key="contact"
            initial={{ y: '20%', opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            exit={{ opacity: 0 }}>
            Contact Us
          </motion.h1>
          <hr className="title-divider"></hr>
        </div>
        <div className="d-flex flex-column justify-content-center overflow-hidden contact-page">
          <motion.p
            initial={{ y: '20%', opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            exit={{ y: '20%', opacity: 0 }}>
            Feel free to contact us if you have questions or if you would like to see specific
            lessons presented or if you would like personalized instruction:&nbsp;
            <span className="text-decoration-underline text-break">
              administration@KuleanaCollege.com
            </span>
            .
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Contact
