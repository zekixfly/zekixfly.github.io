/*-------------版權區---------------
作者: Zeki
信箱: zekixfly@hotmail.com

版權聲明:
一、本網站的版權屬原作者所有。 
二、盼望尊重知識產權，請勿擅自轉貼複製。
		
---------------版權區-------------*/

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}

function setCookie(c_name,value,expiredays)
{
 var exdate=new Date()
 exdate.setDate(exdate.getDate()+expiredays)
 document.cookie=c_name+ "=" +escape(value)+
 ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/"
}



function zekistage() {

				<!-- 抓取ID標籤//--> 
				var through = document.getElementById('countthrough');
				<!-- 抓取ID標籤//--> 

				var num,exp,lv;


				<!--設定階段天數區//--> 
				var StageI=60;
				var StageII=159;
				var StageIII=309;
				var StageIV=519;
				var StageV=804;
				var StageVI=1188;
				var StageVII=2699;
				var StageVIII=4603;
				var StageIX=6524;
				var StageX=9161;
				var StageXI=12796;
				var StageXII=17819;
				var StageXIII=24763;
				var StageXIV=34344;
				var StageXV=47560;
				<!--設定階段天數區//-->

				<!--設定階段名稱區//--> 
				var StagenameI="新人訪客";
				var StagenameII="三品訪客";
				var StagenameIII="=二品訪客";
				var StagenameIV="一品訪客";
				var StagenameV="激品訪客";
				var StagenameVI="超激品訪客";
				var StagenameVII="老人常客";
				var StagenameVIII="激老人常客";
				var StagenameIX="超激老人常客";
				var StagenameX="貴人好客";
				var StagenameXI="激貴人好客";
				var StagenameXII="超激貴人好客";
				var StagenameXIII="絕世老客";
				var StagenameXIV="激絕世老客";
				var StagenameXV="超激絕世老客";
				var StagenameXVI="超脫";
				<!--設定階段名稱區//-->

			


				//var now=new Date();
				//var spday=new Date(2013,04-1,10);
				//x=(now.getTime()-spday.getTime())/(24*60*60*1000);
				//x=Math.ceil(x);
				num = getCookie('zekicount')
				if (num){//判斷num有值才做以下事情，否則什麼也不做。
					num++;
					//num = prompt('請輸入數值','1');
					setCookie('zekicount',num,365);					
				}else{
					num = 1;
					if (num!=null && num!=""){
						//num = prompt('請輸入數值','1');
					    setCookie('zekicount',num,365);
					}
				}				

				exp="EXP：<font color=red>" + num + "</font>/";

				if (num < StageI) lv = StagenameI+"<br />（"+exp+StageI+"）";
				else if (num < StageII) lv = StagenameII+"<br />（"+exp+StageII+"）";
				else if (num < StageIII) lv = StagenameIII+"<br />（"+exp+StageIII+"）";
				else if (num < StageIV) lv = StagenameIV+"<br />（"+exp+StageIV+"）";
				else if (num < StageV) lv = StagenameV+"<br />（"+exp+StageV+"）";
				else if (num < StageVI) lv = StagenameVI+"<br />（"+exp+StageVI+"）";
				else if (num < StageVII) lv = StagenameVII+"<br />（"+exp+StageVII+"）";
				else if (num < StageVIII) lv = StagenameVIII+"<br />（"+exp+StageVIII+"）";
				else if (num < StageIX) lv = StagenameIX+"<br />（"+exp+StageIX+"）";
				else if (num < StageX) lv = StagenameX+"<br />（"+exp+StageX+"）";
				else if (num < StageXI) lv = StagenameXI+"<br />（"+StageimgXI+exp+StageXI+"）";
				else if (num < StageXII) lv = StagenameXII+"<br />（"+exp+StageXII+"）";
				else if (num < StageXIII) lv = StagenameXIII+"<br />（"+exp+StageXIII+"）";
				else if (num < StageXIV) lv = StagenameXIV+"<br />（"+exp+StageXIV+"）";
				else if (num < StageXV) lv = StagenameXV+"<br />（"+exp+StageXV+"）";
				else {lv = StagenameXVI+"<br />（"+exp+StageXV+"）"};

				
				through.innerHTML = "訪客等級：" + lv;
}
zekistage();