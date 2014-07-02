function flashPoois() {
    /*
    * Call this guy to flash Poois. :)
    */
    var pooisStyle = document.getElementById('louis2').style
    var displayed = pooisStyle.display;
    if (displayed == 'none' || displayed == '') {
        displayed = 'block';
    } else {
        displayed = 'none';
    }
    pooisStyle.display = displayed
}

var
  audio  = document.getElementsByTagName('audio')[0],
  dancer = new Dancer(),
  kick = dancer.createKick({
    onKick: function ( mag ) {
      console.log('Kick!');
    },
    offKick: function ( mag ) {
      console.log('no kick :(');
    },
    threshold: 0.05,
  });

// Let's turn this kick on right away
kick.on();

dancer.load({ src: 'jaws.mp3'})
dancer.play();
