
var chapterList = chapterList();
var adList = adList();
var currentChapter = 0;
var currentPage = 0;
var adNum = 3;
// light or dark switch
var switchBGBoolean = false;
// //preload photo
var preloadPhoto = getTags('body')[0].addKid(document.createElement("style"));
var picUrl = '';
var adImg = '';
var adSrc = '';
var adCount = 0;

var preloadAd = getClasses('ad-container')[0].addKid(document.createElement("style"));

//preload both 3 ad.
for(var i=0; i<adList.length; i++) {
	 	adSrc += ` url(${adList[i]})`
}
preloadAd.innerHTML = `
	.ad-container::before {
		content: ${adSrc};
 	display: none;
}`;

function showAd() {

	if(adCount < adList.length) {
		getId('ad-content').innerHTML = '';
		adImg = makeTag('img');
		adImg.src = adList[adCount];
		getId('ad-content').addKid(adImg);
		adCount++;
		if(adCount == adList.length) {
			adCount = 0;
		}
	}

}
showAd();

var adInterval = setInterval(showAd, 3000);
	


getId('close-ad-btn').onclick = function() {
	getClasses('ad-container')[0].addClass('none-style');
	clearInterval(adInterval);
}





//preload both chapter's 1&2 page.
for(var i=0; i<chapterList.length; i++) {
	 	picUrl += ` url(${chapterList[i].pages[0][1]}) url(${chapterList[i].pages[1][1]})`
}

preloadPhoto.innerHTML = `
	body::before {
		content: ${picUrl};
 	display: none;
}`;

var chapterLi = '';
var chapterUl = makeTag('ul');
getId('chapter-box').addKid(chapterUl);


var pageLi = '';
var pageUl = makeTag('ul');
getId('page-box').addKid(pageUl);

var thumbnailLi = '';
var thumbnailUl = makeTag('ul')
thumbnailUl.id = 'comic-thumbnail'
getClasses('selection-container')[0].addKid(thumbnailUl);

function chapterMenu() {
	getId('blur-box').addClass('block-style');
	for(var i = 0; i < chapterList.length; i++) {
		chapterLi = makeTag('li');
		// chapterLi.id = `chapterLi${i}`;
		chapterLi.innerHTML = `<span>${chapterList[i].name}</span>`;
		chapterUl.addKid(chapterLi);		
		chapterLi.onclick = function(event) {			
			currentPage = 0;	
			getId('chapter-box').delClass('table-style');
			getId('chapter').value = this.getTags('span')[0].textContent;
			var resultIdx = chapterList.map(function(obj){return obj.name}).indexOf(this.getTags('span')[0].textContent);
			if(resultIdx !== -1 ) {
				currentChapter = resultIdx;				
				getId('page-box').getTags('ul')[0].innerHTML = '';
				getClasses('selection-container')[0].getTags('ul')[0].innerHTML = '';
				getId('chapter-box').delClass('table-style');
				getId('chapter').value = chapterList[resultIdx].name;
				getId('comic-img').innerHTML = `<img src="${chapterList[resultIdx].pages[0][1]}" alt="">`;
				pageMenu(resultIdx);
			}
			else {
				getId('comic-img').innerHTML = `很抱歉，此頁尚在維修中!!`;	
			}			
		}

	}
	// pageMenu(chapterLi, i);	
}




