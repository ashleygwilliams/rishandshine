//OBJECT
var myClock = {alarmTime: null};
myClock.setAlarm = function(time) {
    this.alarmTime = time;
};

//TESTING
var myAlarm = "8:30am";
myClock.setAlarm(myAlarm);
console.log(myClock.alarmTime);

