var area = document.getElementById("scrollBox");
var liHeaight  = 60;
area.innerHTML += area.innerHTML;
area.scrollTop = 0;
var time;
var speed = 20;
var delay = 2000;
function startMove(){
	area.scrollTop++;
	time = setInterval("scrollUp()",speed);
}
function scrollUp(){
	if(area.scrollTop % liHeaight ==0){
		clearInterval(time);
		setTimeout("startMove()",delay);
	}else{
		area.scrollTop++;
		if(area.scrollTop >= area.scrollHeight/2){
			area.scrollTop = 0;
		}
	}
}
setTimeout("startMove()",delay);//初始化
