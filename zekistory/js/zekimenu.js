/*-------------版權區---------------
作者: Zeki
信箱: zekixfly@hotmail.com

版權聲明:
一、本網站的版權屬原作者所有。 
二、盼望尊重知識產權，請勿擅自轉貼複製。
		
---------------版權區-------------*/

//items陣列用來紀錄要顯示/隱藏的區塊id
var items = new Array('zeki-menu','content','close-menu');
	


function openMenu(){
	// $("zekiiframe").removeClass('iframe-padding10');

	if(musicListSlider == true) {
		musicListSwitch();//close music list	
	}
	
	//隱藏的區塊
	getId('open-menu').fadeOut();
	getId('Zeki-info').fadeOut();
	
	getId('Zeki-info').style.color = "black";

	//一一取得items陣列中的物件 並判斷hyperlink是否被點選 若是則顯示區塊 反之則隱藏
	for(var i=0;i<items.length;i++){		
		getId(items[i]).fadeIn();
		// document.getElementById(items[i]).style.display =  (document.getElementById(items[i]).style.display == 'none'?'inline':'inline');
	}
}



function closeMenu(){	
	//呈現的區塊
	getId('open-menu').fadeIn();	
	getId('Zeki-info').fadeIn();

	
	//一一取得items陣列中的物件 並判斷hyperlink是否被點選 若是則顯示區塊 反之則隱藏
	for(var i=0;i<items.length;i++){
		getId(items[i]).fadeOut();
	}
}

