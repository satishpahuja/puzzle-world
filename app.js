var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var questionAnswerModule = require('./webapp/public/javascript/puzzleJsonDataLoader.js');

// Define the port to run on
app.set('port', 8888);

app.use(express.static(path.join(__dirname, '/webapp/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/webapp/index.html'));
});

app.get('/getQuestionAnswerDataMap', function (req, res) {
  console.log("Inside get Question Answer Data Map")
  var puzzleListMap = questionAnswerModule.getFilledArrayDataMapWithGivenKey('interviewPuzzles');
  res.send(puzzleListMap);
});

app.post('/getsolution', function (req, res) {
  var urlPath=req.body.urlPath;
  var solutionObject = questionAnswerModule.getFilledJsonObjWithGivenKey(urlPath.substr(1));
  console.log("solution",solutionObject)
  res.send(solutionObject);
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/webapp/solution.html'));
});


var server = app.listen(process.env.PORT || app.get('port'), function () {
  questionAnswerModule.fillQuestionAnswerDataMap();
  console.log('Magic started sucessfully');
});
