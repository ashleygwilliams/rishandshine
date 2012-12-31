//SECTION 
//EXERCISE 
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
Now let's put it all together.
*/

/*EXERCISE INSTRUCTIONS
Modify your ringAlarm function to ask the user if they want to hit snooze

To test your work, cut/paste the this simulateClock function into your code and then call it:

function testClock() {
    var scenarios = ["setAlarmTime() then ringAlarm()", "hitSnooze() then ringAlarm()", "second hitSnooze() and ringAlarm()"]; 

    setEnvironment();
    for (var i=0; i<scenarios.length; i++){
        console.log("SCENARIO: #"+ (i+1) +": " + scenarios[i]);
        featureTest(scenarios[i]);
        displayEnvironment();
    }
    
	function featureTest(scenario) {
		console.log("NEW FEATURES RUN");
		console.log("passTime()");
		passTime();
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
	snoozeActive = confirm("Hit Snooze?");
	console.log("snoozeActive value: " + snoozeActive);
    if(snoozeActive) { 
        hitSnooze();
    } else { 
        console.log("Congrats! You woke up!");
    }
}

function hitSnooze() {
	console.log("SNOOZE!");
	alarmTime = currentTime + 10;
	console.log("The alarm will go off again at " + alarmTime);
}

function passTime() {
	while (currentTime != alarmTime) {
		currentTime += 10;
		console.log(currentTime);
	}
	ringAlarm();
}