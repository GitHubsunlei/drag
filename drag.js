var oDiv = document.getElementById('box');

var disX = 0;
var disY = 0;

oDiv.onmousedown = function(ev){

	disX = ev.clientX - oDiv.offsetLeft;
	disY = ev.clientY - oDiv.offsetTop;

	document.onmousemove = function(ev){

		oDiv.style.left = ev.clientX - disX + 'px';
		oDiv.style.top = ev.clientY - disY + 'px';
	}

	document.onmouseup = function(){
		this.onmouseup = null;
		this.onmousemove = null;
	}
	return false;
}