$(document).ready(function() {
	
	$('.main-nav .nav-level-1 > li > a.has-children').mouseenter(function() {
		if (!Modernizr.flexbox || !Modernizr.flexwrap) {
			if (!($(this).siblings('.nav-level-2-container').hasClass('flexed'))) {
				$(this).siblings('.nav-level-2-container').flexIt();
			}
		}
	});
});

$.fn.flexIt = function() {
	if ($(this).hasClass('products')) {
		var containerHeight = $(this).children('.nav-level-2').height();
		var numBlocks = $(this).children('.nav-level-2').children('li').length;
		for (i=0; i<numBlocks; i++) {
			var blockHeight = $(this).children('.nav-level-2').children('li').eq(i).height();
			var blockOffsetY = $(this).children('.nav-level-2').children('li').eq(i).position().top;
			var lowestPoint = blockHeight + blockOffsetY;
			if (lowestPoint <= containerHeight) {
				$(this).children('.nav-level-2').children('li').eq(i).addClass('position-1');
			} else if ((lowestPoint > containerHeight) && (lowestPoint <= (2 * containerHeight))) {
				$(this).children('.nav-level-2').children('li').eq(i).addClass('position-2');
			} else if (lowestPoint > (2 * containerHeight)) {
				$(this).children('.nav-level-2').children('li').eq(i).addClass('position-3');
			}
		}
		$(this).children('.nav-level-2').children('li.position-1').wrapAll('<div class="nav-col nav-col-1"></div>');
		$(this).children('.nav-level-2').children('.nav-col-1').css('left', '0px');
		var width1 = $(this).children('.nav-level-2').children('.nav-col-1').width();
		$(this).children('.nav-level-2').children('li.position-2').wrapAll('<div class="nav-col nav-col-2"></div>');
		$(this).children('.nav-level-2').children('.nav-col-2').css('left', width1 + 30);
		var width2 = $(this).children('.nav-level-2').children('.nav-col-2').width();
		$(this).children('.nav-level-2').children('li.position-3').wrapAll('<div class="nav-col nav-col-3"></div>');
		$(this).children('.nav-level-2').children('.nav-col-3').css('left', width1 + width2 + 30);
	} else if (($(this).hasClass('solutions')) || ($(this).hasClass('partners')) || ($(this).hasClass('about-us'))) {
		var containerHeight = $(this).children('.nav-level-2').height();
		var numBlocks = $(this).children('.nav-level-2').children('li').length;
		for (i=0; i<numBlocks; i++) {
			var blockHeight = $(this).children('.nav-level-2').children('li').eq(i).height();
			var blockOffset = $(this).children('.nav-level-2').children('li').eq(i).position().top;
			var lowestPoint = blockHeight + blockOffset;
			if (lowestPoint <= containerHeight) {
				$(this).children('.nav-level-2').children('li').eq(i).addClass('position-1');
			} else if (lowestPoint > containerHeight) {
				$(this).children('.nav-level-2').children('li').eq(i).addClass('position-2');
			}
		}
		$(this).children('.nav-level-2').children('li.position-1').wrapAll('<div class="nav-col nav-col-1"></div>');
		$(this).children('.nav-level-2').children('.nav-col-1').css('left', '0px');
		var width1 = $(this).children('.nav-level-2').children('.nav-col-1').width();
		$(this).children('.nav-level-2').children('li.position-2').wrapAll('<div class="nav-col nav-col-2"></div>');
		$(this).children('.nav-level-2').children('.nav-col-2').css('left', width1 + 30);
	}
	$(this).addClass('flexed');
}