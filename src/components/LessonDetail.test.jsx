import { rest } from 'msw'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../test-utils'
import { networkErrorHandlers } from '../mocks/handlers'
import { server } from '../mocks/server'
import LessonDetailPage from '../pages/LessonDetailPage'
import LessonDetail from './LessonDetail'
import App from '../App.js'

const lessonDetailApiData = [
  [
    {
      LessonTitle: 'Steadfastness',
      LessonText:
        "One of the most important ideas in life is the difference between style and substance. As the saying goes: If what you confront is a matter of principle, stand firm as a rock . . . if a matter of style, bend with the wind. Everyone on Earth uses the English language differently. They have different backgrounds than you do and they express ideas in their own ways. What matters is the essence of what they say, not how they say it. Learning to separate style and substance will allow you to find agreement where it might not at first appear to be any and it will also allow you to more quickly identify those people whose actions do not match their words.;Sticking to your principles is always important if they are good principles. But there are many ways to do so. As a very simple example, say that staying physically thin is a core life principle that you believe in. You may believe that the most important aspect of doing so is to get a lot of exercise. Someone else may believe that eating a high-protein diet is the most important aspect. Focusing on the difference in your approach to the problem is a waste of a great opportunity, your mutual goal is the same. Instead, as pointed out in the lesson on Compromise, you can agree to disagree on the exact method used but can absolutely work together with that other someone to promote all people not gaining excess weight.;On the other hand, style isn't everything. Being thin might be an outward indicator that someone is physically fit. On the other hand, a thin person might have a high metabolism so that what they eat doesn’t accumulate into fat as much as it does with most people. Many thin people cannot run a hundred yards without being winded.; So just because someone looks physically thin on the outside does not necessarily mean they are physically fit. The requirement for fitness would have to be examined in a different way with very different kinds of tests. As discussed in the lesson on Pursuing Goals, in this case it might be better to commit yourself to sticking to the life principle of being physically fit as opposed to being physically thin since one usually leads to the other and is always healthy.; That also means that when confronted with the decision of eating a piece of cake or eating a piece of fruit, you have to stick to your principles no matter what anyone else is eating and no matter how good they say it tastes at the moment, you have to know the truth that there will be a price to pay and choose what really matters to you. Keeping these kinds of simple metaphors in mind can help you continue to honor your core principles all the way through the business and personal decisions you will have to make in all aspects of your life.",
      ImageName: 'KuleanaLessonSteadfastness.png',
      SubjectID: 3,
      LessonLevel: 1
    }
  ]
]

describe('LessonDetail test suite', () => {
  test('renders LessonDetailPage component', () => {
    renderWithProviders(<LessonDetailPage />)
  })
  test('renders the LessonDetail component', async () => {
    renderWithProviders(<LessonDetail />)
  })
  test('fetches data from the lesson detail API based on the params', async () => {
    rest.get('/3', (req, res, ctx) => {
      const lessonID = req.url.searchParams.get('id')
      console.log(lessonID)
      return res(ctx.json(lessonID))
    })
  })
  test('handles error response', () => {
    rest.get('https://kuleanacollege.com/lessonsapi.aspx?lessonid=3', (req, res, ctx) => {
      return res(ctx.json(lessonDetailApiData))
    })
  })
  test('should show error message on error', async () => {
    server.use(...networkErrorHandlers)
    renderWithProviders(<App />)
    const errorMessage = await screen.findByText(/There has been an error/i)
    expect(errorMessage).toBeInTheDocument()
  })
})
