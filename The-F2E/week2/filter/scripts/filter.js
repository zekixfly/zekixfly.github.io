var noData = '';
var allTaiwanArr = [];
var locationArr = [];
var searchArr = [];
var displayArtNum = 3;
var pageNum = 5;
// var articleSwitch = false;
var firstViewBoolean = true;

function selected(selectedVal) {
    doAjax(function(response) {

        if (selectedVal === 'all') {
            allTaiwanArr = locationArr = response.XML_Head.Infos.Info;
            dataJudgment(allTaiwanArr)
        } else if (getId('selection-location').getTags('option').map(function(ele, idx) { return ele.value }).indexOf(selectedVal) !== -1) {
            locationArr = response.XML_Head.Infos.Info.filter(function(obj, idx, arr) { return obj.Location?.indexOf(selectedVal) !== -1 });
            dataJudgment(locationArr)
        } else {
            searchArr = locationArr.filter(function(obj, idx, arr) { return filterByADLNO(obj) });
            dataJudgment(searchArr)
        }
        getTags('loading')[0].addClass('none-style');
    });
}
selected('all');



var pageIdx;

function createPageBtn(i, returnArr) {
    pageIdx = makeTag('a');
    pageIdx.className = 'page-style cursor-pointer no_selection';
    pageIdx.textContent = i + 1;
    if (i === 0) {
        pageIdx.addClass('page-btn-focus');
    }
    getTags('footer')[0].addKid(pageIdx);
    pageIdx.onclick = function() {
        this.addClass('page-btn-focus').siblings().delClass('page-btn-focus');
        //等加級數
        displayArticle((parseInt(this.textContent) - 1) + (parseInt(this.textContent) - 1) * 2, returnArr)
    }
}



function displayPageNum(i, returnArr) {

    getTags('footer')[0].getTags('a').forEach(function(element, index) {
        element.remove();
    });

    if (Math.ceil(returnArr.length / displayArtNum) < 5) {
        for (var j = i + Math.ceil(returnArr.length / displayArtNum); i < j; i++) {
            createPageBtn(i, returnArr);
        }
    } else {
        //review btn
        var pageReview = makeTag('a');
        var pageFastReview = makeTag('a');
        pageReview.className = 'page-style cursor-pointer no_selection';
        pageReview.innerHTML = '<i class="fas fa-caret-left"></i>';
        pageFastReview.className = 'page-style cursor-pointer no_selection';
        pageFastReview.innerHTML = '<i class="fas fa-fast-backward"></i>';
        getTags('footer')[0].addKids([pageFastReview, pageReview]);
        pageReview.onclick = function() {
            if ((parseInt(pageIdx.textContent) - 5) - 1 < 1) {
                displayPageNum(0, returnArr)
            } else {
                displayPageNum((parseInt(pageIdx.textContent) - 5) - 1, returnArr);
            }
        }
        pageFastReview.onclick = function() {
                event.preventDefault();
                displayPageNum(0, returnArr);
            }
            // page btn
        for (var j = i + pageNum; i < j; i++) {

            createPageBtn(i, returnArr);
        }
        //prevuou btn
        var pagePrevious = makeTag('a');
        var pageLastPrevious = makeTag('a');
        pagePrevious.className = 'page-style cursor-pointer no_selection';
        pagePrevious.innerHTML = '<i class="fas fa-caret-right"></i>';
        pageLastPrevious.className = 'page-style cursor-pointer no_selection';
        pageLastPrevious.innerHTML = '<i class="fas fa-fast-forward"></i>';
        getTags('footer')[0].addKids([pagePrevious, pageLastPrevious]);

        pagePrevious.onclick = function(event) {
            event.preventDefault();
            if (parseInt(pageIdx.textContent) >= Math.ceil(returnArr.length / displayArtNum)) {
                displayPageNum(Math.ceil(returnArr.length / displayArtNum) - 5, returnArr);
            } else {
                displayPageNum((parseInt(pageIdx.textContent) - 5) + 1, returnArr);
            }
        }
        pageLastPrevious.onclick = function(event) {
            event.preventDefault();
            displayPageNum(Math.ceil(returnArr.length / displayArtNum) - 5, returnArr);
        }
    }





    // pageThis.addClass('page-btn-focus').siblings().delClass('page-btn-focus');

    // pagePrevious.addEventListener("mousedown", function() {
    // 	pagePrevious.onclick();
    // })		
}

