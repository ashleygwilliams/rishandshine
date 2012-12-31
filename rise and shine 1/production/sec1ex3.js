//SECTION 
//EXERCISE 
//Creating functions that assign the value of variables

/*EDUCATIONAL TEXT
We're moving along! Our simulator can now store and display data- but it begs two related questions...
Where does this data come from? and Why does anyone care about it?

Before we delve into this question in reference to our clock, let's take a step back and consider what we're doing from a wide angle perspective.

Part of the fun of programming is harnessing a computer's crazy efficient and super powerful data processor to perform tasks too complicated and intricate to perform by hand with data sets so large that tasks would take multiple lifetimes to complete. Most computer users, however, will never take advantage of their machine's amazing capability to calculate and compute. If that's true- what's so great about a computer? The key is the 'P' in PC- users can interact with a computer on a personal level- they can store, retrieve, and manipulate data that they create and/or curate on their own.

So the questions, Where does the data come from?, and Why does anyone care about it? are two sides of the same coin! The value a user gives data is directly proprotional to the source of the data... Guess what a user's favorite data source is? Herself! 

Ok: back to our simulator. We need to give our simulator's users the same ability to interact that a clock affords its users. The main way a clock does this is to allow the user to set the current time and an alarm time. 



*/

/*EXERCISE INSTRUCTIONS
Create a new function called setCurrentTime
This function should take one parameter, time, and set the value of currentTime to the value of the parameter
Then, create another function called setAlarmTime to set the value of alarmTime
Create a global variable called alarmSet and initialize it to false
Update your setAlarmTime function to change this variable to true

To test your work, cut/paste the this testClock function into your code and then call it:

function testClock() {
	setEnvironment();
	featureTest();
	displayEnvironment();

	function featureTest() {
		console.log("NEW FEATURES RUN");
		console.log("setCurrentTime(100)");
		setCurrentTime(100);
		console.log("setAlarmTime(830)");
		setAlarmTime(830);
		console.log("-");
	}
	
	function setEnvironment() {
        console.log("ENVIRONMENT SETUP");
        console.log("none");
		console.log("-");
	}
	
	function displayEnvironment() {
		console.log("CURRENT ENVIRONMENT");
		console.log("The current time is: " + currentTime);
		console.log("The alarm is set for: " + alarmTime);
		console.log("alarmSet value: " + alarmSet);
		console.log("-");
	}
}

*/

/*EXERCISE HINT

*/

//INCLUDED CODE
var currentTime;
var alarmTime;

function displayCurrentTime() {
    console.log("The current time is: " + currentTime);
}

function displayAlarmTime() {
    console.log("The alarm is set for: " + alarmTime);
}

//SOLUTION
var currentTime;
var alarmTime;

function displayCurrentTime() {
    console.log("The current time is: " + currentTime);
}

function displayAlarmTime() {
    console.log("The alarm is set for: " + alarmTime);
}