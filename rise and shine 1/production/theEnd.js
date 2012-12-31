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
    if(snoozeActive) { 
        hitSnooze();
    } else { 
        snoozeActive = false;
        console.log("Congrats! You woke up!");
    }
}

function hitSnooze() {
	alarmTime = currentTime + 10;
	snoozeActive = true;
	console.log("SNOOZE!");
}

function passTime() {
	while (currentTime != alarmTime) {
		currentTime += 10;
		console.log(currentTime);
	}
	ringAlarm();
}