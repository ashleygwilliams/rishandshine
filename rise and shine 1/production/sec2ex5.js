//SECTION 
//EXERCISE 
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
We've isolated the relevant code and identified the critical variables. To complete our test, we need to identify the critical moments in our code and log the program's environment at those key locations.

Moments? Locations? Talk about space time continuum! Every line of our code has the potential to represents one more moments during a program's runtime. To make things more complicated, during runtime: the location of the code currently being processed can progress both linearly within the code document, or jump to completely separate areas (such as when a function is called), or event repeat itself over and over (like in a for or while loop). Believe it or not, Javascript is capable of processing code through even more complicated and mindbending spatial gymnastics, but we'll save those for another lesson.

What's important to understand here is that we can't just pay attention to the spatial location of a line of code, we need to consider *when* in time that code is processed during runtime. Luckily this program keeps its progression relatively simple, let's walk through the steps to understand how processing order maps on to the spatial position of the code statements.

All code, when it hasn't yet encountered a diversion, will be processed from top to bottom, left to right. So when we start our program, we start at the top and move down a line after the previous statement has been processed. When a function call is hit, the code jumps to the function definition, completes it, and then returns to the position directly past where it was called and returns to moving left to right and top to bottom. Similar to a function, when a loop keyword is hit (like while, for, or if) the code jumps to the associated conditional statement, and so long as it evaluates as true, processes the associated block of code in curly brackets. This can happen a million times or not even once.

To get acquainted with how this code is evaluated over time, write 4 console.log statements each logging a different number from 1-4 and place them in the code so that they print in descending order.

I can only check if the log events occured in the correct order, but challenge yourself! Try restricting your pool of positions to only lines within curly brackets. 

SUPER DUPER CHALLENGE: place the 1 and 4 console log statements within the same curly bracket block and still meet the requirement 
*/

/*EXERCISE INSTRUCTIONS
Insert a console.log statement 4 times in the code such that it will print the numbers 1-4 in sequence. Try to place the statements in the code *out of sequence* yet still have them print in sequence.
*/

/*EXERCISE HINT
Remember that the code is not processed directly from top to bottom.
When a function is called, the processing jumps to the section of code where that function is defined, and then jumps back to its previous location after completing that function.
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
		console.log("Call ringAlarm()");
        return true;
	} else {
		while (currentTime != snoozeTime) {
		currentTime += 10;
		}
		console.log("Call ringAlarm()");
        return true;
	}
    return false;
}

console.log(alarmTime, snoozeTime, snoozeCount, passTime(), currentTime);