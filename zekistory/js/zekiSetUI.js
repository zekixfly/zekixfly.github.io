/*-------------版權區---------------
作者: Zeki
信箱: zekixfly@hotmail.com

版權聲明:
一、本網站的版權屬原作者所有。 
二、盼望尊重知識產權，請勿擅自轉貼複製。
		
---------------版權區-------------*/

function zekiSetUI() {

	var UIColor = getCookie('zekicolor'),
		UIBG = getCookie('zekibg');

	
	if (UIColor){
		//alert(UIColor);
		parent.document.getElementById('zekistyle').setAttribute('href','css/zekistyle-'+UIColor+'.css');				
	}else{
		//設定完全未選顏色時的默認顏色
		setCookie('zekicolor','black',365);
		//document.getElementById('zekistyle').setAttribute('href','css/zekistyle-black.css');
	}

	if (UIBG){
		//alert(UIBG);
		parent.document.getElementById('bg').setAttribute('src','./images/fullbg/'+UIBG+'.jpg');				
	}else{
		//設定完全未選背景時的默認背景
		setCookie('zekibg','gold-museum',365);		
	}
}
zekiSetUI();