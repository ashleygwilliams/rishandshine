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
Then create a while loop that checks if the current time matches the alarm time. If the 2 times match call your ringAlarm function and display the current time; otherwise have 10min pass.
Set the alarm to 830 and run your program

*/

/*EXERCISE HINT

*/

//INCLUDED CODE
var currentTime = 100;
var alarmTime ;

var displayCurrentTime = function() {
	console.log("The current time is: " + currentTime);
}

var displayAlarmTime = function() {
	console.log("The alarm is set for: " + alarmTime);
}

var setCurrentTime = function() {
	var userInput = prompt("Set the current time:");
	currentTime = userInput;
}

var setAlarmTime = function() {
	var userInput = prompt("Set the alarm time:");
	alarmTime = userInput;
}