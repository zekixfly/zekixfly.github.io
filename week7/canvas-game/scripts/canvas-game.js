//環境變數
var updateFPS = 30;
var showMouse = true;
var time = 0;
// var bgColor = '#001D2E';
var bgColor = 'rgba(0, 29, 46, 0.5)';
var keys = [];
var wKey = false;
var shotSwitch = false;


//控制
// var controls = {
// 	value: 0
// }
// var gui = new dat.GUI();
// gui.add(controls,"value",-2,2).step(0.01).onChange(function(value){});

//----------------------------------
// VectorXY
class VectorXY{
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	set(x,y) {
		this.x = x;
		this.y = y;
	}
	move(x,y) {
		this.x += x;
		this.x += y;
	}
	//addition
	add(v) {
		return new VectorXY(this.x+v.x, this.y+v.y);
	}
	//Subtraction
	sub(v) {		
		return new VectorXY(this.x-v.x, this.y-v.y);
	}
	//multiply
	mul(s) {
		return new VectorXY(this.x*s, this.y*s)
	}
	//斜邊長
	get length() {
		return Math.sqrt(this.x*this.x+this.y*this.y);
	}
	set length(newLength) {
		let temp = this.unit.mul(newLength);
		this.set(temp.x, temp.y);
	}
	clone() {
		return new VectorXY(this.x, this.y);
	}
	toString() {
		return `(${this.x}, ${this.y})`;
	}
	equal(v) {
		return this.x == v.x && this.y == v.y;
	}
	get angle() {
		return Math.atan2(this.y, this.x);
	}
	get unit() {
		return this.mul(1/this.length);
	}
}

//----------------------------------


var canvas = getId('ZekiCanvas');
var ctx = canvas.getContext('2d');
var winWidth,winHeight;

var mousePos = new VectorXY(0,0);
var mousePosDown = new VectorXY(0,0);
var mousePosUp = new VectorXY(0,0);
ctx.mousePosKeydown = new VectorXY(0,0);
ctx.degToPi = Math.PI/180;
ctx.delta = mousePos.sub(new VectorXY(winWidth/2, winHeight/2))
ctx.mouseAngle = ctx.delta.angle;

ctx.circle = function(v,r) {
	this.arc(v.x, v.y, r, 0, Math.PI*2);
}
ctx.line = function(v1,v2) {
	this.moveTo(v1.x, v1.y);
	this.lineTo(v2.x, v2.y);
}

//canvas設定
function initCanvas() {
	winWidth = canvas.width = window.innerWidth;
	winHeight = canvas.height = window.innerHeight;
}
initCanvas();


//輔助線平均寬高
var averageWidth = winWidth/10;
var averageHeight = winHeight/10;




//邏輯初始化
function init() {

}

//遊戲邏輯更新
function update() {
	time++;
}


//機體位置
var fighter = {x: 0,y:0};





