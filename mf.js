var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');
app.use('/raj', express.static('raj'));

app.get('/',function(req, res){
res.render('page');
});

app.post('/', urlencodedParser, function(req, res){
  console.log(req.body);
res.render('page');
});

console.log('listening at port 4000');

app.listen(4000);
