
'use strict';
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');        
ctx.strokeStyle = "transparent"; 
var num1 = 20;
var states1 = createArray(num1);
var num3 = 10; 
var states3 = createArray(num3);

setInterval(function() {
    ctx.clearRect(0,0,500,400);
    draw();
},100);

function createArray(num) {
    var states = new Array(num);
    for (var j = 0; j < num; j++) {
        states[j] = 1 / num * j;
    }  
    return states;
}

function draw(){
    // 20 dots 
    for (var i = 0; i<num1; i++){
        ctx.beginPath();        
        ctx.arc(125,100+i*10,3,0,2*Math.PI,true);
        ctx.stroke();        
        ctx.fillStyle = "rgba(255,255,255," + states1[i] + ")";
        ctx.fill()

        ctx.beginPath();        
        ctx.arc(375,100+i*10,3,0,2*Math.PI,true);
        ctx.stroke();        
        ctx.fillStyle = "rgba(255,255,255," + states1[i] + ")";
        ctx.fill()
    }
        states1 = shiftArray(states1); 

    // 10 dots
    for (var j = 0; j < num3; j++){
        ctx.beginPath();        
        ctx.arc(195,200+j*10,3,0,2*Math.PI,true);
        ctx.stroke();        
        ctx.fillStyle = "rgba(255,255,255," + states3[j] + ")";
        ctx.fill()

        ctx.beginPath();        
        ctx.arc(195+j*10,300,3,0,2*Math.PI,true);
        ctx.stroke();        
        ctx.fillStyle = "rgba(255,255,255," + states3[j] + ")";
        ctx.fill()

        ctx.beginPath();        
        ctx.arc(295,300-j*10,3,0,2*Math.PI,true);
        ctx.stroke();        
        ctx.fillStyle = "rgba(255,255,255," + states3[j] + ")";
        ctx.fill()

        ctx.beginPath();        
        ctx.arc(295-j*10,200,3,0,2*Math.PI,true);
        ctx.stroke();        
        ctx.fillStyle = "rgba(255,255,255," + states3[j] + ")";
        ctx.fill()

        ctx.beginPath();        
        ctx.arc(295,300-j*10,3,0,2*Math.PI,true);
        ctx.stroke();        
        ctx.fillStyle = "rgba(255,255,255," + states3[j] + ")";
        ctx.fill()

        // stroke for the first line in T
        ctx.beginPath();        
        ctx.arc(325+j*10,100,3,0,2*Math.PI,true);
        ctx.stroke();        
        ctx.fillStyle = "rgba(255,255,255," + states3[j] + ")";
        ctx.fill()
    }
        states3 = shiftArray(states3); 
}

function shiftArray(arr) {
    return (arr.slice(arr.length-1)).concat(arr.slice(0,arr.length-1));
}

