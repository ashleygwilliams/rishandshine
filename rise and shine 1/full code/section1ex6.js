//SECTION 1: TICKTOCK
//EXERCISE 5: REFACTOR REFACTOR REFACTOR
//Before moving on, let's clean up our act

/*EDUCATIONAL TEXT
We've got a great alarm clock now: it can set an alarm and has a proper snooze button. It even keeps track of how lazy you are.

But if we look at our code, its a bit messy...

Don't be ashamed, this happens a lot during development. No one is perfect the first time; in fact, all that really matters when first coding something is that it simply does what it's supposed to. However, this messy code can't stay like this- it's hard for other developers (or maybe you in a few hours) to read, and that's no good if you're going to use it or build on it later.

To fix this, developers do something called 'refactoring'. Refactoring, simply put, is rewriting the code to be more elegant, and therefore read more logically, while maintaining its functionality.

Let's refactor our code. How can we simply this? Experiment for a little while and then check the hint for explicit instructions.
*/

/*EXERCISE INSTRUCTIONS
Refactor the code to make it more elegant and logical
Then run your code to make sure you didn't break anything! 
*/

/*EXERCISE HINT
If we think abstractly, we can think of our project in two sections.

The first section is our Clock object. As we proceeded through the lesson we added a lot of 'ad-hoc' properties and methods using 'myClock.propertyOrMethod = '. This is messy and confusing... these don't need to happen after we make our clock, in fact, they should happen right when we make our clock. Move these 'ad-hoc' properties and methods to your original definition of the clock object.

The second section is the code we use to test the Clock object by calling its methods and printing its properties to the console. For now, it's fine and we'll leave it be, but as it grows, be thinking about how to refine it.
*/

//INCLUDED CODE
var myClock = {alarmTime: null};

myClock.snoozeTime = 0;
myClock.snoozeCount = 0;

myClock.setAlarm = function(time) {
    this.alarmTime = time;
	this.snoozeCount = 0;
};

myClock.hitSnooze = function() {
    this.snoozeTime += 10;
	this.snoozeCount++;
};

var myAlarm = prompt("Set your alarm!");
myClock.setAlarm(myAlarm);
myClock.hitSnooze();
myClock.hitSnooze();
console.log("Your alarm was set for " + myClock.alarmTime + ". You hit the snooze " + myClock.snoozeCount + " times and finally woke up at " + myClock.snoozeTime + ".");