

Increment this property everytime the hitSnooze method is called
Modify your setAlarm method to set the snoozeTime to the same value as the alarmTime when the user sets a new alarm
Also add code to your setAlarm method to reset the snoozeCount

Prompt the user to set an alarm, and then hit snooze twice
Then, print the this statement to the console:
"Your alarm was set for 8:30am. You hit the snooze 2 times and finally got up at 8:50am."

Remember that you can make a new object property in one line by referencing it with dot notation and giving it a value. For example:

var myObject = {property1: value};
myObject.property2 = value;

console.log(myObject) will print:
{ property1: 'value', property2: 'value' }

In your setAlarm method make sure that you set the snooze time to the new alarm time and not the old one. The order of your statements is important here!

Make sure you are printing the exact statement in the instructions to the console and don't forget about spacing between words and the period at the end!


//EX4
//OBJECT
var myClock = {alarmTime: 0, snoozeTime: 0};
myClock.setAlarm = function(time) {
    this.alarmTime = time;
};
myClock.hitSnooze = function() {
    this.snoozeTime = this.alarmTime + 10;
};

//TESTING
var myAlarm = 830;
myClock.setAlarm(myAlarm);

myClock.hitSnooze();

console.log("Original Alarm: " + myClock.alarmTime);
console.log("Snooze Alarm: " + myClock.snoozeTime);
 /*
A spec is a test that determines whether a feature of a program works; when a spec focuses on a single element of a program, such as a function, it is also known as a unit test. Unit tests are useful because they text the functionality of your program's elements before they interact with other elements- this way the scope of your potential problems is restricted to the single element you are testing. This is great because sometimes elements that work fine alone start having trouble when playing with others... it's good to know if you have a bad egg before you introduce other ingredients!

Back to our alarm clock: clearly we need a unit test for our hitSnooze method, so let's write one! Most unit tests follow this type of structure:

1. GIVEN: what does the current program environment look like? what variables exist and what values do they have?
2. WHEN: what happens? or, put another way, what action are you testing?
3. THEN: what do you expect to happen? does it match what *actually* happens?

First we need to isolate the test element from the rest of the program by identifying the task this element needs to accomplish and restricting our program environment the things it needs to complete this task. The hitSnooze() method needs 3 things: a Clock object, that Clock's alarmTime property, and that Clock's snoozeTime property. We don't need the setAlarm() method, so let's eliminate it.

Next we need to define our "given", or set up our program environment. Lucky for us, after isolating our element, our "environment" only includes our Clock object and its properties. We want this to look just 

isolates a single feature of a program, and then defines a function that evaluates whether that feature works, return true if it does and false if it does not. Any good development project will have a spec
*/


The clock only needs to know the original alarm time, and the next time to sound the alarm after the snooze has been hit. If we think about it, its probably useful to store a value that lets the user know if the snooze has been hit so it knows to use the snoozeTime instead of the alarmTime. This might seem like a good time to use the boolean type- originally set to false, and then set to true when the user hits snooze.

But we have the opportunity here to store much more info! Let's also log how many times our user hits that snooze button... normal alarm clocks don't do this, but who said this was a normal alarm clock?! We want our users to know how lazy they have (or haven't!) been that morning. Think about how using a count can still be used to tell the clock whether the snooze button has been hit or not.

To be kind to our users, let's reset the count every time they set their alarm time.