function createArticle(i, locationArr) {
    // console.log(locationArr[i]);	
    getId('results-total').innerHTML = locationArr.length;
    if (locationArr[i].Picture1 == '') {
        locationArr[i].Picture1 = './img/no-image-icon-23500.png'
    }
    var len = 60; //description's max length limit
    var originalDescription = locationArr[i].Description;;
    var shortDescript = locationArr[i].Description.substring(0, len - 1) + '...';
    var section = makeTag('section');
    section.className = 'travel-container clearfix';
    section.innerHTML = `
	 	<div class="location-pic"><img src='${locationArr[i].Picture1}' title="${locationArr[i].Name}"></div>
				<div class="location-container">
					<h2>${locationArr[i].Name}</h2>
					<div class="description">${shortDescript}</div>
					<div class="organizer"><span value="Ethan Foster">${locationArr[i].Org}</span><label class="classTag" for="Ethan Foster">Entertainment</label></div>
					<div class="address"><span><i class="fas fa-map-marker-alt mr7"></i>${locationArr[i].Location}</span><span><i class="far fa-calendar-alt mr7 ml20"></i>${locationArr[i].Start} - ${locationArr[i].End}</span></div>
			</div>`;
    getClasses('section-frame')[0].addKid(section);

    section.onclick = function switchSection() {
        var returnArticleBtn = makeTag('div');
        returnArticleBtn.className = 'return-article-btn';
        returnArticleBtn.innerHTML = '<i class="fab fa-red-river cursor-pointer" title="返回"></i>';
        this.addKid(returnArticleBtn);
        this.siblings().addClass('none-style');
        this.addClass('height-auto-style');
        this.getClasses('location-pic')[0].addClass('open-up');
        this.getClasses('location-pic')[0].getTags('img')[0].addClass('img-open-up');
        this.getClasses('location-container')[0].addClass('height-auto-style');
        this.getClasses('description')[0].textContent = originalDescription;
        this.addClass('cursor-default');
        this.onclick = null;

        var sectionSelf = this;
        returnArticleBtn.onclick = function(event) {
                preventOuterEventFired(event);
                sectionSelf.siblings().delClass('none-style');
                sectionSelf.delClass('height-auto-style');
                sectionSelf.getClasses('location-pic')[0].delClass('open-up');
                sectionSelf.getClasses('location-pic')[0].getTags('img')[0].delClass('img-open-up');
                sectionSelf.getClasses('location-container')[0].delClass('height-auto-style');
                sectionSelf.getClasses('description')[0].textContent = shortDescript;
                sectionSelf.delClass('cursor-default');
                sectionSelf.delKid(returnArticleBtn);
                sectionSelf.onclick = switchSection;
            }
            //Avoid triggering section.onclick events again
            // return false;
    };
}



function displayArticle(i, returnArr) {
    getClasses('section-frame')[0].getTags('section').forEach(function(element, index) {
        element.remove();
    });

    if (returnArr.length < displayArtNum) {
        if (returnArr.length === 0) {
            createArticle(i, returnArr);
        } else {
            for (var j = i + returnArr.length; i < j; i++) {
                createArticle(i, returnArr);
            }
        }

    } else {
        if (i === returnArr.length - 1) {
            createArticle(i, returnArr);
        } else {
            for (var j = i + displayArtNum; i < j; i++) {
                createArticle(i, returnArr);
            }
        }

    }


}

