$(document).ready(function() {
  try {
    $('body').ripples({
      resolution: 512,
      dropRadius: 40, //px
      perturbance: 0.04
    });
  } catch (e) {
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

  var Sound = function(url) {
    this.url = url;
    this.isPlaying = false;
    this.sound = new Howl({
      urls: [url],
			loop: true,
      volume: 0.8
    });
  };

  Sound.prototype.playSound = function() {
    if (!this.isPlaying) {
      this.sound.play();
      this.isPlaying = true;
    }
  };

  Sound.prototype.stopPlaying = function() {
    if (this.isPlaying) {
      this.sound.pause();
      this.isPlaying = false;
    }
  };

  var first = new Sound('audio/part1.wav');
  var second = new Sound('audio/part2.wav');
  var third = new Sound('audio/part3.wav');
  var fourth = new Sound('audio/part4.wav');

	first.playSound();

	$('#1').click(function() {
		first.playSound();
	});

	$('#2').click(function() {
		second.playSound();
	});

	$('#3').click(function() {
	third.playSound();
});

	$('#4').click(function() {
		fourth.playSound();
	});

});