//畫面更新
function draw() {
	//設定背景
	ctx.fillStyle = bgColor;
	ctx.fillRect(0,0,winWidth,winHeight);

	//----------------------------------
	// Zeki請在這裡會製

	ctx.save();
	//Auxiliary line
	ctx.beginPath();	
	ctx.fillRect(0,0,winWidth,winHeight);
	ctx.lineWidth = 1;
	for(var i=0; i<=10; i++) {
		let pos = i*averageWidth;
		ctx.moveTo(pos, 0);
		ctx.lineTo(pos, canvas.height);	
		// ctx.fillText(pos,pos,10);

		ctx.moveTo(0, pos);
		ctx.lineTo(canvas.width, pos);
		ctx.fillStyle = "white";
		// ctx.fillText(pos,10,pos);
	}
	ctx.font="15px Arial";
	ctx.fillText('Press "W" key to shot',10,700);
	ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
	ctx.stroke();
	ctx.restore();

	

	//中心十字線
	// ctx.beginPath();
	// ctx.moveTo(winWidth/2, 0);
	// ctx.lineTo(winWidth/2, winHeight);
	// ctx.moveTo(0, winHeight/2);
	// ctx.lineTo(winWidth, winHeight/2);
	// ctx.strokeStyle = "rgba(255,255,255,0.5)";
	// ctx.stroke();

	ctx.save();
		ctx.delta = mousePos.sub(new VectorXY(winWidth/2, winHeight/2))
		ctx.mouseAngle = ctx.delta.angle;
		ctx.translate(winWidth/2, winHeight/2);//translate 移動初始座標(0,0)到中心
		
		
		// let mouseDistance = ctx.delta.length;

		// ctx.beginPath();
		// ctx.moveTo(0, 0);
		// ctx.lineTo(ctx.delta.x, ctx.delta.y);
		// ctx.stroke();

		ctx.fillStyle="white"
		ctx.fillText(parseInt(ctx.mouseAngle/ctx.degToPi)+"度",60,-10)
	ctx.restore();



	ctx.delta = mousePos.sub(new VectorXY(winWidth/2, winHeight/2))
	ctx.mouseAngle = ctx.delta.angle;


	ctx.save();
	//Fighter

		// Fighter - dashedArc
		ctx.beginPath();
		ctx.setLineDash([5, 5]);
		ctx.lineWidth = 1;
		ctx.arc(winWidth/2,winHeight/2,50,0,Math.PI*2);
		ctx.strokeStyle = "white"
		ctx.stroke();
	
		// Fighter - head
		ctx.translate(winWidth/2, winHeight/2);//translate 移動初始座標(0,0)到中心
		ctx.rotate(ctx.mouseAngle+Math.PI/2);
		// console.log(ctx.mouseAngle);

		ctx.beginPath();
		ctx.lineWidth = 1;				
		ctx.moveTo(fighter.x-7, fighter.y-40);
		// ctx.moveTo(winWidth/2, winHeight/2);
		let light_r = 40;		
		ctx.lineTo(fighter.x-7, fighter.y-light_r-11);
		ctx.lineTo(fighter.x-7+3.5, fighter.y-light_r-11-10);
		ctx.lineTo(fighter.x+3.5, fighter.y-light_r-11-10);
		ctx.lineTo(fighter.x+7, fighter.y-light_r-11);
		ctx.lineTo(fighter.x+7, fighter.y-light_r);		
		ctx.closePath();		
		ctx.fillStyle = "white"
		ctx.fill();	

		// Fighter - shield
		ctx.beginPath();
		ctx.setLineDash([]);	
		ctx.lineWidth = 4;
		ctx.arc(fighter.x,fighter.y,60,45,Math.PI-45);
		ctx.strokeStyle = "white"
		ctx.stroke();

		// Fighter - arc
		ctx.beginPath();
		ctx.setLineDash([]);
		ctx.lineWidth = 6;
		ctx.arc(fighter.x,fighter.y,30,0,Math.PI*2);
		ctx.shadowColor = 'rgba(255,255,255,1)';
		ctx.shadowBlur = 10;
		ctx.strokeStyle = "white"
		ctx.stroke();

		// Fighter - line
		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.moveTo(fighter.x-30+3, fighter.y+15);		
		ctx.lineTo(fighter.x, fighter.y);	
		ctx.lineTo(fighter.x, fighter.y-30);
		ctx.moveTo(fighter.x, fighter.y);
		ctx.lineTo(fighter.x+30-3, fighter.y+15);
		ctx.stroke();


	ctx.restore();

	// Fighter - trajectory
	// whatKey();
	// if(wKey === true) {
	// 	trajectory();
	// }


	//----------------------------------
	// 滑鼠

	ctx.save();

		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.circle(mousePos, 3);
		ctx.fill();
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.translate(mousePos.x, mousePos.y)
			ctx.strokeStyle = 'red';
			let len = 20;
			ctx.line(new VectorXY(-len,0),new VectorXY(len,0));
			ctx.fillText(mousePos,10,-10);
			ctx.rotate(Math.PI/2);
			ctx.line(new VectorXY(-len,0),new VectorXY(len,0));
			ctx.stroke();
	ctx.restore();

	requestAnimationFrame(() => {
		draw();
		trajectory();
		
	});
}

