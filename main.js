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

app.get('/page/:pageId', function(req,res){
    res.readdir('/data',function(err, filelist){
        const list = template.List(filelist);
        const id = path.parse(req.params.pageId).base;
        fs.readFile(`./data/${id}`, 'utf-8', function(err,description){
            const title = id;
            const html = template.HTML(title, list, title, description,`<a href="/create">create</a>
            <a href="/update?id=${title}>update</a>"
            <form action="delete_process" method="post">
            <input type="hidden" name="id"  value="${title}">
            <input type="submit" value="delete">
            </form>`);
            res.send(html);

        })
    })
})

app.listen(4444);

