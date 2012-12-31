//SECTION 
//EXERCISE 
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
The elements we eliminated took away our set functions, so we'll have to hardcode the value or currentTime and alarmTime. Simple take the value of the parameter for each set function and assign that value to each variable respectively. Though not advisable in production code, static variables are great for debugging. A static variable always has the same value, so it's beehvaior is extremely predictable and therefore easy to manage. We won't need to worry about them causing any new problems.

Now that we've isolated the the code relevant to our bug, we need to gather information about how this particular code accesses, stores, and modifies data during run time. In English, that means we are going to need more information about when and how the values of all variables a segment of code interacts with as the code runs. The set of variables and their values at a specific time can be collectively referred to as the program's environment. A program's behavior can be described as how it accesses, modifies, and responds to, its environment.

As a first step, we need to figure out what variables are a part of the hitSnooze function's environment. If we inspect the hitSnooze function, we'll see that it clearly interacts with 3 global variables: alarmTime, snoozeTime, snoozeCount.  

Write a statement that logs the value of each element of the hitSnooze function's environment and add it to any line in your code. Feel free to copy and paste multiple versions into different lines. I'd recommended trying to identify critical moments in the code that would provide the most interesting and relevant information to our bug. Our code is pretty short and we've identified everything in this text program to be a possible contributor to our bug, but see if you can come up with a strategic location or set of locations.
*/

/*EXERCISE INSTRUCTIONS
Construct a console.log statement that will record the values of our program's environment.
Insert it somewhere in the code, then run it.
*/

/*EXERCISE HINT
Make sure you log all the variables in the environment. Their values are all critical to identifying the source of our bug.
*/

//INCLUDED CODE
var currentTime;
var alarmTime;
var snoozeTime;
var snoozeCount = 0;

setCurrentTime(100);
setAlarmTime(830);
passTime();
hitSnooze();
passTime();
hitSnooze();
passTime();

/*function ringAlarm() {
	console.log("Beep beep beep beep!");
	displayCurrentTime();
};*/

var currentTime = 100;
var alarmTime = 830;
var snoozeTime;
var snoozeCount = 0;

passTime();
hitSnooze();
passTime();
hitSnooze();
passTime();

/*var ringAlarm = function() {
	console.log("Beep beep beep beep!");
	displayCurrentTime();
}*/

function hitSnooze() {
	snoozeTime = alarmTime + 10;
	snoozeCount++;
	passTime();
}

function passTime() {
	if (snoozeCount === 0) {
		while (currentTime != alarmTime) {
		currentTime += 10;
		}
		ringAlarm();
        return true;
	} else {
		while (currentTime != snoozeTime) {
		currentTime += 10;
		}
		ringAlarm();
        return true;
	}
    return false;
}

console.log(alarmTime, snoozeTime, snoozeCount);