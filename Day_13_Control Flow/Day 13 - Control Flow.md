# Day 13 - Control Flow
**Control Flow** statements enable JS programs to make decisions by executing code based on a condition.  If a given condition is true, one block of code will be executed— if false, a different block of code will execute. 

An example of when a control flow could be used is if we were to develop a game in which the user had to choose a door to enter, you would use control flow statements to determine what to do once the user was in the next room. 

Example code given my Codecademy:

```js
let userName = 'Ryan';

// Setting a variable to be a boolean value
let knowsJavaScript = false;

// If true and name is known
if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');

// If true but no name is known
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');

// If not true and name is known
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} 

// If not true and no name is known
else {
  console.log('Great! Get ready to learn something new!');
}
```


Other examples could be:

```js
let needsCoffee = true;
if (needsCoffeee === true){
	console.log('Finding Cofee');
} else {
	console.log('Has coffee!');
}
```

```js
let isSoccerFan = false;
if (isSoccerFan === true){
  console.log('Goal!')
} else if (isSoccerFan === false){
  console.log('No goal!')
}
```

Control flow is not just for boolean values. In JS, all variables and conditions have a **truth** or **falsy** value. 

Codecademy’s example is:

```js
let variableOne = 'I Exist!';
if (variableOne) {
// This code will run because variableOne contains a truthy value.
} else {
// This code will not run because the first block ran.
}
```

All variables that have been created and set are truths, and will evaluate to a true statement if they are the condition of a control flow statement, unless they are equal to

	1. False
	2. 0 and -0
	3. “” and ‘’
	4. null
	5. undefined
	6. NaN
	7. document.all

Since we often evaluate whether or not an expression is true or truth, JS provides a shorthand notation for this

Original code:

```js 
let isRaining = true;
if (isRaining) {
	console.log('Raining!');
} else {
	console.log('Not raining!');
}
```

JS provides an operate for swapping triteness and falseness of values with an exclamation point. We can use this in conditional statements as shorthand to check if the value of a variable evaluates to false rather than true. 

```js
let isRaining = true;
if (!israining){
	console.log('Not raining!');
} else {
	console.log('Raining!');
}
```

Control flow is also used to compare values to other values using **comparison operators**.  

```js
let hungerLevel = 10;
if (hungerLevel > 7){
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}
```

To check if two things are equal to each other you use the comparison operator `===` and to check if they are not equal to each other you use `!==`

```js
let moonPhase = 'full';

if (moonPhase === 'full'){
  console.log('Howl!');
} else {
  console.log('I swear I am not a werewolf')
}
```

So far, we’ve gone over if else statements that answer questions that are either yes or no, but if there are multiple yes conditions or multiple no conditions we need to add more conditions to our if else statement with **else if**

Codecademy’s example

```js
et stopLight = 'green';

if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') {
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
```

If you need to set something so that both conditions must be true or either condition can be true, you can us `&&` and `||` respectively. 

```js
let moonPhase = 'full';
let isFoggyNight = true;

if (moonPhase === 'full' && isFoggyNight){
  console.log('Howl!');
} else if (moonPhase === 'mostly full'){
  console.log('Arms and legs are getting harier');
} else if (moonPhase === 'mostly new'){
  console.log('Back on two feat')
} 
else {
  console.log('Invalid moon phase')
}
```

While else if is a great tool to use, if we wanted to write a program with 25 conditions that’s a lot of code we would have to write. This is when we could use a **switch** statement to write more concise and readable code. 

Codecamey’s example:

```js
let groceryItem = 'papaya';

switch(groceryItem){
	case 'tomato':
		console.log('Tomatoes are 49 cents');
		break;
	case 'lime':
		console.log('Times are $1');
		break;
	case 'papaya':
		console.log('Papayas are $1.29');
		break;
	default:
		console.log('Invalid item');
		break;
}
```

The switch keyword initiates the statement and is followed by a condition that each case will compare to (in the example, it’s grocery item).

Inside the block, cases act like the else if part of an if else statement. Because our condition is papaya, the code would skip until the case is papaya. 

The code `break;` stops the switch statement from executing any more of it’s code.  If this isn’t included, the program will execute the code for any other matching cases below it. 

```js
let moonPhase = 'full';

switch(moonPhase){
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase')
    break;
}
```

Above is shorthand of an if / else if / else statement.  Similar, JS provides a way to shorten if / else statements called a ternary operator. 

If / else statement without ternary operator:

```js
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```

An equivalent way to write this would be:

```js
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!);
```

`isNightTime ? ` is a conditional statement follow by a question mark which checks if it is truthy. If it is, then the following code will be run. If not, the code after the colon will be run. 