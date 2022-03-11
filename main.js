var mouseEvent ="empty" ;
var lastPositionX , lastPositionY ;
canvas = document.getElementById('myCanvas') ;
ctx = canvas.getContext("2d") ;

color ="red" ;
width_of_line =1 ;
canvas.addEventListener("mousedown",my_mousedown) ;
function my_mousedown(e) {
    mouseEvent = "mouseDown" ;
}

canvas.addEventListener("mouseup",my_mouseup) ;
function my_mouseup(e) {
    mouseEvent = "mouseUP" ;
}
canvas.addEventListener("mouseleave",my_mouseleave) ;
function my_mouseleave(e) {
    mouseEvent = "mouseleave" ;
}

canvas.addEventListener("mousemove",my_mousemove) ;
function my_mousemove(e) {
   currentPositionX = e.clientX-canvas.offsetLeft ;
   currentPositionY = e.clientY-canvas.offsetTop ;

if (mouseEvent=="mouseDown") {
   ctx.beginPath() ;
   ctx.strokeStyle=color ;
   ctx.lineWidth=width_of_line ;
   console.log("last position of x and y coordinates =") ;
   console.log("X=" + lastPositionX + " Y =" + lastPositionY) ;
   ctx.moveTo(lastPositionX,lastPositionY) ;
   console.log("current postion of x and y coordinates =") ;
   console.log("X = " + currentPositionX + " Y = " + currentPositionY) ;
   ctx.lineTo(currentPositionX,currentPositionY) ;
   ctx.stroke() ;
   
}
   lastPositionX=currentPositionX ;
   lastPositionY=currentPositionY ;
}