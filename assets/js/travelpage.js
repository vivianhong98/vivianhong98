$(document).ready(function() {
	$('.My-Travel-Diary').typeIt({
    	speed: 120
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
/*JQUERY FUNCTION #1, #2, #3, and #4*/
	$('.seattle').waypoint(function(direction) {
    	if (direction =='down') {
            $(".seattle").addClass("animated fadeInLeft").fadeIn("slow");
        }
        else {
            $(".seattle").removeClass("animated fadeOutRight").fadeOut("slow");        
        }
		}, {
    offset: 755
    });

    $('.guatemala').waypoint(function(direction) {
    	if (direction =='down') {
            $(".guatemala").addClass("animated fadeInLeft").fadeIn("slow");
        }
        else {
            $(".guatemala").removeClass("animated fadeOurRight").fadeOut("slow");        
        }
		}, {
    offset: 755
    });
     $('.boston').waypoint(function(direction) {
    	if (direction =='down') {
            $(".boston").addClass("animated fadeInLeft").fadeIn("slow");
        }
        else {
            $(".boston").removeClass("animated fadeOutLeft").fadeIn("slow");        
        }
		}, {
    offset: 755
    });

});


