//SECTION 2 CONVERSION DIVERSION

var myClock = {alarmTime: null};
myClock.setAlarm = function(time) {
    this.alarmTime = time;
};
myClock.hitSnooze = function() {
    this.alarmTime += 10;
};

var timeToNum = function(strTime) {
    var minutes = 0;
    var hours = 0;
    var position = strTime.indexOf(":");
    for (var i=0; i<position; i++) {
        hours = +strTime.charAt(i);
    }
    minutes += +strTime.substr(position+1, 2);
    
    return (hours * 60) + minutes;
};

//SECTION 2 EXERCISE 3: GET STRINGY

//create a new function called timeToStr
var timeToStr = function(numTime) {
    var minutes = 0;
    var hours = 0;
    //calc how many minutes over a whole hour
    minutes = numTime%60;
    //remove the minutes from the total minutes
    numTime -= minutes;
    //calc how many whole hours to display
    hours = numTime/60;
    //return a string in the format hours:minutes    
    return hours + ":" + minutes;
};

var myAlarm = prompt("Set your alarm!");
var myAlarmNum = timeToNum(myAlarm);
myClock.setAlarm(myAlarmNum);
//Use your new function to change the alarm time back to normal
//and store it in a variable called myAlarmStr
var myAlarmStr = timeToStr(myClock.alarmTime);
//Then update your console.log statement to display the new value
console.log(myAlarmStr);

myClock.hitSnooze();
//Use your new function to change  new the alarm time back to normal
//and update the myAlarmNum variable
myAlarmStr = timeToStr(myClock.alarmTime);
//Log the new alarm time string value to the console
console.log(myAlarmStr);


