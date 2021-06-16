<!------------ 插入控制碼區段開始 ------------> 

<!--

function getCookieVal (offset) {
var endstr=document.cookie.indexOf(";", offset);
if (endstr == -1) endstr=document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
var arg=name+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while (i < clen) {
var j=i+alen;
if (document.cookie.substring(i, j) == arg) return getCookieVal (j);
i=document.cookie.indexOf(" ", i)+1;
if (i == 0) break; 
}
return null;
}

function SetCookie (name, value) {
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
document.cookie = name + "=" + escape (value) +
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
((path == null) ? "" : ("; path=" + path)) +
((domain == null) ? "" : ("; domain=" + domain)) +
((secure == true) ? "; secure" : "");
}

function show_count() {
var expdate=new Date();
var num;
expdate.setTime(expdate.getTime()+(24*60*60*1000*60)); 
if(!(GetCookie("name"))) num=0; 
else num=GetCookie("count");
if (num != 0) {
if (num == 1) document.write("<font size=3>這是您第ㄧ次拜訪本單元，請儘情瀏覽！<br>");
else document.write("<font size=3>您已來過"+num+" 次了，感覺不錯吧！<br>");
document.write("目前等級：");
if (num < 500) document.write("基本網友");
else if (num < 2000) document.write("ㄧ等網友");
else if (num < 5000) document.write("特等網友");
else if (num < 10000) document.write("忠實網友");
else document.write("最佳網友");
document.write("</font><br>");
document.write("<font size=3>如果您想提昇等級的話，請常回來逛逛</font><br>");
}
num++;
SetCookie("count", num, expdate);
}

function auto_show_name() {
if(GetCookie("name") != null) {

} else {
document.write("<font size=3>因為您是第ㄧ次拜訪<br>所以請您登錄您的姓<br>名大門將會為您而開</b></font><br>");
document.write("<FORM NAME=\"jeffform1\"><INPUT TYPE=\"button\" VALUE=\"開門見山\" onClick=\"set_name(jeffform1.nameinput.value,0)\"><INPUT TYPE=\"RESET\" VALUE=\"重新輸入\"><br><font size=3>請輸入您的姓名：<INPUT TYPE = \"text\" NAME = \"nameinput\"></FORM>"); 
}
}

function set_name(cookie_name,flag) {
var expdate = new Date ();
expdate.setTime(expdate.getTime()+(24*60*60*1000*60));
var username=cookie_name;
if (flag == 0) {
if (username != "") {
if (confirm("您所輸入的姓名是“"+username+"”，您確定嗎？")) {
SetCookie ("name", username, expdate);
window.history.go(0);
}
} else 
alert("抱歉！！請先輸入您的姓名，謝謝。");
}
}
// -->

<!--
var cuid= "10197";
var keywords= "ADFORCE";
// -->

<!------------ 插入控制碼區段結束 ------------> 
