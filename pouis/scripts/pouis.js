function flashPoois() {
    var pooisStyle = document.getElementById('louis2').style
    var displayed = pooisStyle.display;
    if (displayed == 'none' || displayed == '') {
        displayed = 'block';
    } else {
        displayed = 'none';
    }
    pooisStyle.display = displayed
}

 // To enable flash fallback, specify the paths for the flashSWF and flashJS
Dancer.setOptions({
  flashJS  : '../submodules/dancer.js/lib/soundmanager2.js',
  flashSWF : '../submodules/dancer.js/lib/soundmanager2.swf'
});

var
  audio  = document.getElementsByTagName('audio')[0],
  dancer = new Dancer(),
  kick = dancer.createKick({
    onKick: function ( mag ) {
      console.log('Kick!');
    },
    offKick: function ( mag ) {
      console.log('no kick :(');
    }
  });

// Let's turn this kick on right away
kick.on();

dancer.load({ src: 'jaws.mp4'})
dancer.play();
