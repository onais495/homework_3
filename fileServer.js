
// setting up requireds
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('node:path');


// function that takes a file type and creates a useable response that reads different files
typeFunc = function(ext) {
        // switch case to create proper response head information
        switch (ext) {
                case '.html':
                cType = 'text/html';
                break;
                case '.js':
                cType = 'application/javascript';
                break;
                case '.css':
                cType = 'text/css';
                break;
                case '.txt':
                cType = 'text/plain';
                break;
                case '.jpg':
                cType = 'image/jpeg';
                break;
                case '.png':
                cType = 'image/png';
                break;
                case '.pdf':
                cType = 'application/pdf';
                break;
                case '.wav':
                cType = '.wav'
                break;
                case 'mp3':
                cType = 'audio/mpeg';
                break;

        }
	return(cType);
        // server response structure to read different files
};


// function that creates a file name by parseing the url then reads file
exports.sendFile = function(filepath,res) {
        fs.readFile(filepath,function (err, content){ 
                // checking for file read error
                if (err) {
			console.log(err);
			res.writeHead(404);
        		res.end();
                } else {
                        // calling reponse and file type functions for to create server response
                        cType = typeFunc(path.extname(filepath)); 
        		res.writeHead(200, {'Content-Type': cType });
        		res.write(content);
        		res.end();

                }
        });
};














