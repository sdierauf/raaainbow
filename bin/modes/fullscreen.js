"use strict";var colors=require("../colors");function getRowOfColors(rowNumber){var str="";for(var i=0;i < process.stdout.columns;i++) {var color=colors[(i + rowNumber) % colors.length];str += "\u001b[48;5;" + color + "m \u001b[0;m";}return str;}var running=false;module.exports = {run:function run(){if(!running){(function(){running = true;var offset=0;setInterval(function(){console.log("\x1b[H");for(var i=0;i < process.stdout.rows - 2;i++) {console.log(getRowOfColors(i + offset));}offset++;},30);})();}},name:"fullscreen"};