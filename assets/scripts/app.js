// Copyright 2014-2015 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

$(document).ready(function() {
	
	$('.highlights').sizeIcons();
	
	// Expand Pricing Page on Mobile
	
	$('button#toggle-outbound').click(function() {
		$('#outbound-info').slideToggle();
	});
	
	$('button#toggle-inbound').click(function() {
		$('#inbound-info').slideToggle();
	});
	
	$('button#toggle-blended').click(function() {
		$('#blended-info').slideToggle();
	});
	
});

$(window).load(function() {
	if ($('#buorg').length) {
		$('#buorgul, #buorgig').wrapAll('<div class="btn-container"></div>');
		$('#buorg > div').append('<a href="https://login.five9.com" class="btn btn-login">Five9 Login</a>');
		var buorgHeight = $('#buorg').height() + 40;
		if (buorgHeight) {
			$('html').css('margin-top', buorgHeight);
		}
	}
});

$.fn.sizeIcons = function() {
	var numIcons = $(this).find('.icon').length;
	var height = new Array();
	for (i=0; i<numIcons; i++) {
		height[i] = $(this).find('.icon:eq(' + i + ')').height();
	}
	var maxHeight = Math.max.apply(null, height);
	for (i=0; i<numIcons; i++) {
		var diff = maxHeight - height[i];
		var addPadding = ( diff + 10 ) / 2;
		addPadding = addPadding.toString().concat('px 0');
		$(this).find('.icon:eq(' + i + ')').css('padding', addPadding);
		$(this).find('.icon:eq(' + i + ')').attr('data-sized', 'true');
	}
}