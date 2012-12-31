//SECTION 1: TICKTOCK
//EXERCISE 3: THE MIGHTY SNOOZE
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
Right now, it's not very functional- all it can do it set an alarm. How can we spice it up?

... a snooze button!

Let's give our alarm clock a new method called hitSnooze to allow our users to sleep in! Think back to exercise 1 when you design this method: Does this method need any parameters? Does it return a value, if not.. does it modify a property?

If you said yes- you're right! In the 'real world' a snooze button tells the alarm to go off in 10min from the current time. It only makes sense to hit the snooze when the alarm is ringing - so we can assume that current time when a user hits snooze is the same as the time the clock's set alarm time. Therefore, perhaps the hitSnooze function should modify myClock's alarmTime.

Hold up! Does this make sense? Code-wise it does- but let's think about the real world. A normal alarm clock will let you view what time you originally set the alarm whenever you want, no matter how many times you've hit snooze- ours should too! If we modify the Clock's alarmTime property we'll lose the original value. That data is useful- and important to our user! - so we don't want to have our hitSnooze method change it.

So how should our clock keep track of when to sound the alarm next after the user hits snooze? Sounds (*pun intended) like a job for a new clock property! Let's create a new variable called snoozeTime and have the method hitSnooze store the next time the alarm should go off.

*/

/*EXERCISE INSTRUCTIONS
Give your clock object a new property called snoozeTime
Then create a method for your clock called hitSnooze method
This method should set the snoozeTime to 10 minutes after the clock's alarmTime
Set the alarm to 830 and then hit snooze once
Verify that your new method worked by printing this statement to the console:
"Your alarm went off at 830. Since you hit snooze, it'll go off again at 840."
*/

/*EXERCISE HINT
How should our new snoozeTime variable work? Think real life for a second: when someone hits snooze the alarm should go off 10min from the time the original alarm went off. Now think about the code: we need 2 values to set the snooze time: the snooze increment and the time when the user hits snooze. For the snooze increment we'll hard-code it to 10, pretty standard. As for our second value, we're in luck! Our clock object already stores the original alarm time as a property, so we can just use that.
*/

//INCLUDED CODE
var myClock = {alarmTime: 0};
myClock.setAlarm = function(time) {
    this.alarmTime = time;
};

//Give your clock object a new property called snoozeTime

//Create your clock's hitSnooze method

//Set the alarm to 830, and then call your new method

//Log the properties of myClock to the console
