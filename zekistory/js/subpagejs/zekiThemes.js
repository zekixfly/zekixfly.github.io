/*-------------版權區---------------
作者: Zeki
信箱: zekixfly@hotmail.com

版權聲明:
一、本網站的版權屬原作者所有。 
二、盼望尊重知識產權，請勿擅自轉貼複製。
		
---------------版權區-------------*/



function zekiGetColor(color) {
	parent.document.getElementById('zekistyle').setAttribute('href','css/zekistyle-'+color+'.css');
	var displaycolortext = document.getElementById('colortext');
	displaycolortext.innerHTML = "<font color='"+color+"'; style='text-shadow:0px 0px 2px black';>"+color+"</font>";	
}


function zekiGetBG(backgroundIMG) {
	parent.document.getElementById('bg').setAttribute('src','./images/fullbg/'+backgroundIMG+'.jpg');
	var displaybgtext = document.getElementById('bgtext');
	displaybgtext.innerHTML = "<font color='lightcyan'; style='text-shadow:0px 0px 2px black';>"+backgroundIMG+"</font>";	
}


function saveSettings() {
	var presetColor,presetBG;
	var UIColor = document.getElementById('colortext').innerText,
		UIBG = document.getElementById('bgtext').innerText;
	
	if (UIColor){
		setCookie('zekicolor',UIColor,365);
	}else{	//如果未選擇顏色，則以上次預設顏色來儲存。
		presetColor = getCookie('zekicolor');
		setCookie('zekicolor',presetColor,365);
	}

	if (UIBG){
		setCookie('zekibg',UIBG,365);
	}else{	//如果未選擇顏色，則以上次預設顏色來儲存。
		presetBG = getCookie('zekibg');
		setCookie('zekibg',presetBG,365);
	}	

	//alert(UserId);
	//alert(UIcolor);
	parent.location.reload();
}