//頁面載入
function loaded() {
	initCanvas();
	init();
	requestAnimationFrame(draw);
	setInterval(update, 1000/updateFPS);//每1秒執行次數
}
//載入 縮放的事件
window.addEventListener('load', loaded);
window.addEventListener('resize',initCanvas);




//滑鼠事件跟記錄




window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseup', mouseup);
window.addEventListener('mousedown', mousedown);
window.addEventListener('keydown', keydown);
// window.addEventListener('keyup', function(event) {
// 	keys[event.keyCode] = false;
// 	if(event.keyCode === 87) {
// 		// wKey = false;
// 		bullet = new VectorXY(0,0);		
// 	}
// });

function mousemove(event) {
	mousePos.set(event.x, event.y);
	// console.log(mousePos);
}

function mouseup(event) {
	mousePos.set(event.x, event.y);
	mousePosUp = mousePos.clone();
}

function mousedown(event) {
	mousePos.set(event.x, event.y);
	mousePosDown = mousePos.clone();
}

function keydown (event) {
	
	if(event.keyCode === 87) {
		console.log("press W");
		// mousePos.set(event.x, event.y);
		// mousePosKeydown = mousePos.clone();
		onShot();
	
	}
	
}
//彈道位置
var bullets = [];

function onShot() {
	bullets.push({
		angle: ctx.mouseAngle,
		pos: [0, -70] //x,y
	});
}
	//彈道起始位子
	// bullet.x = winWidth/2;
	// bullet.y = winHeight/2-70;

function trajectory() {
	// var keyInterval = setInterval(function() {
	bullets.forEach((bulletObj,idx) => {

		ctx.save()
		ctx.translate(winWidth/2, winHeight/2);//translate 移動初始座標(0,0)到中心
		ctx.rotate(bulletObj.angle+Math.PI/2);
		
		
		// for(var i=1; i<6; i++) {
		// 	ctx.beginPath();
		// 		ctx.lineWidth = 1;  
		// 		ctx.arc(bulletObj.pos[0], bulletObj.pos[1]-7*i, 3.5, 0, Math.PI*2);
		// 		ctx.fillStyle = `rgba(255,255,255,${0.1+(i/10+1/10)}`;
		// 		ctx.fill();	
		// 	ctx.closePath();
		// }


		ctx.beginPath();
			// console.log(bullet.x, bullet.y)
			// ctx.moveTo(bulletObj.pos[0],bulletObj.pos[1]-35);	    	
		    ctx.arc(bulletObj.pos[0], bulletObj.pos[1], 3.5, 0, Math.PI);    
		    ctx.lineTo(bulletObj.pos[0],bulletObj.pos[1]-10);//頂點
		    ctx.lineTo(bulletObj.pos[0]+3.5,bulletObj.pos[1]);
		    ctx.fillStyle = "white";
	    ctx.closePath();
	    ctx.fill();

	    bulletObj.pos[1] -=5;	
	    if(bulletObj.pos[1]<-(winWidth/2)) {
	    	bullets.slice(idx, 1);
	    }
	    ctx.restore();
	});


			


		// ctx.translate(winWidth/2, winHeight/2)//translate 移動初始座標(0,0)到中心


  	

	    // else{
	    // 	bullet = new VectorXY(0,0);
	    // 	// clearInterval(keyInterval);
	    // 	wKey = false;
	    // }
    // }, 1000)
    // wKey = true;
    // whatKey();
		    


	ctx.restore();	
}




function whatKey() {
  if (keys[87]) {
    //bullet.y = -10; 
    trajectory();

  }
  else {
	bullet = new VectorXY(0,0);
  }

  // if (keys[39]) {
  //   //velX = 10;
  //   if (velX < maxSpeed) {
  //     velX += 0.5;
  //   }
  // }
  // if (keys[40]) {
  //   //velY = 10;
  //   if (velY < maxSpeed) {
  //     velY += 0.5;
  //   }
  // }
  // if (keys[38]) {
  //   //velY = -10;
  //   if (velY > -maxSpeed) {
  //     velY -= 0.5;
  //   }
  // }
}









getTags('loading')[0].addClass('none-style');

