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
  dancer = new Dancer(),
  kick = dancer.createKick({
    onKick: function ( mag ) {
      flashPoois();
      console.log(dancer.getTime());
    },
    threshold: 0.05,
  });


// Let's turn this kick on right away
kick.on();

dancer.between(0, 30, zoomPoois
).onceAt(30, function() {
  kick.on();
}).load({src : 'jaws.mp3'});
dancer.play();

