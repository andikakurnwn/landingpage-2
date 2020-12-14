$(document).ready(function(){

	setInterval(function(){

		if($(window).width() < 576){

			$(".grid-feature").addClass("order-last");
			$(".grid-text-feature").addClass("text-center");
			$(".grid-feature").css("marginTop","20px");

		}else {

			$(".grid-feature").removeClass("order-last");
			$(".grid-text-feature").removeClass("text-center");
			$(".grid-feature").css("marginTop","-20px");


		}
	},1)

	$(".brilliant-white").on("click", function(){

		$(".img-motorcycle").attr("src", "me/img/brilliant-white.png");
		$(".name-motorcycle").html("BRILLIANT WHITE");

	})

	$(".stronger-red").on("click", function(){

		$(".img-motorcycle").attr("src", "me/img/stronger-red.png");
		$(".name-motorcycle").html("STRONGER RED - TITAN BLACK");
	})

	$(".titan-black").on("click", function(){

		$(".img-motorcycle").attr("src", "me/img/titan-black.png");
		$(".name-motorcycle").html("TITAN BLACK");
	})


	$(".matt-bordeaux").on("click", function(){

		$(".img-motorcycle").attr("src", "me/img/matt-bordeaux.png");
		$(".name-motorcycle").html("MATT BORDEAUX");
	})


	$(".matt-black").on("click", function(){

		$(".img-motorcycle").attr("src", "me/img/matt-black.png");
		$(".name-motorcycle").html("MATT BLACK");
	})



})