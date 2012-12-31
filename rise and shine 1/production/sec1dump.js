Hold up! Does this make sense? Code-wise it does- but let's think about the real world. A normal alarm clock will let you view what time you originally set the alarm whenever you want, no matter how many times you've hit snooze- ours should too! If we modify the Clock's alarmTime property we'll lose the original value. That data is useful- and important to our user! - so we don't want to have our hitSnooze method change it.

So how should our clock keep track of when to sound the alarm next after the user hits snooze? Sounds (*pun intended) like a job for a new clock property! Let's create a new variable called snoozeTime and have the method hitSnooze store the next time the alarm should go off.


How should our new snoozeTime variable work? Think real life for a second: when someone hits snooze the alarm should go off 10min from the time the original alarm went off. Now think about the code: we need 2 values to set the snooze time: the snooze increment and the time when the user hits snooze. For the snooze increment we'll hard-code it to 10, pretty standard. As for our second value, we're in luck! Our clock object already stores the original alarm time as a property, so we can just use that.

var ringAlarm = function() {
	console.log("Beep beep beep beep!");
    if(prompt("Hit Snooze?")) { 
        hitSnooze();
    } else { 
        console.log("Congrats! You woke up!");
    }
};

var passTime = function(){
	do {
        while (currentTime != alarmTime) {
            currentTime += 10;
            console.log(currentTime);
        }
        ringAlarm();
	} while (snoozeHit);
	return;
};
