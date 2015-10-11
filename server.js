var vm = require('vm');
var fs = require('fs');

global.React = require('react');
ReactDOMServer = require('react-dom/server');

function include(path) {
    var code = fs.readFileSync(path, 'utf-8');
//    vm.runInThisContext(code, path);
    eval.apply(global, [code]);
}

include('src/ContactItem.js');
include('src/contacts.js');



var index = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>I'm in a React app!</title>
  </head>
  <body>
    <div id="react-app">${ReactDOMServer.renderToString(rootElement)}</div>

    <script src="https://cdn.jsdelivr.net/react/0.14.0-rc1/react.js"></script>
    <script src="https://cdn.jsdelivr.net/react/0.14.0-rc1/react-dom.js"></script>

    <script src="ContactItem.js"></script>
    <script src="contacts.js"></script>

    <script>
        ReactDOM.render(rootElement, document.getElementById('react-app'));
    </script>
  </body>
</html>    
`;








var static = require('koa-static');
var route = require('koa-route');
var koa = require('koa');

var app = koa();

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log(`${this.method} ${this.url} - ${ms}`);
});

app.use(route.get('/', function *(next) {
  this.body = index;
}));

app.use(static('src', {}));

app.listen(3001);
