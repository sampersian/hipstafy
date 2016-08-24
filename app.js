var Express = require('express');
var bodyParser = require("body-parser");
var snippets = require("./lib/snippets.js");
var app = Express();
var port = 5000;

app.use(Express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/makehip", function(req, res, next) {
  let hipPhrase = hipify(req.body.entry);
  res.send(hipPhrase);
})

function hipify(str) {
  let hipString = ""
  let words =  str.split(" ");
  for (var i = 0; i < words.length; i++) {
    let randy = Math.floor(Math.random() * snippets.length);
    hipString += words[i]+" "+snippets[randy]+"<br>";
  }
  return hipString;
}

app.listen(port);
