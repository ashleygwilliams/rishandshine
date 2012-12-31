//SECTION 
//EXERCISE 
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
Hold up! We're ignoring a pretty big part of hitSnooze()'s environment...

passTime(). 

Surprised? Confused? That's reasonable. If you have any experience with programming languages like Java or C++ you might be surprised to learn that functions are also variables in Javascript (didn't you think it was weird we declared them with 'var'?) When used as a variable, a function has the value of it's return statement. If doesn't return a value, it's value is set to 'null'. This duality is both the foundation of JS's power and the crux of its difficulty for many developers.

So now we add passTime() to our test environment. (acknowledge, really... it was always there!)

This is not the most auspicious development. Functions quickly complicate an environment. Functions are helpful because they can create a path that allows access parts of a program's code to access variables it couldn't otherwise access. This is troublesome though because that extension of access is directly proportional to the expansion of the environment of a piece of code. The more elements there are in an environment, the harder it is to keep track of how a piece of code behaves. 

Because the hitSnooze function's environment includes the function passTime, it must also necessarily include all the elements in passTime's environment. passTime interacts with the currentTime variable so we'll need to it along with the variables that hitSnooze directly interacts with. Uh-oh, passTime also interacts the the variable ringAlarm(). Two functions in the environment? Things are getting complicated again... 

In the last exercise we were unsure about how to treat the ringAlarm function in our test because it's behavior signals whether the code is working correctly or not. To reconcile our conflicting desires to keep our test environment small but also maintain the signalling functionality of ringAlarm(), let's replace the unruly function with a more managable, static variable like we did to compensate for the loss of functionality we accrued when we removed most of our program's elements in the previous exercise. 

A nice way to do this is to replace passTime's ringAlarm() function call with a statement that logs "Call ringAlarm()" to the console. The message that gets logged preserves the information re: the function that would be called in production, and by placing it in the same position as the functional call we also preserve the moment that function would be called in. We do all of this while eliminating unecessary elements and any further expansion of our test environment.
*/

/*EXERCISE INSTRUCTIONS
Replace passTime()'s ringAlarm() function calls with a statement that logs "Call ringAlarm()" to the console
Modify the console.log statement that recorded the values of hitSnooze's direct environment to include the passTime() function and it's environment
Then place that statement anywhere in your code. Again, feel free to place multiple copies of the statement into the code and  try to be strategic about the positions your choose. 
*/

/*EXERCISE HINT
Don't forget to modify the passTime() function to help simplfy the program's environment.

You also need to add it to your console statement... functions are also part of the environment!
*/

//INCLUDED CODE
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