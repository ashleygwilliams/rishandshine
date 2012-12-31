//SECTION 
//EXERCISE 
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
Well that was fun. But not very helpful for our poor hapless newb. His users are upset, and have lots of energy to waste berating him thanks to the hours they spent sleeping and NOT being woken up by their alarm clock!

We need to take our console.log statement that records the values of our code's environment and place them at the critical moments in our code. This way, we can watch them change as our code is processed and hopefully track down exactly where things start going awry.
*/

/*EXERCISE INSTRUCTIONS

*/

/*EXERCISE HINT

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
	} else {
		while (currentTime != snoozeTime) {
		currentTime += 10;
		}
		ringAlarm();
	}
}

console.log(alarmTime, snoozeTime, snoozeCount, passTime(), currentTime);