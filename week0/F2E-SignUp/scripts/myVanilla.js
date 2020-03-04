(function() {
	var weeksUl = makeTag('ul');
	weeksUl.className = 'challenge-weeks';
	var section = makeTag('section');
	
	for(var i=0; i<9; i++) {
		var li = makeTag('li');
		li.className = 'this-week';
		li.innerHTML = `wk${i+1}`;	
		weeksUl.addKid(li);
		section.addKid(weeksUl);
		getId('challenge-weeks').addKid(section);				
	}
}());


function countDown() {

	var MSTimeSet = {
		daysMS : 24 * 60 * 60 * 1000,
		hoursMS : 60 * 60 * 1000,
		minuteMS : 60 * 1000,
		microSecond : 1000,
	};
	
	var today = new Date();
	var F2EStart = new Date('June 04,2018 12:00:00');	
	var F2ECountDown = today.getTime() -F2EStart.getTime();
	/*----------CountDownSet----------*/
	var date = Math.floor(F2ECountDown/MSTimeSet.daysMS);
	F2ECountDown -= date * MSTimeSet.daysMS;
	var hour = Math.floor(F2ECountDown/MSTimeSet.hoursMS);
	F2ECountDown -= hour * MSTimeSet.hoursMS;
	var minute = Math.floor(F2ECountDown/MSTimeSet.minuteMS);
	F2ECountDown -= minute * MSTimeSet.minuteMS;
	var second = Math.floor(F2ECountDown/MSTimeSet.microSecond);
	/*----------CountDownSet----------*/
	getId('f2eCountDate').innerHTML = `
  <main class="content">
    <h1>2018/06/04 12:00 - 開賽至今</h1>
    <div class="countdown">
      <div class="countdown-days">
        <div class="number">${date}</div>
        <span class>Days</span>
      </div>

      <div class="countdown-hours">
        <div class="number">${hour}</div>
        <span class>Hours</span>
      </div>

      <div class="countdown-minutes">
        <div class="number">${minute}</div>
        <span class>Minutes</span>
      </div>

      <div class="countdown-seconds">
        <div class="number">${second}</div>
        <span class>Seconds</span>
      </div>
    </div>
  </main>
	`;
	getId('verification-zone').addClass('verification-zone-transition');
	setTimeout(countDown,1000);	
}
countDown();





function f2eSignUpMember() {
	doAjax('get', 'signUpTotal', function(response) {
				// console.log(response.total);
				getId('verification-zone').dataBind({
					data: response
				});
	});
}
f2eSignUpMember();
setInterval(f2eSignUpMember,30000);



		
function timeStampHandler(timeStamp) {
	var d = new Date(timeStamp),
	   year = d.getUTCFullYear(),
	   month = '' + (d.getUTCMonth() + 1),
	   day = '' + d.getUTCDate(),
	   hour = d.getUTCHours(),
	   minute = '' + d.getUTCMinutes(),
	   second = '' + d.getUTCSeconds();
	   

	if (month.length < 2) {month = '0' + month};
	if (day.length < 2) {day = '0' + day};
	if (hour.length < 2) {hour = '0' + hour};
	if (minute.length < 2) {minute = '0' + minute};
	if (second.length < 2) {second = '0' + second};
	var dateFiled = [year, month, day].join('-'),
				timeFiled = [hour, minute, second].join(':');
	return {date: dateFiled, time: timeFiled};
}




