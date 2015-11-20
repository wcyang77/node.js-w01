#!/usr/bin/env node

var pictureTube = require("picture-tube");
var tube = pictureTube();
var url = process.argv[2];
tube.pipe(process.stdout);
 
//var fs = require('fs');
//fs.createReadStream('2008825642626577801.png').pipe(tube);
var request = require("request");
request.get(url).pipe(tube);