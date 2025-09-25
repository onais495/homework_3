
// setting up requireds
const http = require('http');
//const fileServer = require('./fileServer.js');
const url = require('url');

let phoneBook = new Array();
phoneBook[0] = {name: "Alia", phone: "860-345-7878"};
phoneBook[1] = {name: "Allie", phone: "203-908-3409"};
phoneBook[2] = {name: "Aly", phone: "413-486-5667"};
phoneBook[3] = {name: "Brittany", phone: "413-509-6666"};
phoneBook[4] = {name: "Elizabeth", phone: "860-997-7878"};
phoneBook[5] = {name: "Ellen", phone: "860-340-8000"};
phoneBook[6] = {name: "Eve", phone: "407-340-0087"};
phoneBook[7] = {name: "Evita", phone: "203-340-7001"};
phoneBook[8] = {name: "Linda", phone: "413-300-7878"};
phoneBook[9] = {name: "Liza", phone: "860-400-8781"};


// server call back function
const myserver = http.createServer(function(req,res){
	let urlObj = url.parse(req.url,"true");
	let pathname = urlObj.pathname;
	console.log(pathname);
	//routing depending on pathname
	switch (pathname) {
		case "/displayall":
			displayall(res);
			break;
		case "/search" :
			search(res,urlObj.query);
			break;
		// if none of the expected request pathnames, it must be a  path to a file
		default :
			fileServer.sendFile("./public_html"+pathname,res);
			break;
	
	}
});

function displayall(res)
{
	res.writeHead(200, { "Content-Type" : "application/json"})
	res.write(JSON.stringify(phoneBook));
	res.end();
}
// start the server
myserver.listen(80);













