var db = require('./db');

var announce = db.mongoose.Schema({
	posted: String,
	poster: String,
	content: String,
	comments: [String]
});
db.mongoose.model('Announcements',announce);

var events = db.mongoose.Schema({
	name: String,
	passed: Boolean,
	description: String,
	page: String,
	album: String,
	maps: String
});
db.mongoose.model('Events', events);

var justJuice = db.mongoose.Schema({
	heads: [String] ,
	members: [String],
	points: Number
});
db.mongoose.model('JustJuice', justJuice);

var yellowFellow = db.mongoose.Schema({
	heads: [String] ,
	members: [String] ,
	points: Number
});
db.mongoose.model('YellowFellow', justJuice);

var kellyDumpling = db.mongoose.Schema({
	heads: [String] ,
	members: [String] ,
	points: Number
});
db.mongoose.model('KellysDumpling', justJuice);

var nancyWantonJuice = db.mongoose.Schema({
	heads: [String] ,
	members: [String] ,
	points: Number
});
db.mongoose.model('NancysWanton', justJuice);

module.exports = {
	announcements: db.mongoose.model('Announcements'),
	csaEvent: db.mongoose.model('Events'),
	juice: db.mongoose.model('JustJuice'),
	yellow: db.mongoose.model('YellowFellow'),
	kelly: db.mongoose.model('KellysDumpling'),
	nancy: db.mongoose.model('NancysWanton')
}




