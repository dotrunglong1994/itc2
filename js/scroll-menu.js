// $(window).load(function(){
// 	$("#header").sticky({ topSpacing: 0 });


// 	$('#header').on('stricky-start',function(){
// 		$("header .logo img").css({"width":"60%","transition":"width 0.6s"});
// 			$(".menu li").css({"padding":"23px 10px"});
// 			$(".search img").css({"margin-top": "30px"});
// 	});
// 	$('#header').on('stricky-end',function(){
// 			$("header .logo img").css({"width":"100%"});
// 			$(".menu li").css("padding","50px 10px");
// 			$(".search img").css({"margin-top": "50px"});		
// 	});
// });

// $(window).on('load', function(){
// 	$("#header").sticky({ topSpacing: 0 });

// });



$(document).ready(function(){
	// $("#header").sticky({ 
	// 	topSpacing: 0;
	// 	getWidthFrom:'body';
	// 	responsiveWidth:true;

	// });
	$(window).scroll(function(){
		if(document.documentElement.scrollTop > 0){
			$("header .logo img").css({"width":"60%","transition":"width 0.4s"});
			$(".menu > ul >li").css({"padding":"23px 12px"});
			$(".search img").css({"margin-top": "25px"});
			// $("section.home h2, section.home p").css({"opacity":"0"});
		}

		if(document.documentElement.scrollTop < 10){
			// $("body").css("background","blue");
			// alert(document.body.scrollTop);
			$("header .logo img").css({"width":"100%"});
			$(".menu >ul >li").css("padding","40px 12px");
			$(".search img").css({"margin-top": "42px"});
			// $("section.home h2, section.home p").css({"opacity":"1"});
		}

		//document.documentElement.scrollTop cang nho thi cang lon
		let x=1;
		if (document.documentElement.scrollTop <1){
			x=1;
		}else{
			x = 1/(document.documentElement.scrollTop/50);
		}
		$("section.home h2, section.home p, .arrow").css({"opacity":x});

	});

// slide
	var i = 0;
	$(".lt").click(function(){
		i--;
		let slide = i%3 +1;
		$(".slide1").hide();
		$(".slide2").hide();
		$(".slide3").hide();
		$(".slide"+slide).show();
	});
	$(".gt").click(function(){
		i++;
		let slide = i%3 +1;
		$(".slide1").hide();
		$(".slide2").hide();
		$(".slide3").hide();
		$(".slide"+slide).show();
	});

	// click menu 
	$(".icon-menu").click(function(){
		$("menu").show();
	});

});