import { rest } from 'msw'
import '@testing-library/jest-dom'
import { renderWithProviders } from '../test-utils'
import { LessonsListPage } from '../pages/LessonsListPage'
import LessonsList from './LessonsList'
import App from '../App.js'
import 'whatwg-fetch'

describe('LessonsList test suite', () => {
  test('renders LessonsListPage component', () => {
    renderWithProviders(<LessonsListPage />)
  })

  test('Fetches data from the lesson API based on the params', async() => {
    const { subjectId } = 1
    rest.get(
      `https://kuleanacollege.com/lessonsapi.aspx?subjectid=${subjectId}`,
      (req, res, ctx) => {
        // successful response
        return res(
          ctx.status(200),
          ctx.json([
            [
              { LessonID: 12, LessonTitle: 'Checkbooks', ImageName: 'KuleanaLessonCheckbooks.png' },
              { LessonID: 13, LessonTitle: 'Debt', ImageName: 'KuleanaLessonDebt.png' },
              { LessonID: 14, LessonTitle: 'Paychecks', ImageName: 'KuleanaLessonPaychecks.png' },
              { LessonID: 15, LessonTitle: 'Benefits', ImageName: 'KuleanaLessonBenefits.png' },
              { LessonID: 16, LessonTitle: 'Taxes', ImageName: 'KuleanaLessonTaxes.png' },
              { LessonID: 17, LessonTitle: 'Investment', ImageName: 'KuleanaLessonInvestment.png' },
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
          ]),
          ctx.delay(30)
        )
      }
    )
  })

  // test('Handles error response', () => {
  //   rest.get('https://kuleanacollege.com/subjectsapi.aspx', (req, res, ctx) => {
  //     return res(ctx.status(500))
  //   })
  // })
})
