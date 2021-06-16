/*-------------版權區---------------
作者: Zeki
信箱: zekixfly@hotmail.com

版權聲明:
一、本網站的版權屬原作者所有。 
二、盼望尊重知識產權，請勿擅自轉貼複製。
    
---------------版權區-------------*/



(function(petsHero) {
	
	var hero = heroData(),
		monster = monsterData(),
		tmpContent=[],
		tmpHero=[],	
		blacksmithShopList=[],
		blacksmithShopField=[],
		delaySeconds = 1000,
		battleFrequency = 0,
		battleDelayLoop = 0,
		monsterLoop = 0,
		resultVal,
		heroAtkAR,
		monsterAtkAR,
		oriHeroHp = hero.state.hp,
		oriHeroMaxAtk = hero.state.maxAtk,
		oriHeroLimitAtk = hero.state.limitAtk,
		weaponIcon,
		backPackIdxfeild,
		updateEquipment,
		// avatarAllDiv = getId('pet-avatar').getElementsByTagName('div'),
		HBBtn = getId('heropets-backpack-btn'),
		BPBtn = getId('backpack-btn'),
		SBtn = getId('shop-btn'),
		BSBtn = getId('blacksmith-shop-btn'),
		HBList = getId('heropets-backpack-list'),
		BPList = getId('backpack-list'),
		SList = getId('shop-list'),
		BSList = getId('blacksmith-shop-list'),
		logCont = getId('log-content'),
		logBtn = getId('log-btn'),		
		clsBtn = getId('cls-btn'),
		logClean = true,
		backPackListBoolean = false,
		equipBoolean = false,
		weaponIds = {		
		SS1Ids: 1,
		SS2Ids: 1,
		SS3Ids: 1,
		HS1Ids: 1,
		HS2Ids: 1,
		HS3Ids: 1,
		EP1Ids: 1,
		EP2Ids: 1,
		EP3Ids: 1,
		}
		shopWeapon = [
			{idx:'SS1', level:1, name:'鋼甲槍', maxAtk:30 , limitAtk:20, gp:100, baseId:`pet-weapon-SbaseV1_${weaponIds.SS1Ids}`, gunId:`pet-weapon-SgunV1_${weaponIds.SS1Ids}`, baseClass:'pet-weapon-SbaseV1', gunClass:'pet-weapon-SgunV1', equip:false},			
			{idx:'HS1', level:1, name:'霰彈槍', maxAtk:250 , limitAtk:150, gp:400, baseId:`pet-weapon-HbaseV1_${weaponIds.HS1Ids}`, gunId:`pet-weapon-HgunV1_${weaponIds.HS1Ids}`, baseClass:'pet-weapon-HbaseV1', gunClass:'pet-weapon-HgunV1', equip:false},
			{idx:"EP1", level:1, name:'電磁砲', maxAtk:500 , limitAtk:0, gp:425, baseId:`pet-weapon-EbaseV1_${weaponIds.EP1Ids}`, gunId:`pet-weapon-EgunV1_${weaponIds.EP1Ids}`, baseClass:'pet-weapon-EbaseV1', gunClass:'pet-weapon-EgunV1', equip:false},
			];
		
		
		
		
	const oriMonsterHp = [],
		  hiddenWeapon = {idx:'Zeki', level:'∞', name:'Zeki', maxAtk:1 , limitAtk:1299, gp:0, partnerId:'pet-partner-Zeki', equip:false};






	var geometricProgression = 2, //Magnification of experience threshold.
		upgradeMaxAtk = 5; //The MaxAtk value added at each upgrade.
		upgradeLimitAtk=1; //The LimitAtk value added at each upgrade.



	//先暫存monster原來的血量，以待重新探險時便可還原原本monster的血量。
	// const oriMonsterHp = [];
	for(var i=0; i<monster.length; i++) {
		oriMonsterHp[i] = monster[i].hp;
	};


	//backpack list
	function backPcackList() {
		BPList.innerHTML = '';
		for(var i=0; i<hero.backPack.weapon.length; i++) {

			if(hero.backPack.weapon[i].idx != 'Zeki') {
				BPList.innerHTML += `<li id="equip-number${i}"><img class="float-style" src="./pets-img/weapons/view/${hero.backPack.weapon[i].idx}.png"><h1>${hero.backPack.weapon[i].name}</h1><h2>Atk:+${hero.backPack.weapon[i].limitAtk}~${hero.backPack.weapon[i].maxAtk+hero.backPack.weapon[i].limitAtk} Lv:${hero.backPack.weapon[i].level} GP:${hero.backPack.weapon[i].gp/2}</h2><input id="sell-btn${i}" style="right:60px" onclick="javascript:sell(${i}, '${hero.backPack.weapon[i].idx}')" type="button" value="賣出"><input id="equipt-btn${i}" onclick="javascript:equip(this,${i})" type="button" value="裝備"><input id="dismount-btn${i}" style="display:none" onclick="javascript:dismount(this,${i})" type="button" value="卸除"></li>`;	
			}
			else {
				BPList.innerHTML += `<li id="equip-number${i}"><img class="float-style" src="./pets-img/weapons/view/${hero.backPack.weapon[i].idx}.png"><h1>${hero.backPack.weapon[i].name}<h2>Atk:+${hero.backPack.weapon[i].limitAtk}~${hero.backPack.weapon[i].maxAtk+hero.backPack.weapon[i].limitAtk} GP:${hero.backPack.weapon[i].gp/2}</h2><input id="sell-btn${i}" style="right:60px" onclick="javascript:sell(${i}, '${hero.backPack.weapon[i].idx}')" type="button" value="賣出"><input id="equipt-btn${i}" onclick="javascript:equip(this,${i})" type="button" value="裝備"><input id="dismount-btn${i}" style="display:none" onclick="javascript:dismount(this,${i})" type="button" value="卸除"></li>`;		
			}
			

			if(hero.backPack.weapon[i].equip===true){				
				getId(`sell-btn${i}`).addClass('none-style');
				getId(`dismount-btn${i}`).addClass('block-style').addClass('orange-btn');				
				getId(`equip-number${i}`).addClass('li-Selected').siblings().batchDelClass('li-Selected');
			}				
		}

	};



	//shop item list
	for(var i=0; i<shopWeapon.length; i++) {
		SList.innerHTML += `<li>
								<img class="float-style" src="./pets-img/weapons/view/${shopWeapon[i].idx}.png">
								<h1>${shopWeapon[i].name}</h1>
								<h2>Atk:+${shopWeapon[i].limitAtk}~${shopWeapon[i].maxAtk+shopWeapon[i].limitAtk} Lv:${shopWeapon[i].level} GP:${shopWeapon[i].gp}</h2>
								<input onclick="javascript:buy(this,${i})" type="button" value="購買">
							</li>`;
	}


	//sblacksmith shop field
	BSList.innerHTML = `<div id="blacksmith-field-wrap">
							<span id="BSF1" class="synthesis-field" onclick="javascript:equipmentList(this.id)">裝備</span>
							<span class="synthesis-plus"><img src="./pets-img/synthesis-plus.png" alt=""></span>
							<span id="BSF2" class="synthesis-field" onclick="javascript:equipmentList(this.id)">裝備</span>	
							<span class="synthesis-arrow"><img src="./pets-img/synthesis-arrow.png" alt=""></span>
							<span id="BSR" class="synthesis-result-field">預覽</span>
							<input type="button" id="strengthen-btn" onclick="javascript:strengthen()" value="強化">
							<input type="button" id="cancel-btn" onclick="javascript:strengthenCancel()" value="取消">
						</div>`;


	petsHero.confirmBuyOk = function(i) {

			hero.state.money -= shopWeapon[i].gp;

			//create weapon icon function
			createDiv(shopWeapon[i]);

			//tip msg
			msgTip(`<span class='cyan-style'>${shopWeapon[i].name}</span>已購入!`);

			heroState(hero.state);
			backPcackList();

	};


	//shop buy function
	petsHero.buy = function buy(e,i) {
		e.onclick = function() {



			if(hero.state.money >=shopWeapon[i].gp) {

				if(hero.backPack.weapon.map(function(obj) { return obj.idx; }).indexOf(shopWeapon[i].idx)!=-1) {
					confirm(i,'buy',`您的背包已有"${shopWeapon[i].name}"了，確定要再次購買嗎？\n將扣除金額-${shopWeapon[i].gp}，剩餘${hero.state.money-shopWeapon[i].gp}。`)
				}
				else {
					confirm(i,'buy',`您確定要購買${shopWeapon[i].name}嗎？\n將扣除金額-${shopWeapon[i].gp}，剩餘${hero.state.money-shopWeapon[i].gp}。`)
					
					
				}
			}
			else {
				alert(`${hero.state.name}，您的金額不足以購買!`);
			}

		}
		e.onclick();
	};


	petsHero.confirmSellOk = function(arrIdx) {

		// if(hero.backPack.weapon[arrIdx].idx != 'Zeki') {

			hero.state.money += hero.backPack.weapon[arrIdx].gp/2;

			//remove weapon icon div
			deleteDiv(arrIdx);
			



			//tip msg
			msgTip(`<span class='cyan-style'>${hero.backPack.weapon[arrIdx].name}</span>已賣出!`);

			//remove index's obj, only remove 1.
			hero.backPack.weapon.splice(arrIdx, 1); 
			

			heroState(hero.state);
			backPcackList();
		// }
		// else {

		// 	hero.backPack.weapon.splice(arrIdx, 1); //remove index's obj, only remove 1.
		// 	var zekiElement = getId(hiddenWeapon.partnerId);
		// 	zekiElement.parentNode.removeChild(zekiElement);
		// 	heroState(hero.state);
		// 	backPcackList();

		// }
	};


	petsHero.sell = function sell(arrIdx,weaponIdx) {

		if(weaponIdx != 'Zeki') {
			confirm(arrIdx,'sell',`您確定要賣出${hero.backPack.weapon[arrIdx].name}嗎？\n賣出金額${hero.backPack.weapon[arrIdx].gp/2}。`);
			// confirmSellOk(arrIdx);
		}
		else {
			confirm(arrIdx,'sell',`您確定要賣出${hiddenWeapon.name}夥伴嗎？\n他會很傷心的離開唷:(。\n不能再次呼換回來了唷!`);
			// confirmSellOk(arrIdx);
		}

	};


	petsHero.equip = function equip(e,i) {	

		e.onclick = function() {
				hero.state.maxAtk = oriHeroMaxAtk;
				hero.state.limitAtk = oriHeroLimitAtk;

				// if(hero.backPack.weapon[i].idx != 'Zeki') {
				
					switch (hero.backPack.weapon[i].idx) {
						case 'SS1':
						case 'SS2':
						case 'HS1':
						case 'HS2':
						case 'HS3':
						case 'EP1':
						case 'EP2':
							weaponIcon = getIds([hero.backPack.weapon[i].baseId, hero.backPack.weapon[i].gunId]);
							break;
						case 'SS3':
							weaponIcon = getIds([hero.backPack.weapon[i].baseId1, hero.backPack.weapon[i].baseId2, hero.backPack.weapon[i].gunId1, hero.backPack.weapon[i].gunId2, hero.backPack.weapon[i].gunId3, hero.backPack.weapon[i].gunId4]);
							break;
						case 'EP3':
							weaponIcon = getIds([hero.backPack.weapon[i].baseId1, hero.backPack.weapon[i].baseId2, hero.backPack.weapon[i].gunId1, hero.backPack.weapon[i].gunId2]);
							break;
						case 'Zeki':
							weaponIcon = getIds([hero.backPack.weapon[i].partnerId]);
						default:
							// statements_def
							break;
					}
					


					hero.state.maxAtk +=hero.backPack.weapon[i].maxAtk;
					hero.state.limitAtk += hero.backPack.weapon[i].limitAtk;
				// }
				// else {
					
					// hero.state.maxAtk +=hiddenWeapon.maxAtk;
					// hero.state.limitAtk += hiddenWeapon.limitAtk;	
				// }
				

				weaponIcon.batchAddClass('block-style').arrSiblings().batchDelClass('block-style');
				


				

				//Because the button no siblings, so I have to use for loop to operation.
				for(var j=0; j<hero.backPack.weapon.length; j++) {
					getId(`dismount-btn${j}`).delClass('block-style');
					getId(`sell-btn${j}`).delClass('none-style');
					if(i==j) {
						hero.backPack.weapon[j].equip=true;
					}else{
						hero.backPack.weapon[j].equip=false;
					}
					
				}			
				
				getId(`sell-btn${i}`).addClass('none-style'); //When equip weapon, hidden sell button.
				getId(`dismount-btn${i}`).addClass('block-style').addClass('orange-btn');				
				getId(`equip-number${i}`).addClass('li-Selected').siblings().batchDelClass('li-Selected');
			
			heroState(hero.state);
		}

		e.onclick();
	};

	petsHero.dismount = function dismount(e,i) {
		e.onclick = function() {

			hero.state.maxAtk = oriHeroMaxAtk;
			hero.state.limitAtk = oriHeroLimitAtk;

			for(var j=0; j<hero.backPack.weapon.length; j++) {
				if(i==j) {
					hero.backPack.weapon[j].equip=false;
				}
			}
			getId(`sell-btn${i}`).delClass('none-style'); //When equip weapon, hidden sell button.
			getId(`dismount-btn${i}`).delClass('block-style').delClass('orange-btn');			
			getId(`equip-number${i}`).delClass('li-Selected');

				// if(hero.backPack.weapon[i].idx != 'Zeki') {
				// 	weaponIcon = getIds([hero.backPack.weapon[i].baseId, hero.backPack.weapon[i].gunId]);	
				// }
				// else {
				// 	weaponIcon = getIds([hiddenWeapon.partnerId]);
				// }
				switch (hero.backPack.weapon[i].idx) {
					case 'SS1':
					case 'SS2':
					case 'HS1':
					case 'HS2':
					case 'HS3':
					case 'EP1':
					case 'EP2':
						weaponIcon = getIds([hero.backPack.weapon[i].baseId, hero.backPack.weapon[i].gunId]);
						break;
					case 'SS3':
						weaponIcon = getIds([hero.backPack.weapon[i].baseId1, hero.backPack.weapon[i].baseId2, hero.backPack.weapon[i].gunId1, hero.backPack.weapon[i].gunId2, hero.backPack.weapon[i].gunId3, hero.backPack.weapon[i].gunId4]);
						break;
					case 'EP3':
						weaponIcon = getIds([hero.backPack.weapon[i].baseId1, hero.backPack.weapon[i].baseId2, hero.backPack.weapon[i].gunId1, hero.backPack.weapon[i].gunId2]);
						break;
					case 'Zeki':
						weaponIcon = getIds([hiddenWeapon.partnerId]);
					default:
						// statements_def
						break;
				}
			
			weaponIcon.batchDelClass('block-style');
			e.delClass('block-style');

			heroState(hero.state);
		}
		e.onclick();
	};

	petsHero.equipmentList = function equipmentList(id) {

		console.log(id);
		// var _this = self;
		if(hero.backPack.weapon.length == 0 ){
			alert('背包目前尚未有任何裝備!');
		}
		else{
			//msg mask
			var mask = document.body.addSeed(document.createElement('div'));
			mask.className = 'mask';
			var maskClose = mask.addSeed(document.createElement('div'));
			maskClose.className = 'mask-close';
			maskClose.innerText = 'X'
			maskClose.onclick = function() {
				removeEquipmentList();
			};

			var equipmentList = document.body.addSeed(document.createElement('div'));
			equipmentList.id = 'equipmentList';
			// var equipmentListLightBox = equipmentList.addSeed(document.createElement('div'));
			// equipmentListLightBox.id = 'equipmentList-lightBox';
			equipmentList.innerHTML = '<h3>請選擇您要強化的裝備。</h3>';
			

			for(var i=0; i<blacksmithShopList.length; i++) {			
				// blacksmithShop.push(hero.backPack.weapon[i]);
				if(blacksmithShopList[i].equip != true) {
					equipmentList.innerHTML += `<span class="synthesis-field" onclick="javascript:selectEquipment('${id}', ${i}, ${removeEquipmentList})"><p class="synthesis-field-lv">Lv:${blacksmithShopList[i].level}</p><img class="float-style" src="./pets-img/weapons/view/${blacksmithShopList[i].idx}.png"></span>`;
				}
				else {
					equipmentList.innerHTML	+=`<span class="synthesis-field inTheEquipment"><p class="synthesis-field-lv">Lv:${blacksmithShopList[i].level}</p><img class="float-style" src="./pets-img/weapons/view/${blacksmithShopList[i].idx}.png"></span>`;
				}
				
			}
			// document.getElementsByClassName('mask')[0].onclick = removeEquipmentList();
			
			function removeEquipmentList() {				
				document.body.delSeed(document.getElementsByClassName('mask')[0]).delSeed(getId('equipmentList'));				
			}
		}
	};

	petsHero.selectEquipment = function selectEquipment(id,i,callBackFn) {	

		console.log(id);
		
		getId(id).setAttribute('onclick','javascript:void(0)');
		
		if(blacksmithShopList.map(function(obj) { return obj.idx; }).indexOf(blacksmithShopList[i].idx)!=-1) {
			backPackIdxfeild = blacksmithShopList.indexOf(hero.backPack.weapon[i]);
			if(id == 'BSF1') {
				getId(id).innerHTML = `<p class="synthesis-field-lv">Lv:${blacksmithShopList[i].level}</p><img class="float-style" src="./pets-img/weapons/view/${blacksmithShopList[i].idx}.png">`;
				blacksmithShopField[0] = blacksmithShopList[i];
				blacksmithShopList.splice(backPackIdxfeild,1);
			}
			else if(id == 'BSF2') {
				getId(id).innerHTML = `<p class="synthesis-field-lv">Lv:${blacksmithShopList[i].level}</p><img class="float-style" src="./pets-img/weapons/view/${blacksmithShopList[i].idx}.png">`;
				blacksmithShopField[1] = blacksmithShopList[i];
				blacksmithShopList.splice(backPackIdxfeild,1);
			}
			
			
		}
		// else {
		// 	// blacksmithShop.
		// }

		callBackFn();

	};

	function createDiv(updateEquipment) {
		if(hero.backPack.weapon.length == 0) {			
			weaponIds.SS1Ids = 1;
			weaponIds.SS2Ids = 1;
			weaponIds.SS3Ids = 1;
			weaponIds.HS1Ids = 1;
			weaponIds.HS2Ids = 1;
			weaponIds.HS3Ids = 1;
			weaponIds.EP1Ids = 1;
			weaponIds.EP2Ids = 1;
			weaponIds.EP3Ids = 1;
		};	

		switch (updateEquipment.idx) {
			case 'SS1':
			case 'SS2':
			case 'HS1':
			case 'HS2':
			case 'HS3':
			case 'EP1':
			case 'EP2':
				switch (updateEquipment.idx) {
					case 'SS1':
						updateEquipment.baseId = `pet-weapon-SbaseV1_${weaponIds.SS1Ids}`;
						updateEquipment.gunId = `pet-weapon-SgunV1_${weaponIds.SS1Ids}`;
						weaponIds.SS1Ids = ++weaponIds.SS1Ids;
						break;
					case 'SS2':
						updateEquipment.baseId = `pet-weapon-SbaseV2_${weaponIds.SS2Ids}`;
						updateEquipment.gunId = `pet-weapon-SgunV2_${weaponIds.SS2Ids}`;
						weaponIds.SS2Ids = ++weaponIds.SS2Ids;
						break;
					case 'HS1':
						updateEquipment.baseId = `pet-weapon-HbaseV1_${weaponIds.HS1Ids}`;
						updateEquipment.gunId = `pet-weapon-HgunV1_${weaponIds.HS1Ids}`;
						weaponIds.HS1Ids = ++weaponIds.HS1Ids;
						break;
					case 'HS2':
						updateEquipment.baseId = `pet-weapon-HbaseV2_${weaponIds.HS2Ids}`;
						updateEquipment.gunId = `pet-weapon-HgunV2_${weaponIds.HS2Ids}`;
						weaponIds.HS2Ids = ++weaponIds.HS2Ids;
						break;
					case 'HS3':
						updateEquipment.baseId = `pet-weapon-HbaseV3_${weaponIds.HS3Ids}`;
						updateEquipment.gunId = `pet-weapon-HgunV3_${weaponIds.HS3Ids}`;
						weaponIds.HS3Ids = ++weaponIds.HS3Ids;
						break;
					case 'EP1':
						updateEquipment.baseId = `pet-weapon-EbaseV1_${weaponIds.EP1Ids}`;
						updateEquipment.gunId = `pet-weapon-EgunV1_${weaponIds.EP1Ids}`;
						weaponIds.EP1Ids = ++weaponIds.EP1Ids;
						break;
					case 'EP2':
						updateEquipment.baseId = `pet-weapon-EbaseV2_${weaponIds.EP2Ids}`;
						updateEquipment.gunId = `pet-weapon-EgunV2_${weaponIds.EP2Ids}`;
						weaponIds.EP2Ids = ++weaponIds.EP2Ids;
						break;
					default:
						// statements_def
						break;
				};

				hero.backPack.weapon.push(Object.assign({}, updateEquipment));//clone obj 
				var baseDiv = document.createElement('div');
				baseDiv.setAttribute('id',updateEquipment.baseId);
				baseDiv.setAttribute('class',updateEquipment.baseClass);
				var gunDiv = document.createElement('div');
				gunDiv.setAttribute('id',updateEquipment.gunId);
				gunDiv.setAttribute('class',updateEquipment.gunClass);
				getId('pet-avatar').addSeeds([baseDiv,gunDiv]);
				
				break;
			case 'SS3':			
				updateEquipment.baseId1 = `pet-weapon-SbaseV3-1_${weaponIds.SS3Ids}`;
				updateEquipment.baseId2 = `pet-weapon-SbaseV3-2_${weaponIds.SS3Ids}`;
				updateEquipment.gunId1 = `pet-weapon-SgunV3-topLeft_${weaponIds.SS3Ids}`;
				updateEquipment.gunId2 = `pet-weapon-SgunV3-topRight_${weaponIds.SS3Ids}`;
				updateEquipment.gunId3 = `pet-weapon-SgunV3-lowerLeft_${weaponIds.SS3Ids}`;
				updateEquipment.gunId4 = `pet-weapon-SgunV3-lowerRight_${weaponIds.SS3Ids}`;
				weaponIds.SS3Ids = ++weaponIds.SS3Ids;
				hero.backPack.weapon.push(Object.assign({}, updateEquipment));//clone obj 
				var baseDiv1 = document.createElement('div'),
					baseDiv2 = document.createElement('div');
				baseDiv1.setAttribute('id',updateEquipment.baseId1);				
				baseDiv1.setAttribute('class',updateEquipment.baseClass1);
				baseDiv2.setAttribute('id',updateEquipment.baseId2);				
				baseDiv2.setAttribute('class',updateEquipment.baseClass2);
				var gunDiv1 = document.createElement('div'),
					gunDiv2 = document.createElement('div'),
					gunDiv3 = document.createElement('div'),
					gunDiv4 = document.createElement('div');
				gunDiv1.setAttribute('id',updateEquipment.gunId1);
				gunDiv1.setAttribute('class',updateEquipment.gunClass1);
				gunDiv2.setAttribute('id',updateEquipment.gunId2);
				gunDiv2.setAttribute('class',updateEquipment.gunClass2);
				gunDiv3.setAttribute('id',updateEquipment.gunId3);
				gunDiv3.setAttribute('class',updateEquipment.gunClass3);
				gunDiv4.setAttribute('id',updateEquipment.gunId4);
				gunDiv4.setAttribute('class',updateEquipment.gunClass4);
				getId('pet-avatar').addSeeds([baseDiv1,baseDiv2,gunDiv1,gunDiv2,gunDiv3,gunDiv4]);	
				
				break;
			case 'EP3':
				updateEquipment.baseId1 = `pet-weapon-EbaseV3-1_${weaponIds.EP3Ids}`;
				updateEquipment.baseId2 = `pet-weapon-EbaseV3-2_${weaponIds.EP3Ids}`;
				updateEquipment.gunId1 =  `pet-weapon-EgunV3-Left_${weaponIds.EP3Ids}`;
				updateEquipment.gunId2 =  `pet-weapon-EgunV3-Right_${weaponIds.EP3Ids}`;
				weaponIds.EP3Ids = ++weaponIds.EP3Ids;
				hero.backPack.weapon.push(Object.assign({}, updateEquipment));//clone obj 
				var baseDiv1 = document.createElement('div'),
					baseDiv2 = document.createElement('div');
				baseDiv1.setAttribute('id',updateEquipment.baseId1);
				baseDiv1.setAttribute('class',updateEquipment.baseClass1);				
				baseDiv2.setAttribute('id',updateEquipment.baseId2);
				baseDiv2.setAttribute('class',updateEquipment.baseClass2);
				var gunDiv1 = document.createElement('div'),
					gunDiv2 = document.createElement('div');
				gunDiv1.setAttribute('id',updateEquipment.gunId1);
				gunDiv1.setAttribute('class',updateEquipment.gunClass1);
				gunDiv2.setAttribute('id',updateEquipment.gunId2);
				gunDiv2.setAttribute('class',updateEquipment.gunClass2);
				getId('pet-avatar').addSeeds([baseDiv1,baseDiv2,gunDiv1,gunDiv2]);
				
				break;							
			default:
				// statements_def
				break;
		}

	}

	function deleteDiv(arrIdx) {

		switch (hero.backPack.weapon[arrIdx].idx) {
			case 'SS1':
			case 'SS2':
			case 'HS1':
			case 'HS2':
			case 'HS3':
			case 'EP1':
			case 'EP2':
				weaponIcon = getIds([hero.backPack.weapon[arrIdx].baseId, hero.backPack.weapon[arrIdx].gunId]);
				break;
			case 'SS3':
				weaponIcon = getIds([hero.backPack.weapon[arrIdx].baseId1, hero.backPack.weapon[arrIdx].baseId2, hero.backPack.weapon[arrIdx].gunId1, hero.backPack.weapon[arrIdx].gunId2, hero.backPack.weapon[arrIdx].gunId3, hero.backPack.weapon[arrIdx].gunId4]);
				break;
			case 'EP3':
				weaponIcon = getIds([hero.backPack.weapon[arrIdx].baseId1, hero.backPack.weapon[arrIdx].baseId2, hero.backPack.weapon[arrIdx].gunId1, hero.backPack.weapon[arrIdx].gunId2]);
				break;
			case 'Zeki':
				weaponIcon = getIds([hero.backPack.weapon[arrIdx].partnerId]);
			default:
				// statements_def
				break;
		}
		getId('pet-avatar').delSeeds(weaponIcon);

	}

	petsHero.strengthen = function strengthen() {
		
		switch (blacksmithShopField.length) {
			case 0:
			case 1:
				msgTip('請放入2件相同的裝備!');
				break;
			case 2:
				if(blacksmithShopField[0].idx != blacksmithShopField[1].idx) {
					msgTip('請放入2件相同的裝備!');	
				}
				else if(blacksmithShopField[0].idx == blacksmithShopField[1].idx){



					switch (blacksmithShopField[0].idx) {
						case 'SS1':	
							if(blacksmithShopField[0].level >= 1 && blacksmithShopField[0].level < 10 && blacksmithShopField[1].level >= 1 && blacksmithShopField[1].level < 10 ) {
								updateEquipment = {idx:blacksmithShopField[0].idx, level:blacksmithShopField[0].level+blacksmithShopField[1].level, name:blacksmithShopField[0].name, maxAtk:blacksmithShopField[0].maxAtk+blacksmithShopField[1].maxAtk , limitAtk:blacksmithShopField[0].limitAtk+blacksmithShopField[1].limitAtk, gp:blacksmithShopField[0].gp+blacksmithShopField[1].gp, baseId:blacksmithShopField[0].baseId, gunId:blacksmithShopField[0].gunId, baseClass:blacksmithShopField[0].baseClass, gunClass:blacksmithShopField[0].gunClass, equip:false};
								msgTip('強化成功!');
								if(updateEquipment.level >= 10 && updateEquipment.level < 20) {
									alert(`武器升級為二階：<span class='red-style'>鋼甲雙槍</span>`);	
									updateEquipment = {idx:'SS2', level:updateEquipment.level, name:'鋼甲雙槍', maxAtk:updateEquipment.maxAtk*2 , limitAtk:updateEquipment.limitAtk*2, gp:updateEquipment.gp*2, baseClass:'pet-weapon-SbaseV2', gunClass:'pet-weapon-SgunV2', equip:false};
								}
								createDiv(updateEquipment);
							}							
							break;
						case 'SS2':
							updateEquipment = {idx:blacksmithShopField[0].idx, level:blacksmithShopField[0].level+blacksmithShopField[1].level, name:blacksmithShopField[0].name, maxAtk:blacksmithShopField[0].maxAtk+blacksmithShopField[1].maxAtk , limitAtk:blacksmithShopField[0].limitAtk+blacksmithShopField[1].limitAtk, gp:blacksmithShopField[0].gp+blacksmithShopField[1].gp, baseId:blacksmithShopField[0].baseId, gunId:blacksmithShopField[0].gunId, baseClass:blacksmithShopField[0].baseClass, gunClass:blacksmithShopField[0].gunClass, equip:false};
							msgTip('強化成功!');
						 	if (updateEquipment.level >= 20) {
						 		alert(`武器升級為三階：<span class='red-style'>鋼甲突刺-無雙</span>`);	
								updateEquipment = {idx:'SS3', level:updateEquipment.level, name:'鋼甲突刺-無雙', maxAtk:updateEquipment.maxAtk*2 , limitAtk:updateEquipment.limitAtk*2, gp:updateEquipment.gp*2, baseClass1:'pet-weapon-SbaseV3-1', baseClass2:'pet-weapon-SbaseV3-2', gunClass1:'pet-weapon-SgunV3-topLeft', gunClass2:'pet-weapon-SgunV3-topRight', gunClass3:'pet-weapon-SgunV3-lowerLeft', gunClass4:'pet-weapon-SgunV3-lowerRight', equip:false};
							}
							createDiv(updateEquipment);
							break;
						case 'SS3':
							updateEquipment = {idx:blacksmithShopField[0].idx, level:blacksmithShopField[0].level+blacksmithShopField[1].level, name:blacksmithShopField[0].name, maxAtk:blacksmithShopField[0].maxAtk+blacksmithShopField[1].maxAtk , limitAtk:blacksmithShopField[0].limitAtk+blacksmithShopField[1].limitAtk, gp:blacksmithShopField[0].gp+blacksmithShopField[1].gp, baseId1:blacksmithShopField[0].baseId1, baseId2:blacksmithShopField[0].baseId2, gunId1:blacksmithShopField[0].gunId1, gunId2:blacksmithShopField[0].gunId2, gunId3:blacksmithShopField[0].gunId3, gunId4:blacksmithShopField[0].gunId4, baseClass1:blacksmithShopField[0].baseClass1, baseClass2:blacksmithShopField[0].baseClass2, gunClass1:blacksmithShopField[0].gunClass1, gunClass2:blacksmithShopField[0].gunClass2, gunClass3:blacksmithShopField[0].gunClass3, gunClass4:blacksmithShopField[0].gunClass4, equip:false};
							msgTip('強化成功!');
							break;
						case 'HS1':
							if(blacksmithShopField[0].level >= 1 && blacksmithShopField[0].level < 10 && blacksmithShopField[1].level >= 1 && blacksmithShopField[1].level < 10 ) {
								msgTip('強化成功!');
								updateEquipment = {idx:blacksmithShopField[0].idx, level:blacksmithShopField[0].level+blacksmithShopField[1].level, name:blacksmithShopField[0].name, maxAtk:blacksmithShopField[0].maxAtk+blacksmithShopField[1].maxAtk , limitAtk:blacksmithShopField[0].limitAtk+blacksmithShopField[1].limitAtk, gp:blacksmithShopField[0].gp+blacksmithShopField[1].gp, baseId:blacksmithShopField[0].baseId, gunId:blacksmithShopField[0].gunId, baseClass:blacksmithShopField[0].baseClass, gunClass:blacksmithShopField[0].gunClass, equip:false};
								if(updateEquipment.level >= 10 && updateEquipment.level < 20) {
									alert(`武器升級為二階：<span class='red-style'>霰彈雙槍</span>`);	
									updateEquipment = {idx:'HS2', level:updateEquipment.level, name:'霰彈雙槍', maxAtk:updateEquipment.maxAtk*2 , limitAtk:updateEquipment.limitAtk*2, gp:updateEquipment.gp*2, baseClass:'pet-weapon-HbaseV1', gunClass:'pet-weapon-HgunV2', equip:false};
								}
								createDiv(updateEquipment);
							}
							break;
						case 'HS2':
							updateEquipment = {idx:blacksmithShopField[0].idx, level:blacksmithShopField[0].level+blacksmithShopField[1].level, name:blacksmithShopField[0].name, maxAtk:blacksmithShopField[0].maxAtk+blacksmithShopField[1].maxAtk , limitAtk:blacksmithShopField[0].limitAtk+blacksmithShopField[1].limitAtk, gp:blacksmithShopField[0].gp+blacksmithShopField[1].gp, baseId:blacksmithShopField[0].baseId, gunId:blacksmithShopField[0].gunId, baseClass:blacksmithShopField[0].baseClass, gunClass:blacksmithShopField[0].gunClass, equip:false};
							msgTip('強化成功!');
							if (updateEquipment.level >= 20) {
								alert(`武器升級為三階：<span class='red-style'>霰彈重砲-無雙</span>`);	
								updateEquipment = {idx:'HS3', level:updateEquipment.level, name:'霰彈重砲-無雙', maxAtk:updateEquipment.maxAtk*2 , limitAtk:updateEquipment.limitAtk*2, gp:updateEquipment.gp*2, baseClass:'pet-weapon-HbaseV1', gunClass:'pet-weapon-HgunV3', equip:false};
							}
							createDiv(updateEquipment);
							break;
						case 'HS3':
							updateEquipment = {idx:blacksmithShopField[0].idx, level:blacksmithShopField[0].level+blacksmithShopField[1].level, name:blacksmithShopField[0].name, maxAtk:blacksmithShopField[0].maxAtk+blacksmithShopField[1].maxAtk , limitAtk:blacksmithShopField[0].limitAtk+blacksmithShopField[1].limitAtk, gp:blacksmithShopField[0].gp+blacksmithShopField[1].gp, baseId:blacksmithShopField[0].baseId, gunId:blacksmithShopField[0].gunId, baseClass:blacksmithShopField[0].baseClass, gunClass:blacksmithShopField[0].gunClass, equip:false};
							msgTip('強化成功!');
							break;
						case 'EP1':
							if(blacksmithShopField[0].level >= 1 && blacksmithShopField[0].level < 10 && blacksmithShopField[1].level >= 1 && blacksmithShopField[1].level < 10 ) {
								updateEquipment = {idx:blacksmithShopField[0].idx, level:blacksmithShopField[0].level+blacksmithShopField[1].level, name:blacksmithShopField[0].name, maxAtk:blacksmithShopField[0].maxAtk+blacksmithShopField[1].maxAtk , limitAtk:blacksmithShopField[0].limitAtk+blacksmithShopField[1].limitAtk, gp:blacksmithShopField[0].gp+blacksmithShopField[1].gp, baseId:blacksmithShopField[0].baseId, gunId:blacksmithShopField[0].gunId, baseClass:blacksmithShopField[0].baseClass, gunClass:blacksmithShopField[0].gunClass, equip:false};
								msgTip('強化成功!');
								if(updateEquipment.level >= 10 && updateEquipment.level < 20) {
									alert(`武器升級為二階：<span class='red-style'>電磁脈衝-貳核</span>`);	
									updateEquipment = {idx:'EP2', level:updateEquipment.level, name:'電磁脈衝-貳核', maxAtk:updateEquipment.maxAtk*2 , limitAtk:updateEquipment.limitAtk*2, gp:updateEquipment.gp*2, baseClass:'pet-weapon-EbaseV1', gunClass:'pet-weapon-EgunV2', equip:false};
								}
								createDiv(updateEquipment);
							}
							break;
						case 'EP2':
							updateEquipment = {idx:blacksmithShopField[0].idx, level:blacksmithShopField[0].level+blacksmithShopField[1].level, name:blacksmithShopField[0].name, maxAtk:blacksmithShopField[0].maxAtk+blacksmithShopField[1].maxAtk , limitAtk:blacksmithShopField[0].limitAtk+blacksmithShopField[1].limitAtk, gp:blacksmithShopField[0].gp+blacksmithShopField[1].gp, baseId:blacksmithShopField[0].baseId, gunId:blacksmithShopField[0].gunId, baseClass:blacksmithShopField[0].baseClass, gunClass:blacksmithShopField[0].gunClass, equip:false};
							msgTip('強化成功!');
							if (updateEquipment.level >= 20) {
								alert(`武器升級為三階：<span class='red-style'>電磁脈衝-四核</span>`);	
								updateEquipment = {idx:'EP3', level:updateEquipment.level, name:'電磁脈衝-四核', maxAtk:updateEquipment.maxAtk*2 , limitAtk:updateEquipment.limitAtk*2, gp:updateEquipment.gp*2, baseClass1:'pet-weapon-EbaseV3-1', baseClass2:'pet-weapon-EbaseV3-2', gunClass1:'pet-weapon-EgunV3-Left', gunClass2:'pet-weapon-EgunV3-Right', equip:false};
							}
							createDiv(updateEquipment);
							break;
						case 'EP3':
							updateEquipment = {idx:blacksmithShopField[0].idx, level:blacksmithShopField[0].level+blacksmithShopField[1].level, name:blacksmithShopField[0].name, maxAtk:blacksmithShopField[0].maxAtk+blacksmithShopField[1].maxAtk , limitAtk:blacksmithShopField[0].limitAtk+blacksmithShopField[1].limitAtk, gp:blacksmithShopField[0].gp+blacksmithShopField[1].gp, baseId1:blacksmithShopField[0].baseId1, baseId2:blacksmithShopField[0].baseId2, gunId1:blacksmithShopField[0].gunId1, gunId2:blacksmithShopField[0].gunId2, baseClass1:blacksmithShopField[0].baseClass1, baseClass2:blacksmithShopField[0].baseClass2, gunClass1:blacksmithShopField[0].gunClass1, gunClass2:blacksmithShopField[0].gunClass2, equip:false};
							msgTip('強化成功!');
							break;
						default:
							// statements_def
							break;
					}


					 
					backPackIdxfeild = hero.backPack.weapon.indexOf(blacksmithShopField[0]);
					//delete div
					deleteDiv(backPackIdxfeild);
					//and delete obj
					hero.backPack.weapon.splice(backPackIdxfeild,1);

					backPackIdxfeild = hero.backPack.weapon.indexOf(blacksmithShopField[1]);
					//delete div
					deleteDiv(backPackIdxfeild);
					//and delete obj
					hero.backPack.weapon.splice(backPackIdxfeild,1);



					// hero.backPack.weapon.push(Object.assign({}, updateEquipment));//clone obj
					getId('BSR').innerHTML = `<p class="synthesis-field-lv">Lv:${updateEquipment.level}</p><img class="float-style" src="./pets-img/weapons/view/${updateEquipment.idx}.png">`;					
					blacksmithShop = [];					
					backPcackList();
					strengthenCancel();
					
				}
				
				break;
			default:
				// statements_def
				break;
		}
	};


	petsHero.strengthenCancel = function strengthenCancel() {
		blacksmithShopList =[];
		for(var i=0; i<hero.backPack.weapon.length; i++) {			
			blacksmithShopList.push(hero.backPack.weapon[i]);	
		}
		blacksmithShopField = [];
		getId('BSF1').setAttribute('onclick','javascript:equipmentList(this.id)');
		getId('BSF2').setAttribute('onclick','javascript:equipmentList(this.id)');
		getId('BSF1').innerHTML = '裝備';
		getId('BSF2').innerHTML = '裝備';
		setTimeout(function() {
			getId('BSR').innerHTML = '預覽';	
		},3000)
		
	};
	// HBBtn.onclick = function() {
	// 	backPackListBoolean = !backPackListBoolean;
	// 	if(backPackListBoolean) {
	// 		HBList.addClass('backpack-list-open');
	// 		HBBtn.innerHTML = '《';
	// 	}
	// 	else {
	// 		HBList.delClass('backpack-list-open');
	// 		HBBtn.innerHTML = '》';	
	// 	}
		
	// }


	BPBtn.onclick = function() {
		BPBtn.addClass('antiquewhite-btn').siblings().batchDelClass('antiquewhite-btn');
		BPList.addClass('block-style').siblings().batchDelClass('block-style');		
		strengthenCancel();
	};
	BPBtn.onclick();

	SBtn.onclick = function() {
		SBtn.addClass('antiquewhite-btn').siblings().batchDelClass('antiquewhite-btn');
		SList.addClass('block-style').siblings().batchDelClass('block-style');		
		strengthenCancel();
	};

	BSBtn.onclick = function() {
		BSBtn.addClass('antiquewhite-btn').siblings().batchDelClass('antiquewhite-btn');
		BSList.addClass('block-style').siblings().batchDelClass('block-style');

		blacksmithShopList =[];
		for(var i=0; i<hero.backPack.weapon.length; i++) {			
			blacksmithShopList.push(hero.backPack.weapon[i]);	
		}

	};


	document.addEventListener('keydown', function(e) {
		// console.log('您按下的鍵是:'+e.keyCode);
		// e.stopPropagation();
		// e.preventDefault();
		if( e.keyCode == 32 ) {
			if(logBtn.disabled != true) {
				logBtn.onclick();	
			}		
		}
	});
	
	var hiddenWeaponBoolean = true;
	getId('adventure-text').addEventListener('input', function(e){
		
		// if( e.keyCode == 13 ) {
			// this.blur();
			if(hiddenWeaponBoolean) {

				if(this.value=='Zeki'){
					// setTimeout(
						alert(`${this.value}似乎在遠處呼喊\"${hero.state.name}\"，探險返回後將會遇到他唷。`)
					// , 1000);
					

					this.value = '';
					hero.backPack.weapon.push(hiddenWeapon);					
					
					//create weapon icon div
					var zekiDiv = document.createElement('div');
					zekiDiv.setAttribute('id',hiddenWeapon.partnerId);
					getId('pet-avatar').addSeed(zekiDiv);
					backPcackList();
					hiddenWeaponBoolean = false;
				};


			}

		// }

	});



	function heroState(state) {
		getId('hero-name').innerHTML = `<span class="hero-name">${state.name}</span>`,
		getId('hero-atk').innerText = `${state.maxAtk+state.limitAtk}(${state.limitAtk}~${state.maxAtk+state.limitAtk})`,
		getId('hero-hp').innerText = `${state.hp}/${oriHeroHp}`,
		getId('hero-lv').innerText = state.lv,
		getId('hero-exp').innerText = `${state.exp}/${state.expThreshold}`;
		getId('hero-money').innerText = `${state.money}GP`;
	};
		
	function randomHeroAtk() {
		return  Math.round((Math.random()*hero.state.maxAtk))+hero.state.limitAtk; //四捨五入	
	};

	function randomMonsterAtk(i) {
		return  Math.round((Math.random()*monster[i].atk))+monster[i].limitAtk; //四捨五入	
	};

	heroState(hero.state);
	// setInterval(heroState, 100);






	function taskA() {
	    setTimeout(function(){
	        logCont.innerHTML += `<span class="hero-name">${hero.state.name}</span>探險者已經出發!!<br />開始探險!<br />`;
	        fillLogScrollHeight();
	        taskB();
	    });
		
	};

	function taskB() {
		

		//First Monster
		if(monsterLoop == 0) {
			logCont.innerHTML += `<br />遇到<span class="name">${monster[monsterLoop].name}</span>怪物，攻擊力${monster[monsterLoop].atk+monster[monsterLoop].limitAtk}(${monster[monsterLoop].limitAtk}~${monster[monsterLoop].atk+monster[monsterLoop].limitAtk})，血量${monster[monsterLoop].hp}，開始戰鬥!<br />`;
		}
		resultVal = taskB_HeroVSMonster(monsterLoop);
	    

		
		
		function battleStepbyStep() {
			setTimeout(function() {
				if(battleDelayLoop<=resultVal.btlFre) {
					logCont.innerHTML +=tmpContent[battleDelayLoop];
					heroState(tmpHero[battleDelayLoop]);					
					fillLogScrollHeight();
					battleDelayLoop++;

					//Prevent to call by self and cause setTimeout delay 1s.
					if(battleDelayLoop<=resultVal.btlFre) {
						battleStepbyStep();	
					}
					else{
						meetMosnter();
					}
					
				}			
				
			}, 1000);
		};
		battleStepbyStep();
				


		//Multiple Monster
		function meetMosnter() {

		    setTimeout(function(){

				if(hero.state.hp > 0 ) {

					if(resultVal.boolean != false ) {
						monsterLoop++;

						if(monsterLoop<monster.length) {

							logCont.innerHTML += `<br />遇到<span class="name">${monster[monsterLoop].name}</span>怪物，攻擊力${monster[monsterLoop].atk+monster[monsterLoop].limitAtk}(${monster[monsterLoop].limitAtk}~${monster[monsterLoop].atk+monster[monsterLoop].limitAtk})，血量${monster[monsterLoop].hp}，開始戰鬥!<br />`;
							//Make battleFrequency to Zero.
							battleFrequency = 0;
							//Make template Content to Clean.
							tmpContent = [];
							//Make battle Delay's display Loop to Zero.
							battleDelayLoop = 0;
						}
						taskB();
					}
					else{
						taskD(taskC());
					}
				}		
				else {
					taskD(taskC());
				}

		    }, 1000);




		};







		
		// 
	};


	function taskB_HeroVSMonster(i) {


		heroAtkAR = randomHeroAtk();
		monsterAtkAR = randomMonsterAtk(i);
		if(monster[i].hp >0 && hero.state.hp >0) {

			//Hero Attack Event
			if(hero.state.hp >0 ){
				
				if(heroAtkAR == 0) {
					tmpContent[battleFrequency] = `<span class ="atk-cont">${hero.state.name}攻擊${monster[i].name}!　　${monster[i].name}躲開了攻擊!</span><br />`;
					tmpHero[battleFrequency] = Object.assign({}, hero.state);//clone obj 
				}
				else {
					monster[i].hp -= heroAtkAR;
					if(monster[i].hp < 0 ) {
						monster[i].hp = 0;
					}
					tmpContent[battleFrequency] = `<span class ="atk-cont">${hero.state.name}攻擊${monster[i].name}!　　${monster[i].name}遭受到${heroAtkAR}攻擊，
					${monster[i].name}血量剩餘: ${monster[i].hp}。</span><br />`;
					tmpHero[battleFrequency] = Object.assign({}, hero.state);//clone obj 
		 		}

		 		if(monster[i].hp > 0) {
		 			battleFrequency += 1;	
		 		}
		 		
			}


			//Monster Attack Event
			if(monster[i].hp > 0 ) {
				
				if(monsterAtkAR == 0) {
					tmpContent[battleFrequency] = `<span class ="atk-cont">${monster[i].name}攻擊${hero.state.name}!　　${hero.state.name}躲開了攻擊!</span><br />`;
					tmpHero[battleFrequency] = Object.assign({}, hero.state);//clone obj 
				}
				else {
					hero.state.hp -= monsterAtkAR;
					if(hero.state.hp < 0 ) {
						hero.state.hp = 0;
					}
					tmpContent[battleFrequency] =`<span class ="atk-cont">${monster[i].name}攻擊${hero.state.name}!　　${hero.state.name}遭受到${monsterAtkAR}攻擊，
					${hero.state.name}血量剩餘: ${hero.state.hp}</span><br />`;
					tmpHero[battleFrequency] = Object.assign({}, hero.state);//clone obj 
				}
				
		 		if(hero.state.hp > 0) {
		 			battleFrequency += 1;	
		 		}
			}		


			//call by self as monsterLoop for until anyone hp < 0.
			taskB_HeroVSMonster(i)
		}
		else if(monster[i].hp<=0) {	
			tmpContent[battleFrequency] +=`${hero.state.name}打敗${monster[i].name}了。 取得了經驗值${monster[i].exp}和${monster[i].gp}GP!<br />`;
			fillLogScrollHeight();
			hero.state.exp += monster[i].exp;
			hero.state.money += monster[i].gp;
			if(hero.state.exp>=hero.state.expThreshold) {	
				oriHeroLimitAtk+=upgradeLimitAtk;
				hero.state.limitAtk+=upgradeLimitAtk;		
				oriHeroMaxAtk+=upgradeMaxAtk;
				hero.state.maxAtk+=upgradeMaxAtk;
				oriHeroHp += 50;
				hero.state.lv +=1;			
				hero.state.expThreshold *= geometricProgression;
			}
			tmpHero[battleFrequency] = Object.assign({}, hero.state);//clone obj 
			
		}
		else if(hero.state.hp<=0){		
			tmpContent[battleFrequency] +=`${hero.state.name}被${monster[i].name}打敗了。<br />`;
			fillLogScrollHeight();
			
		}
		
		if(monster[i].hp<=0) {
			if(i != monster.length-1) {
				return {btlFre:battleFrequency, boolean:true};
			}else if(i == monster.length-1) {
				return {btlFre:battleFrequency, boolean:false};
			}

		}

		if(hero.state.hp<=0) {
			return {btlFre:battleFrequency, boolean:true};	
		}
	   
	};



	function taskC() {

			if(hero.state.hp>0) {
				logCont.innerHTML +=`<hr />${hero.state.name}勇者，你贏了!<br />`;			
			}
			else {
				logCont.innerHTML +=`<hr />${hero.state.name}勇者，你輸了...將傳送回村莊。<br />`;
				// hero.state.hp = oriHeroHp;
			}
	}

	function taskD() {
		hero.state.hp = oriHeroHp;
		logCont.innerHTML += 'HP將自動補滿!<br /><hr />';
		heroState(hero.state);
		fillLogScrollHeight();
		logBtn.disabled = false;
		clsBtn.disabled = false;
		getIds(['adventure-text','adventure']).arrSiblings().batchDelClass('none-style');
		getIds(['adventure-text','adventure']).batchDelClass('block-style');
		
	}

	//log content's scroll fill event
	function fillLogScrollHeight() {
		logCont.scrollTop = logCont.scrollHeight;
	}



	clsBtn.onclick = function() {
		logCont.innerHTML = '目前沒有探險紀錄。';
		logClean = true;
		//prevent spacebar keydown this btn state.
		this.blur();
	}



	logBtn.onclick = function() {
		logBtn.disabled = true;
		clsBtn.disabled = true;
		if(logClean) {
			logCont.innerHTML = '';
			logClean = false;
		}

		getIds(['adventure-text','adventure']).arrSiblings().batchAddClass('none-style');
		getIds(['adventure-text','adventure']).batchAddClass('block-style');
		//if restart the game quest's moment, Make All value to Empty or Zero.
		tmpContent = [];
		battleFrequency = 0,
		battleDelayLoop = 0,
		monsterLoop = 0;
		//if restart the game quest's moment, all monster have to been fill HP.
		for(var i=0; i<monster.length; i++){
			monster[i].hp = oriMonsterHp[i];	
		}
		taskA();
	}

}(Window.prototype));