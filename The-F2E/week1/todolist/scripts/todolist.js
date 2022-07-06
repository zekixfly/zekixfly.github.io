var markTop = false;
var originUl = '';
var commentMark = '';
var commentContent = '';
var fileMark = '';
var completedMark = '';
var	taskInfoMark = '';
var	cardTitleMark = '';
var taskStateClass = '';
var checkMark = false;
var createTaskBoolean = true;
var editTaskBoolean = true;
var completedBoolean = false;

var taskLeft = 0;
var taskTotal = 0;
var i = 0;

var toDoList = [
	{completeSate: true, title: 'Week 1 - Todolist', top: true, date: '2018-06-04', time: '12:00', file: '', comment: 'todolist完成!'},
	{completeSate: true, title: 'Week 2 - Filter', top: true, date: '2018-06-11', time: '12:00', file: '', comment: 'Filter完成!'},
	{completeSate: true, title: 'Week 3 - Amin Order', top: true, date: '2018-06-18', time: '12:00', file: '', comment: 'Amin Order完成!'},
	{completeSate: true, title: 'Week 4 - Product Gallery', top: true, date: '2018-06-25', time: '12:00', file: '', comment: 'Product Gallery完成!'},
	{completeSate: false, title: 'Week 5 - waitting', top: false, date: '2018-07-02', time: '12:00', file: '', comment: ''},
	{completeSate: false, title: 'Week 6 - waitting', top: false, date: '2018-07-09', time: '12:00', file: '', comment: ''},
	{completeSate: false, title: 'Week 7 - waitting', top: false, date: '2018-07-16', time: '12:00', file: '', comment: ''},
	{completeSate: false, title: 'Week 8 - waitting', top: false, date: '2018-07-23', time: '12:00', file: '', comment: ''},
	{completeSate: false, title: 'Week 9 - waitting', top: false, date: '2018-07-30', time: '12:00', file: '', comment: ''},
];

// for(var i=toDoList.length-1; i>=0;--i) {
// 	taskClass(null, toDoList[i].completeSate, toDoList[i].title, toDoList[i].top, toDoList[i].date, toDoList[i].time, toDoList[i].file, toDoList[i].comment);
// }
getId('all-task').onclick();

createTaskBoolean = true;


	// var time = hh+':'+mm,
	// 				today = yyyy+'-'+MM+'-'+dd;



function navBtn(navBtnThis, taskSate) {
		navBtnThis.addClass('nav_hover').siblings().delClass('nav_hover');
		getId('add_task').getClasses('top_task')[0].innerHTML = '';
		getId('add_task').getClasses('normal_task')[0].innerHTML = '';
		taskLeft = 0;
		switch (taskSate) {
			case 'all':
				for(i=toDoList.length-1; i>=0;i--) {
					if(toDoList[i].completeSate === false) {
						++taskLeft;
					}					
						taskClass(null, i, toDoList[i].completeSate, toDoList[i].title, toDoList[i].top, toDoList[i].date, toDoList[i].time, toDoList[i].file, toDoList[i].comment);
				}
				getTags('total')[0].innerHTML = `${taskLeft}/${toDoList.length} tasks left`;
				break;
			case 'inProgress':

				for(i=toDoList.length-1; i>=0;i--) {
						if(toDoList[i].completeSate === false) {
							++taskLeft;
							taskClass(null, i, toDoList[i].completeSate, toDoList[i].title, toDoList[i].top, toDoList[i].date, toDoList[i].time, toDoList[i].file, toDoList[i].comment);	
						}						
				}
				getTags('total')[0].innerHTML = `${taskLeft} tasks left`
				break;
			case 'completed':
				for(i=toDoList.length-1; i>=0;i--) {
						if(toDoList[i].completeSate === true) {
							++taskLeft;
							taskClass(null, i, toDoList[i].completeSate, toDoList[i].title, toDoList[i].top, toDoList[i].date, toDoList[i].time, toDoList[i].file, toDoList[i].comment);	
						}						
				}
				getTags('total')[0].innerHTML = `${taskLeft} tasks left`
				break;
			default:
				// statements_def
				break;
		}
		

}



