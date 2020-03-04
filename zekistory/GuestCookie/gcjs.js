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
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function checkCookie()
{
num=getCookie('zekicount')
if (num!=null && num!=""){
  document.write('Welcome again '+num+'!');
  num++;
  document.write("<font size=3>您已來過"+num+" 次了，感覺不錯吧！<br>")
  setCookie('zekicount',num,365);
}
else 
  {
  //num=prompt('Please enter your name:',"")
  var num=1
  if (num!=null && num!="")
    {
    document.write("<font size=3>這是您第ㄧ次拜訪本單元，請儘情瀏覽！<br>")
    setCookie('zekicount',num,365);
    }
  }
}