$(window).on('load', function() {
	
	var knowledgeWidth = $('.featured-knowledge').width() - 150;
	var laptopWidth = $('.laptop-slider').width();
	var newsWidth = $('.news-slider .slide').width() - 140;
	var newsNum = 2;
	
	$('.laptop-slider').setInitialState(laptopWidth, 1);
	$('.featured-knowledge').setInitialState(knowledgeWidth, 1);
	
	$(window).resize(function() {
		
		$('.laptop-slider').setInitialState(laptopWidth, 1);
		$('.featured-knowledge').setInitialState(knowledgeWidth, 1);
	});
	
	$('.laptop-slider .arrow-back').click(function() {
		$('.laptop-slider').slideBack(laptopWidth, 1);
	});
	
	$('.featured-knowledge .back-arrow').click(function() {
		$('.featured-knowledge').slideBack(knowledgeWidth, 1);
	});
	
	$('.laptop-slider .arrow-next').click(function() {
		$('.laptop-slider').slideOver(laptopWidth, 1);
	});
	
	$('.featured-knowledge .next-arrow').click(function() {
		$('.featured-knowledge').slideOver(knowledgeWidth, 1);
	});
	
	$('.laptop-slider').mouseenter(function() {
		$(this).removeClass('autoslide');
	}).mouseleave(function() {
		$(this).addClass('autoslide');
	});
	
	setInterval(function() {
		$('.laptop-slider.ready.autoslide').slideOver(laptopWidth, 1);
	}, 5000);
	
});

$.fn.setInitialState = function(width, num) {
	
	var numSlides = $(this).children('.slider-interior').children('.slide').length;
	var slideSpace = numSlides / num;
	var slideWidth = width;
	var newLeft = -slideWidth;
	
	if (parseInt($(this).children('.slider-interior').css('height')) < 2) {
		var newHeight = $(this).children('.slider-interior').children('.slide').eq(0).height();
		$(this).children('.slider-interior').css('height', newHeight);
	}
	
	for (i=0; i<numSlides; i++) {
		newLeft = (newLeft + slideWidth);
		$(this).children('.slider-interior').children('.slide').eq(i).css('left', newLeft);
	}
	
	$(this).addClass('ready').addClass('autoslide');
}

$.fn.slideOver = function(width, num) {
	
	if ($(this).hasClass('ready')) {
	
		$(this).removeClass('ready');
		
		var numSlides = $(this).children('.slider-interior').children('.slide').length;
		var slideWidth = width;
		var maxLeft = (slideWidth * (numSlides - 1)).toString().concat('px');
		
		for (i=0; i<numSlides; i++) {
			currentLeft = parseInt($(this).children('.slider-interior').children('.slide').eq(i).css('left'));
			var newLeft = currentLeft - slideWidth;
			$(this).children('.slider-interior').children('.slide').eq(i).animate({
				'left': newLeft
			}, 450, function() {
				var offsetLeft = parseInt($(this).css('left'));
				if (offsetLeft < 0) {
					$(this).css('left', maxLeft);
				} else if (offsetLeft == 0) {
					var newHeight = $(this).height();
					$(this).parents('.slider-interior').animate({
						'height': newHeight
					}, 200)
				}
				$(this).parents('.slider-interior').parents('.slider').addClass('ready');
			});
		}
	}
}

$.fn.slideBack = function(width, num) {
	
	if ($(this).hasClass('ready')) {
		
		$(this).removeClass('ready');
		
		var numSlides = $(this).children('.slider-interior').children('.slide').length;
		var slideWidth = width;
		var maxLeft = (slideWidth * (numSlides - 1)).toString().concat('px');
		
		for (i=0; i<numSlides; i++) {
			
			currentLeft = parseInt($(this).children('.slider-interior').children('.slide').eq(i).css('left'));
			
			if (currentLeft == parseInt(maxLeft)) {
				$(this).children('.slider-interior').children('.slide').eq(i).css('left', -slideWidth);
				currentLeft = -slideWidth;
			}
			
			var newLeft = currentLeft + slideWidth;
			
			$(this).children('.slider-interior').children('.slide').eq(i).animate({
				'left': newLeft
			}, 450, function() {
				var offsetLeft = parseInt($(this).css('left'));
				if (offsetLeft == 0) {
					var newHeight = $(this).height();
					$(this).parents('.slider-interior').animate({
						'height': newHeight
					}, 200)
				}
				$(this).parents('.slider-interior').parents('.slider').addClass('ready');
			});
		}
	}
	
}