function createTask(createTaskThis, event) {

	if(event !== null) {
		// createTaskBoolean = true;
	}
	// createTaskBoolean = true;
	if(createTaskBoolean === true) {
		// createTaskBoolean = false;
		++taskLeft;
		markTop = false;
		// markTop = !markTop;
		// markTop = false;

		// if(markTop === true) {
		// 	martTopStyle = `<i class="fas fa-star markTop" onclick="markToggle(this, 'mark')"></i>`;
		// 	taskStateClass = 'top_task';
		// }
		// else {
		// 	martTopStyle = `<i class="far fa-star" onclick="markToggle(this, 'unMark')"></i>`;
		// 	taskStateClass = 'normal_task';
		// }
		// createTaskThis.addClass('none-style');
		createTaskThis.addClass('task_focus');
		createTaskThis.innerHTML = `
		<div id="task_header">
			<label class="checkbox_container">
	  	<input type="checkbox">
	  	<span id="checkmark" class="checkmark"></span>
			</label>		

			<input id="card_title" type="text" placeholder="Type Something Here…">
			<span id="title_tip"></span>
			<div class="star_shap">
			<i class="far fa-star" onclick="markToggle(this)"></i>
			<i class="fas fa-pencil-alt editing"></i>
			</div>
			<div class="underLine"></div>
			<div class="sub_container">
			
				<div class="dead_line">
				 <section><i class="far fa-calendar-alt"></i><span class="card_sub_title">Deadline</span></section>
				 <section><input id="datefield" type="date"><input id="timefield" type="time"></section>
				</div>
				<div class="file">
					<section><i class="far fa-file"></i><span class="card_sub_title">File</span></section>
					<section><span id="uploadFile"></span><label class="custom-file-upload"><input id="uploadBtn" type="file"/><i class="fas fa-plus-square"></i></label></section>
				</div>
				<div class="comment">
					<section><i class="far fa-comment-dots"></i><span class="card_sub_title">Comment</span></section>
					<section><textarea id="commentfield" class="comment_text" type="text" placeholder="Type your memo here..."></textarea></section>
				</div>

			</div>
			<button id="cancel-btn" class="cancel-btn"><i class="fas fa-times"></i> Cancel</button>
			<button id="add-btn" class="add-btn"><i class="fas fa-plus"></i> Add Task</button>
		</div>
		`;
		getId('task_header').onclick = function(event) {
			preventOuterEventFired(event);
		}		
		getId('cancel-btn').onclick = function(event) {
			cancelTask(event);
		}
		getId('add-btn').onclick = function(event) {
			addTask(event, toDoList.length, checkMark, document.getElementById('card_title').value, markTop, timeStamp().today, timeStamp().time, document.getElementById('uploadFile').textContent, document.getElementById('commentfield').value);
		}
		getId("uploadBtn").onchange = function () {
			getId("uploadFile").innerHTML = this.value +'<span style="padding-right: 23px"></span>';
		}
		getId('checkmark').onclick = function() {
			 checkMark= !checkMark;
			if(checkMark === true) {
				completedBoolean = true;
				this.addClass('completed-check');
			}
			else {
				completedBoolean = false;
				this.delClass('completed-check');
			}
		}
		getId("datefield").setAttr("value", timeStamp().today);	
		getId("timefield").setAttr("value", timeStamp().time);
		getId('card_title').addEventListener("blur", function(){
			if(getId('card_title').value.trim() === '') {
				getId('title_tip').innerHTML = '請輸入標題。'
			}
			else{
				getId('title_tip').innerHTML = '';
			}
		});

	}
}



function timeStamp() {
	var date = new Date(),	
					mm = date.getMinutes(),
					hh = date.getHours(),
					dd = date.getDate(),
					MM = date.getMonth()+1, //January is 0!
					yyyy = date.getFullYear();

	if(dd<10){
		dd='0'+dd
	} 
	if(MM<10){
		MM='0'+MM
	}
	if(hh<10){
		hh='0'+hh
	}
	if(mm<10){
		mm='0'+mm
	}
	var time = hh+':'+mm,
					today = yyyy+'-'+MM+'-'+dd;
	return {today:today, time:time}
	
}

	// {completeSate: false, title: 'My Task 5', Top: false, date: '2018-07-04', time: '12:00', file: '', Comment: ''},
