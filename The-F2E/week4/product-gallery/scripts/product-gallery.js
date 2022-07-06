
var productList = productList();


//preload photo
var preloadPhoto = getTags('body')[0].addKid(document.createElement("style"));
var photoArr = Object.keys(productList).map(function(photoKey){return productList[photoKey].productPhoto})
var picUrl = '';
for(var i=0; i<photoArr.length; i++) {
	 photoArr[i].forEach(function(photoUrl){
	 	picUrl += ` url(${photoUrl})`
	 });
}

preloadPhoto.innerHTML = `
	body::before {
		content: ${picUrl};
 	display: none;
}`;


function productPage(dressType) {
	getTags('loading')[0].delClass('none-style');
	//catch home's crrent's height
 var homeScollTop =	document.documentElement.scrollTop || window.pageYOffset
 var productScollTop = 0;
	// console.log(productList);
	var title = productList[dressType].productTitle.split(" ")
	var verticalTitle;
	if(title[1] != null) {
  verticalTitle = `<span>${title[1] || ''}</span>`;
	}
	else {
		verticalTitle = `<span class="none-style"></span>`;
	}
	if(Object.keys(productList).indexOf(dressType) !== -1) {
		getClasses('product-container')[0].innerHTML = `
		 <div id="back-btn"><i class="fas fa-arrow-left"></i>CCCLOTHES</div>
	<div class="photo-container">
		<div class="title" title="${productList[dressType].productTitle}"><span>${title[0]}</span>${verticalTitle}</div>			
		<div class="pic" style="background: url(${productList[dressType].productPhoto[0]})"></div>
		<div class="num">${productList[dressType].number}</div>
		<div class="top">TOP</div>
	</div>

	<div class="description-container">
		<div class="product-details">PRODUCT DETAILS</div>
		<div class="title" title="${productList[dressType].productTitle}">${productList[dressType].productTitle}</div>	
		<div class="sub-title">Kogi Cosby sweater ethical squid irony</div>
		<div class="description">In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.<br /><br />

		We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale's back, the blubber-hook was inserted into the original hole there cut by the spades of the mates. But how did so clumsy and weighty a mass as that same hook get fixed in that hole? It was inserted there by my particular friend Queequeg, whose duty it was, as harpooneer.</div>		
	</div>
	<div class="photo-box1">
			<div class="photo1" style="background: url(${productList[dressType].productPhoto[1]})"></div>
	</div>
	<div class="photo-box2">
			<div class="photo2" style="background: url(${productList[dressType].productPhoto[2]})"></div>
	</div>
	<div id="topBtn"><i class="fas fa-angle-double-up"></i></div>
 <div class="last-space"></div>`;
		
	}


	getClasses('gallery-container')[0].addClass('none-style');

	getClasses('product-container')[0].addClass('grid-style');

	window.scroll(0,productScollTop);



	document.addEventListener('scroll', function(){
		productScollTop =	document.documentElement.scrollTop || window.pageYOffset
		if(productScollTop >= document.documentElement.clientHeight/2) {
			getId('topBtn').addClass('block-style').delClass('topBtnFadeOut').addClass('topBtnFadeIn').onclick = function() {
				var scrollTimer = setInterval(function(){
					window.scrollBy(0,-20);
					if(productScollTop == 0) {						
						clearInterval(scrollTimer);
					}
				})
				//window.scrollBy scrolls by a particular amount where window.scroll scrolls to an absolute position in the document.
				
			}
		}
		else if(productScollTop <= document.documentElement.clientHeight){
				getId('topBtn').delClass('topBtnFadeIn').addClass('topBtnFadeOut');
		}


	});
	


	getId('back-btn').onclick = function() {
		window.scroll(0,homeScollTop);
		getClasses('gallery-container')[0].delClass('none-style');
		getClasses('product-container')[0].delClass('grid-style');
	}
	getTags('loading')[0].addClass('none-style');

}
// var title = "LINEN BLAZER".split(" ");
getTags('loading')[0].addClass('none-style');