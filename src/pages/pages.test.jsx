import { render, screen } from '@testing-library/react'
import { renderWithProviders } from '../test-utils'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import AppRoutes from '../Router/routes'
import App from '../App'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Credits from './Credits'
import LessonDetailPage from './LessonDetailPage'
import LessonsListPage from './LessonsListPage'

describe('pages test suite', () => {
  test('renders Home page component', () => {
    renderWithProviders(<Home />)
  })
  test('renders About page component', () => {
    render(<About />)
  })
  test('renders Contact page component', () => {
    render(<Contact />)
  })
  test('renders Credits page component', () => {
    render(<Credits />)
  })
  test('renders LessonDetailPage component', () => {
    renderWithProviders(<LessonDetailPage />)
  })
})