function addTask(event, i, completeSate, title, top, date, time, file, comment) {

	markTop = top;
	var toDoTopUl = makeTag('ul');
	var toDoTopLi = makeTag('li');
	var toDoTopLiSub = makeTag('li');
	var toDoUl = makeTag('ul');
	var toDoLi = makeTag('li');
	var toDoLiSub = makeTag('li');
	toDoTopUl.className = 'toDoTopUl';
	toDoUl.className = 'toDoUl';
	if(title === '') {
		getId('title_tip').innerHTML = '請輸入標題。'
		// toDoLi.innerHTML	= '<span>Type Something Here…</span>';
	}
	else {

			if(markTop === true ) {
				if(comment.trim() !== '') {
					commentMark = `<i class="far fa-comment-dots  comment-title" title="${comment}"></i>`;
				}
				else {
					commentMark = '';
				}

				if(file.trim() !== '') {
					fileMark = `<i class="far fa-file" title="${file}"></i>`;
				}
				else {
					fileMark = '';
				}

				toDoTopLi.innerHTML = `
				<label class="checkbox_sub_container">
		  	<input type="checkbox">
		  	<span class="checkmark"></span>
				</label>		
				<span class="card_title">${title}</span>
				<div class="star_shap">
					<i class="far fa-star none-style"></i>
					<i class="fas fa-star markTop"></i>
					<i class="fas fa-pencil-alt modify-content"></i>
				</div>`;
				toDoTopLiSub.innerHTML = `
				<div class="task_info">
					<i class="far fa-calendar-alt"></i>
					<span class="datefield">${date}</span> <span class="timefield">${time}</span>
					${commentMark} ${fileMark}
				</div>`;
				toDoTopUl.addKids([toDoTopLi, toDoTopLiSub]);
				
				toDoTopLi.getClasses('modify-content')[0].onclick = function() {
					// console.log(this.parentElement.parentElement.parentElement, i)
					editTask(this.parentElement.parentElement.parentElement, i);
				}
				toDoTopLi.getClasses('checkmark')[0].onclick = function() {
					// console.log(this.parentElement.parentElement.parentElement, i)
					completedToggle(this.parentElement.parentElement.parentElement, i);
				}
				getId('add_task').getClasses('top_task')[0].insertBefore(toDoTopUl, getId('add_task').getClasses('top_task')[0].childNodes[0]);
				getId('add_task').getClasses('top_task')[0].getTags('ul')[0].addClass('markTopBG');
				
			}
			else if(markTop === false) {
				if(comment !== '') {
					commentMark = `<i class="far fa-comment-dots comment-title" title="${comment}"></i>`;
				}
				else {
					commentMark = '';
				}
				toDoLi.innerHTML = `
				<label class="checkbox_sub_container">
		  	<input type="checkbox">
		  	<span class="checkmark"></span>
				</label>		
				<span class="card_title">${title}</span>
				<div class="star_shap">
					<i class="far fa-star"></i>
					<i class="fas fa-star none-style"></i>
					<i class="fas fa-pencil-alt modify-content"></i>
				</div>`;
				toDoLiSub.innerHTML = `
				<div class="task_info">
					<i class="far fa-calendar-alt"></i>
					<span class="datefield">${date}</span> <span class="timefield">${time}</span>
					${commentMark}  ${fileMark}
				</div>`;
				toDoUl.addKids([toDoLi, toDoLiSub]);
				toDoLi.getClasses('modify-content')[0].onclick = function() {
					// console.log(this.parentElement.parentElement.parentElement, i)
					editTask(this.parentElement.parentElement.parentElement, i);
				}
				toDoLi.getClasses('checkmark')[0].onclick = function() {
					// console.log(this.parentElement.parentElement.parentElement, 'test')
					completedToggle(this.parentElement.parentElement.parentElement, i);
				}
				getId('add_task').getClasses('normal_task')[0].insertBefore(toDoUl, getId('add_task').getClasses('normal_task')[0].childNodes[0]);
				getId('add_task').getClasses('normal_task')[0].getTags('ul')[0].delClass('markTopBG');

			}
			toDoList.push({completeSate: completeSate, title: title, top: top, date: date, time: time, file: file, comment: comment})

			if(completeSate === true) {
					completedBoolean = true;

				if(markTop === true) {				 
					createTaskCompleted(toDoTopUl, i);
				}
				else {					
					createTaskCompleted(toDoUl, i);
				}			
			}
			else {
				completedBoolean = false;
			}
			// ++taskLeft;
			getTags('total')[0].innerHTML = `${taskLeft}/${toDoList.length} tasks left`
			cancelTask(event);
	}
}

