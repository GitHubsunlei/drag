var oDiv = document.getElementById('box');

var disX = 0;
var disY = 0;

oDiv.onmousedown = function(ev){

	disX = ev.pageX - oDiv.offsetLeft;
	disY = ev.pageY - oDiv.offsetTop;

}