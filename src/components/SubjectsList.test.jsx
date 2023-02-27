import { rest } from 'msw'
import '@testing-library/jest-dom'
import { renderWithProviders } from '../test-utils'
import SubjectsList from './SubjectsList'
import App from '../App.js'
import 'whatwg-fetch'

describe('SubjectsList test suite', () => {
  test('Renders the App component', async() => {
    renderWithProviders(<App />)
  })
  test('Renders the SubjectsList component', async() => {
    renderWithProviders(<SubjectsList />)
  })
  test('Fetches data from the subjects API', async () => {
    rest.get('https://kuleanacollege.com/subjectsapi.aspx', (req, res, ctx) => {
      // successful response
      return res(
        ctx.status(200),
        ctx.json([
          [
            { SubjectID: 1, Subject: 'Finance', ImageName: 'KuleanaSubjectFinance.png' },
            {
              SubjectID: 2,
              Subject: 'Responsibility',
              ImageName: 'KuleanaSubjectResponsibility.png'
            },
            { SubjectID: 3, Subject: 'Principles', ImageName: 'KuleanaSubjectPrinciples.png' }
          ]
        ]),
        ctx.delay(30)
      )
    })
  })
  test('Handles error response', () => {
    rest.get('https://kuleanacollege.com/subjectsapi.aspx', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  })
})