function taskClass(event, i, completeSate, title, top, date, time, file, comment) {

	markTop = top;
	var toDoTopUl = makeTag('ul');
	var toDoTopLi = makeTag('li');
	var toDoTopLiSub = makeTag('li');
	var toDoUl = makeTag('ul');
	var toDoLi = makeTag('li');
	var toDoLiSub = makeTag('li');
	toDoTopUl.className = 'toDoTopUl';
	toDoUl.className = 'toDoUl';
	if(title === '') {
		getId('title_tip').innerHTML = '請輸入標題。'
		// toDoLi.innerHTML	= '<span>Type Something Here…</span>';
	}
	else {

			if(markTop === true ) {
				if(comment.trim() !== '') {
					commentMark = `<i class="far fa-comment-dots  comment-title" title="${comment}"></i>`;
				}
				else {
					commentMark = '';
				}

				if(file.trim() !== '') {
					fileMark = `<i class="far fa-file" title="${file}"></i>`;
				}
				else {
					fileMark = '';
				}

				toDoTopLi.innerHTML = `
				<label class="checkbox_sub_container">
		  	<input type="checkbox">
		  	<span class="checkmark"></span>
				</label>		
				<span class="card_title">${title}</span>
				<div class="star_shap">
					<i class="far fa-star none-style"></i>
					<i class="fas fa-star markTop"></i>
					<i class="fas fa-pencil-alt modify-content"></i>
				</div>`;
				toDoTopLiSub.innerHTML = `
				<div class="task_info">
					<i class="far fa-calendar-alt"></i>
					<span class="datefield">${date}</span> <span class="timefield">${time}</span>
					${commentMark} ${fileMark}
				</div>`;
				toDoTopUl.addKids([toDoTopLi, toDoTopLiSub]);
				toDoTopLi.getClasses('modify-content')[0].onclick = function() {
					// console.log(this.parentElement.parentElement.parentElement, i)
					editTask(this.parentElement.parentElement.parentElement, i);
				}
				toDoTopLi.getClasses('checkmark')[0].onclick = function() {
					completedToggle(this.parentElement.parentElement.parentElement, i);
				}
				getId('add_task').getClasses('top_task')[0].insertBefore(toDoTopUl, getId('add_task').getClasses('top_task')[0].childNodes[0]);
				getId('add_task').getClasses('top_task')[0].getTags('ul')[0].addClass('markTopBG');
				// toDoList.push({completeSate: completeSate, title: title, top: top, date: date, time: time, file: file, comment: comment})
			}
			else if(markTop === false) {
				if(comment !== '') {
					commentMark = `<i class="far fa-comment-dots comment-title" title="${comment}"></i>`;
				}
				else {
					commentMark = '';
				}
				toDoLi.innerHTML = `
				<label class="checkbox_sub_container">
		  	<input type="checkbox">
		  	<span class="checkmark"></span>
				</label>		
				<span class="card_title">${title}</span>
				<div class="star_shap">
					<i class="far fa-star"></i>
					<i class="fas fa-star none-style"></i>
					<i class="fas fa-pencil-alt modify-content"></i>
				</div>`;
				toDoLiSub.innerHTML = `
				<div class="task_info">
					<i class="far fa-calendar-alt"></i>
					<span class="datefield">${date}</span> <span class="timefield">${time}</span>
					${commentMark}  ${fileMark}
				</div>`;
				toDoUl.addKids([toDoLi, toDoLiSub]);
				// completed(toDoUl)
				toDoLi.getClasses('modify-content')[0].onclick = function() {
					// console.log(this.parentElement.parentElement.parentElement, i)
					editTask(this.parentElement.parentElement.parentElement, i);
				}
				toDoLi.getClasses('checkmark')[0].onclick = function() {
					completedToggle(this.parentElement.parentElement.parentElement, i);
				}
				getId('add_task').getClasses('normal_task')[0].insertBefore(toDoUl, getId('add_task').getClasses('normal_task')[0].childNodes[0]);
				getId('add_task').getClasses('normal_task')[0].getTags('ul')[0].delClass('markTopBG');
				// toDoList.push({completeSate: completeSate, title: title, top: top, date: date, time: time, file: file, comment: comment})
			}
			if(completeSate === true) {
					completedBoolean = true;
				if(markTop === true) {				 
					createTaskCompleted(toDoTopUl, i);
				}
				else {					
					createTaskCompleted(toDoUl, i);
				}			
			}
			else {
				completedBoolean = false;
			}
			// ++taskLeft;
			
			cancelTask(event);
	}
}



