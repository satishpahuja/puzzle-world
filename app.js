var express = require('express');
var path = require('path');
var app = express();
var questionAnswerModule = require('./webapp/public/javascript/puzzleJsonDataLoader.js');

// Define the port to run on
app.set('port', 8888);

app.use(express.static(path.join(__dirname, '/webapp/public')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/webapp/index.html'));
});

app.get('/:question',function(req,res){
  res.sendFile(path.join(__dirname+'/webapp/index.html'));
});

app.get('/solution',function(req,res){
  res.sendFile(path.join(__dirname+'/webapp/index.html'));
});

app.get('/puzzlesolution/*',function(req,res){
  res.sendFile(path.join(__dirname+'/webapp/index.html'));
});

app.get('/getPuzzleMap', function (req, res) {
  var puzzleListMap=questionAnswerModule.getFilledArrayDataMapWithGivenKey('interviewPuzzles');
  res.send(puzzleListMap);
});

var server = app.listen(app.get('port'), function() {
  questionAnswerModule.fillQuestionAnswerDataMap();
  console.log('Magic started sucessfully');
});
