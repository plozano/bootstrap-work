$(document).ready(function() {
	
	// Desktop header
	
	$('.nav-level-2-container').on('mouseenter', function() {
		$(this).siblings('a').addClass('hover');
	});
	$('.nav-level-2-container').on('mouseleave', function() {
		$(this).siblings('a').removeClass('hover');
	});
	
	// Initialize variables
	
	var navName;
	var newName;
	var parent;
	
	// Open contact thing
	
	$('#mobile-contact-item').on('click', function() {
		$('.contact-container').slideToggle();
	});
	
	// Open menu
	
	$('#mobile-menu-item').on('click', function() {
		navName = 'all-categories';
		parent = null;
		$('.main-nav-mobile, #all-categories').toggle( { direction: 'left' }, 'fast');
		$('.modal-darken').show();
	});
	
	$('.modal-darken, a.close-nav').on('click', function() {
		$('.main-nav-mobile').toggle( { direction: 'right' }, 'fast' );
		$('.main-nav-mobile > div').hide();
		$('.modal-darken').hide();
	});
	
	// Resize mobile menu links to accommodate arrows if the link has a child nav
	
	resizeLinks();
	
	$(window).resize(function() {
		resizeLinks();
	});
	
	// Show child nav when arrow is clicked
	
	$('.main-nav-mobile > div a.next-menu').on('click', function() {
		parent = navName;
		var newName = $(this).prev('a').attr('href').split('/');
		newName = newName[newName.length - 1];
		$('#' + navName).slideToggle(200, function() {
			$('#' + newName).slideToggle(200, function() {
				navName = newName;
				$('#' + navName).resizeHeader();
			});
		});
	});
	
	// Go back to parent nav when back arrow is clicked
	
	$('.main-nav-mobile > div a.last-menu').on('click', function() {
		var newName = parent;
		parent = 'all-categories';
		$('#' + navName).slideToggle(200, function() {
			$('#' + newName).slideToggle(200);
			navName = newName;
		});
	});
	
});

function resizeLinks() {
	var newWidth = $('.main-nav-mobile').width() - 50;
	newWidth = newWidth.toString().concat('px');
	$('.main-nav-mobile > div > a.has-children').css('width', newWidth);
	$('.main-nav-mobile > div > a.next-menu').css('margin-left', newWidth);
}

$.fn.resizeHeader = function() {
	var hasParent = $(this).hasClass('nav-level-2') || $(this).hasClass('nav-level-3');
	if (hasParent) {
		var headerHeight = $(this).children('h3').height();
		var headerPaddingTop = $(this).children('h3').css('padding-top');
		var verticalSpace = '-'.concat(headerPaddingTop);
		console.log(verticalSpace);
		headerPaddingTop = headerPaddingTop.split('p')[0];
		headerPaddingTop = parseInt(headerPaddingTop);
		verticalSpaceSpan = headerPaddingTop/2;
		verticalSpaceSpan = verticalSpaceSpan.toString().concat('px');
		var headerPaddingBottom = $(this).children('h3').css('padding-bottom');
		headerPaddingBottom = headerPaddingBottom.split('p')[0];
		headerPaddingBottom = parseInt(headerPaddingBottom);
		var totalHeaderHeight = headerHeight + headerPaddingTop + headerPaddingBottom;
		totalHeaderHeight = totalHeaderHeight.toString().concat('px');
		if (totalHeaderHeight != '51px') {
			$(this).children('a.last-menu').css({
				'height': totalHeaderHeight,
				'top' : verticalSpace
			});
			$(this).children('a.last-menu').children('span').css('margin-top', verticalSpaceSpan);
			$(this).children('a.menu-item:eq(0)').css('margin-top', verticalSpace);
		}
	}
}