function pageMenu(chapterIdx){
	getId('blur-box').addClass('block-style');
	getId('page').value = chapterList[chapterIdx].pages[0][0];
	for(var j = 0; j < chapterList[chapterIdx].pages.length; j++) {
		thumbnailLi = makeTag('li');
		thumbnailLi.setAttr('num',j+1);
		thumbnailLi.innerHTML = `<img title="${chapterList[chapterIdx].pages[j][0]}" src="${chapterList[chapterIdx].pages[j][1]}" alt="">`
		thumbnailUl.addKid(thumbnailLi);

		thumbnailLi.onclick = function() {
			if(switchBGBoolean === false) {
				this.delClass('thumbnail-fucus-dark').addClass('thumbnail-fucus').siblings().delClass('thumbnail-fucus');
			}
			else {
				this.delClass('thumbnail-fucus').addClass('thumbnail-fucus-dark').siblings().delClass('thumbnail-fucus-dark')
			}
			var resultIdx = chapterList[chapterIdx].pages.map(function(arr){return arr[0]}).indexOf(this.getTags('img')[0].title);
			if(resultIdx !== -1 ) {
				currentPage = resultIdx;
				getId('page').value = chapterList[chapterIdx].pages[resultIdx][0];
				getId('comic-img').innerHTML = `<img src="${chapterList[chapterIdx].pages[resultIdx][1]}" alt="">`;	
			}
			else {
				getId('comic-img').innerHTML = `很抱歉，此頁尚在維修中!!`;	
			}
		}	
		pageLi = makeTag('li');		
		pageLi.innerHTML = `<span>${chapterList[chapterIdx].pages[j][0]}<span>`;
		pageUl.addKid(pageLi);
		pageLi.onclick = function(event) {
			// preventOuterEventFired(event);
			
			getId('page-box').delClass('table-style');
			getId('page').value = this.getTags('span')[0].textContent;
			var resultIdx = chapterList[chapterIdx].pages.map(function(arr){return arr[0]}).indexOf(this.getTags('span')[0].textContent);
			if(resultIdx !== -1 ) {
				currentPage = resultIdx;
				// getId('comic-thumbnail').getTags('li')[currentPage].addClass('thumbnail-fucus').siblings().delClass('thumbnail-fucus');
				if(switchBGBoolean === false) {
					getId('comic-thumbnail').getTags('li')[currentPage].delClass('thumbnail-fucus-dark').addClass('thumbnail-fucus').siblings().delClass('thumbnail-fucus');	
				}
				else {		
					getId('comic-thumbnail').getTags('li')[currentPage].delClass('thumbnail-fucus').addClass('thumbnail-fucus-dark').siblings().delClass('thumbnail-fucus-dark');	
				}

				getId('comic-img').innerHTML = `<img src="${chapterList[chapterIdx].pages[resultIdx][1]}" alt="">`;	
			}
			else {
				getId('comic-img').innerHTML = `很抱歉，此頁尚在維修中!!`;	
			}			
		}
	}
	getClasses('selection-container')[0].scrollLeft = 0;
	if(switchBGBoolean === false) {
		getId('comic-thumbnail').getTags('li').forEach(function(ele){ele.delClass('thumbnail-dark')});
		getId('comic-thumbnail').getTags('li')[0].delClass('thumbnail-fucus-dark').addClass('thumbnail-fucus').siblings().delClass('thumbnail-fucus');
	}
	else {
		getId('comic-thumbnail').getTags('li').forEach(function(ele){ele.addClass('thumbnail-dark')});
		getId('comic-thumbnail').getTags('li')[0].delClass('thumbnail-fucus').addClass('thumbnail-fucus-dark').siblings().delClass('thumbnail-fucus-dark')
	}

}

getId('blur-box').onclick = function() {
	this.delClass('block-style');
	getId('chapter-box').delClass('table-style');
	getId('page-box').delClass('table-style');
}


getId('chapter').onclick = function() {
	getId('blur-box').addClass('block-style');
	getId('chapter-box').addClass('table-style');	
}

getId('page').onclick = function() {
	getId('blur-box').addClass('block-style');
	getId('page-box').addClass('table-style');
}

