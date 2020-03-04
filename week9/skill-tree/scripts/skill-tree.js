
var f2eSkillTreeList = f2eSkillTreeList();
console.log(f2eSkillTreeList);
// var total = 0;
var compulsoryPoint = 0;
var electivePoint = 0;
// tag
var section = '';
var skillIcon = '';

// skill-tree
for(var i=0; i<f2eSkillTreeList.length; i++) {
	section = makeTag('section');
	for(var j=0; j<f2eSkillTreeList[i].content.length; j++) {
		skillIcon = makeTag('div');
		skillIcon.className = 'skill-icon';
		skillIcon.id = f2eSkillTreeList[i].content[j].components;
		skillIcon.innerHTML = `
			<div class="components" onclick="skillBoard(this, ${i}, ${j})">
				<i class="${f2eSkillTreeList[i].content[j].components}"></i>
			</div>
			<div class="points">
				<i class="icon-settings">0/${f2eSkillTreeList[i].content[j].recommended.length}</i>
				<i class="icon-filter_tilt_shift">0/${f2eSkillTreeList[i].content[j].optional.length}</i>
			</div>	
		`;
		section.addKid(skillIcon);
	}
	getId('middle').addKid(section);
}

getId('icon-category').getClasses('components')[0].onclick(this,0, 0);

function skillBoard(skillThis, i, j) {
		compulsoryPoint = 0;
		electivePoint = 0;
		// var contentIdx = f2eSkillTreeList.map(function(obj, idx) {return obj.content.map(function(obj, idx) {return obj.subTitle}).indexOf(subTitle)});
		console.log('contentIdx: '+ i , j);
		skillThis.addClass('active');
		skillThis.parentElement.siblings().forEach(function(ele,idx){ele.getClasses('components')[0].delClass('active')});
		var recBtn = '';
		var optBtn = ''	;
		var recommended = '';
		var optional = '';
		if(f2eSkillTreeList[i].content[j].recommended.length != 0) {
			
			for(var k=0; k<f2eSkillTreeList[i].content[j].recommended.length; k++) {
				if(f2eSkillTreeList[i].content[j].recommended[k].learn === false) {
					recBtn += `<button oncontextmenu="skillPoint(event, this, 'compulsory', 'minus', ${i}, ${j}, ${k})" onclick="skillPoint(event, this, 'compulsory', 'plus', ${i}, ${j}, ${k})">${f2eSkillTreeList[i].content[j].recommended[k].skillName}</button>`;
				}
				else {
					recBtn += `<button class="active" oncontextmenu="skillPoint(event, this, 'compulsory', 'minus', ${i}, ${j}, ${k})" onclick="skillPoint(event, this, 'compulsory', 'plus', ${i}, ${j}, ${k})">${f2eSkillTreeList[i].content[j].recommended[k].skillName}</button>`;
				}
				
			}
			console.log('recBtn: '+recBtn);
			recommended = `
				<div class="learn-skill">
					<i class="icon-settings"></i>
					<h3>RECOMMENDED</h3>
					${recBtn}
				</div>
			`;
		}

		if(f2eSkillTreeList[i].content[j].optional.length != 0) {
			
			for(var k=0; k<f2eSkillTreeList[i].content[j].optional.length; k++) {
				if(f2eSkillTreeList[i].content[j].optional[k].learn === false) {
					optBtn += `<button oncontextmenu="skillPoint(event, this, 'elective', 'minus', ${i}, ${j}, ${k})" onclick="skillPoint(event, this, 'elective', 'plus', ${i}, ${j}, ${k})">${f2eSkillTreeList[i].content[j].optional[k].skillName}</button>`;	
				}
				else {
					optBtn += `<button class="active" oncontextmenu="skillPoint(event, this, 'elective', 'minus', ${i}, ${j}, ${k})" onclick="skillPoint(event, this, 'elective', 'plus', ${i}, ${j}, ${k})">${f2eSkillTreeList[i].content[j].optional[k].skillName}</button>`;
				}
				
			}
			console.log('optBtn: '+optBtn);
			optional = `
				<div class="learn-skill">
					<i class="icon-filter_tilt_shift"></i>
					<h3>OPTIONAL</h3>
					${optBtn}
				</div>
			`;
		}


		getId('right').innerHTML = `
			<div class="skill-board">
				<div class="components">
					<i class="${f2eSkillTreeList[i].content[j].components}"></i>
					<h2>${f2eSkillTreeList[i].content[j].subTitle}</h2>
				</div>
			</div>
			<div class="learn-board">
				${recommended}
				${optional}
			</div>
		`;
}


function skillPoint(event, btnThis, state, operation, i, j, k) {
	event.preventDefault();
	switch (state) {
		case 'compulsory':
			switch (operation) {
				case 'plus':
					f2eSkillTreeList[i].content[j].recommended[k].learn = true;
					btnThis.addClass('active').setAttr('disabled','');
					if(f2eSkillTreeList[i].content[j].recPoint<=f2eSkillTreeList[i].content[j].recommended.length) {
						f2eSkillTreeList[i].content[j].recPoint++;
					}
					break;
				case 'minus':
					f2eSkillTreeList[i].content[j].recommended[k].learn = false;
					btnThis.delClass('active').delAttr('disabled');
					if(f2eSkillTreeList[i].content[j].recPoint>0) {
						f2eSkillTreeList[i].content[j].recPoint--;
					}
					break;
				default:
					// statements_def
					break;
			}


			
			break;
		case 'elective':
			switch (operation) {				
				case 'plus':
					f2eSkillTreeList[i].content[j].optional[k].learn = true;
					btnThis.addClass('active').setAttr('disabled','');
					if(f2eSkillTreeList[i].content[j].optPoint<=f2eSkillTreeList[i].content[j].optional.length) {
						f2eSkillTreeList[i].content[j].optPoint++;				
					}
					break;
				case 'minus':
					f2eSkillTreeList[i].content[j].optional[k].learn = false;
					btnThis.delClass('active').delAttr('disabled');
					if(f2eSkillTreeList[i].content[j].optPoint>0) {
						f2eSkillTreeList[i].content[j].optPoint--;				
					}
					break;
				default:
					// statements_def
					break;
			}


			
			break;
		default:
			// statements_def
			break;
	}
	getId(f2eSkillTreeList[i].content[j].components).getClasses('icon-settings')[0].innerHTML = `${f2eSkillTreeList[i].content[j].recPoint}/${f2eSkillTreeList[i].content[j].recommended.length}`;
	getId(f2eSkillTreeList[i].content[j].components).getClasses('icon-filter_tilt_shift')[0].innerHTML = `${f2eSkillTreeList[i].content[j].optPoint}/${f2eSkillTreeList[i].content[j].optional.length}`;
}

getTags('loading')[0].addClass('none-style');

