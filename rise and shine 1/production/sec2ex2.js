//SECTION 
//EXERCISE 
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
So it looks like this IS a real bug- the alarm did not go off after the user hit the snooze button for the second time.

In order to figure out why this is happening, we need to identify what part or parts of the program could potentially be causing the problem and isolate them. The code editor contains a test copy of the buggy clock program; Let's go through the program's functions and eliminate all the code that is not relevant to our bug. 

First we have 2 display functions: Since the bug reports don't mention anything about the clock's display we can assume that these functions work correctly, so lets eliminate them. 

Next we have 2 set functions. There is no mention of problems setting the clock's current time, so we can eliminate that function. The other function sets the alarm time- and since our issue invovles the alarm feature, we might be tempted to include it to test. However, the users of this program don't report any problem with the alarm function if the snooze button is not use or only used once, so we can reasonably assume that the setAlarm function is working properly since it works in 2 out of the 3 use cases, so let's remove it for now. 

After that, we come to the ringAlarm function. The key issue for our users is that the alarm doesn't ring after the second snooze, so its possible that this function is the source of the bug. This isn't likely though, because the alarm seems to ring successfully so long as the user doesn't hit snooze more than once. Also its a very simple function, all it does is print to the console, so there's not a lot of opportunity to cause problems. Should we eliminate it? No! This function is special, unlike the previous ones we've reviewed because it is responsbile the action that the users expected but didn't experience. This function is critical to recreating the bug and will be how we test to see if the fixes we make are successful. Instead of deleting it, let's just comment it out for now.

So far we've eliminated almost all our program's functions... we must be closing in! The next function, hitSnooze(), has several elements that should catch your attention. It uses a variable, alarmTime, to calculate a value and it also assigns a global variable a value. It also is the heart of the snooze button feature, which is the feature that users are reporting problems with. So, as you may have thought at the beginning of this exercise, this function is the most likey to be the origin of the program's buggy behavior. We're definitely keeping this one in our test program.

Lastly, we have our passTime function. We really only made this function to make our code more realistic and semantic, so it's not likely that it is problematic. However, this function is called by hitSnooze, and since we've identified that function as problematic, it's probably a good idea to keep it just to get a comprehensive view of hitSnooze's behavior. Plus, we'll have the added benefit of a speedier test process.

So now we have the code we want to test prepared- but we've eliminated a lot of the code that made the program run. Click run and see what happens. Can you think of a way to keep the problematic code isolated, yet still allow the program to run? Print "Ready, Set, Test!" to the console when you're ready to move to the next exercise.
*/

/*EXERCISE INSTRUCTIONS
Eliminate the irrelevant portions of code from our project.
Log "Ready, Set, Test!" to the console.
*/

/*EXERCISE HINT
Don't cheat! Read the Educational Text for the lesson. It's just as important to learn how to "think code" as it is to write it.
*/

//INCLUDED CODE
function displayCurrentTime() {
	console.log("The current time is: " + currentTime);
}

function displayAlarmTime() {
	console.log("The alarm is set for: " + alarmTime);
}

function setCurrentTime() {
	var userInput = prompt("Set the current time:");
	currentTime = userInput;
}

function setAlarmTime() {
	var userInput = prompt("Set the alarm time:");
	alarmTime = userInput;
}

function ringAlarm() {
	console.log("Beep beep beep beep!");
	displayCurrentTime();
}

function hitSnooze() {
	snoozeTime = alarmTime + 10;
	snoozeCount++;
	passTime();
}

function passTime() {
	if (snoozeCount === 0) {
		while (currentTime != alarmTime) {
		currentTime += 10;
		}
		ringAlarm();
        return true;
	} else {
		while (currentTime != snoozeTime) {
		currentTime += 10;
		}
		ringAlarm();
        return true;
	}
    return false;
}