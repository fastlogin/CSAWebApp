var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CSA');
var db = mongoose.connection;

module.exports = {
	db: db,
	mongoose: mongoose
}