var singUpInfo = getId('singUpInfo');
getId('mail-send').onclick = function() {	
	doAjax('post', 'isSignUp', function(response){
					// getId('verification-zone').addClass('upsideDown').addClass('opacity0');
			getId('verification-zone-info').addClass('z-index100');
			getClasses('flipper')[0].addClass('flipper-click');
			// console.log(response);



			console.log(response);
			if(response.success === true) {
				
				singUpInfo.innerHTML = `
					<section class="content">
						<span class="singUpSucces">暱稱: ${response.nickName}</span>
						<span class="singUpSucces">技能樹: ${response.skill}</span>
						<span class="singUpSucces">報名狀態: ${response.message}</span>
						<span class="singUpSucces">報名時間: ${timeStampHandler(response.timeStamp).date} ${timeStampHandler(response.timeStamp).time}</span>
					</section>`;	
					
					doAjax('post', 'stageCheck', function(response){
						var nineWeeksArr = new Array(9);
							// console.log(response);
							// console.log(response.map(function(obj, idx) {return obj;})[0].mail);
							// console.log(response.map(function(obj, idx) {return obj;})[0].stage);
							// console.log(response.map(function(obj, idx) {return obj;})[0].tag);
							// console.log(response.map(function(obj, idx) {return obj;})[0].timeStamp);
							// console.log(response.map(function(obj, idx) {return obj;})[0].url);
							// console.log(response.map(function(obj, idx) {return obj;}));
							// console.log(getClasses('this-week'));
							// console.log(timeStampHandler(response.map(function(obj, idx) {return obj;})[0].timeStamp).date);
							// console.log(timeStampHandler(response.map(function(obj, idx) {return obj;})[0].timeStamp).time);
							for(var i = 0; i < 9; ++i) {
								nineWeeksArr[i]	= response.filter(function(obj, idx) {
								 return obj.stage === i+1;
								});
							}
							switch (true) {
								case (nineWeeksArr[0].length !==0):
									thisWeekSuccess(nineWeeksArr[0]);									
								case (nineWeeksArr[1].length !==0):
									thisWeekSuccess(nineWeeksArr[1]);									
								case (nineWeeksArr[2].length !==0):
									thisWeekSuccess(nineWeeksArr[2]);									
								case (nineWeeksArr[3].length !==0):
									thisWeekSuccess(nineWeeksArr[3]);									
								case (nineWeeksArr[4].length !==0):
									thisWeekSuccess(nineWeeksArr[4]);									
								case (nineWeeksArr[5].length !==0):
									thisWeekSuccess(nineWeeksArr[5]);									
								case (nineWeeksArr[6].length !==0):
									thisWeekSuccess(nineWeeksArr[6]);									
								case (nineWeeksArr[7].length !==0):
									thisWeekSuccess(nineWeeksArr[7]);									
								case (nineWeeksArr[8].length !==0):
									thisWeekSuccess(nineWeeksArr[8]);									
								default:
									// statements_def
									break;
							}

							function thisWeekSuccess(thisWeekArr) {
								thisWeekArr.forEach( function(obj, idx) {
								getClasses('this-week')[obj.stage-1].addClass('pass');
								getClasses('this-week')[obj.stage-1].innerHTML = `wk${obj.stage}<span class="works-logged-in" onclick="zekiFrame('${obj.mail}', '${obj.stage}', '${obj.tag}', '${obj.timeStamp}', '${obj.url}');">已投稿</span>`;
									
								});
								

							}
							// for(var i = 0; i<9  ; i++) {
							// getClasses('this-week')[i].addClass('pass');
							// getClasses('this-week')[i].innerHTML = `wk${i+1}<span class="works-logged-in" onclick="zekiFrame('${response[i].mail}', '${response[i].stage}', '${response[i].tag}', '${response[i].timeStamp}', '${response[i].url}');">已投稿</span>`;
							// }
							// getClasses('this-week')[idx = response.map(function(obj, idx) {return obj.stage-1;})].addClass('pass');
							// getClasses('this-week')[response.map(function(obj, idx) {return obj;})[0].stage-1].innerHTML = `wk${response.map(function(obj, idx) {return obj;})[0].stage}<span class="works-logged-in" onclick="zekiFrame('${response.map(function(obj, idx) {return obj;})[0].mail}', '${response.map(function(obj, idx) {return obj;})[0].stage}', '${response.map(function(obj, idx) {return obj;})[0].tag}', '${response.map(function(obj, idx) {return obj;})[0].timeStamp}', '${response.map(function(obj, idx) {return obj;})[0].url}');">已投稿</span>`;
			
							getId('back-search').onclick = function() {
								getClasses('flipper')[0].delClass('flipper-click');
							for(var i = 0; i<response.length; i++) {
								getClasses('this-week')[i].delClass('pass');
								getClasses('this-week')[i].innerHTML = `wk${i+1}`;
							}
								// getClasses('this-week')[response.map(function(obj, idx) {return obj;})[0].stage-1].delClass('pass');
								// getClasses('this-week')[response.map(function(obj, idx) {return obj;})[0].stage-1].innerHTML = `wk${response.map(function(obj, idx) {return obj;})[0].stage}`;
							}


					});

			}
			else {
				if(getId("email").value != '' ){
					singUpInfo.innerHTML = `<p style="color:red;">報名狀態: ${response.message}<p>`;		
				}else {
					singUpInfo.innerHTML = `<p style="color:red;">報名狀態: email 參數未提供<p>`;		
				}
				
			}
	});



	// doAjax(type='get', apiName='signUpTotal', function(response){
		
	// });

};

var data = null;
function doAjax(type='get', apiName='signUpTotal', callBackFn) {
	if(type === 'post') {
		data = 'email=' + getId("email").value;
	}
	else{
		data = null;
	}
	ajax({
		type: type, 
		url: 'https://www.thef2e.com/api/'+apiName,	
		postData: data,
		// postDataType: 'application/x-www-form-urlencoded',
		ok: function(response) {	
			callBackFn(response);
		}	
	});
}




function zekiFrame(mail, stage, tags, timeStamp, url) {
	// console.log(mail, stage, tags, timeStamp, url);
	url = url.replace('http://','https://');
	var closeDiv = makeTag('div');
	closeDiv.id = 'ZekiCloseFrame';
	closeDiv.innerHTML = 'X';
	var loadFrame = makeTag('div');
	loadFrame.className = 'loading-frame'
	var iframe = makeTag('iframe')
	iframe.className = 'full-iframe';
	iframe.src = url;
	loadFrame.addKid(iframe);
	var webInfoUl = makeTag('ul');
	var stageLi = makeTag('li');
	stageLi.innerHTML = `挑戰關卡: ${stage} Stage`;
	var mailLi = makeTag('li');
	mailLi.innerHTML = `電子郵件: ${mail}`;
	var tagLi = makeTag('li');
	tagLi.innerHTML =`練習技能: ${tags}`;
	var timeLi = makeTag('li');
	timeLi.innerHTML = `投稿時間:	${timeStampHandler(parseInt(timeStamp)).date} ${timeStampHandler(parseInt(timeStamp)).time}`;
	webInfoUl.addKids([stageLi, mailLi, tagLi, timeLi, closeDiv]);

	var ZekiFrameDiv = makeTag('div')
	ZekiFrameDiv.id = 'Zeki-Frame';
	ZekiFrameDiv.addKids([webInfoUl,loadFrame]);
	getTags('HTML')[0].addKid(ZekiFrameDiv);
	closeDiv.onclick = function() {
		removeNode(ZekiFrameDiv);
	}
}

function removeNode(ZekiFrameDiv) {
	ZekiFrameDiv.remove();
}