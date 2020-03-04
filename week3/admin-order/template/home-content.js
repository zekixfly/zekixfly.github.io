// getTags('home-content')[0].innerHTML = ``;

// fillRect(x, y, width, height)
// 畫出一個填滿的矩形。
// strokeRect(x, y, width, height)
// 畫出一個矩形的邊框
// clearRect(x, y, width, height)
// 清除指定矩形區域內的內容，使其變為全透明。

var productList = productList();
var randomArr = []
for(var i =0; i<3; i++) {
	var randomIdx = Math.round(Math.random()*(productList.length-1));
	

	if(randomArr != false) {
		if(randomArr.indexOf(randomIdx) != -1) {
			randomIdx +=1;
		}
	randomArr.push(randomIdx)
	}



	var section = makeTag('section');
	section.innerHTML = `
		<img src="${productList[randomIdx].productPhoto}" title="${productList[randomIdx].productName}">
		<span class="lh-normal order-info">
			<a href="${productList[randomIdx].url}" target="_blank">
			<h4 title="${productList[randomIdx].productName}">${productList[randomIdx].productName}</h4>
			<i class="fas fa-clock mr7"></i><i>${productList[randomIdx].orderTime}</i><br />
			<i class="fas fa-female gender"></i><i>${productList[randomIdx].customerNickname[0]}</i>
			</a>
		</span>
		<span class="lh-normal amount-info">
			<h5>Total</h5>
			<i>HK$${productList[randomIdx].priceDiscount}</i>
		</span>`;
		getId('latest-orders').addKid(section);
		randomArr.push(randomIdx);
}

var ZekiAnimtionFrame = '';
function init() {
	ZekiAnimtionFrame = window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	window.oRequestAnimationFrame;
	ZekiAnimtionFrame(drawZekiCanvas);
}


	// var width = canvas.width;
	// var height = canvas.height;
var canvas, ctx;
 canvas = getId('ZekiCanvas');
if(canvas.getContext) {
 ctx = canvas.getContext('2d');
}
else {
	canvas.innerHTML = 'Your browser unsupportted canvas.';
}
var chartData = chartData();
				chartData.netIncome = [chartData.revenue[0] - chartData.cost[0], chartData.revenue[1] - chartData.cost[1], chartData.revenue[2] - chartData.cost[2], chartData.revenue[3] - chartData.cost[3], chartData.revenue[4] - chartData.cost[4], chartData.revenue[5] - chartData.cost[5], chartData.revenue[6] - chartData.cost[6], chartData.revenue[7] - chartData.cost[7]],
				xStart = 55,
				yStart =	canvas.height-40,
				yTmp = 0,
				cWidth = canvas.width, //圖形區域寬
				cHeight = canvas.height, //圖形區域高
				dataIdx = 0,
				dataCount = 8, //顯示的資料數量
				auxiliaryLine = 9,//輔助線數量
				auxiliarySpacing = 40, //輔助線間隔
				totalRevenue = 0,
				totalCost = 0,
				netIncome = 0,
    xAverageWidth = (cWidth / (dataCount + 1)),//X平均9等份寬
				//date start set X
				revenueX = 0,
				costX = 0,
				netIncomeX = 0,
    //date start set Y
    revenueY = yStart, //animate's init value
    costY = yStart, //animate's init value
    netIncomeY = yStart, //animate's init value
				revenueMaxHeight = 0,
				costMaxHeight = 0,
				netIncomeMaxHeight  = 0,
    firstViewBoolean = true,
				count = 0, //一個月份有3組長條圖
				animateY = 0,
				moveX = 0;

for(var i =0; i<Object.keys(chartData).length; i++) {
	switch(Object.keys(chartData)[i]) {
		case 'revenue':
			for (var idx in chartData.revenue) {
				totalRevenue += chartData.revenue[idx];
			}
			break;	
		case 'cost':
			for (var idx in chartData.cost) {
				totalCost += chartData.cost[idx];
			}
			break;		
		case 'netIncome':			
			netIncome = totalRevenue - totalCost;
		
	}
}
getId('total-revenue').innerHTML = totalRevenue;
getId('total-cost').innerHTML = totalCost;
getId('net-income').innerHTML = netIncome;


