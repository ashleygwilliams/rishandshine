//SECTION 4 ARE YOU DOWN WITH BDD?

var myClock = {alarmTime: null};
myClock.setAlarm = function(time) {
    this.alarmTime = time;
};
myClock.hitSnooze = function() {
    this.alarmTime += 10;
};

var isValid = function(timeValue) {
    if (timeValue.length === 0) {
       return false;
	} 
    else if (timeValue.indexOf(":") == -1) {
        return false;
    } else {
        return true;
    }
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


var timeToStr = function(numTime) {
    var minutes = 0;
    var hours = 0;
    minutes = numTime%60;
    numTime -= minutes;
    hours = numTime/60;   
    
    return hours + ":" + minutes;
};

//SECTION 4 EXERCISE 2 ITS NOT RIGHT BUT ITS OK
//Uncomment the test section now
//TESTING

//Rename your array testVars1
var testVars1 = [emptyString, noColon, strColon, strColonAMPM];
var emptyString = "";
var noColon = "1200pm";
var strColon = "12:00";
var strColonAMPM = "12:00am";

//Create a new array called testVars2
//and fill it with the variables that broke
var testVars2 = [colonOnly, allPunc, allChar, hourChar, minChar];
var colonOnly = ":";
var allPunc ="::::";
var allChar = "ab:cd";
var hourChar = "a4:56";
var minChar = "12:3d";


var inputTest = function(testVars) {
    for (var i=0; i<testVars.length; i++) {
        console.log("Does input '" + testVars[i] +"' validate?");
        console.log("Expected: " + isValid(testVars[i]));
        console.log("Result: " + isValid(testVars[i]));
        console.log();
    }
};

//Run the new array of variables through the test function
inputTest(testVars2);

//Comment out your production section now
//PRODUCTION
/*var myAlarm = prompt("Set your alarm!");
while (!isValid(myAlarm)) {
    myAlarm = prompt("Invalid Input! Set your alarm!");
} 
var myAlarmNum = timeToNum(myAlarm);
myClock.setAlarm(myAlarmNum);
var myAlarmStr = timeToStr(myClock.alarmTime);
console.log(myAlarmStr);

myClock.hitSnooze();
myAlarmStr = timeToStr(myClock.alarmTime);
console.log(myAlarmStr);*/



