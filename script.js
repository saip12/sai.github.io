jQuery(document).ready(function($) {

	var slideCount = $('#product_slider .product_slide').length;
	var slideWidth = $('#product_slider .product_slide').width();
	var slideHeight = $('#product_slider .product_slide').height();
	var sliderWidth = slideCount * slideWidth;

	 $('#product_slider').css({
		//width : slideWidth,
		 height : slideHeight
	});
 
	//$('#product_slider .product_slide:last').hide();
	$('.next').hide();
	function moveLeft() {
		$('#product_slider .product_slide:first').animate({
			'left': '-100%'
		});
		$('#product_slider .product_slide:last').animate({
			'left': '0'
		}, 500, function() {
			$('.previous').hide().removeClass("active");
	    	$('.next').show().addClass("active");
		});

	};

	function moveRight() {
		$('#product_slider .product_slide:first').animate({
			'left': '0%'
		});
		$('#product_slider .product_slide:last').animate({
			'left': '-100%'
		}, 500, function() {
			$('.previous').show().addClass("active");
	    	$('.next').hide().removeClass("active");
		});
	};

	$('.previous').click(function() {
		moveLeft();
	});

	$('.next').click(function() {
		moveRight();
	});
	
	$('.change_color').click(function(){
		$("body").toggleClass("changecolor");
	});

});
