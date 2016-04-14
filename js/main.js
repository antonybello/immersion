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
    this.sound = new Howl({
      urls: [url],
      loop: true,
      volume: 0.0
    });
    this.sound.play();
    this.isMuted = true;
  };


  Sound.prototype.mute = function() {
    if (!this.isMuted) {
			this.sound.volume(0.0);
      this.isMuted = true;
    }
  };

  Sound.prototype.unmute = function() {
    if (this.isMuted) {
      this.sound.volume(0.8);
      this.isPlaying = false;
    }
  };

  var first = new Sound('audio/part1.wav');
  var second = new Sound('audio/part2.wav');
  var third = new Sound('audio/part3.wav');
  var fourth = new Sound('audio/part4.wav');


  $('#1').click(function() {
    first.unmute();
  });

  $('#2').click(function() {
		second.unmute();
  });

  $('#3').click(function() {
    third.unmute();
  });

  $('#4').click(function() {
    fourth.unmute();
  });

});
