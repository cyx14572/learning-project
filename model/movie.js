var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    moviename:String,
    movieurl:String,
    movieinfo:String
});

var MovieModel = mongoose.model('movieList',movieSchema);

module.exports = MovieModel;