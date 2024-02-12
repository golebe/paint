var mouseEvent = "empty";
var lastPositionOfX,lastPositionOfY
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
widthOfLine = 2;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    
    mouseEvent = "mouseDown";
}


canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {

    currentPositionOfMouseY = e.clientY - canvas.offsetTop;
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastPositionOfX,lastPositionOfY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
    }
lastPositionOfX=currentPositionOfMouseX;
lastPositionOfY=currentPositionOfMouseY;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
