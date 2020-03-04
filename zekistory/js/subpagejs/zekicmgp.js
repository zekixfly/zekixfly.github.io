/*-------------版權區---------------
作者: Zeki
信箱: zekixfly@hotmail.com

版權聲明:
一、本網站的版權屬原作者所有。 
二、盼望尊重知識產權，請勿擅自轉貼複製。
		
---------------版權區-------------*/


$(".cimemagraph").each(function(idx) {
	// console.log(idx+$(this).find("img").attr("src"));

	$(this).click(function() {
		console.log(this);
		var thisSrc = $(this).find("img").attr("src");
		$("#originalcmgp").find("img").attr("src", thisSrc);
		$("#originalcmgp").fadeIn('fast');
	});
});

$("#originalcmgp").click(function() {
	$(this).fadeOut('fast');
});