function editTask(ulThis, i) {
	// console.log(ulThis, i);
	if(editTaskBoolean === true) {
		// editTaskBoolean = !editTaskBoolean;
		if(markTop === true) {
			martTopStyle = `<i class="fas fa-star markTop" onclick="markToggle(this)"></i>`;			
		}
		else {
			martTopStyle = `<i class="far fa-star" onclick="markToggle(this)"></i>`;			
		}
		
		if(ulThis.getClasses('comment-title')[0] !== undefined) {
			commentContent = ulThis.getClasses('comment-title')[0].getAttr('title');
		}
		else {
			commentContent = '';
		}
		
		// editTaskThis.addClass('none-style');
		//console.log(editTaskThis);
		//console.log(editTaskThis.getClasses('timefield')[0].textContent.trim());
		originUl = ulThis.innerHTML;
		ulThis.addClass('task_focus');		
		ulThis.innerHTML = `
		<li class="task_header">
			<label class="checkbox_container">
	  	<input type="checkbox">
	  	<span class="checkmark"></span>
			</label>		

			<input class="card_title" type="text" placeholder="Type Something Here…" value="${ulThis.getClasses('card_title')[0].textContent}">
			<span class="title_tip"></span>
			<div class="star_shap">
			${martTopStyle}			
			<i class="fas fa-pencil-alt editing"></i>
			</div>
			<div class="underLine"></div>
			<div class="sub_container">
			
				<div class="dead_line">
				 <section><i class="far fa-calendar-alt"></i><span class="card_sub_title">Deadline</span></section>
				 <section><input class="datefield" type="date" value="${ulThis.getClasses('datefield')[0].textContent}"><input class="timefield" type="time" value="${ulThis.getClasses('timefield')[0].textContent}"></section>
				</div>
				<div class="file">
					<section><i class="far fa-file"></i><span class="card_sub_title">File</span></section>
					<section><input type="button" value="+"></section>
				</div>
				<div class="comment">
					<section><i class="far fa-comment-dots"></i><span class="card_sub_title">Comment</span></section>
					<section><textarea class="comment_text" type="text" placeholder="Type your memo here...">${commentContent}</textarea></section>
				</div>

			</div>
			<button class="cancel-btn"><i class="fas fa-times"></i> Cancel</button>
			<button class="save-btn"><i class="fas fa-plus"></i> Save</button>
		</li>
		`
	}
	ulThis.getClasses('cancel-btn')[0].onclick = function() {		
		cancelEdit(this.parentElement.parentElement, i);
	}
	ulThis.getClasses('save-btn')[0].onclick = function() {		
		saveEdit(this.parentElement.parentElement, i);
	}
	// i, completeSate, title, top, date, time, file, comment
	var selfI = i;
	// console.log(selfI);
	ulThis.getClasses('checkmark')[0].onclick = function() {
		// console.log(ulThis, selfI);
		checkToggle(this, ulThis, i);
	}
	ulThis.getClasses('card_title')[0].addEventListener("blur", function(){
		if(ulThis.getClasses('card_title')[0].value.trim() === '') {
			ulThis.getClasses('title_tip')[0].innerHTML = '請輸入標題。'
		}
		else{
			ulThis.getClasses('title_tip')[0].innerHTML = ''
		}
	});
}





function createTaskCompleted(ulThis, i) {	
	if(completedBoolean === true) {
		// console.log(ulThis.innerHTML);
		ulThis.addClass('completed-height');
		ulThis.getClasses('checkmark')[0].addClass('completed-check');
		ulThis.getClasses('task_info')[0].addClass('none-style');
		ulThis.getClasses('card_title')[0].addClass('completed');
		ulThis.getClasses('modify-content')[0].addClass('completed');
		ulThis.getClasses('modify-content')[0].onclick = void(0);
		toDoList[i].completeSate = true;
		
		
		getTags('total')[0].innerHTML = `${taskLeft}/${toDoList.length} tasks left`;
	}
	else {
		// console.log(ulThis.innerHTML);
		ulThis.delClass('completed-height');
		ulThis.getClasses('checkmark')[0].delClass('completed-check');				
		ulThis.getClasses('task_info')[0].delClass('none-style');
		ulThis.getClasses('card_title')[0].delClass('completed');
		ulThis.getClasses('modify-content')[0].delClass('completed');
		ulThis.getClasses('modify-content')[0].onclick = function() {
			editTask(ulThis, i);
		}
		toDoList[i].completeSate = false;
		getTags('total')[0].innerHTML = `${taskLeft}/${toDoList.length} tasks left`;
	}		
}


