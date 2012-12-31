//SECTION 
//EXERCISE 
//

/*EDUCATIONAL TEXT
Our simulator is really starting to act like a clock now! 

Remember from exercise 1 that the goal of a simulator is provide the same functionality as the object it is simulating. Is there anything a clock can do that our simluator can't?

The currentTime is set to 100, or 1:00am.


*/

/*EXERCISE INSTRUCTIONS
Create a function called ringAlarm that prints "Beep beep beep beep!" to the console.

To test your work, cut/paste the this simulateClock function into your code and then call it:

function testClock() {
	setEnvironment();
	helperCode();
	displayEnvironment();
	featureTest();
	displayEnvironment();
	
	function featureTest() {
		console.log("NEW FEATURES RUN");
		console.log("ringAlarm()");
		ringAlarm();
	}
	
	function helperCode() {
		console.log("HELPER CODE");
		console.log("while loop - simulates time passing until currentTime=alarmTime");
		while (currentTime != alarmTime) {
			currentTime += 10;
	        console.log(currentTime);
		}
	}
	
	function setEnvironment() {
        console.log("ENVIRONMENT SETUP");
        console.log("currentTime=100");
		currentTime=100;
        console.log("alarmTime=830");
		alarmTime=830;
		console.log("alarmSet=true");
		alarmSet=true;
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
var alarmSet = false;

function displayCurrentTime() {
    console.log("The current time is: " + currentTime);
}

function displayAlarmTime() {
    console.log("The alarm is set for: " + alarmTime);
}

function setCurrentTime(time) {
    currentTime = time;
}

function setAlarmTime(time) {
	alarmTime = time;
	alarmSet = true;
}