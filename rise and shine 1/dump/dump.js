//var parseTime = function(timeValue) {
    //var minutes = 0;
    //var hours = 0;
    
    //if the time is a string make it a number
    //if (typeof timeValue == "string") {
        //find the position of the :
        //var position = timeValue.indexOf(":");
        //take the string before the : as hours
        //for (var i=0; i<position; i++) {
        //    hours = +timeValue.charAt(i);
        //}
        //take the string after the : as minutes
        // minutes += +timeValue.substr(position+1, 2);
        
        //return (hours * 60) + minutes;
    }
    //else if time is a number make it a string
    //else if (typeof timeValue == "number") {
        //calc how many minutes over a whole hour
        //minutes = timeValue%60;
        //remove the minutes from the total minutes
        //timeValue -= minutes;
        //calc how many whole hours to display
        //hours = timeValue/60;
        
        //return hours + ":" + minutes;
    }
    //else return an error
    //else {
        //console.log("Error: invalid time value");
    //}
//};

//var myClock = {alarmTime: null}; 
//myClock.setAlarm = function(time) {
//    this.alarmTime = time;
//};
myClock.getAlarmTime =function() {
    if (this.alarmTime) {
        return this.alarmTime;
    } else {
        console.log("You haven't set an alarm yet!");
        return this.alarmTime;
    }
};
//myClock.hitSnooze = function() {
//    this.alarmTime += 10;
//};

//var myAlarm = prompt("Set your alarm!");
//var alarmTime = parseTime(myAlarm);
//myClock.setAlarm(alarmTime);
//alarmString = parseTime(myClock.getAlarmTime());
//console.log(alarmTime);
//console.log(alarmString);
//hitSnooze(myClock);
//console.log(myClock.getAlarmTime());