function completedToggle(ulThis, i) {	
	// console.log('completed: '+ulThis,i);
	toDoList[i].completeSate = !toDoList[i].completeSate;
	// completedBoolean = !completedBoolean;
	if(toDoList[i].completeSate === true) {
		// toDoList[i].completeSate = true;
		// console.log(ulThis);
		ulThis.addClass('completed-height');
		ulThis.getClasses('checkmark')[0].addClass('completed-check');				
		ulThis.getClasses('task_info')[0].addClass('none-style');
		ulThis.getClasses('card_title')[0].addClass('completed');
		ulThis.getClasses('modify-content')[0].addClass('completed');
		ulThis.getClasses('modify-content')[0].onclick = void(0);
		taskLeft = toDoList.length;
		for(var idx=toDoList.length-1; idx>=0;--idx) {
				if(toDoList[idx].completeSate === true) {
					--taskLeft;					
				}						
		}

		getTags('total')[0].innerHTML = `${taskLeft}/${toDoList.length} tasks left`;
		// completedBoolean = !completedBoolean;
	}
	else {
		// toDoList[i].completeSate = false;
		// console.log(ulThis);
		ulThis.delClass('completed-height');
		ulThis.getClasses('checkmark')[0].delClass('completed-check');				
		ulThis.getClasses('task_info')[0].delClass('none-style');
		ulThis.getClasses('card_title')[0].delClass('completed');
		ulThis.getClasses('modify-content')[0].delClass('completed');
		ulThis.getClasses('modify-content')[0].onclick = function() {
			editTask(ulThis, i);
		}
		taskLeft = 0;
		for(var idx=toDoList.length-1; idx>=0;--idx) {
				if(toDoList[idx].completeSate === false) {
					++taskLeft;					
				}						
		}
		getTags('total')[0].innerHTML = `${taskLeft}/${toDoList.length} tasks left`;
		// completedBoolean = !completedBoolean;
	}		
}


function cancelTask(event) {

	preventOuterEventFired(event);	
	getId('edit_btn').delClass('task_focus');	
	getId('edit_btn').innerHTML = '+ Add Task';
	// createTaskBoolean = !createTaskBoolean;
}





function cancelEdit(ulThis, i) {
	// preventOuterEventFired();		
	//console.log('ul idx: '+ ulThis);
	ulThis.delClass('task_focus');	
	ulThis.innerHTML = '';



	markTop = toDoList[i].top;
	var toDoTopLi = makeTag('li');
	var toDoTopLiSub = makeTag('li');
	var toDoLi = makeTag('li');
	var toDoLiSub = makeTag('li');


			if(markTop === true ) {
				if(toDoList[i].comment.trim() !== '') {
					commentMark = `<i class="far fa-comment-dots  comment-title" title="${toDoList[i].comment}"></i>`;
				}
				else {
					commentMark = '';
				}

				if(toDoList[i].file.trim() !== '') {
					fileMark = `<i class="far fa-file" title="${toDoList[i].file}"></i>`;
				}
				else {
					fileMark = '';
				}

				toDoTopLi.innerHTML = `
				<label class="checkbox_sub_container">
		  	<input type="checkbox">
		  	<span class="checkmark"></span>
				</label>		
				<span class="card_title">${toDoList[i].title}</span>
				<div class="star_shap">
					<i class="far fa-star none-style"></i>
					<i class="fas fa-star markTop"></i>
					<i class="fas fa-pencil-alt modify-content"></i>
				</div>`;
				toDoTopLiSub.innerHTML = `
				<div class="task_info">
					<i class="far fa-calendar-alt"></i>
					<span class="datefield">${toDoList[i].date}</span> <span class="timefield">${toDoList[i].time}</span>
					${commentMark} ${fileMark}
				</div>`;
				ulThis.addKids([toDoTopLi, toDoTopLiSub]);
				toDoTopLi.getClasses('modify-content')[0].onclick = function() {
					// console.log(this.parentElement.parentElement.parentElement, i)
					editTask(this.parentElement.parentElement.parentElement, i);
				}
				toDoTopLi.getClasses('checkmark')[0].onclick = function() {
					completedToggle(this.parentElement.parentElement.parentElement, i);
				}
				// getId('add_task').getClasses('top_task')[0].insertBefore(toDoTopUl, getId('add_task').getClasses('top_task')[0].childNodes[0]);
				ulThis.addClass('markTopBG');
				// toDoList.push({completeSate: completeSate, title: title, top: top, date: date, time: time, file: file, comment: comment})
			}
			else if(markTop === false) {
				if(toDoList[i].comment.trim() !== '') {
					commentMark = `<i class="far fa-comment-dots comment-title" title="${toDoList[i].comment}"></i>`;
				}
				else {
					commentMark = '';
				}
				toDoLi.innerHTML = `
				<label class="checkbox_sub_container">
		  	<input type="checkbox">
		  	<span class="checkmark"></span>
				</label>		
				<span class="card_title">${toDoList[i].title}</span>
				<div class="star_shap">
					<i class="far fa-star"></i>
					<i class="fas fa-star none-style"></i>
					<i class="fas fa-pencil-alt modify-content"></i>
				</div>`;
				toDoLiSub.innerHTML = `
				<div class="task_info">
					<i class="far fa-calendar-alt"></i>
					<span class="datefield">${toDoList[i].date}</span> <span class="timefield">${toDoList[i].time}</span>
					${commentMark}  ${fileMark}
				</div>`;
				ulThis.addKids([toDoLi, toDoLiSub]);
				// completed(toDoUl)
				toDoLi.getClasses('modify-content')[0].onclick = function() {
					// console.log(this.parentElement.parentElement.parentElement, i)
					editTask(this.parentElement.parentElement.parentElement, i);
				}
				toDoLi.getClasses('checkmark')[0].onclick = function() {
					completedToggle(this.parentElement.parentElement.parentElement, i);
				}
				// getId('add_task').getClasses('normal_task')[0].insertBefore(toDoUl, getId('add_task').getClasses('normal_task')[0].childNodes[0]);
				ulThis.delClass('markTopBG');
				// toDoList.push({completeSate: completeSate, title: title, top: top, date: date, time: time, file: file, comment: comment})
			}
			if(toDoList[i].completeSate === true) {
					completedBoolean = true;
				if(markTop === true) {				 
					createTaskCompleted(toDoTopUl, i);
				}
				else {					
					createTaskCompleted(toDoUl, i);
				}			
			}
			else {
				completedBoolean = false;
			}
	// if(markTop === true) {
	// 	markToggle(ulThis)
	// }
	// else if(markTop === false) {
	
	// }	
	
	// createTaskBoolean = !createTaskBoolean;
}

