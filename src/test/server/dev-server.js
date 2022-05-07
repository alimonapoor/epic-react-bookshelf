import {setupWorker} from 'msw'
import {handlers} from './server-handlers'

const homepageURL = 'https://bookshelf.lol/'

const fullUrl = new URL(homepageURL)

const server = setupWorker(...handlers)

server.start({
  quiet: true,
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url: fullUrl.pathname + 'mockServiceWorker.js',
  },
})

export * from 'msw'
export {server}
