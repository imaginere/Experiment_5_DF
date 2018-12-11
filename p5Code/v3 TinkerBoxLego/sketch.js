//Creation&Computation
//Frank Ferrao Storybook Theatre
//change the color based on the button
//uses JSON as the protocol
//requires p5.serialcontrol to be running
//and arduino running the SerialInput_1button_1ana sketch

var serial;       //variable to hold the serial port object
var sensor1;      //this variable will hold the value from "s1"
var sensor2;      //this variable will hold the value from "s2"
var animNum = 0;
var alreadyRegisteredClick = false;

var serialPortName = "/dev/cu.usbmodem1431";  //FOR PC it will be COMX on mac it will be something like "/dev/cu.usbmodemXXXX"
                              //Look at P5 Serial to see the available ports



function setup() {
  
createCanvas(1000,560);
  //Setting up the serial port
  serial = new p5.SerialPort();     //create the serial port object
  serial.open(serialPortName);      //open the serialport. determined 
  serial.on('open',ardCon);         //open the socket connection and execute the ardCon callback
  serial.on('data',dataReceived);   //when data is received execute the dataReceived function
  

}

function draw() {
  background(0, 0, 0);
  


switch(animNum) {
  case 0: 
    animation(carOne, width/2, height/2);
    carOne.goToFrame(sensor2);
    break;
  case 1: 
    animation(carTwo, width/2, height/2);
    carTwo.goToFrame(sensor2);
    break;
  case 2: 
    animation(carThree, width/2, height/2);
    carThree.goToFrame(sensor2);
    break;
}



  if (sensor1==0 && alreadyRegisteredClick == false)
  {
    if (animNum <=2){
      animNum++;
      alreadyRegisteredClick == true;
  
    }
    else if (sensor1==1){
      alreadyRegisteredClick == false;
    }
    else {
      animNum = 0;
    }

  }
  
  }





function dataReceived()   //this function is called every time data is received
{
  
var rawData = serial.readStringUntil('\r\n'); //read the incoming string until it sees a newline
    //console.log(rawData);                   //uncomment this line to see the incoming string in the console     
    if(rawData.length>1)                      //check that there is something in the string
    {                                         
      
      sensor1 = JSON.parse(rawData).s1;       //the parameter value .s1 must match the parameter name created within the arduino file
      sensor2 = JSON.parse(rawData).s2;

    }
}

function ardCon()
{
  console.log("connected to the arduino!! Listen UP");
}



