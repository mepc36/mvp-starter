var express = require('express');
var bodyParser = require('body-parser');
var wordProfiles = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/wordProfiles', function (req, res) {
  wordProfiles.selectAllWordProfiles(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200).json(data);
    }
  });
});

app.post('/wordProfiles', function (req, res) {
  console.log(`REQ.BODY: ${JSON.stringify(req.body)}`);

  wordProfiles.insertWordProfile(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
