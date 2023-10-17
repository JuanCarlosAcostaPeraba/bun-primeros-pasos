/* eslint-disable space-before-function-paren */

import { serve, file } from 'bun'

const server = serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url)
    console.log('--')
    console.log(req.method, url.pathname)

    if (url.pathname === '/') {
      return new Response(file('./src/index.html'))
    }

    return new Response('Hello World!')
  },
  error(error) {
    return new Response(error)
  }
})

console.log(`Server running at http://localhost:${server.port}`)
