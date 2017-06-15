$(document).ready(function() {
	
	// Start state
	
	var slideWidth = $('.laptop-slider .slide:first-child').css('width').split('px')[0];
	slideWidth = parseInt(slideWidth);
	var numSlides = $('.laptop-slider .slide').length;
	var maxLeft = slideWidth * (numSlides - 2);	
	for (i=1; i<=numSlides; i++) {
		var newLeft = slideWidth * (i - 1);
		newLeft = newLeft.toString().concat('px');
		$('.laptop-slider .slide:nth-child(' + i + ')').css('left', newLeft);
	}
	
	// Sliding Action
	
	setInterval(function() {
		slideOver();
	}, 3000);
	
	$('.laptop-slider .arrow-next').click(function(){
		slideOver();
	});
	
});

function slideOver() {
	
	var slideWidth = $('.laptop-slider .slide:first-child').css('width').split('px')[0];
	slideWidth = parseInt(slideWidth);
	var numSlides = $('.laptop-slider .slide').length;
	var maxLeft = slideWidth * (numSlides - 2);	
	
	for (i=1; i<=numSlides; i++) {
			var currentLeft = $('.laptop-slider .slide:nth-child(' + i + ')').css('left').split('px')[0];
			currentLeft = parseInt(currentLeft);
			var newLeft;
			if (currentLeft < 0) {
				newLeft = maxLeft;
			} else {
				newLeft = currentLeft - slideWidth;
			}
			newLeft = newLeft.toString().concat('px');
			$('.laptop-slider .slide:nth-child(' + i + ')').animate({
				'left': newLeft
			}, 450);
		}
}