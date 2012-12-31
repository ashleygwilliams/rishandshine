//SECTION 
//EXERCISE 
//Review functions by creating

/*EDUCATIONAL TEXT
So now our clock simulator can store 2 values: the current time and an alarm time ... But a clock isn't just a storage device! It can also modify that data and perform actions based on that data.

Let's consider our first variable: currentTime. What does a clock do with the data stored in this variable?

It displays it! Displaying is an action, so our simulator should have a function that mimics this. The code window has the beginnings of a function called displayCurrentTime. Complete the body of the function so that it prints the value of the variable currentTime to the console.

Having written the function to display one of the variables, we should consider whether our other variables could use a similar function. Does a clock also need to display the alarm time? Definitely! Write a method called displayAlarmTime that performs the same function as displayCurrentTime but uses the alarmTime variable instead of the currentTime variable.

You might be thinking: Aren't display functions redundant and unecessary? In the last exercise, you logged the value of your variables to the console by simply passing their name to console.log() - why write a function? 

Our lesson code is simple: our data isn't dynamic or complex, we aren't adding any style to the data's presentation, and the place we want to display it (the console) has easily predictable behavior. This is a wonderful set of circumstances, and sadly a super rare occurence in the world of production code. The display of data is actually one of the most complicated aspects of a program. No matter what type of program you are writing, you will almost always have to write functions to display data- so its good to get into the practice of it now!
*/

/*EXERCISE INSTRUCTIONS
Complete the displayCurrentTime function
Add a function called displayAlarmTime

function testClock() {
    setEnvironment();
	featureTest();
	displayEnvironment();
	
	function featureTest() {
        console.log("NEW FEATURES RUN");
        console.log("displayCurrentTime()");
		displayCurrentTime();
        console.log("displayAlarmTime()");
		displayAlarmTime();
        console.log("-");
	}
	
	function setEnvironment() {
        console.log("ENVIRONMENT SETUP");
        console.log("currentTime=100");
		currentTime=100;
        console.log("alarmTime=830");
		alarmTime=830;
        console.log("-");
	}
	
	function displayEnvironment() {
        console.log("CURRENT ENVIRONMENT");
		console.log("The current time is: " + currentTime);
		console.log("The alarm is set for: " + alarmTime);
        console.log("-");
	}
}

*/

/*EXERCISE HINT

*/

//INCLUDED CODE
var currentTime;
var alarmTime;

//Complete this function
function displayCurrentTime() {
	console.log("The current time is: ");
}

//Add a function to display the alarm time with this tag
console.log("The alarm is set for: ");

//SOLUTION
var currentTime;
var alarmTime;

function displayCurrentTime() {
	console.log("The current time is: " + currentTime);
}

function displayAlarmTime() {
  console.log("The alarm is set for: " + alarmTime);
}
