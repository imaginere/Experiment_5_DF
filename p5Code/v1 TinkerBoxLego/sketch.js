//Creation&Computation
//Frank Ferrao Storybook Theatre
//change the color based on the button
//uses JSON as the protocol
//requires p5.serialcontrol to be running
//and arduino running the SerialInput_1button_1ana sketch

var serial;       //variable to hold the serial port object
var sensor1;      //this variable will hold the value from "s1"
var sensor2;      //this variable will hold the value from "s2"

var alreadyRegisteredClick = false;

var serialPortName = "/dev/cu.usbmodem1431";  //FOR PC it will be COMX on mac it will be something like "/dev/cu.usbmodemXXXX"
                              //Look at P5 Serial to see the available ports



function setup() {
  
createCanvas(1000,560);
  //Setting up the serial port
  // serial = new p5.SerialPort();     //create the serial port object
  // serial.open(serialPortName);      //open the serialport. determined 
  // serial.on('open',ardCon);         //open the socket connection and execute the ardCon callback
  // serial.on('data',dataReceived);   //when data is received execute the dataReceived function
  

}

function draw() {
  background(255, 255, 255);
  animation(carTwo, width/2, height/2);

  if(mouseIsPressed) 
    carTwo.nextFrame();
  else
    carTwo.stop();
  
  
 
/*    alreadyRegisteredClick = falif (sensor1==0)
  {
  x = x - 5;
  if (x < (-width)) {
   x = 0;
  }
  image(bgs[0],x/0.8,235);
  image(bgs[0],(width/0.8)+(x/0.8),235);
  image(bgs[2],x,45);
  image(bgs[2],width+x,45);
  // image(bgs[1],x,120);
  // image(bgs[1],width+x,120);
  image(bgs[4],x,120);
  image(bgs[4],width+x,120);
  }
    else
    {
  image(bgs[0],x/0.8,235);
  image(bgs[0],(width/0.8)+(x/0.8),235);
  image(bgs[2],x,45);
  image(bgs[2],width+x,45);
  image(bgs[1],x,120);
  image(bgs[1],width+x,120); 
    }

//First Char Dragon function StageChar(char, tempS, tempY)
  
  char1 = StageChar(charA[char1Index], sensor2, 239);
  char2 = StageChar(charB[char2Index], sensor3, 140);

  // Mouse Click
  if (mouseIsPressed == true) {
    if (!alreadyRegisteredClick) {
      char1.clicker(); 
      if (mouseX < width/2 & char1Index < charA.length - 1) {
        char1Index += 1;
      } 
      else if (mouseX > width/2 & char2Index < charB.length - 1) {
        char2Index += 1;
        }
      else {
        char2Index = 0;
        char1Index = 0;
        }
      alreadyRegisteredClick = true;
    }
    
  } else {se;
  }

  // overlay yellow


  image(imgOvr,-6,420);

  // used integer to get a rounded value and divided that to get a decimal. Brilliant!!
    volume = int(map(sensor4, 90, 1023,0, 10));
    song.setVolume(volume/10);
 
*/
  }





// function dataReceived()   //this function is called every time data is received
// {
  
// var rawData = serial.readStringUntil('\r\n'); //read the incoming string until it sees a newline
//     //console.log(rawData);                   //uncomment this line to see the incoming string in the console     
//     if(rawData.length>1)                      //check that there is something in the string
//     {                                         
      
//       sensor1 = JSON.parse(rawData).s1;       //the parameter value .s1 must match the parameter name created within the arduino file
//       sensor2 = JSON.parse(rawData).s2;

//     }
// }

// function ardCon()
// {
//   console.log("connected to the arduino!! Listen UP");
// }



