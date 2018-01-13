# Day 4 - JSX 2
Grammar in JSX is mostly the same as HTML, but there are subtle differences to watch out for.  The most frequent of those involves the word “class”.

In HTML, it’s common to sue class as an attribute name

`<h1 class=“big”>Hey</h1>`

In JSX, you can’t use the word class, you have to use className instead.

`<h1 className=“big”>Hey</h1>`

This is because JSX gets translated into JS and class is a reserved word in JS already. 

Another difference between JSX and HTML is self-closing tags.  Most HTML elements use an opening and a closing tag, but some elements like images only use one tag.  

With HTML, it’s option to include the forward-slash before the final angle bracket:

`<br />` and `<br>` work the same in HTML, but in JSX, you have to include the slash. 

So far, we’ve worked with a lot of JSX expressions that are similar to HTML, but you can use regular JS written inside of a JSX expression. 

```js
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
	<h1>2 + 3</h1>,
  document.getElementById('app')
);
```

This code would just print the string “2 + 3” since it is located between <h1> tags.  Any code between the tags of a JSX element will be read as JSX, not as JS.  

In order to write code that acts as vanilla JS even though it’s between JSX tags, you can wrap your code in `{}`

```js
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
	<h1>{2 + 3}</h1>,
  document.getElementById('app')
);
```

When you inject JS into JSX, that JS is part of the same environment as the rest of the JS in your file, which means you can access variables while inside of a JSX expression, even if those variables were declared on the outside. 

```js
const name = 'Ryan';

const greeting = <p>Hello, {name}!</p>;
```

When writing JSX, it’s common to use variable to set attributes. 

For example,

```js
const sideLength = "200px";

const panda = (
	<img 
		src="image/panda.jpg"
		alt="panda"
		height={sidelength}
		width={sideLength} />
);
```

You can also use object properties to set attributes:

```js
const pics = {
	panda: "https://panda.com/panda.jpg",
	owl: "https://owl.com/owl.jpg",
	owlCat: "https://owlcat.com/owlcat.jpg"
};

const panda = (
	<img 
		src={pics.panda}
		alt="Lazy Panda" />
);
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose} />
      
ReactDOM.render(gooseImg, document.getElementById('app'))
```

JSX elements can have event listeners, just like HTML elements can.  Programming in React means constantly working with event listeners. 

You can create an event listener by giving a JSX element a special attribute, such as `<img onClick={myFunc}>`

An event listener attribute’s name should be something like `onClick` or `onMouseOver`.  The word on, plus the type of event that you’re listening for. 

**An event listener attribute’s value should be a function**.  The above example would only work if myFunc were a valid function that had been defined elsewhere. 

Note: In HTML event listener names are written in all lowercase, but in JSX they are written in camelCase. 

```js
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty"
    onClick= {makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));
```

An important thing to know is that you can not inject an if statement into a JSX expression. You can however write conditionals in JSX in a different way. 

One way to write a conditional without injecting an if statement into JSX is to write an if statement and to not inject it into JSX oddly enough. 

For example

```js
import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads'){
  img = <img src={pics.kitty} />
} else {
  img = <img src={pics.doggy} />
}

ReactDOM.render(img, document.getElementById('app'));
```

You can also write conditionals in JSX u sing the ternary operator, as it works the same way in React as it does in JS. 

The format of a ternary operator is `x ? y : z` where x y and z are all JS expressions.  When your code is executed, x is evaluated as either truthy or falsy,  if it’s truthy then y is run, if not, then z is run. 

You could use a ternary operator in JSX like this

```js
const headline = (
	<h1>
		{ age >= drinkingAge ? 'Buy Drink' : 'Do teen stuff' }
	</h1>
);
```

One final way to write conditionals in React is using the `&&` operator. `&&` works best in conditionals that will sometimes do an action, but other times do nothing at all.

For example

```js
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```

Every time `&&` is seen in the above example, either some code will run or else no code will run. 

```js
import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);
```

The array method `.map()`  also comes up often in React. 

If you want to create a list of JSX elements, then `.map()` is often a good option. (Remember, `.map()` is used to create a new array with the results of calling a function for every array element). 

For example

```js
const strings = ['Home','Shop','About Me'];

const listItmes = strings.map(string => <li>{string}</li>);

<ul>{listItmes}</ul>
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => <li>{person}</li>

);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'))
```

When you make a list in JSX,, sometimes your list will need to include something called keys:

```js
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```

Key is a JSX specific attribute— they don’t do anything that you can see, but React uses them to internally keep track of lists.  If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items in the wrong order. 

Not all lists need to have keys, only when either of the following are true:

	1. The list-items have _memory_ from one render to the next.  For instance, when a to-do list renders, each item must “remember” wether it was checked off.
	2. A list’s order might be shuffled.  For instance, a list of search results might be shuffled from one render to the next. 

If neither of these conditions are true, then you don’t need to worry about keys.  If you aren’t sure, use them!

```js
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
```

You can also write React code without using JSX at all! The majority of React programmers do use JSX, but it is possible to write React code without it. 

The following JSX expression 

```js
const h1 = <h1>Hello world!</h1>
```

Could be rewritten without JSX like this:

```js
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
```

When JSX element is compiled, the compiler transforms the JSX element into the above React code. 

```js
const greatestDivEver = React.createElement(
	"div",
	null,
	"i am div"
);
```