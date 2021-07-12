var http = require('http');
var fs = require('fs');
var url = require('url');


var app = http.createServer((request, response) => {
    var _url = request.url;
    var queryData = url.parse(_url, true).query
    var title = queryData.id;
    if (_url == '/') {
        title = 'Welcome'; 
        } 
        
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>
              KERT: KNU Computer Emergency Response Team
          </p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
});
app.listen(3001);