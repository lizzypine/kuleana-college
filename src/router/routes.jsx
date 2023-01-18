import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Credits from '../pages/Credits'
import LessonsListPage from '../pages/LessonsListPage'
import LessonDetailPage from '../pages/LessonDetailPage'
import ErrorPage from '../pages/ErrorPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="credits" element={<Credits />} />
      <Route path=":subjectId" element={<LessonsListPage />} />
      <Route path=":subjectId/:lessonId" element={<LessonDetailPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
