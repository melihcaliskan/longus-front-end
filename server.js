const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('./i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

function redirectTrailingSlash(req, res, next) {
  let paths = req.url.split("?")
  let path = paths[0], query = null;
  if (paths.length > 1)
      query = paths.slice(1, paths.length).join("?")
  
  if (path.substr(-1) === '/' && path.length > 1)
      res.redirect(301, path.slice(0, -1) + ((query)?('?'+query):''));
  else
      next();
}

(async () => {
  await app.prepare()
  const server = express().use(redirectTrailingSlash)

  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => handle(req, res))
  
  server.get('/tabs', (req, res) => {
    return app.render(req, res, 'out/tabs.html');
  });
  server.get('/detail', (req, res) => {
    return app.render(req, res, 'out/detail.html');
  });
  server.get('/header', (req, res) => {
    return app.render(req, res, 'out/header.html');
  });
  server.get('/issue', (req, res) => {
    return app.render(req, res, 'out/issue.html');
  });
  
  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()