//SECTION 1: TICKTOCK
//SECTION 1 EXERCISE 1: OVERVIEW
//Introduction to functional programming 

/*EDUCATIONAL TEXT
In this lesson, we're going to create a program that simulates a clock.

To accomplish this, we first need to answer the question: What does a simulator do?

If you're thinking "It simulates!", you're correct but we still don't have any better idea of how to build one. Let's dig deeper.

An object simulator should have the exact same functionality as the real object it's simulating. In order to perform the same functions, it will need to interact with the world the same way the real object does. The structure by which a program interacts with the world is called an interface, and it is made up of 2 components: stored data and ways to modify data. You already know the Javascript names for these components... variables and functions!

So if our simulator needs to interact with the world the same way the real object does, it needs to have structures to match that object's variables and functions. The closer the match, the more accurate the simulator!

So what variables and functions does a clock possess? A good starting place is considering the reasons why the object is used. Take a second and mentally fill in this statement: I use a clock because ___________________.

Almost everyone will say they use a clock because they want to know what time it is. Great! Let's create a variable called currentTime.

Another popular reason to use a clock is to set an alarm to wake up in the morning. Create another variable called alarmTime.

Give each of your variables a value and log their values to the console using the tags provided
*/

/*EXERCISE INSTRUCTIONS
Create two variables, currentTime and alarmTime
Set these variable to whatever value you'd like
Update the console.log statements to print the value of these variables
*/

/*EXERCISE HINT
Remember the syntax to create a variable:
var myVariable;

Don't forget to give your variables values!
*/

//INCLUDED CODE
//Create two variables, currentTime and alarmTime

//Give each variable a value

//Modify the console.log statements to include the values of your new variables
console.log("The current time is: ");
console.log("The alarm is set for: ");

//SOLUTION
var currentTime;
var alarmTime;

currentTime = "830";
alarmTime = "900";

console.log("The current time is: " + currentTime);
console.log("The alarm is set for: " + alarmTime);
