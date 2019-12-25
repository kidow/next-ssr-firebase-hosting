const functions = require('firebase-functions')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'public/.next' } })
const handle = app.getRequestHandler()

exports.next = functions.https.onRequest((req, res) => {
  app.prepare().then(_ => handle(req, res))
})
