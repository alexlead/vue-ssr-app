const path = required('path');
const express = require('express');
const { createSSRApp } = require('vue')
const manifest = require('../dist/ssr-manifest.json');

const server =  express();

const appPath = path.join(__dirname, '../dist', manifest['app.js'] );
const App = required(appPath).default;

server.get( '*', (req, res) => {
    const app = createSSRApp(App);
    const html = `
   <html>
   <head>
   <title>VUE SSR Component</title>
   </head>
   <body>
   This is Vue SSR Component
   </body>
   </html>
    `;
    res.end(html);
})

server.listen(9000)