//SECTION 4 ARE YOU DOWN WITH BDD?

var myClock = {alarmTime: null};
myClock.setAlarm = function(time) {
    this.alarmTime = time;
};
myClock.hitSnooze = function() {
    this.alarmTime += 10;
};

//SECTION 4 EXERCISE 3: BARE MINIMUM
//Complete the following functions to fix
// the fail cases individually
var hasEnoughChars = function(tVal) {
    if (tVal.length < 4) {
        return false;
    }
    return true;
};
var isNotPunc = function(tVal) {
    if (tVal.charAt(0) === ':') {
        return false;
    }
    return true;
};

//The next two are tricky, I've done one for you
//I've created an array of valid chars for time
var validChars = ["1","2","3", "4", "5", "6", "7", "8", "9"];

var hasNoHourChars = function(timeValue) {
    var validChars = ["1","2","3", "4", "5", "6", "7", "8", "9"];
    var colonPosition = timeValue.indexOf(':');
    var strHours = timeValue.slice(0, colonPosition);
    for (var i=0; i<strHours.length;i++){
        var currentChar = timeValue.charAt(i);
        if (validChars.indexOf(currentChar) === -1) {
            return false;
        }
        return true;
    }
};
var hasNoMinChars = function(timeValue) {
    var validChars = ["1","2","3", "4", "5", "6", "7", "8", "9"];
    var colonPosition = timeValue.indexOf(':');
    var strHours = timeValue.slice(colonPosition + 1, colonPosition + 3);
    for (var i=0; i<strHours.length;i++){
        var currentChar = timeValue.charAt(i);
        if (validChars.indexOf(currentChar) === -1) {
            return false;
        }
        return true;
    }
};

//Add your functions to the isValid function
var isValid = function(timeValue) {
    if (timeValue.length === 0) {
       return false;
    } 
    else if (timeValue.indexOf(":") == -1) {
        return false;
    } else if (!hasEnoughChars(timeValue)) {
        return false;
    } else if (!isNotPunc(timeValue)) {
        return false;
    } else if (!hasNoHourChars(timeValue)) {
        return false;
    } else if (!hasNoMinChars(timeValue)) {
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

//TESTING
var testVars1 = [emptyString, noColon, strColon, strColonAMPM];
var emptyString = "";
var noColon = "1200pm";
var strColon = "12:00";
var strColonAMPM = "12:00am";

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

//Run your test again
inputTest(testVars2);

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






