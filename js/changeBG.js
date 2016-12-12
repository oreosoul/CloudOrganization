//更改背景为透明
	$header = $("#NoBg");
	$LBtn = $(".left").children("a").children("img");
	$RBtn = $(".right").children("a").children("img");
	$header.css("background","rgba(255,255,255,0)");
	//绑定滚动事件
	$('.scroll-container').bind("scroll", function () {  
                var sTop = $('.scroll-container').scrollTop();  
                var sTop = parseInt(sTop); 
                if (sTop >= 200) {  
                	$header.css("background","rgba(255,255,255,1)"); 
                	$LBtn.attr("src","img/icons/back.png");
                	$RBtn.attr("src","img/icons/list-o.png");
                	
                }  
                else {  
                	$header.css("background","rgba(255,255,255,0)");
                	$LBtn.attr("src","img/icons/back-white.png");
                	$RBtn.attr("src","img/icons/list-o-white.png"); 
                }   
            });  
            
	//图片自动添加标题
	$(function(){
		$titleBox = $("<div></div>").addClass("imgTitle");
		$img = $(".article").children("img");
		$img.after($titleBox);
		var article = document.getElementById('ariticle');
		var imgs = article.getElementsByTagName('img');
		for(i=0;i<$img.length;i++){
			var imgTitle = imgs[i].title;
			/*$titleBox.html($title);*/
			var $imgTitleBox=$(imgs[i]).next('.imgTitle');
			$imgTitleBox.html(imgTitle);
		}
		
	});