function saveEdit(ulThis, i) {
	// toDoList[i].completeSate = true;
	// 	completedBoolean = true;
// toDoList[i].completeSate = completedBoolean;
	toDoList[i].title = ulThis.getClasses('card_title')[0].value;
	toDoList[i].date = ulThis.getClasses('datefield')[0].value;
	toDoList[i].time = ulThis.getClasses('timefield')[0].value;
	toDoList[i].comment = ulThis.getClasses('comment_text')[0].value;
// {completeSate: true, title: 'Week 1 - todolist', top: true, date: '2018-06-04', time: '12:00', file: '', comment: 'todolist完成!'},
//  toDoList.length, checkMark, document.getElementById('card_title').value, markTop, timeStamp().today, timeStamp().time, document.getElementById('uploadFile').textContent, document.getElementById('commentfield').value

	

	markTop = toDoList[i].top;
	var toDoTopLi = makeTag('li');
	var toDoTopLiSub = makeTag('li');
	var toDoLi = makeTag('li');
	var toDoLiSub = makeTag('li');

	// console.log('saveEdit - ulthis: '+ulThis.getClasses('card_title')[0].value);
	if(ulThis.getClasses('card_title')[0].value.trim() === '') {
		ulThis.getClasses('title_tip')[0].innerHTML = '請輸入標題。'
		// toDoLi.innerHTML	= '<span>Type Something Here…</span>';
	}
	else {
			ulThis.delClass('task_focus');	
			if(markTop === true) {
				if(toDoList[i].comment.trim() !== '') {
					commentMark = `<i class="far fa-comment-dots  comment-title" title="${toDoList[i].comment}"></i>`;
				}
				else {
					commentMark = '';
				}
				if(toDoList[i].completeSate === true) {
					completedMark = '<span class="checkmark completed-check"></span>';
					taskInfoMark = '<div class="task_info none-style">';
					cardTitleMark = `<span class="card_title completed">${toDoList[i].title}</span>`;
					ulThis.addClass('completed-height');
				}
				else {
					completedMark = '<span class="checkmark"></span>'
					taskInfoMark = '<div class="task_info">';
					cardTitleMark = `<span class="card_title">${toDoList[i].title}</span>`;
					ulThis.delClass('completed-height');
				}
				ulThis.innerHTML = '';
				toDoTopLi.innerHTML = `
				<label class="checkbox_sub_container">
		  	<input type="checkbox">
		  	${completedMark}
				</label>		
				${cardTitleMark}
				<div class="star_shap">
					<i class="far fa-star none-style"></i>
					<i class="fas fa-star markTop"></i>
					<i class="fas fa-pencil-alt modify-content" ></i>
				</div>`;
				toDoTopLiSub.innerHTML = `
				${taskInfoMark}
					<i class="far fa-calendar-alt"></i>
					<span class="datefield">${toDoList[i].date}</span> <span class="timefield">${toDoList[i].time}</span>
					${commentMark}
				</div>`;
				ulThis.addKids([toDoTopLi, toDoTopLiSub]);
				toDoTopLi.getClasses('modify-content')[0].onclick = function() {
					// console.log(this.parentElement.parentElement.parentElement, i)
					editTask(this.parentElement.parentElement.parentElement, i);
				}
				toDoTopLi.getClasses('checkmark')[0].onclick = function() {
					// checkToggle(this, ulThis, i);
					completedToggle(this.parentElement.parentElement.parentElement, i);
				}
				ulThis.parentElement.delClass('task_focus');
				// ulThis.parentElement.innerHTML = ulThis.innerHTML;

				// getId('add_task').getClasses('top_task')[0].insertBefore(toDoTopUl, getId('add_task').getClasses('top_task')[0].childNodes[0]);
				getId('add_task').getClasses('top_task')[0].getTags('ul')[0].addClass('markTopBG');
			}
			else if(markTop === false) {
				//console.log('commentfield: '+ulThis.getClasses('comment_text')[0].value);
				if(toDoList[i].comment.trim() !== '') {
					commentMark = `<i class="far fa-comment-dots comment-title" title="${toDoList[i].comment}"></i>`;
				}
				else {
					commentMark = '';
				}
				if(toDoList[i].completeSate === true) {
					completedMark = '<span class="checkmark completed-check"></span>';
					taskInfoMark = '<div class="task_info none-style">';
					cardTitleMark = `<span class="card_title completed">${toDoList[i].title}</span>`;
					ulThis.addClass('completed-height');
				}
				else {
					completedMark = '<span class="checkmark"></span>'
					taskInfoMark = '<div class="task_info">';
					cardTitleMark = `<span class="card_title">${toDoList[i].title}</span>`;
					ulThis.delClass('completed-height');
				}
				ulThis.innerHTML = '';
				toDoLi.innerHTML = `
				<label class="checkbox_sub_container">
		  	<input type="checkbox">
		  	${completedMark}
				</label>		
				${cardTitleMark}
				<div class="star_shap">
					<i class="far fa-star"></i>
					<i class="fas fa-star none-style"></i>
					<i class="fas fa-pencil-alt modify-content"></i>
				</div>`;
				toDoLiSub.innerHTML = `
				${taskInfoMark}
					<i class="far fa-calendar-alt"></i>
					<span class="datefield">${toDoList[i].date}</span> <span class="timefield">${toDoList[i].time}</span>
					${commentMark}
				</div>`;				
				ulThis.addKids([toDoLi, toDoLiSub]);
				toDoLi.getClasses('modify-content')[0].onclick = function() {
					console.log(this.parentElement.parentElement.parentElement, i)
					editTask(this.parentElement.parentElement.parentElement, i);
				}
				toDoLi.getClasses('checkmark')[0].onclick = function() {
					// checkToggle(this, ulThis, i);
					completedToggle(this.parentElement.parentElement.parentElement, i);
				}
				ulThis.parentElement.delClass('task_focus');
				// ulThis.parentElement.innerHTML = ulThis.innerHTML;

				// ulThis.parentElement.addKids([toDoLi, toDoLiSub]);
				// getId('add_task').getClasses('normal_task')[0].insertBefore(toDoUl, getId('add_task').getClasses('normal_task')[0].childNodes[0]);
				getId('add_task').getClasses('normal_task')[0].getTags('ul')[0].delClass('markTopBG');
			}
	}
}





