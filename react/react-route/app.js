var express=require('express');
var path=require('path');

// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import { match, RouterContext } from 'react-router'
// import routes from './modules/routes'

var app=express();

var port =process.env.PORT||3000;

app.use(express.static(__dirname));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
});

// app.get('*',(req,res)=>{
//     match({
//         routes:routes,
//         location:req.url
//     },(err,redirect,props)=>{
//         const appHtml=renderToString(<RouterContext {...props}/>);
//         res.send(renderPage(appHtml));
//     })
// });

// function renderPage(appHtml) {
//   return `
//     <!DOCTYPE>
//     <html>
//     <meta charset=utf-8/>
//     <title>React-Router</title>
//     <link rel="stylesheet" href="/index.css">
//     <div id="app">${appHtml}</div>
//     <script src="/bundle.js"></script>
//    `
// };

app.listen(port,function(){
    console.log("Listening on "+port);
});