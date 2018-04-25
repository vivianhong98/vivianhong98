$(document).ready(function() {
	$('.sub-title1').typeIt({
    	speed: 100
	});

	var smokyBG = $('#wavybg-wrapper').waterpipe({
    gradientStart: '#EBC1C1',
    gradientEnd: '#CEE5F2',
    smokeOpacity: 0.1,
    numCircles: 1,
    maxMaxRad: 'auto',
    minMaxRad: 'auto',
    minRadFactor: 0,
    iterations: 8,
    drawsPerFrame: 10,
    lineWidth: 2,
    speed: 2,
    bgColorInner: "#ffffff",
    bgColorOuter: "#ffffff",
	});
	
/*JQUERY FUNCTION #5*/
	$('.cover-photo').hover(function() {
		$('.cover-photo').addClass ("animated bounce")
	});
/*JQUERY FUNCTION #6*/
	$('.sub-title2').hide()

});