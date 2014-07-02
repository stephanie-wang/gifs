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
