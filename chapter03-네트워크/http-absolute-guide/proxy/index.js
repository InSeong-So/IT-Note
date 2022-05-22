/**
 * FIXME: https://www.twilio.com/blog/node-js-proxy-server
 * curl localhost:3000/info
 * curl localhost:3000/json_placeholder/posts/1
 * curl -H "Authorization: nikolay" localhost:3000/json_placeholder/posts/1
 * curl -X POST -H "Authorization: real_user" --data '{"title": "Build a Node.js Proxy Server in Under 10 minutes!","body": "We have all heard the term "proxy"...",userId="1"}' localhost:3000/json_placeholder/posts
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = 3000;
const HOST = 'localhost';
const API_SERVICE_URL = 'https://jsonplaceholder.typicode.com';

app.use(morgan('dev'));

app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to Billing and Account APIs.');
});

app.use('', (req, res, next) => {
  if (req.headers.authorization) return next();
  return res.sendStatus(403);
});

app.use(
  '/json_placeholder',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/json_placeholder`]: '',
    },
  }),
);

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
