/*******************************************5.1**********************************************************/
var context;
var x = 500;
var y = 500;

window.onload = function(){
	//get canvas element
    context = loadcontextCanvas('canvas');
	if(context){
		setInterval("randomFigure(context)", 200);
    }
}

function loadcontextCanvas(canvas){
    var element = document.getElementById(canvas);
	if(element && element.getContext){
		var context = element.getContext('2d');
		if(context){
			return context;
		}
	}
	return false;
}

function randomFigure(){
    let a = new Boolean(false);
	for(i=0; i<300; i+=10){
        let centerX = Math.floor(Math.random() * x);
        let centerY = Math.floor(Math.random() * y);
		for(j=0; j<250; j+=10){
            if(a){
                context.strokeStyle = randomColor();
                context.strokeRect(centerX, centerY, 50, 300);
                a = false;
            }else{
                context.fillStyle = randomColor();
                context.fillRect(centerX, centerY, 50, 300);
                a = true;
            }
            
		}
	}
}

function random(inferior,superior){
    numPosibilidades = superior - inferior
    aleat = Math.random() * numPosibilidades
    aleat = Math.floor(aleat)
    return parseInt(inferior) + aleat
}
function randomColor(){
	return "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + ")";
}
/*******************************************5.1**********************************************************/
/*******************************************5.2**********************************************************/
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);


/*******************************************5.2**********************************************************/
