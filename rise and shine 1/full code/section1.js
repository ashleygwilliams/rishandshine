//SECTION 1: TICKTOCK
//SECTION 1 EXERCISE 1: OBJECTS OVERVIEW

//Create an object called myClock and give it the property alarmTime with the value null
var myClock = {alarmTime: null};

//Now give your object a function called setTime
//Add code to set the snoozeTime to the alarmTime
//Add code to reset snoozeCount everytime your user sets the alarm
myClock.setAlarm = function(time) {
    this.alarmTime = time;
	this.snoozeCount = 0;
};

//SECTION 1 EXERCISE 2: SOUND THE ALARM

//Prompt the user to set their alarm and save it in a variable called myAlarm
var myAlarm = prompt("Set your alarm!");

//Now using your function, set your clock's alarm
myClock.setAlarm(myAlarm);

//Log the value of your clock's alarmTime property to the console
console.log(myClock.alarmTime);

//SECTION 1 EXERCISE 3: THE MIGHTY SNOOZE

//Give your clock a new function called hitSnooze
//Modify your hitSnooze method to change this variable and not your alarmTime variable
//Increment snoozeCount everytime the hitSnooze method is called
myClock.hitSnooze = function() {
    this.snoozeTime += 10;
	this.snoozeCount++;
};

//Call your new function and then log the new alarm time to the console
myClock.hitSnooze();
console.log(myClock.alarmTime);

//SECTION 1 EXERCISE 3: THE MIGHTY SNOOZE

//Give your clock object a new property called snoozeTime
myClock.snoozeTime = 0;

//Then give your clock object another new property called snoozeCount
myClock.snoozeCount = 0;

//Prompt the user to set an alarm, and then hit snooze twice
//Then, print the summary statement to the console (be exact!)
var myAlarm = prompt("Set your alarm!");
myClock.hitSnooze();
myClock.hitSnooze();
console.log("Your alarm was set for " + myClock.alarmTime + ". You hit the snooze " + myClock.snoozeCount + " times and finally woke up at " + myClock.snoozeTime + ".");

//Give your clock object 2 new properties: snoozeTime and snoozeCount
myClock.snoozeTime = 0;
myClock.snoozeCount = 0;

//REFACTOR





