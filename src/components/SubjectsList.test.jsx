import { rest } from 'msw'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProviders } from '../test-utils'
import { server } from '../mocks/server'
import { networkErrorHandlers } from '../mocks/handlers'
import SubjectsList from './SubjectsList'
import App from '../App.js'

describe('SubjectsList test suite', () => {
  test('Renders the App component', async() => {
    renderWithProviders(<App />)
  })
  test('renders the SubjectsList component', async() => {
    renderWithProviders(<SubjectsList />)
  })
  test('fetches data from the subjects API', async () => {
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
  test('handles error response', () => {
    rest.get('https://kuleanacollege.com/subjectsapi.aspx', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  })
  test('should show error message on error', async () => {
    server.use(...networkErrorHandlers)
    renderWithProviders(<App />)
    const errorMessage = await screen.findByText(/There has been an error/i)
    expect(errorMessage).toBeInTheDocument()
  })
})
