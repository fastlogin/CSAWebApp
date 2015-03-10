var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};
var startup = require('./backend/startup');
var db = require('./backend/db');

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
	if(request.url == '/'){
		filePath = 'public/index.html';
		var absPath = './' + filePath;
		serveStatic(response, cache, absPath);
	}
	else if(request.url == '/initialize'){
		response.end(JSON.stringify(startup.initAll()));
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