var area = document.getElementById("scrollBox");
		var liHeaight  = 100;
		area.innerHTML += area.innerHTML;
		area.scrollLeft = 0;
		var time;
		var speed = 20;
		function startMoveL(){
			area.scrollLeft++;
			time = setInterval("scrollL()",speed);
		}
		function scrollL(){
			if(area.scrollLeft % liHeaight ==0){
				clearInterval(time);
				setTimeout("startMoveL()",delay);
			}else{
				area.scrollLeft++;
				if(area.scrollLeft >= area.scrollWidth/2){
					area.scrollLeft = 0;
				}
			}
		}
		function startMoveR(){
			area.scrollLeft--;
			time = setInterval("scrollR()",speed);
		}
		function scrollR(){
			if(area.scrollLeft % liHeaight ==0){
				clearInterval(time);
				setTimeout("startMoveR()",delay);
			}else{
				area.scrollLeft--;
				if(area.scrollLeft >= area.scrollWidth/2){
					area.scrollLeft = 0;
				}
			}
		}