var db = require('./db');

module.exports = {
	initAll: function (){
			var announce = db.mongoose.Schema({
				posted: Date,
				poster: String,
				content: String,
				comments: [String]
			});
			db.mongoose.model('Announcements',announce);
			var announcements = db.mongoose.model('Announcements');

			var events = db.mongoose.Schema({
				name: String,
				passed: Boolean,
				description: String,
				page: String,
				album: String,
				maps: String
			});
			db.mongoose.model('Events', events);
			var csaEvent = db.mongoose.model('Events');

			var justJuice = db.mongoose.Schema({
				heads: [String] ,
				members: [String],
				points: Number
			});
			db.mongoose.model('JustJuice', justJuice);
			var juice = db.mongoose.model('JustJuice');

			var yellowFellow = db.mongoose.Schema({
				heads: [String] ,
				members: [String] ,
				points: Number
			});
			db.mongoose.model('YellowFellow', justJuice);
			var yellow = db.mongoose.model('YellowFellow');

			var kellyDumpling = db.mongoose.Schema({
				heads: [String] ,
				members: [String] ,
				points: Number
			});
			db.mongoose.model('KellysDumpling', justJuice);
			var kelly = db.mongoose.model('KellysDumpling');

			var nancyWantonJuice = db.mongoose.Schema({
				heads: [String] ,
				members: [String] ,
				points: Number
			});
			db.mongoose.model('NancysWanton', justJuice);
			var nancy = db.mongoose.model('NancysWanton');

			var storage = {
				announce: announcements.find(),
				events: csaEvent.find(),
				juices: juice.find(),
				yellows: yellow.find(),
				kellys: kelly.find(),
				nancys: nancy.find()
			}

			return storage;
	}
}