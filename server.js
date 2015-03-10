var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};
var startup = require('./backend/startup');
var db = require('./backend/db');

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
	if(urlCheck(request.url, '/init') > -1){
		if(urlCheck(request.url , 'Announce') > -1){
			response.end(JSON.stringify({
				array: startup.initAnnounce()
			}));
		}
		if(urlCheck(request.url , 'Event') > -1){
			response.end(JSON.stringify({
				array: startup.initEvent()
			}));
		}
		if(urlCheck(request.url, 'Juice') > -1){
			startup.initJuice(response);
		}
		if(urlCheck(request.url, 'Yellow') > -1){
			response.end(JSON.stringify({
				array: startup.initYellow()
			}));
		}
		if(urlCheck(request.url, 'Kelly') > -1){
			response.end(JSON.stringify({
				array: startup.initKelly()
			}));
		}
		if(urlCheck(request.url, 'Nancy') > -1){
			response.end(JSON.stringify({
				array: startup.initNancy()
			}));
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