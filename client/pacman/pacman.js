Template.pacman.viewmodel({
  signal: ['keyboard', 'mouse'],
  x: 0,
  y: 0,
  autorun: function() {
    // Depend on the keydown stream
    // (acquired from the 'keyboard' signal)
    var key = this.keydown().which;

    // Get the non reactive values,
    // otherwise the autorun will depend on values
    // that it changes further down (causing an infinite loop)
    var x = this.x.value ;
    var y = this.y.value ;

    if (key === 37) { // left
      this.x( x - 10 );
    } else if (key === 39) { // right
      this.x( x + 10 );
    } else if (key === 38) { // up
      this.y( y - 10 );
    } else if (key === 40) { // down
      this.y( y + 10 );
    }
  }
});