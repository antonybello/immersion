$(document).ready(function() {
	try {
		$('body').ripples({
			resolution: 512,
			dropRadius: 40, //px
			perturbance: 0.04
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}
	// Automatic drops
	setInterval(function() {
		var $el = $('body');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 40;
		var strength = 0.04 + Math.random() * 0.04;
		$el.ripples('drop', x, y, dropRadius, strength);
	}, 1000);

	var part1 = 'audio/part1.wav',
			part2 = 'audio/part2.wav',
			part3 = 'audio/part3.wav',
			part4 = 'audio/part4.wav';

	var sound = new Howl({
	  urls: [part1,part2,part3,part4],
		// autoplay: true,
	  volume: 0.5
	});

	$('1').click(function(){
			sound.play(part1);
	});


});
