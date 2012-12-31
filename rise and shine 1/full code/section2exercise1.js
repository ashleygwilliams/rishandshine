//SECTION 
//EXERCISE 
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT

*/

/*EXERCISE INSTRUCTIONS

*/

/*EXERCISE HINT

*/

//INCLUDED CODE
var myClock = {
	alarmTime: null,
	snoozeTime: null,
	snoozeCount: 0
	};
myClock.setAlarm = function(time) {
    this.alarmTime = time;
};
myClock.hitSnooze = function() {
    this.alarmTime += 10;
};

//SECTION 2 EXERCISE 1: MAKE IT COUNT!

//create a new function called timeToNum
var timeToNum = function(strTime) {
    var minutes = 0;
    var hours = 0;
    //find the position of the :
    var position = strTime.indexOf(":");
    //take the string before the : as hours
    for (var i=0; i<position; i++) {
        hours = +strTime.charAt(i);
    }
    //take the string after the : as minutes
    minutes += +strTime.substr(position+1, 2);
    
    //return the total minutes (1hour = 60min)
    return (hours * 60) + minutes;
};

var myAlarm = prompt("Set your alarm!");
//Create a new variable called myAlarmNum
//and use it to store the converted value from your new function
var myAlarmNum = timeToNum(myAlarm);
//Set your alarm with the new value
myClock.setAlarm(myAlarmNum);
console.log(myClock.alarmTime);

myClock.hitSnooze();
console.log(myClock.alarmTime);

