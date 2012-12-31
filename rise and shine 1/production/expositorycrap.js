//SECTION 1: TICKTOCK
//EXERCISE 4: <name>
//Modify your clock to log your user's activities 

/*EDUCATIONAL TEXT
Looking good! But the function of hitting snooze is a little more complicated that we first thought! I've included your code from the last exercise. Add another call to your hitSnooze method and then click 'Run'. Watch what happens?

Looks like we've found our first bug. To define a bug, it's best to follow this structure:

1. What the user did
2. What the user expected
3. What actually happened

So our bug is thus: The user hit the snooze button twice. The user expected that the alarm would go off at 8:50. The alarm didn't go off! 

Why didn't the snooze button work the second time? We have angry users and need to fix our clock! To do this, we're gonna need some more information. Specifically, we need to watch what happens to all the properties of my that are affected by the hitSnooze method: myClock.alarmTime, and myClock.snoozeTime. 

It's best to organize these by variables that are used by the method and variables that are modified by the method. In our case, the method hitSnooze *uses* alarmTime, and *modifies* snoozeTime. This helps us identify what the potential problems could be: 1) the value of alarmTime is wrong, so when hitSnooze() uses it to modify snoozeTime it produces an incorrect value, 2) hitSnooze() calculates snoozeTime incorrectly by either a) performing incorrect operations or b) using the wrong variables.

So we need to watch our clock and it's properties as our program runs. Add code to log the value of our myClock object before, between, and after the 2 hitSnooze() method calls and click run.

The console input shows that myClock's alarmTime property remains at 830 before, between, and after the hitSnooze method calls. This is good! We didn't want alarmTime to change when the user hit snooze, and it doesn't! We can eliminate potential problem #1: we know that myClock's alarmTime property is correct and doesn't change.

We know our bug is either the operation(s) or variable(s) we're using to set the value of snoozeTime: let's look at our console log. The first time we call our hitSnooze() method myClock's snoozeTime time changes from a value of 0 to a value of 840, which is 10min after the alarm was set; after the second call myClock's snoozeTime value is still 840 when we would expect it to be 850: ten minutes after the first snooze alarm sounds.

We're getting closer, but we need to investigate a little closer! Log "Keep on keepin' on!" to the console when you are ready to continue.

*/

/*EXERCISE INSTRUCTIONS
Modify your code to have the user hit the snooze button twice. Then click run and watch what happens.
Log the values of your clock object before, between, and after the 2 hitSnooze() method calls. Click run and use the information you logged to determine what the problem with your hitSnooze function is.
Log "Keep on keepin' on!" to the console when you are ready to continue.
*/

/*EXERCISE HINT
Recall that console.log(Object) will print {property1: value, property2: value}, where property1 and property2 are properties of Object
*/

//INCLUDED CODE
