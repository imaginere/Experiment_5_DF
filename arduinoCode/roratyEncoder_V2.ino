/*
 * Creation & Computation - Digital Futures, OCAD University
 * Built on Code given by : Kate Hartman / Nick Puckett
 * 
 * New Version Edited by Frank Ferrao
 * Send 2 Vales to the p5
 * 1 button and 1 Rotary Encoder
 * Added Refrence Code from: http://www.multiwingspan.co.uk/arduino.php?page=rotary2
 */

#include <ArduinoJson.h>
//*****BE SURE TO INSTALL VERSION 5.13.3 OF THE LIBRARY IT INSTALL V6BETA BY DEFAULT 
// Setting up the counter
int reading = 0;
int lowest = 1;
int highest = 29;
int changeamnt = 1;

// Timing for polling the encoder
unsigned long currentTime;
unsigned long lastTime;

int buttonPin = 4; // this is for the button
// Pin definitions
const int pinA = 7;
const int pinB = 13;

// Storing the readings

boolean encA;
boolean encB;
boolean lastA = false;

unsigned long lastSend;
int sendRate = 50;




void setup() {

  pinMode(buttonPin,INPUT_PULLUP); // for button
  // set the two pins as inputs with internal pullups
  pinMode(pinA, INPUT_PULLUP);
  pinMode(pinB, INPUT_PULLUP);
  // Set up the timing of the polling
  currentTime = millis();
  lastTime = currentTime; 
  // Start the serial monitor for debugging
  Serial.begin(9600);
} 

void loop()

{
  int buttonValue = digitalRead(buttonPin);               //read the button


  // This below is for the Rotary Encoder 
  // Read elapsed time
  currentTime = millis(); 
  // Check if it's time to read
  if(currentTime >= (lastTime + 5))
  {
    // read the two pins
    encA = digitalRead(pinA);
    encB = digitalRead(pinB);
    // check if A has gone from high to low
    if ((!encA) && (lastA))
    {
      // check if B is high 
      if (encB)
      {
        // clockwise
        if (reading + changeamnt <= highest)
        {
          reading = reading + changeamnt; 
        }
      }
      else
      {
        // anti-clockwise
        if (reading - changeamnt >= lowest)
        {
          reading = reading - changeamnt; 
        }
      }
      // Output reading for debugging
      
    }
    // store reading of A and millis for next loop
    lastA = encA;
    lastTime = currentTime;

    // Json Code

    if(millis()-lastSend>=sendRate)                           //use a timer to stablize the data send
      {
////////////////////////////////////////////////////////////send the values to P5 over serial
         DynamicJsonBuffer messageBuffer(200);                   //create the Buffer for the JSON object        
        JsonObject& p5Send = messageBuffer.createObject();      //create a JsonObject variable in that buffer       
  
       p5Send["s1"]=buttonValue;                               //assign buttonValue to the key "s1" in the json object
       p5Send["s2"]=reading;                                  //assign anaValue to the key "s2" in the json object 
                           
  
      p5Send.printTo(Serial);                                 //print JSON object as a string
      Serial.println();                                       //print a \n character to the serial port to distinguish between objects

lastSend = millis();
} 

  }

}
