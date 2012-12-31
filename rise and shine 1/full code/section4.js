//SECTION 3: CHECK IT

var myClock = {alarmTime: null};
myClock.setAlarm = function(time) {
    this.alarmTime = time;
};
myClock.hitSnooze = function() {
    this.alarmTime += 10;
};

//SECTION 3 EXERCISE 1: WHATS YOUR TYPE?
//Create a function called isValid, take one parameter
//Return true if string or number
//Return false if anything else
var isValid = function(timeValue) {
	//First make sure the value isn't empty
	if (timeValue.length == 0) {

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

//SECTION 3 EXERCISE 2: NOT MY TYPE
//Give each of the variables below a value to test your function
var emptyString = "";
var noColon = "1200pm";
var strColon = "12:00";
var strColonAMPM = "12:00am";

//Run the variables through your function and 
//log the results to the console
console.log("Does input '" + emptyString +"' validate?");
console.log("Expected: " + isValid(emptyString));
console.log("Result: " + isValid(emptyString));
console.log();

console.log("Does input '" + noColon +"' validate?");
console.log("Expected: " + isValid(noColon));
console.log("Result: " + isValid(noColon));
console.log();

console.log("Does input '" + strColon +"' validate?");
console.log("Expected: " + isValid(strColon));
console.log("Result: " + isValid(strColon));
console.log();

console.log("Does input '" + strColonAMPM +"' validate?");
console.log("Expected: " + isValid(strColonAMPM));
console.log("Result: " + isValid(strColonAMPM));
console.log();

//Comment this out for now
/*var myAlarm = prompt("Set your alarm!");
var myAlarmNum = timeToNum(myAlarm);
myClock.setAlarm(myAlarmNum);
var myAlarmStr = timeToStr(myClock.alarmTime);
console.log(myAlarmStr);

myClock.hitSnooze();
myAlarmStr = timeToStr(myClock.alarmTime);
console.log(myAlarmStr);*/

