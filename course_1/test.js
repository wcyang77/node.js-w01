
var http = require("http");
var fs = require("fs"); //file system module
var request = require("request");

// using callback function to create server
http.createServer(function(req,res) {
    //req route
    //req mine
    var content = '';
    request("http://fengshan.ntbk.gov.tw/ksfsquery.html", function (err, response, body) {
        content += body;
        res.end(content);
    });

    
    
    /* Practice 2
    fs.readFile("./demo.html", function(err,file) {
       content += file; 
       res.end(content);
    });
    
    */
    //practice 1:
    //res.end("Welcome to my server 伺服器-1");
    
}).listen(3000);

