import { rest } from 'msw'

// 'http://localhost/subjectsapi.aspx'

export const handlers = [
  rest.get('https://kuleanacollege.com/subjectsapi.aspx', (req, res, ctx) => {
    // successful response
    return res(
      ctx.status(200),
      ctx.json([
        { SubjectID: 1, Subject: 'Finance', ImageName: 'KuleanaSubjectFinance.png' },
        {
          SubjectID: 2,
          Subject: 'Responsibility',
          ImageName: 'KuleanaSubjectResponsibility.png'
        },
        { SubjectID: 3, Subject: 'Principles', ImageName: 'KuleanaSubjectPrinciples.png' }
      ]),
      ctx.delay(30)
    )
  })
]
