//Type-It Plugin//
$(document).ready(function() {
	$('.My-Photography-Portfolio').typeIt({
    speed: 120
	});
	$('.photos').hide()
	var waypoint = new Waypoint({
  		element: document.getElementById('.photos'),
  		handler: function(direction) {
  			$('.photos').fadeIn()
	})
});

