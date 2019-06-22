var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/favoriteWords');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var wordProfileSchema = mongoose.Schema({
  word: String,
  definition: String,
  partOfSpeech: String,
  frequency: Number,
  numberOfSyllables: Number,
  pronunciation: String,
  similarTo: String,
  antonyms: String,
  examples: String,
  list: String,
});

var WordProfile = mongoose.model('WordProfile', wordProfileSchema);

var selectAllWordProfiles = function(callback) {
  WordProfile.find({}, function(err, wordProfiles) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, wordProfiles);
    }
  });
};

var insertWordProfile = (newWordProfile, callback) => {
  // MONGOOSE:
  WordProfile.create(newWordProfile, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });

  // MONGODB:
  // db.collection('favoriteWords').insert(newWordProfile, (error, result) => {
  //   if (error) {
  //     callback(error, null);
  //   } else {
  //     callback(null, result);
  //   }
  // });
};

module.exports.selectAllWordProfiles = selectAllWordProfiles;
module.exports.insertWordProfile = insertWordProfile;