getId('previous-page-btn').onclick = function() {
	currentPage--;
	if(currentPage <= 0) {
		currentPage = 0;
		if(switchBGBoolean === false) {
			this.delClass('btn-off').delClass('first-last-page-dark').addClass('first-last-page');
		}
		else {
			this.delClass('btn-off').delClass('first-last-page').addClass('first-last-page-dark');
		}
	}
	else {
		this.delClass('first-last-page-dark').delClass('first-last-page');
		if(switchBGBoolean === false) {
			getId('next-page-btn').delClass('btn-off').delClass('first-last-page-dark').delClass('first-last-page');
		}
		else {
			getId('next-page-btn').addClass('btn-off').delClass('first-last-page-dark').delClass('first-last-page');
		}
		
		picUrl = '';		
		//preload previous 2 page.
		picUrl += ` url(${chapterList[currentChapter].pages[currentPage][1]})`
		if(currentPage - 1 >= 0) {
			picUrl += ` url(${chapterList[currentChapter].pages[currentPage-1][1]})`;
		}
		getId('page').value = chapterList[currentChapter].pages[currentPage][0];
		getId('comic-img').innerHTML = `<img src="${chapterList[currentChapter].pages[currentPage][1]}" alt="">`;		
	}
	preloadPhoto.innerHTML = `
		body::before {
			content: ${picUrl};
	 	display: none;
	}`;
	
	
	if(switchBGBoolean === false) {
		getId('comic-thumbnail').getTags('li')[currentPage].delClass('thumbnail-fucus-dark').addClass('thumbnail-fucus').siblings().delClass('thumbnail-fucus');	
	}
	else {		
		getId('comic-thumbnail').getTags('li')[currentPage].delClass('thumbnail-fucus').addClass('thumbnail-fucus-dark').siblings().delClass('thumbnail-fucus-dark');	
	}
	
	getClasses('selection-container')[0].scrollLeft = 
		getId('comic-thumbnail').getTags('li')[currentPage].offsetLeft - 
		getClasses('selection-container')[0].offsetLeft - 
		getClasses('selection-container')[0].offsetWidth/2 + 
		getId('comic-thumbnail').getTags('li')[currentPage].offsetWidth/2;
}

getId('next-page-btn').onclick = function() {
	currentPage++;
	if(currentPage >= chapterList[currentChapter].pages.length-1) {
		currentPage = chapterList[currentChapter].pages.length-1;
		if(switchBGBoolean === false) {
			this.delClass('btn-off').delClass('first-last-page-dark').addClass('first-last-page');	
		}
		else {
			this.delClass('btn-off').delClass('first-last-page').addClass('first-last-page-dark');
		}
		
	}
	else {		
		this.delClass('first-last-page-dark').delClass('first-last-page');
		if(switchBGBoolean === false) {
			getId('previous-page-btn').delClass('btn-off').delClass('first-last-page-dark').delClass('first-last-page');
		}
		else {
			getId('previous-page-btn').addClass('btn-off').delClass('first-last-page-dark').delClass('first-last-page');
		}

		
		picUrl = '';		
		//preload next 2 page.
		picUrl += ` url(${chapterList[currentChapter].pages[currentPage][1]})`
		if(currentPage + 1 <= chapterList[currentChapter].pages.length-1) {
			picUrl += ` url(${chapterList[currentChapter].pages[currentPage+1][1]})`;
		}
		getId('page').value = chapterList[currentChapter].pages[currentPage][0];
		getId('comic-img').innerHTML = `<img src="${chapterList[currentChapter].pages[currentPage][1]}" alt="">`;
	}
	preloadPhoto.innerHTML = `
		body::before {
			content: ${picUrl};
	 	display: none;
	}`;

	
	
	if(switchBGBoolean === false) {
		getId('comic-thumbnail').getTags('li')[currentPage].delClass('thumbnail-fucus-dark').addClass('thumbnail-fucus').siblings().delClass('thumbnail-fucus');	
	}
	else {		
		getId('comic-thumbnail').getTags('li')[currentPage].delClass('thumbnail-fucus').addClass('thumbnail-fucus-dark').siblings().delClass('thumbnail-fucus-dark');	
	}
	getClasses('selection-container')[0].scrollLeft = 
		getId('comic-thumbnail').getTags('li')[currentPage].offsetLeft - 
		getClasses('selection-container')[0].offsetLeft - 
		getClasses('selection-container')[0].offsetWidth/2 + 
		getId('comic-thumbnail').getTags('li')[currentPage].offsetWidth/2;
	
}


