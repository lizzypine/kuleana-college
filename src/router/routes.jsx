import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Credits from '../pages/Credits'
import LessonsListPage from '../pages/LessonsListPage'
import LessonDetailPage from '../pages/LessonDetailPage'

export default function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="credits" element={<Credits />} />
        <Route path=":subjectId" element={<LessonsListPage />} />
        <Route path=":subjectId/:lessonId" element={<LessonDetailPage />} />
      </Routes>
    </AnimatePresence>
  )
}
