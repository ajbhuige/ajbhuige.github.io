function drawDiamond() {

var canvas = document.getElementById("diamond");
var ctx = canvas.getContext('2d');
ctx.moveTo(400,600);
ctx.lineTo(120,350);
ctx.lineTo(400,100);
ctx.lineTo(680,350);
ctx.lineTo(400,600);
ctx.stroke();
}



