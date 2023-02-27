import { rest } from 'msw'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../test-utils'
import { networkErrorHandlers } from '../mocks/handlers'
import { server } from '../mocks/server'
import LessonsListPage from '../pages/LessonsListPage'
import LessonsList from './LessonsList'
import App from '../App.js'

const lessonsListApiData = [
  [
    {
      LessonID: 12,
      LessonTitle: 'Checkbooks',
      ImageName: 'KuleanaLessonCheckbooks.png'
    },
    { LessonID: 13, LessonTitle: 'Debt', ImageName: 'KuleanaLessonDebt.png' },
    { LessonID: 14, LessonTitle: 'Paychecks', ImageName: 'KuleanaLessonPaychecks.png' },
    { LessonID: 15, LessonTitle: 'Benefits', ImageName: 'KuleanaLessonBenefits.png' },
    { LessonID: 16, LessonTitle: 'Taxes', ImageName: 'KuleanaLessonTaxes.png' },
    {
      LessonID: 17,
      LessonTitle: 'Investment',
      ImageName: 'KuleanaLessonInvestment.png'
    },
    {
      LessonID: 18,
      LessonTitle: 'Accountants',
      ImageName: 'KuleanaLessonAccountants.png'
    },
    {
      LessonID: 19,
      LessonTitle: 'Real Numbers ',
      ImageName: 'KuleanaLessonRealNumbers.png'
    }
  ]
]

describe('LessonsList test suite', () => {
  test('renders LessonsListPage component', () => {
    renderWithProviders(<LessonsListPage />)
  })
  test('renders the LessonList component', async () => {
    renderWithProviders(<LessonsList />)
  })
  test('fetches data from the lesson API based on the params', async () => {
    rest.get('/1', (req, res, ctx) => {
      const lessonID = req.url.searchParams.get('id')
      console.log(lessonID)
      return res(ctx.json(lessonID))
    })
  })
  test('handles error response', () => {
    rest.get('https://kuleanacollege.com/lessonsapi.aspx?subjectid=1', (req, res, ctx) => {
      return res(ctx.json(lessonsListApiData))
    })
  })
  test('should show error message on error', async () => {
    server.use(...networkErrorHandlers)
    renderWithProviders(<App />)
    const errorMessage = await screen.findByText(/There has been an error/i)
    expect(errorMessage).toBeInTheDocument()
  })
})
