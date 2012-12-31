//SECTION 
//EXERCISE 
//To review objects, create a clock that can set an alarm

/*EDUCATIONAL TEXT
Now we know that our bug is caused by our hitSnooze method's operations, variables, or a combination of the two.

To test the hitSnooze's operations, let's separate the method's code into two parts: the assignment portion (myClock.snoozeTime = blackBox) and the value calculation (value + value). 

Now we'll test drive each part to make sure it's doing its job correctly. We could use the values from our program, but in most cases that would be less advisable than using values you make up yourself, because you can choose values for which the expected outcome is either obvious or easily to calculate. If you can't figure out what the correct evaluation of an operation looks like how can you tell if it's working?

Even if you're values and expected outcomes are as easy to work with as ours, using values from your program can be distracting and can making finding the error harder, so let's practice using random values. To save you time, I've hard-coded a clock object called testClock with some values. 

Now let's set up our test environment. Our tests will compare the value of our operation's known-correct outcome to the value of the actual outcome. If the actual outcome's value equals the known-correct outcome's value, we know the operation is performing correctly, if not, we know that operation needs to be fixed. The first step in creating our test is to figure out how we want to store values of these outcomes. Our known-correct values outcomes have values determined outside our program(using a method we know is valid), so they will be hardcoded. We don't yet know the values of our actual outcomes, but we also need to store those somewhere. We could create an individual variable for each outcome value, a total of 4 variables, but it's important that we not accidentally compare the known-correct outcome of one operation with the actual outcome of another as the value of that comparison doesn't tell us anything about the validity of the operation that produced each value!

How can we store distinct values in a way that also preserves their mutual association? There are lots of ways to do this in JavaScript (hopefully Objects come to mind here!), but the simplest is an array. There are 2 characteristics of our values we could use to organize our arrays:
1. type of outcome: expected vs. actual values, or
2. associated operation: outcomes of operation 1 vs. outcomes of operation 2

Both organizational strategies are equally efficient and functional, but one is a (slightly) better choice than the other. To pass this exercise you must implement the *best* strategy, which I define and defend in the hint. Before you read my opinion though, think for a second: Besides, efficiency and functionality, what would make one strategy better than another? Is there something unique about an array that could help inform this valuation?

I actually recommend writing out the code for each to get a visual perspective (hint hint!). At the very least, choose the strategy you think is best and implement it, filling each array with the appropriate values: hard-coded values for the known-correct outcomes and empty variables for the actual outcomes.

When you're done check the hint to find out which strategy is actually better and why! 

*/

/*EXERCISE INSTRUCTIONS
Choose one of the two organization strategies and create 2 arrays. Based on the structure you chose, fill the arrays with the appropriate values: hard-coded values for the known-correct outcomes and empty variables for the actual outcomes.
*/

/*EXERCISE HINT
Strategy 1 is the best and here's why:
The syntax used to manipulate arrays is unique. To refer to an item in an array, a programmer uses the syntax, arrayName[#], which contains 2 elements: 
- Array variable name (string) - customizable, independent of variable's value, ideally something that communicates information about its contents and what they all have in common. 
- Index Number (positive integer) - not customizable without changing the array's value, communicates the position of the item in the array

Since you only have one opportunity to semanticly identify what's in your array, you'll want to pick a name is most relevant to how the value of the items is used. Since you also want to use your array's name to indicate what the items have in common, you'll want to group your data based on an attribute that is most relevant to your programs logic. 

The key logic in our program is to check if the actual outcome value is equal to the known correct value. In pseudo-code, this comparison would read if(actual outcome value === known correct value) { return true; } else { return false }.

We want our variable names to preserve this logic: grouping our variable based on outcome type instead of test operation accomplishes this. If we chose to group by operation our code would look like this:
if (item 1 of operation === item 2 of operation) { return true; } else { return false }. This doesn't tell us anything about the values that are being compared!

FYI: An object references its items (its properties) with a property name instead of an index number. This gives the programmer two opportunites to identify the value of an item- so using objects generally results in easier to read code!

*/

//INCLUDED CODE