function preventOuterEventFired(event) {
	if(event !== null) {
		if (!e) {var e = event || window.event;}
		e.cancelBubble = true;
		if (e.stopPropagation) {e.stopPropagation();}	
	}

}


function markToggle(markTopThis) {
	markTop = !markTop;
	if(markTop === true) {
		//console.log(markTopThis);
			markTopThis.delClass('far').delClass('fa-star').addClass('fas').addClass('fa-star').addClass('markTop');
	}
	else if(markTop === false) {
			markTopThis.delClass('fas').delClass('fa-star').addClass('far').addClass('fa-star').delClass('markTop');
	}	
}

function checkToggle(checkThis, ulThis, i) {
	toDoList[i].completeSate = !toDoList[i].completeSate;
	if(toDoList[i].completeSate === true) {
		// toDoList[i].completeSate = true;
		completedBoolean = true;
		checkThis.addClass('completed-check').addClass('checkmark');	
		// saveEdit(ulThis, i)
	}
	else if(toDoList[i].completeSate === false) {
		// toDoList[i].completeSate = false;
		completedBoolean = false;
		checkThis.delClass('completed-check').addClass('checkmark');
		// saveEdit(ulThis, i)
	}
	
	// toDoList[i].completeSate = !toDoList[i].completeSate;
}

taskLeft = 0;
for(i=toDoList.length-1; i>=0;--i) {
	if(toDoList[i].completeSate === false) {
		// console.log('toDoList: '+i);
		++taskLeft;
	}
}
getTags('total')[0].innerHTML = `${taskLeft}/${toDoList.length} tasks left`