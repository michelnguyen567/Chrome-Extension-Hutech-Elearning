
document.getElementById("isHaveEx").setAttribute("check","true");


var dayHoc=document.getElementById("dayHoc");
if (dayHoc!=null) {
	dayHoc.onclick=function(){
		var id=document.getElementById('topForm:chatidhidden').value;
	chrome.runtime.sendMessage({handler:'get',idc:id});
}
}

var vandap=document.getElementById("vanDap");
if (vandap!=null) {
	vanDap.onclick=function(){
		var id="voice"+document.getElementById('topForm:chatidhidden').value;
		chrome.runtime.sendMessage({handler:'voice',idc:id});
	}
}

var stop= document.getElementById("cancells");
stop.onclick=function(){
	var id=document.getElementById('topForm:chatidhidden').value;
	chrome.runtime.sendMessage({handler:'off',idc:id});
}

var button= document.getElementById("button");
if (button!=null) {
	button.onclick=function(){
		var id=document.getElementById('topForm:chatidhidden').value;
	chrome.runtime.sendMessage({handler:'get',idc:id});
}
}