function switchBG(btnThis) {
	switchBGBoolean = !switchBGBoolean;

	if(switchBGBoolean === true) {
		getIds(['previous-page-btn','next-page-btn']).forEach(function(ele){ele.addClass('btn-off')})
		getId('comic-container').getClasses('title')[0].addClass('title-off');
		getId('comic-container').getClasses('fa-caret-right')[0].addClass('fa-caret-right-off')
		btnThis.parentElement.parentElement.getTags('i').forEach(function(ele){ele.addClass('icon-off')})
		btnThis.parentElement.addClass('switch-off')
		getTags('body')[0].addClass('body-off');
		getTags('header')[0].addClass('header-off');
		getId('comic-thumbnail').getTags('li').forEach(function(ele){ele.addClass('thumbnail-dark')});
		getId('comic-thumbnail').getTags('li')[currentPage].delClass('thumbnail-fucus').addClass('thumbnail-fucus-dark').siblings().delClass('thumbnail-fucus-dark')
		getClasses('selection-container').addClass('scroll-off');
		getId('previous-page-btn').delClass('first-last-page').delClass('first-last-page').addClass('first-last-page-dark');
	}
	else {
		getIds(['previous-page-btn','next-page-btn']).forEach(function(ele){ele.delClass('btn-off')})
		getId('comic-container').getClasses('title')[0].delClass('title-off');
		getId('comic-container').getClasses('fa-caret-right')[0].delClass('fa-caret-right-off')
		btnThis.parentElement.parentElement.getTags('i').forEach(function(ele){ele.delClass('icon-off')})
		btnThis.parentElement.delClass('switch-off')
		getTags('body')[0].delClass('body-off');
		getTags('header')[0].delClass('header-off');
		getId('comic-thumbnail').getTags('li').forEach(function(ele){ele.delClass('thumbnail-dark')});
		getId('comic-thumbnail').getTags('li')[currentPage].delClass('thumbnail-fucus-dark').addClass('thumbnail-fucus').siblings().delClass('thumbnail-fucus');
		getClasses('selection-container').delClass('scroll-off');
		getId('previous-page-btn').delClass('first-last-page-dark').addClass('first-last-page');	
	}
	
}


function comicChapter(chapter) {
	clearInterval(adInterval);
	getClasses('ad-container')[0].delClass('none-style');	
	adInterval = setInterval(showAd, 3000);
	getTags('loading')[0].delClass('none-style');
	getId('chapter').value = chapterList[chapter].name;
	chapterMenu();
	// pageMenu(getId('page-box').getTags(`chapterLi-${chapter}`), chapter)
	currentChapter = chapter;
	pageMenu(chapter);
	if(switchBGBoolean === false) {
		getId('previous-page-btn').delClass('first-last-page-dark').addClass('first-last-page');	
	}
	else {
		getId('previous-page-btn').delClass('first-last-page').addClass('first-last-page-dark');
	}
	getId('comic-img').innerHTML = `<img src="${chapterList[chapter].pages[0][1]}" alt="">`;
	getId('comic-thumbnail').getTags('li')[0].addClass('thumbnail-fucus').siblings().delClass('thumbnail-fucus');
	getId('comic-main').addClass('none-style');
	getId('comic-container').addClass('block-style');
	getTags('loading')[0].addClass('none-style');

}

// function preventOuterEventFired(event) {
// 	if(event !== null) {
// 		if (!e) {var e = event || window.event;}
// 		e.cancelBubble = true;
// 		if (e.stopPropagation) {e.stopPropagation();}	
// 	}

// }

// var title = "LINEN BLAZER".split(" ");
getTags('loading')[0].addClass('none-style');