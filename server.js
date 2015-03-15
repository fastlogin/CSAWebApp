var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};
var startup = require('./backend/startup');
var db = require('./backend/db');
var schemas = require('./backend/schemas');
var url = require('url');

function urlCheck(request, url){
	return request.indexOf(url);
}

function send404(response){
	response.writeHead(404, {'Content-type' : 'text/plain'});
	response.write('Error 420: You got juiced.');
	response.end();
}

function sendFile(response, filePath, fileContents){
	response.writeHead(
		200,
		{"content-type": mime.lookup(path.basename(filePath))}
		);
	response.end(fileContents);
}

function serveStatic(response, cache, absPath){
	if(cache[absPath]){
		sendFile(response, absPath, cache[absPath]);
	}
	else {
		fs.exists(absPath, function(exists){
			if(exists){
				fs.readFile(absPath, function(err, data){
					if(err){
						send404(response);
					}
					else {
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			}
			else{
				send404(response);
			}
			});
		}
}

var server = http.createServer(function(request, response) {
	var filePath = false;

	if(urlCheck(request.url, 'events') > -1){
		if(urlCheck(request.url, 'Init') > -1){
			if(urlCheck(request.url, 'Social') > -1){

				schemas.csaEvent.findOne({name: 'Social Week'},function(err,found){
					if (err) throw err;
					response.end(JSON.stringify(found));
				});

			}
			if(urlCheck(request.url, 'Midnight') > -1){

				schemas.csaEvent.findOne({name: 'Midnight Dimsum'},function(err,found){
					if (err) throw err;
					response.end(JSON.stringify(found));
				});
				
			}
			if(urlCheck(request.url, 'Autumn') > -1){

				schemas.csaEvent.findOne({name: 'Mid Autumn Festival'},function(err,found){
					if (err) throw err;
					response.end(JSON.stringify(found));
				});
				
			}
			if(urlCheck(request.url, 'Semi') > -1){

				schemas.csaEvent.findOne({name: 'Semiformal'},function(err,found){
					if (err) throw err;
					response.end(JSON.stringify(found));
				});
				
			}
			if(urlCheck(request.url, 'Lunar') > -1){

				schemas.csaEvent.findOne({name: 'Lunar New Year'},function(err,found){
					if (err) throw err;
					response.end(JSON.stringify(found));
				});
				
			}
			if(urlCheck(request.url, 'China') > -1){

				schemas.csaEvent.findOne({name: 'China Night'},function(err,found){
					if (err) throw err;
					response.end(JSON.stringify(found));
				});
				
			}
		}
		else{
			if(urlCheck(request.url, 'Social') > -1){

				schemas.csaEvent.findOne({name: 'Social Week'}, function(err, found){
					found.description = url.parse(request.url,true).query.description;
					found.passed = url.parse(request.url,true).query.passed;
					found.page = url.parse(request.url,true).query.page;
					found.album = url.parse(request.url,true).query.album;
					found.map = url.parse(request.url,true).query.maps;
					found.save();
				});

			}
			if(urlCheck(request.url, 'Midnight') > -1){

				schemas.csaEvent.findOne({name: 'Midnight Dimsum'}, function(err, found){
					found.description = url.parse(request.url,true).query.description;
					found.passed = url.parse(request.url,true).query.passed;
					found.page = url.parse(request.url,true).query.page;
					found.album = url.parse(request.url,true).query.album;
					found.map = url.parse(request.url,true).query.maps;
					found.save();
				});
				
			}
			if(urlCheck(request.url, 'Autumn') > -1){

				schemas.csaEvent.findOne({name: 'Mid Autumn Festival'}, function(err, found){
					found.description = url.parse(request.url,true).query.description;
					found.passed = url.parse(request.url,true).query.passed;
					found.page = url.parse(request.url,true).query.page;
					found.album = url.parse(request.url,true).query.album;
					found.map = url.parse(request.url,true).query.maps;
					found.save();
				});
				
			}
			if(urlCheck(request.url, 'Semi') > -1){

				schemas.csaEvent.findOne({name: 'Semiformal'}, function(err, found){
					found.description = url.parse(request.url,true).query.description;
					found.passed = url.parse(request.url,true).query.passed;
					found.page = url.parse(request.url,true).query.page;
					found.album = url.parse(request.url,true).query.album;
					found.map = url.parse(request.url,true).query.maps;
					found.save();
				});
				
			}
			if(urlCheck(request.url, 'Lunar') > -1){

				schemas.csaEvent.findOne({name: 'Lunar Year'}, function(err, found){
					found.description = url.parse(request.url,true).query.description;
					found.passed = url.parse(request.url,true).query.passed;
					found.page = url.parse(request.url,true).query.page;
					found.album = url.parse(request.url,true).query.album;
					found.map = url.parse(request.url,true).query.maps;
					found.save();
				});
				
			}
			if(urlCheck(request.url, 'China') > -1){

				schemas.csaEvent.findOne({name: 'China Night'}, function(err, found){
					found.description = url.parse(request.url,true).query.description;
					found.passed = url.parse(request.url,true).query.passed;
					found.page = url.parse(request.url,true).query.page;
					found.album = url.parse(request.url,true).query.album;
					found.map = url.parse(request.url,true).query.maps;
					found.save();
				});
				
			}
		} 
	}
	else if(urlCheck(request.url, '/init') > -1){
		if(urlCheck(request.url , 'Announce') > -1){
			startup.initAnnounce(response);
		}
		if(urlCheck(request.url , 'Event') > -1){
			startup.initEvent(response);
		}
		if(urlCheck(request.url, 'Juice') > -1){
			startup.initJuice(response);
		}
		if(urlCheck(request.url, 'Yellow') > -1){
			startup.initYellow(response);
		}
		if(urlCheck(request.url, 'Kelly') > -1){
			startup.initKelly(response);
		}
		if(urlCheck(request.url, 'Nancy') > -1){
			startup.initNancy(response);
		}
	}
	else if(request.url == '/'){
		filePath = 'public/index.html';
		var absPath = './' + filePath;
		serveStatic(response, cache, absPath);
	}
	else{
		filePath = 'public' + request.url;
		var absPath = './' + filePath;
		serveStatic(response, cache, absPath);
	}
});

server.listen(3000, function(){
	console.log('Server up and running and on port 3000')
});