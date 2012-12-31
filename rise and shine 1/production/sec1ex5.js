//SECTION 1: TICKTOCK
//EXERCISE 3: THE MIGHTY SNOOZE
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
Right now, our clock simulator is not very realistic- or, even worse, useful! All it can do it set an alarm... how can we spice it up and make it more like a *real* clock?

... a snooze button!

Let's give our alarm clock a new method called hitSnooze to allow our users to sleep in! Think back to exercise 1 when you learned a process for designing functions. That process asked two key questions: 

1. Does this method need any parameters?
Parameters pass values about the code's current environment that the function couldn't access on it's own. Since all of our code's variables are global, we won't need parameters.

2. Does it return a value, if not.. does it modify a property?
If you said yes- you're right! In the 'real world' a snooze button tells the alarm to go off in 10min from the time the alarm last went off. Which of our variable's controls when the alarm goes off? The alarmTime variable. Therefore, our hitSnooze function should modify the alarmTime variable.

So we know that our hitSnooze button needs to modify the alarmTime variable. Does it need to do anything else? Some alarm clocks will have the alarm indicator light flash during the 10minutes between the user hitting the snooze and the next time the alarm rings. We don't have a visual interface for our clock(yet!), but we should keep track of this information anyways. 

We're already doing something like this with our alarmSet variable, so we can use that as an example. Create a variable called snoozeActive and have it equal true only after the snooze button has been hit; otherwise it should equal false. 

(This logic isn't quite complete yet, but we'll improve it as we continue.) 
*/

/*EXERCISE INSTRUCTIONS
Create a global variable called snoozeActive
Create a function for your clock called hitSnooze sets the alarmTime to 10 minutes after the clock's alarm goes off


To test your work, cut/paste the this simulateClock function into your code and then call it:

function testClock() {
    setEnvironment();
    helperCode();
    displayEnvironment();
    featureTest();
	displayEnvironment();
	
	function featureTest() {
		console.log("NEW FEATURES RUN");
		console.log("hitSnooze()");
		hitSnooze();
        console.log("-");
	}
	
	function helperCode() {
		console.log("HELPER CODE");
		console.log("simulates time passing - sets currentTime=alarmTime");
		currentTime = alarmTime;
        console.log("if statement - calls ringAlarm() if currentTime=alarmTime");
        if(currentTime === alarmTime) {
            console.log("ringAlarm()");
		    ringAlarm();  
        }
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
Make sure to intialize the snoozeHit variable!
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

function ringAlarm() {
	console.log("Beep beep beep beep!");
}
