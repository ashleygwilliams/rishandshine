1. 4 variables are individually created and initialized to a value, one after another
2. a function call is encountered and causes a jump to the definition of the function that was called, no matter where on the screen, in this call the call is passTime() so we jump the definition of passTime towards the end of our code
3. after a function is called, the variables declared in the function's parameter definition are initialized with the values passed in the function. assignment is based on position in a comma delimited list. these are private variables and are only accessible by the function. if a value is passed that has no variable to be assigned to, it is ignored. if a variable is not passed a value, it is declared but not initialized. the lifespan of a function's private variable is the duration of a single call to that function; all private variables of a function are destroyed when the function has completed. if a function calls another function, the private variables are conserved so they can be used after the completion of that internal function call. the passTime function has no parameters so no private variables are declared or initialized
4. encounters the keyword if, moves to the left to process and evaluates the conditional statement using the current environment; 
5. statement evaluates to true, proceeds to the closest block within the curly braces
5. encounters the keyword while, move left to process and evaluate the conditional statement using the current environment
6. statement evaluates to true, proceeds to the closest block within the curly braces
7. increments the value of the global variable currentTime by 10
8. returns to most recent conditional statement, to reevaluate with current environment
9. step 6 - 8 repeat until statement evaluates to false
10.proceeds to first statement past (first checks right, then below) the code block surrounded by curly braces
11. calls the object console's log function and passes the value "call ringAlarm()"
12. <completes the console log function>
13. reaches closing bracket of while loops, looks in the if statement block for the next statement past the closed curly brackets of the while loop
14. finds no statements , so exits if statement and looks for the next statement after the closing curly brace of the if statement
15. finds no statements, so exits if function
16. looks for to the next statement past the function call it just completed.
17. encounters a function call for the function hitSnooze, saves position in code and current environment in the stack
18. jumps to the hitSnooze function definition, checks if parameters necessitate declaring or intializing any private variables
19. none found, so moves to first line of the function definition
20. adds the value of the variable alarmTime based on current environment to 10 and assigns that value to the variable snoozeTime
21. increments the current value of the global variable snoozeCount by 1;
22. encounters function call passTime(), saves position in code and current environment in the stack
23. jumps to the hitSnooze function definition, checks if parameters necessitate declaring or intializing any private variables
24. none found, so moves to first line of the function definition
25. encounters the keyword if, moves to the left to process and evaluates the conditional statement using the current environment; 
26. statement evaluates to true, proceeds to the closest block within the curly braces
27. encounters the keyword while, move left to process and evaluate the conditional statement using the current environment
28. statement evaluates to true, proceeds to the closest block within the curly braces
29. increments the value of the global variable currentTime by 10
30. returns to most recent conditional statement, to reevaluate with current environment
31. step 6 - 8 repeat until statement evaluates to false
32.proceeds to first statement past (first checks right, then below) the code block surrounded by curly braces
33. calls the object console's log function and passes the value "call ringAlarm()"
34. <completes the console log function>
35. reaches closing bracket of while loops, looks in the if statement block for the next statement past the closed curly brackets of the while loop
36. finds no statements , so exits if statement and looks for the next statement after the closing curly brace of the if statement
37. finds no statements, so exits if function
38. looks for to the next statement past the function call it just completed.
39. encounters "/*" and skips to the next statement past the closing symbol. comments are, by definition, not processed
40.  encounters the keyword function and skips all code within the first opening curly brace encountered and it's closing brace. A function is only processed when it is called, so when we hit a line where a function is declared it is not processed
41. repeat 40 for each function until encounters a function call for the console object's log function, saves position in code, and current environment in stack, stores a reference to the value of the variables in the call's parameters based on the the current environment
42. jumps to the log function definition and declares and initializes parameter variables with the values from the function call
43. completes console.log function
44. exits function and looks for the first statement past it's function call
45. finds nothing
46. ends