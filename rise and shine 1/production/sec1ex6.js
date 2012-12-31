//SECTION 
//EXERCISE 
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
So now we know that the clock *knows* when to go off after the snooze button is hit... and by that we mean we've created a function that will store the appropriate value in a variable. But- run the code in the console and count how many times the alarm clock goes off...

Just once! That's not going to work out for our clock users at all. 

The console contains a simplified version of our code- programmers do this often to help them focus on just the specific part of the code that needs changing. Most of the functions have been removed, and anywhere those functions are called in the remain code has been replaced with console.log statements that let us know that a function was supposed to be called, e.g. "functionName() is called".

If we look at the code snippet on lines ##-## where we write the code that tests our functions by calling them in a sequence that simulates a clock user's behavior, we can see exactly why this happens. We only call ringAlarm() once- right after the while loop exits (signalling that the current time equals the alarm time).

We've got a smart simulator that doesn't know how or when to act! Let's think, again, about how our clock alarm and snooze features work for a real clock- A user sets an alarm. The alarm goes off. A user hits snooze. The alarm goes off again.

From that simple description, it seems like the clock's alarm just rings. Certainly the user doesn't do anything to make it ring- theoretically they should be asleep until it does! What are we missing?

The obvious. (Programmers often miss this. Don't feel badly.) Between a user action and the alarm going off TIME PASSES. Our code is a simulation- so we are going to need to tell time to pass in between events where our user needs to do something. We actually already do this with our while loop- but right now it only happens once. From our simple step through of a clock's behavior earlier- we need to simulate time passing at least twice. So- to fix the current situation, we could simply write another while loop after the hitSnooze() function is called, simply checking . Try it out.

In fact, we can abstract that after every user action, we need to simulate time passing. Sounds like a job for a ... function!


*/

/*EXERCISE INSTRUCTIONS
Create a function called passTime that contains your while loop and function call
Place a call your new function at the end of the code and hit Run.

To test your work, cut/paste the this simulateClock function into your code and then call it:

function testClock() {
    var scenario1 = "between setAlarmTime() and ringAlarm()";
    var scenario2 = "between hitSnooze() and ringAlarm()";

	setEnvironment();
	featureTest(scenario1);
	displayEnvironment();
	helperCode();
	displayEnvironment();
	featureTest(scenario2);
	helperCode();
	displayEnvironment();

	
	function featureTest(scenario) {
		console.log("NEW FEATURES RUN");
		console.log("SCENARIO: " + scenario);
		console.log("passTime()");
		passTime();
        console.log("-");
	}
	
	function helperCode() {
		console.log("HELPER CODE");
		console.log("hitSnooze()");
		hitSnooze();
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
		console.log("alarmSet value: " + alarmSet);
		console.log("snoozeActive value: " + snoozeActive);
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
var snoozeActive = false;

function ringAlarm() {
    console.log("Beep beep beep beep!");
}

function hitSnooze() {
	console.log("SNOOZE!");
	snoozeActive = true;
	console.log("snoozeActive value: " + snoozeActive);
	alarmTime = currentTime + 10;
	console.log("The alarm will go off again at " + alarmTime);
}

