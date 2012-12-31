//SECTION 
//EXERCISE 
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
You've heard the saying "You snooze you lose!", right?

Well it seems that's the fate of the newbie programmer who wrote the hitSnooze function in the code editor! The users of his clock program report that the snooze function only works once! As you can probably imagine, this made his users wildly upset.

Looks like we've found our first bug. To define a bug, it's best to follow this structure:

1. What the user did
2. What the user expected
3. What actually happened

So our bug is thus: The user hit the snooze button twice. The user expected that the alarm would go off at 8:50. The alarm didn't go off!

Let's try and help another new coder out by debugging his code for him. The first step in debugging is to recreate the problem. We'll need to set up some test code to simulate the workflow of a user who experiences this bug. 

The code is mostly written for you- except for the crucial step that his users report causes the bug: the second snooze! Click Run to see the current code work and then add a second call to the hitSnooze method. Run the program again to see what happens! 


*/

/*EXERCISE INSTRUCTIONS
Run the code in the console and hit snooze only once
Then run the code again- but this time hit snooze twice to recreate the users' problem
Pay attention to what is logged in the console
*/

/*EXERCISE HINT
Recall how to call a function:
functionName(parameter1, parameter2..);

Don't forget to call hitSnooze() a second time to recreate the user's problem!
*/

//INCLUDED CODE
var currentTime;
var alarmTime;
var alarmSet = true;
var snoozeHit = false;

setCurrentTime(100);
setAlarmTime(830);


var displayCurrentTime = function() {
    console.log("The current time is: " + currentTime);
};

var displayAlarmTime = function() {
	console.log("The alarm is set for: " + alarmTime);
};

var setCurrentTime = function() {
	var userInput = prompt("Set the current time:");
	currentTime = userInput;
};

var setAlarmTime = function() {
	var userInput = prompt("Set the alarm time:");
	alarmTime = userInput;
	alarmSet = true;
};

var ringAlarm = function() {
	console.log("Beep beep beep beep!");
};

var hitSnooze = function() {
	alarmTime = currentTime + 10;
	snoozeHit = true;
};

var passTime = function(){
	while (currentTime != alarmTime) {
		currentTime += 10;
		console.log(currentTime);
	}
	ringAlarm();
};