const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    ['/subjectsapi.aspx', '/lessonsapi.aspx', '/lessondetailsapi.aspx'],
    createProxyMiddleware({
      target: 'https://www.kuleanacollege.com/',
      changeOrigin: true
    })
  )
}
