// JavaScript Document
$(function(){
	var $olGameCon = $("#onlineGameCon>div");
	var $aTriangle = $("#onlineGameCon>ol>li");
	var timer_1 = null;
	var timer_2 = null;
	var timer_3 = null;
	var timer_4 = null;
	//网游
	$("#onlineGameBtn01").mouseover(function(){
		$aTriangle.hide();
		$olGameCon.hide();
		clearTimeout(timer_1);
    	$olGameCon.eq(0).fadeIn(300);
		$aTriangle.eq(0).fadeIn(300);
	});
	$("#largeOnlineGameCon").mouseout(function(){
		clearTimeout(timer_1);
		timer_1 = setTimeout(function(){$olGameCon.eq(0).fadeOut(100);$aTriangle.eq(0).fadeOut(100);},1000);
	});
	
	$("#onlineGameBtn02").mouseover(function(){
		$aTriangle.hide();
		$olGameCon.hide();
		clearTimeout(timer_2);
    	$olGameCon.eq(1).fadeIn(300);
		$aTriangle.eq(1).fadeIn(300);
	});
	$("#webGameCon").mouseout(function(){
		clearTimeout(timer_2);
		timer_2 = setTimeout(function(){$olGameCon.eq(1).fadeOut(100);$aTriangle.eq(1).fadeOut(100);},1000);
	});
	
	$("#onlineGameBtn03").mouseover(function(){
		$aTriangle.hide();
		$olGameCon.hide();
		clearTimeout(timer_3);
    	$olGameCon.eq(2).fadeIn(300);
		$aTriangle.eq(2).fadeIn(300);
	});
	$("#casualGameCon").mouseout(function(){
		clearTimeout(timer_3);
		timer_3 = setTimeout(function(){$olGameCon.eq(2).fadeOut(100);$aTriangle.eq(2).fadeOut(100);},1000);
	});
	//手游
	$("#mobileGameBtn").mouseover(function(){
		clearTimeout(timer_4);
    	$("#mobileGameContent").fadeIn(300);
		$("#firstTriangle_mobile").fadeIn(300);
	});
	$("#mobileGameContent").mouseout(function(){
		clearTimeout(timer_4);
		timer_4 = setTimeout(function(){$("#mobileGameContent").fadeOut(100);$("#firstTriangle_mobile").fadeOut(100);},1000);
	});
	//导航栏折叠菜单
	$("#foldableMenu").click(function(){
    	//$("#foldableListLittle").toggle();
    	//$("#foldableList").toggle();
		//$("#closeFoldableList").toggle();
		if($("#closeFoldableList").css("display") != "none"){
			$("#foldableMenu").css("background-image","");
    		$("#foldableListLittle").fadeOut();
    		$("#foldableList").fadeOut();
			$("#closeFoldableList").fadeOut();
		}else{
			$("#foldableMenu").css("background-image","none");
    		$("#foldableListLittle").fadeIn();
    		$("#foldableList").fadeIn();
			$("#closeFoldableList").fadeIn();
		}
	});
	//轮播图
	var $aLi = $(".sliderCon li");
	var n = 0;
	$aLi.hide();
	$aLi.eq(n).show();
	
	setInterval(change,5000);
	
	function change(){
		if( n<$aLi.length-1 ){
			n = n + 1;
			$aLi.fadeOut(1000);
			$aLi.eq(n).fadeIn(1000);
		}else{
			n = 0;
			$aLi.fadeOut(1000);
			$aLi.eq(n).fadeIn(1000);
		}
	}
})