function dataJudgment(returnArr) {
    if (noData != '' && noData != 'undefined') {
        getClasses('section-frame')[0].delKid(noData);
        noData = '';
    }

    if (returnArr.length !== 0) {

        //first view web and then display page 1.
        if (firstViewBoolean === true) {
            displayArticle(0, returnArr);
            displayPageNum(0, returnArr);
            firstViewBoolean = false;
        } else {
            displayArticle(0, returnArr);
            displayPageNum(0, returnArr);
        }
    } else {
        noData = makeTag('div')
        noData.innerHTML = '查無資料!!';
        noData.className = 'nodata-style';
        getClasses('section-frame')[0].addKid(noData);
        displayArticle(0, returnArr);
        displayPageNum(0, returnArr);
        console.log('查無資料!!');

    }
}


var span = '';

function checkBtn(checkedThis) {

    if (checkedThis.checked === true) {
        addTag(checkedThis, 'checkbox');
    } else {
        getTags('tag')[0].delKid(getId(checkedThis.value));
    }
}
//Default All checkbox
checkBtn(getClasses('categories')[0].getTags('input')[0]);


function addTag(checkedThis, type) {
    span = makeTag('span');
    span.id = checkedThis.value
    span.innerHTML = `${checkedThis.value} <i class="far fa-times-circle cursor-pointer" onclick="delTag(this, '${type}')"></i></span>`
    getTags('tag')[0].addKid(span);
}


function delTag(tagThis, type) {
    if (type === 'checkbox') {
        var checkElement = getClasses('categories')[0].getTags('input').filter(function(ele, idx) { return ele.value == tagThis.parentElement.id });
        checkElement[0].checked = false;
    } else if (type === 'search') {
        getId('FunSearch').value = '';
        strTmp = '';
        dataJudgment(locationArr);
    }

    tagThis.parentElement.remove();
}

getId('selection-location').onchange = function() {
    firstViewBoolean = true;
    var selectedVal = this.options[this.selectedIndex].value;
    selected(selectedVal);
}


var searchVal = '';
var strTmp = '';
getId('FunSearch').addEventListener('keypress', function(event) {
    firstViewBoolean = true;
    if (event.keyCode === 13) {

        searchVal = this.value;

        //Don't add the same Tag again.
        if (this.value.trim() != '') {
            if (strTmp === '') {
                addTag(this, 'search');
                selected(searchVal);
                strTmp = searchVal;
            } else if (strTmp.indexOf(this.value.trim()) == -1) {
                addTag(this, 'search');
                selected(searchVal);
                strTmp = searchVal;
            }
        }


        var filterResult = locationArr.filter(filterByADLNO);

        if (filterResult) {
            dataJudgment(filterResult);
        }
    }
});



function hasKeyWord(add, description, location, name, org) {
    if (add.indexOf(searchVal) !== -1 || description.indexOf(searchVal) !== -1 || location.indexOf(searchVal) !== -1 || name.indexOf(searchVal) !== -1 || org.indexOf(searchVal) !== -1) {
        return true;
    }
}

function filterByADLNO(obj) {
    if (hasKeyWord(obj.Add, obj.Description, obj.Location, obj.Name, obj.Org)) {
        return true;
    } else {
        return false;
    }

}


function doAjax(callBackFn) {

    ajax({
        type: 'get',
        url: './JSON/activity_C_f.json',
        // url: 'https://cors-anywhere.herokuapp.com/https://gis.taiwan.net.tw/XMLReleaseALL_public/activity_C_f.json',
        // postDataType: 'application/x-www-form-urlencoded',
        ok: function(response) {
            callBackFn(response);
        }
    });
}

function preventOuterEventFired(event) {
    if (event !== null) {
        if (!e) { var e = event || window.event; }
        e.cancelBubble = true;
        if (e.stopPropagation) { e.stopPropagation(); }
    }

}