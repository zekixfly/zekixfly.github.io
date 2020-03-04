/*-------------版權區---------------
作者: Zeki
信箱: zekixfly@hotmail.com

版權聲明:
一、本網站的版權屬原作者所有。 
二、盼望尊重知識產權，請勿擅自轉貼複製。
		
---------------版權區-------------*/

function zekiinfo() {
	var build = getId('countbuild');
	var years = getId('countyear');
	var nye = getId('countnewyearseve');
	var yearsms = 365 * 24 * 60 * 60 * 1000;
	var daysms = 24 * 60 * 60 * 1000;
	var hoursms = 60 * 60 * 1000;
	var secondms = 60 * 1000;
	var microsecond = 1000;
	var now=new Date();
	var spday=new Date(2013,04-1,10);//站台成立日期
	var nyeday=new Date(now.getFullYear()+1,01-1,01);//新年
	var spdaydiffms = now.getTime()-spday.getTime();//成立總毫秒
	var nyediffms = nyeday.getTime()-now.getTime();//新年到數總毫秒
	

	
	/*----------成立日期正數----------*/
	by=Math.floor(spdaydiffms/yearsms)
	spdaydiffms -= by * yearsms
	bd=Math.floor(spdaydiffms/daysms);
	spdaydiffms -= bd * daysms;
	bh=Math.floor(spdaydiffms/hoursms);
	spdaydiffms -= bh * hoursms;
	bm=Math.floor(spdaydiffms/secondms);
	spdaydiffms -= bm * secondms;
	bs=Math.floor(spdaydiffms/microsecond);
	/*----------成立日期正數----------*/
	
	/*----------新年到數----------*/
	d=Math.floor(nyediffms/daysms);
	nyediffms -= d * daysms;
	h=Math.floor(nyediffms/hoursms);
	nyediffms -= h * hoursms;
	m=Math.floor(nyediffms/secondms);
	nyediffms -= m * secondms;
	s=Math.floor(nyediffms/microsecond);
	/*----------新年到數----------*/
	

	years.innerHTML = by;
	build.innerHTML = by + "年" + bd + "天" + bh + "小時" + bm + "分" + bs + "秒";
	nye.innerHTML = d + "天" + h + "小時" + m + "分" + s + "秒";
	// nye.innerHTML = "Birthday Time!";
	setTimeout("zekiinfo()",1000)
}
zekiinfo();