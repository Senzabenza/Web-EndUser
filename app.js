var express = require('express');
var serveStatic = require('serve-static');

var app = express();

if (app.get('env') == 'development') {
    app.use(serveStatic('static/src', {'index': ['index.html']}));
} else if (app.get('env') == 'staging' || app.get('env') == 'production') {
    app.use(serveStatic('static/build', {'index': ['index.html']}));
}

app.listen(process.env.PORT || 4000);
console.log("app listen on port ", process.env.PORT || 4000);
console.log(app.get('env'));