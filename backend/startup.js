var db = require('./db');
var schemas = require('./schemas');

module.exports = {
	initAnnounce: function (response){
			schemas.announcements.find({},function(err,docs){
				if(err) throw err;
				response.end(JSON.stringify({
					array: docs
				}));
			});
		},

	initEvent: function(response){
			schemas.csaEvent.find({},function(err,docs){
				if(err) throw err;
				response.end(JSON.stringify({
					array: docs
				}));
			});
		},

	initJuice: function(response){
			schemas.juice.find({},function(err,docs){
				if(err) throw err;
				response.end(JSON.stringify({
					array: docs
				}));
			});
		},

	initYellow: function(response){
			schemas.yellow.find({},function(err,docs){
				if(err) throw err;
				response.end(JSON.stringify({
					array: docs
				}));
			});
		},

	initKelly: function(response){
			schemas.kelly.find({},function(err,docs){
				if(err) throw err;
				response.end(JSON.stringify({
					array: docs
				}));
			});
		},

	initNancy: function(response){
			schemas.nancy.find({},function(err,docs){
				if(err) throw err;
				response.end(JSON.stringify({
					array: docs
				}));
			});
		}
}