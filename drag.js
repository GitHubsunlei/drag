var oDiv = document.getElementById('box');

var disX = 0;
var disY = 0;

oDiv.onmousedown = function(ev){

	disX = ev.pageX - oDiv.offsetLeft;
	disY = ev.pageY - oDiv.offsetTop;

	document.onmousemove = function(ev){
		console.log(222)
		disX = ev.pageX - disX;
		disY = ev.pageY - disY;
		oDiv.style.left = disx + 'px';
		oDiv.style.top = disY + 'px';
	}

}