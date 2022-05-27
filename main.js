const express = require('express')
const app = express();
const template = require('./lib/template.js');
const fs = require("fs");
const sanitizeHtml = require("sanitize-html");

app.get('/', function(req, res){
    fs.readdir('./data', function(err, filelist){
        const title = 'Welcomee';
        const description = 'Hello, Node.js';
        const list = template.List(filelist);
        const html = template.HTML(title, list, title, description,`<a href="/create">create</a>`);
        res.send(html);
    });

})

app.get('/page', function(req,res){
    res.send('/page');
})

app.listen(3333);

