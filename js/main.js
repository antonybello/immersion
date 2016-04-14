$(document).ready(function() {

  /* *********** */
  /*   RIPPLES   */
  /* *********** */

  try {
    $('body').ripples({
      resolution: 512,
      dropRadius: 40, //px
      perturbance: 0.04
    });
  } catch (e) {
    $('.error').show().text(e);
  }

  setInterval(function() {
    var $el = $('body');
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 40;
    var strength = 0.04 + Math.random() * 0.04;
    $el.ripples('drop', x, y, dropRadius, strength);
  }, 1000);

  /* *********** */
  /*   SOUNDS    */
  /* *********** */

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
      this.isMuted = false;
    }
  };


  /* *********** */
  /*    EVENTS   */
  /* *********** */
  var first = new Sound('audio/part1.wav');
  var second = new Sound('audio/part2.mp3');
  var third = new Sound('audio/part3.mp3');
  var fourth = new Sound('audio/part4.mp3');
  var water = new Sound('audio/water.wav');
	water.sound.volume(0.2);

	var loadCount= 0;

	first.sound.on('load', function() {
			console.log("first loaded");
			loadCount++;
	});

	second.sound.on('load', function() {
			console.log("second loaded");
			loadCount++;
	});

	third.sound.on('load', function() {
		console.log("third loaded");
			loadCount++;
	});

	fourth.sound.on('load', function() {
		console.log("fourth loaded");
		loadCount++;
	});

var startAll = function() {
  if (loadCount == 4) {
    console.log("starting");
    first.startPlaying();
    second.startPlaying();
    third.startPlaying();
    fourth.startPlaying();
    clearInterval(interval);
  }
};

var interval = setInterval(startAll, 1000);




  $('#1').click(function() {
    if (first.isMuted) {
      first.unmute();
      $('#1 img').addClass('inverted', 1000, 'easeInOutCubic');
    } else {
      first.mute();
      $('#1 img').removeClass('inverted', 1000, 'easeInOutCubic');
    }

  });

  $('#2').click(function() {
    if (second.isMuted) {
      second.unmute();
      $('#2 img').addClass('inverted', 1000, 'easeInOutCubic');
    } else {
      second.mute();
      $('#2 img').removeClass('inverted', 1000, 'easeInOutCubic');
    }
  });

  $('#3').click(function() {
    if (third.isMuted) {
      third.unmute();
      $('#3 img').addClass('inverted', 1000, 'easeInOutCubic');

    } else {
      third.mute();
      $('#3 img').removeClass('inverted', 1000, 'easeInOutCubic');
    }
  });

  $('#4').click(function() {
    if (fourth.isMuted) {
      fourth.unmute();
      $('#4 img').addClass('inverted', 1000, 'easeInOutCubic');
    } else {
      fourth.mute();
      $('#4 img').removeClass('inverted', 1000, 'easeInOutCubic');
    }
  });


  function requestFullScreen(element) {
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;
    if (requestMethod) {
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }

  $(document).on('click', 'body *', function() {
    var elem = document.body;
    requestFullScreen(elem);
  });


});
