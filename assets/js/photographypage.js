//Type-It Plugin//
$(document).ready(function() {
	$('.My-Photography-Portfolio').typeIt({
    	speed: 120,
    	autostart: false,
    	startDelay: 6000,
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

	$('.photos').waypoint(function(direction) {
    	if (direction =='down') {
            $(".photos").addClass("animated fadeInLeft").fadeIn("slow");
        }
        else {
            $(".photos").removeClass("animated fadeOutRight").fadeOut("slow");        
        }
		}, {
    offset: 900
    });

    $('.photos-2').waypoint(function(direction) {
    	if (direction =='down') {
            $(".photos-2").addClass("animated fadeInLeft").fadeIn("slow");
        }
        else {
            $(".photos-2").removeClass("animated fadeOurRight").fadeOut("slow");        
        }
		}, {
    offset: 755
    });

     $('.photos-3').waypoint(function(direction) {
    	if (direction =='down') {
            $(".photos-3").addClass("animated fadeInLeft").fadeIn("slow");
        }
        else {
            $(".photos-3").removeClass("animated fadeOutRight").fadeIn("slow");        
        }
		}, {
    offset: 755
    });
});