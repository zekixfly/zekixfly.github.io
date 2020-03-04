//環境變數
var updateFPS = 30;
var showMouse = true;
var time = 0;
var bgColor = '#001D2E';

//控制
var controls = {
	value: 0
}
var gui = new dat.GUI();
gui.add(controls,"value",-2,2).step(0.01).onChange(function(value){});

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
var a = new VectorXY(3,4);
//----------------------------------


var canvas = getId('ZekiCanvas');
var ctx = canvas.getContext('2d');
var winWidth,winHeight;

ctx.circle = function(v,r) {
	this.arc(v.x, v.y, r, 0, Math.PI*2);
}
ctx.line = function(v1,v2) {
	this.moveTo(v1.x, v1.y);
	this.lineTo(v2.x, v2.y);
}

//canvas設定
function initCanvas() {
	winWidth = canvas.width = innerWidth;
	winHeight = canvas.height = innerHeight;
}
initCanvas();

//邏輯初始化
function init() {

}

//遊戲邏輯更新
function update() {
	time++;
}

//畫面更新
function draw() {
	//設定背景
	ctx.fillStyle = bgColor;
	ctx.fillRect(0,0,winWidth,winHeight);

	//----------------------------------
	// Zeki請在這裡會製


	//----------------------------------
	// 滑鼠

	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.circle(mousePos, 3);
	ctx.fill();

	ctx.save();
		ctx.beginPath();
		ctx.translate(mousePos.x, mousePos.y)
			ctx.strokeStyle = 'red';
			let len = 20;
			ctx.line(new VectorXY(-len,0),new VectorXY(len,0));
			ctx.fillText(mousePos,10,-10);
			ctx.rotate(Math.PI/2);
			ctx.line(new VectorXY(-len,0),new VectorXY(len,0));
			ctx.stroke();
	ctx.restore();

	requestAnimationFrame(draw);
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
var mousePos = new VectorXY(0,0);
var mousePosDown = new VectorXY(0,0);
var mousePosUp = new VectorXY(0,0);


window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseup', mouseup);
window.addEventListener('mousedown', mousedown);
function mousemove(event) {
	mousePos.set(event.x, event.y);
	console.log(mousePos);
}

function mouseup(event) {
	mousePos.set(event.x, event.y);
	mousePosUp = mousePos.clone();
}

function mousedown(event) {
	mousePos.set(event.x, event.y);
	mousePosDown = mousePos.clone();
}
