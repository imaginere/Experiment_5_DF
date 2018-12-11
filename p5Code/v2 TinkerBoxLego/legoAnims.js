
var carOne = [];
var carTwo = [];
var carThree = [];
var cars = [];


function preload() {
  //
  //  There are two different ways to load a SpriteSheet
  //     1. Given width, height that will be used for every frame and the
  //        number of frames to cycle through. The sprite sheet must have a
  //        uniform grid with consistent rows and columns.
  //     2. Given an array of frame objects that define the position and
  //        dimensions of each frame.  This is Flexible because you can use
  //        sprite sheets that don't have uniform rows and columns.
  //
  //    Below demonstrates both methods:
  // Load the explode sprite sheet using frame width, height and number of frames
  
  carOne = loadAnimation('images/carOne/carOne0.png', 'images/carOne/carOne16.png');
  carTwo = loadAnimation('images/carTwo/carTwo01.png', 'images/carTwo/carTwo28.png');
  carThree = loadAnimation('images/carThree/carThree01.png', 'images/carThree/carThree29.png');

  carOne.playing = false;
  carTwo.playing = false;
  carThree.playing = false;
  
}

