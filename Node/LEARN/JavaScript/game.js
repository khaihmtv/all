var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x= 30; y=30;
var dx=5; dy=2;
var radius =20;

var thanh = {
	width:70,
	height:10,
	x: 0,
	y: canvas.height - 10,
	speed: 10,

	isMovingLeft: false,
	isMovingRight: false,
};

var over = false;

document.addEventListener('keyup', function(event){
	console.log(event);

	if(event.keyCode == 37){
		thanh.isMovingLeft = false;
	}
	else if(event.keyCode == 39){
		thanh.isMovingRight = false;
	}
})

document.addEventListener('keydown', function(event){
	console.log(event);

	if(event.keyCode == 37){
		thanh.isMovingLeft = true;
	}
	else if(event.keyCode == 39){
		thanh.isMovingRight = true;
	}
})

function drawBall(){
context.beginPath();
context.arc(x,y,radius,0,Math.PI*2);
context.fillStyle ='green';
context.fill();
context.closePath();
}

function drawthanh(){
	context.beginPath();
	context.rect(thanh.x, thanh.y, thanh.width, thanh.height);
	context.fill()
	context.closePath();
}

function vacham(){
	if(x<radius || x>canvas.width-radius){
		dx=-dx;
	}

	if(y<radius){
		dy=-dy;
	}
}

function dichuyen(){
	x+=dx;
	y+=dy;
}

function draw(){
	if(!over){
		context.clearRect(0,0,canvas.width, canvas.height);
		drawBall();
		drawthanh();

		if(thanh.isMovingLeft){
			thanh.x -=thanh.speed;
		} else if (thanh.isMovingRight){
			thanh.x +=thanh.speed;
		}

		if(thanh.x<0){
			thanh.x=0;
		} else if(thanh.x>canvas.width - thanh.width) {
			thanh.x=canvas.width - thanh.width;
		}

		vacham();
		dichuyen();
		if(y>canvas.height -radius){
			over = true;
		}
		requestAnimationFrame(draw);
	} else {
		console.log("GAME OVER");
	}
}
draw();
	