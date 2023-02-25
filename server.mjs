import express from 'express';
import { resolve } from 'path';
import https from 'https';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;
const rootDir = process.argv[2] || 'src';
// const privateKey  = fs.readFileSync('key.pem', 'utf8');
// const certificate = fs.readFileSync('cert.pem', 'utf8');
// const credentials = { key: privateKey, cert: certificate };
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt'),
  requestCert: false,
  rejectUnauthorized: false,
};

https
  .createServer(options, app)
  .listen(port, () => {
    console.log('\x1b[42m%s\x1b[0m', `                                      `);
    console.log('\x1b[42m%s\x1b[0m', `     VST on https://127.0.0.1:${port}    `);
    console.log('\x1b[42m%s\x1b[0m', `                                      `);
  });

// Set public folder as root
app.use(`/`, express.static(resolve(rootDir)));

// // Listen for HTTP requests on port 3008
// app.listen(port, () => {
//   console.log('\x1b[42m%s\x1b[0m', `                                      `);
//   console.log('\x1b[42m%s\x1b[0m', `     VST on http://127.0.0.1:${port}     `);
//   console.log('\x1b[42m%s\x1b[0m', `                                      `);
// });
