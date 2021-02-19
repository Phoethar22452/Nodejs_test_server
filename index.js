const http = require('http');
const url = require('url');
require('dotenv').config()
let routes = {
	"GET":{
		"/":(req,res,params)=>{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(`<h1>Primary Page and parameters are ${params.name} :: ${params.age}</h1>`);
			console.log('Method is get and path is /')},
		"/home/":(req,res,params)=>{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(`<h1>Home Page and parameters are ${params.name} :: ${params.age}</h1>`);
			console.log('Method is get and path is /home')}
	},
	"POST":{
		"/":(req,res,params)=>{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(`<h1>Primary Page and parameters are ${params.name} :: ${params.age}</h1>`);
			console.log('Method is get and path is /')},
		"/home/":(req,res,params)=>{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(`<h1>Home Page and parameters are ${params.name} :: ${params.age}</h1>`);
			console.log('Method is get and path is /home')}
	},
	"NA":(req,res,params)=>{
		res.writeHead(404);
		res.end("<h1>This Route does not exist</h1>");
	}
} 


let start = (req,res)=>{
	let reqMethod = req.method;
	let url_params = url.parse(req.url,true);
	let params = url_params.query;
	let resultroute = routes[reqMethod][url_params.pathname];
	if(resultroute != null && resultroute != undefined){
		resultroute(req,res,params);
	}else{
		routes["NA"](req,res,params);
	}
}

let server = http.createServer(start);

server.listen( process.env.PORT,()=>console.log("Server is listening at port 3000"))