//draw multi x auxiliarySpacing line
for(var i = 0; i < auxiliaryLine; i++) {
	ctx.beginPath();
	ctx.strokeStyle = "rgba(0,0,0,0.1)";
	ctx.lineWidth = '1';
	yTmp  = yStart - i*auxiliarySpacing;
	ctx.moveTo(xStart, yTmp);
	// ctx.lineTo(xStart, yStart); //X line
	ctx.lineTo(xStart + cWidth, yTmp); //Y line
	// even number wirte text
	if(i%2 == 0) {			
		ctx.font="14px monospace";
		ctx.textAlign = 'center';
		ctx.fillStyle = '#9B9B9B';
		ctx.fillText(i*1000, 30, yTmp+5);
	}

	ctx.stroke();
	ctx.closePath();	
}


console.log('outerchartData:'+ chartData);





function drawZekiCanvas() {





	console.log('innerchartData:'+ chartData);
 // var revenue = chartData.revenue;//顯示的資料
	// var cost = chartData.cost;//顯示的資料
	

	// console.log(Object.keys(chartData));

	// for(dataIdx = 0; dataIdx < dataCount; dataIdx++) {

				// var color = ''

					


			// function drawChartAnimate() {
				if(dataIdx < chartData.date.length) {
					// ctx.save();
					// // ctx.clearRect(revenueX-10, 0, 20 , cHeight);//clear canvas rect area
					// ctx.restore();
					// ctx.stroke();			

					drawChart(dataIdx, chartData);


					// ctx.clearRect(0, 0, canvas.width , canvas.height);//clear canvas rect area

					// ctx.fillText(chartData.date[dataIdx], moveX, cHeight-15);
				}
					
			// }

			// if(firstViewBoolean === true) {
			// 	drawChartAnimate();
			// 	firstViewBoolean = false;
			// }

			function drawChart(dataIdx, chartData) {

					// Window.prototype.dataIdx = dataIdx;
					// Window.prototype.chartColor = chartColor;
					// Window.prototype. chartArr =  chartArr;
					// Window.prototype.chartType = chartType;


					
					

					// switch (chartType) {
					// 	case 'revenue':
					// 		// x = xStart + (xAverageWidth * (dataIdx + 1) );				
					// 		moveX =  (xAverageWidth * (dataIdx + 1) );
					// 		// animateY = animateRevenue -= 1;
					// 		if(animateRevenue < 0) {
					// 			animateY = animateRevenue;
					// 		}else {
					// 			animateY = animateRevenue -= 1;
					// 		}
					// 		console.log('animateY :', animateY)
					// 		break;
					// 	case 'cost':
					// 		moveX =  (xAverageWidth * (dataIdx + 1) ) + ctx.lineWidth;
					// 		// animateY = animateCost -= 1;
					// 		if(animateCost < 0) {
					// 			animateY = animateCost;
					// 		}else {
					// 			animateY = animateCost -= 1;
					// 		}
					// 		console.log('animateY :', animateY)
					// 		break;
					// 	case 'netIncome':
					// 		moveX =  (xAverageWidth * (dataIdx + 1) ) + ctx.lineWidth*2;
					// 		// animateY = animateNetIncome -= 1;
					// 		if(animateNetIncome < 0) {
					// 			animateY = animateNetIncome;
					// 		}else {
					// 			animateY = animateNetIncome -= 1;
					// 		}
					// 		console.log('animateY :', animateY)
					// 		break;
					// 	default:
					// 		// statements_def
					// 		break;
					// }
					revenueMaxHeight = yStart - ( chartData.revenue[dataIdx]*(auxiliaryLine-1)*auxiliarySpacing)/8000;
					costMaxHeight = yStart - ( chartData.cost[dataIdx]*(auxiliaryLine-1)*auxiliarySpacing)/8000;
					netIncomeMaxHeight = yStart - ( chartData.netIncome[dataIdx]*(auxiliaryLine-1)*auxiliarySpacing)/8000;

					revenueX = (xAverageWidth * (dataIdx + 1) );
					costX = (xAverageWidth * (dataIdx + 1) ) + ctx.lineWidth;
					netIncomeX = (xAverageWidth * (dataIdx + 1) ) + ctx.lineWidth*2;


					if(revenueY >= 0) {
							revenueY -= 15;
					}
					else {
						revenueY = revenueMaxHeight;
					}
					if(costY >= 0) {
							costY -= 15;
					}
					else {
						costY = costMaxHeight;
					}
					if(netIncomeY >= 0) {
							netIncomeY -= 15;
					}
					else {
						netIncomeY = netIncomeMaxHeight;
					}


					
					// console.log(`xStart: ${moveX}`, `yHeight: ${animateY}`);
					if (count < 3) {
						if (revenueY >= revenueMaxHeight) {
							ctx.beginPath();
							ctx.lineWidth = '30';
							ctx.strokeStyle = 'rgba(0,255,0,1)';
							ctx.moveTo(revenueX, yStart);						
							ctx.lineTo(revenueX, revenueY);
							ctx.stroke();
							
							if(revenueY == revenueMaxHeight) {
								fillText('revenue', revenueX, revenueY);
								count++;
							}
						}
						else {
							ctx.beginPath();
							ctx.lineWidth = '30';
							ctx.strokeStyle = 'rgba(0,255,0,1)';
							ctx.moveTo(revenueX, yStart);						
							ctx.lineTo(revenueX, revenueMaxHeight);
							ctx.stroke();
						}
						// ctx.save();

						if (costY >= costMaxHeight) {
							ctx.beginPath();
							ctx.lineWidth = '30';
							ctx.strokeStyle = 'rgba(255,0,0,1)';
							ctx.moveTo(costX, yStart);						
							ctx.lineTo(costX, costY);
							ctx.stroke();
							
							if(costY == costMaxHeight) {
								fillText('cost', costX, costY);
								count++;
							}
						}
						else {
							ctx.beginPath();
							ctx.lineWidth = '30';
							ctx.strokeStyle = 'rgba(255,0,0,1)';
							ctx.moveTo(costX, yStart);						
							ctx.lineTo(costX, costMaxHeight);
							ctx.stroke();
						}
						// ctx.save();

						if (netIncomeY >= netIncomeMaxHeight) {
							ctx.beginPath();
							ctx.lineWidth = '30';
							ctx.strokeStyle = 'rgba(0,0,255,1)';
							ctx.moveTo(netIncomeX, yStart);						
							ctx.lineTo(netIncomeX, netIncomeY);
							ctx.stroke();
							
							if(netIncomeY == netIncomeMaxHeight) {
								fillText('netIncome', netIncomeX, netIncomeY);
								count++;
							}
						}
						else {
							ctx.beginPath();
							ctx.lineWidth = '30';
							ctx.strokeStyle = 'rgba(0,0,255,1)';
							ctx.moveTo(netIncomeX, yStart);						
							ctx.lineTo(netIncomeX, netIncomeMaxHeight);
							ctx.stroke();
						}
						
						ZekiAnimtionFrame(drawZekiCanvas);
					} 
					else {
							
							window.dataIdx += 1;
							revenueY = yStart;
							costY = yStart;
							netIncomeY = yStart;
							count = 0;
							ZekiAnimtionFrame(drawZekiCanvas);							
					}


					function fillText(type,txtX, txtY) {
						ctx.fillStyle = 'black';		
						ctx.font="14px monospace";
						ctx.textAlign = 'center';
						ctx.fillText(chartData[type][dataIdx],  txtX, txtY-5);
						
						ctx.moveTo(costX, cHeight*(8000/cHeight));
						ctx.fillStyle = '#9B9B9B';		
						ctx.font="20px monospace";
						ctx.textAlign = 'center';
						ctx.fillText(chartData.date[dataIdx],  costX, cHeight-15);				
		
					}

					
					// switch (true) {
					// 	case (revenueY >= revenueMaxHeight):
					// 					ctx.beginPath();
					// 					ctx.lineWidth = '20';
					// 					ctx.strokeStyle = 'rgba(0,255,0,1)';
					// 					ctx.moveTo(revenueX, yStart);						
					// 					ctx.lineTo(revenueX, revenueY);
					// 					ctx.stroke();
					// 	case (costY >= costMaxHeight):
					// 					ctx.beginPath();
					// 					ctx.lineWidth = '20';
					// 					ctx.strokeStyle = 'rgba(255,0,0,1)';
					// 					ctx.moveTo(costX, yStart);						
					// 					ctx.lineTo(costX, costY);
					// 					ctx.stroke();
					// 	case (netIncomeY >= netIncomeMaxHeight):
					// 					ctx.beginPath();
					// 					ctx.lineWidth = '20';
					// 					ctx.strokeStyle = 'rgba(0,0,255,1)';
					// 					ctx.moveTo(netIncomeX, yStart);						
					// 					ctx.lineTo(netIncomeX, netIncomeY);
					// 					ctx.stroke();
					// 					// ctx.save();
					// 					ZekiAnimtionFrame(drawZekiCanvas)
					// 					break;
					// 	default:
					// 		window.dataIdx += 1;
					// 		revenueY = yStart;
					// 		costY = yStart;
					// 		netIncomeY = yStart;
					// 		ZekiAnimtionFrame(drawZekiCanvas);
					// 		break;
					// }


				

					// if(animateY >= barChartHeight) {	
					// // console.log('animateY >= barChartHeight', animateY , barChartHeight)
					// 	// ctx.clearRect(0, 0, canvas.width , canvas.height);//clear canvas rect area
					// 	// if(firstViewBoolean !== true) {
					// 	// 	ctx.restore();
					// 	// 	ctx.stroke();	
					// 	// }
						



					// 	// firstViewBoolean = false;
						

					// 	// ctx.fillStyle = 'black';		
					// 	// ctx.font="14px monospace";
					// 	// ctx.textAlign = 'center';
					// 	// ctx.fillText( chartArr[dataIdx], moveX, animateY-5);
					// 	// // ctx.save();

					// 	// moveX = (xAverageWidth * (dataIdx + 1) ) + ctx.lineWidth;
					// 	// ctx.moveTo(moveX, cHeight*(8000/cHeight));
					// 	// ctx.fillStyle = '#9B9B9B';		
					// 	// ctx.font="20px monospace";
					// 	// ctx.textAlign = 'center';
					// 	// ctx.fillText(chartData.date[dataIdx], moveX, cHeight-15);
					// 	// ctx.save();


					// 	ZekiAnimtionFrame(drawZekiCanvas);
					// 	// console.log(`moveX: ${moveX}`, `yH: ${animateY}`);
					// }else if(animateY == -1){
						 
					// 	count++;
					// 	console.log('count:'+ count);
						
								

					// 	if(count == 3) {
					// 		window.cancelAnimationFrame(ZekiAnimtionFrame);
					// 		window.dataIdx += 1;	
							
					// 		// animateRevenue = yStart;
					// 		// animateCost = yStart;
					// 		// animateNetIncome = yStart;
					// 		console.log('dataIdx:'+ dataIdx)
					// 		console.log('animateY:'+ animateY)
					// 		count = 0;
					// 		ZekiAnimtionFrame(drawZekiCanvas);

					// 	}
						
					// 		// console.log('animateY <= barChartHeight', animateY , barChartHeight)
					// }	
					
					// ctx.lineTo(moveX, y - ( chartArr[dataIdx]*(auxiliaryLine-1)*auxiliarySpacing)/8000);		

					

	

					// ctx.save();
					// if(animateY >= barChartHeight) {
					// 	// ctx.restore();
					// 	// ctx.restore();
					// 	ZekiAnimtionFrame(drawChartAnimate);
					// }
					// else {

					// }

					
					// if(animateY == barChartHeight) {
					// 	dataIdx++
					// 	drawChartAnimate();
					// }
					// }

					// if(dataIdx < dataCount) {

					// }
			}
		// switch (true) {
		// 	case (Object.keys(chartData).map(function(key, idx){return key}).indexOf('revenue') !== -1):

				
				
		// 	case (Object.keys(chartData).map(function(key, idx){return key}).indexOf('cost') !== -1):
				
		// 		var color = ''
		// 		drawChart(dataIdx, color, chartData.cost, 'cost');
				
		// 	case (Object.keys(chartData).map(function(key, idx){return key}).indexOf('netIncome') !== -1):
		// 		var color = ''
		// 		drawChart(dataIdx, color, chartData.netIncome, 'netIncome');
		// 		break;
		// 	default:
		// 		// statements_def
		// 		break;
		// }
		
	// }

}


init();


getTags('loading').addClass('none-style');












	// ctx.strokeStyle = "rgb(200,0,0)";
	
	
	// ctx.beginPath();
	// ctx.moveTo(0, 0);
	// ctx.lineTo(30, 30);
	// ctx.lineTo(50, 10);
	// ctx.lineTo(70, 60);
	// ctx.stroke();