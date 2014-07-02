// To enable flash fallback, specify the paths for the flashSWF and flashJS
Dancer.setOptions({
  flashJS  : '../submodules/dancer.js/lib/soundmanager2.js',
  flashSWF : '../submodules/dancer.js/lib/soundmanager2.swf'
});

var
  dancer = new Dancer(),
  kick = dancer.createKick({
    threshhold: 0.01,
    onKick: function ( mag ) {
      console.log('Kick!');
    },
 });

// Let's turn this kick on right away
kick.on();

dancer.load({ src: 'jaws.mp3'})
dancer.play();
