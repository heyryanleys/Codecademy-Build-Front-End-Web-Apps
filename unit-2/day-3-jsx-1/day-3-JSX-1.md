# Unit 2 - Day 3- JSX 1
React.js is a JS library developed by engineers at Facebook. 

Here are a few reasons why people choose to program with react

	1. Speed— apps made in react can handle complex updates and still feel quick and responsive
	2. Modular— instead of writing large, dense files of code, you can write many smaller reusable files. 
	3. Scalability— Large programs that display a lot of changing data are perfect for React
	4. Flexibility— You can use Reach for interesting projects that have nothing to do with making a web app.
	5. Popularity— It’s a popular language and there are many job options for React developers. 

Take a look at this code

`const h1 = <h1>Hello world</h1>;`

It looks like a weird hybrid of JS and HTML, but the part that looks like HTML is called JSX.  

JSX is a syntax extension for JS, it was written to bused with react and looks a lot like HTML.  Because it is a syntax extension and not valid JS, web browsers can’t read it unless it is compiled with a JSX compiler which translates any JSX into vanilla JS. 

A basic unit of JSX is called a JSX element such as the h1 tags we saw above.  

JSX elements are treated as JS expressions— they can go anywhere that JS expressions can go.  This means that JSX element can be saved in a variable, passed to a function, stored in an object or array, etc.

````js
const navBar = <nav> I am a nav bar </nav>;

const myTeam = {
center: <li>Benzo</li>
forward: <li>Rasha</li>
guard: <li>Femi</li>
};

```

JSX elements can also have attributes, just like HTML elements. A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. 

`my-attribute-name=“my-attribute-value"`

```js
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;
```

Further, you can nest JSX elements, again, just like in HTML.’

```js
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>
```

However, if a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses.

```js
(
	<a href="https://www.example.com">
 	 <h1>
	    Click me!
	  </h1>
	</a>
)
```

```js
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
)
```

**A JSX expression must have exactly one outermost element.**

For example, this code would work:

```js
const paragraphs = (
	<div id="outer-element">
		<p> p1 </p>
		<p> p2 </p>
	</div>
)
```

But this code would not work:

```js
const paragraphs = (
	<p> p1 </p>
	<p> p2 </p>
)
```

The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element. 

In order for these elements to appear on screen they have to be rendered.

The code below would render a JSX expression 

```js
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
```

ReactDom is the name of a JS library that contains several React-specific methods, all of which deal the with Dom in some way or another.  (Dom stands for Document Object Model, which for all purposes means the JS on the page (I think)).

The method .render() that is called on ReactDOM is the most common way to Redner JSX.  It takes a JSX expression, creates a corresponding tree of DOM notes, and adds that tree to the DOPM.  That is the way to make a JSX expression appear on screen. 

The <h1>Hello world</h1> part of the code above is the first argument begin passed to the .render() method. The first argument should always be a JSX expression and it will be rendered to the screen. 

The first argument is appended to whatever element is selected by the second argument (document.getElementById(‘app’)), which selects a container that the first argument should appear in. 

For example:

HTML file:
```html
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <span id="container"></span>
	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html>
```

JS file

```js
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));
```

The first argument in `ReactDom.render()` would appear in the span “container” in the HTML file. 

While the first argument in `ReactDOM.render()` needs to be a JSX expression, it really just need to evaluate to a JSX expression— it could be a variable as long as that variable evaluates to a JSX expression.

```js
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList, 
  document.getElementById('app')
);
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
	<ul>
    <li> Red </li>
    <li> Green </li>
    <li> Blue </li>
  </ul>
);

ReactDOM.render(
	myList,
  document.getElementById('app')
);
```

One unique thing about `ReactDOM.render()` is that it only updates the DOM elements that have changed.  That means I you render the exact same thing twice in a. Row, the second render will do nothing. 

```js
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:

ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:

ReactDOM.render(hello, document.getElementById('app'));
```

Most JavaScript frameworks update the DOM much more than they have to, and since it is a slow operation that can really slow down an application. 

For example, if there is a list of 10 items, you check off the first item, most JS frameworks would rebuild the entire list which is 10 times more work than is necessary.

To avoid this, React uses something called the virtual DOM.

In React, for every Dom object there is a corresponding virtual DOM object, which is a representation of a DOM object, kind of like a lightweight copy.  The virtual DOM object has the same properties as the real DOM object, but it can’t directly change what’s on screen like the actual DOM. 

Because it doesn’t change anything on screen, it can make the changes much faster (Kind of like moving rooms on a blueprint of a house rather than knocking down walls).

When you Redner a JSX element, every single virtual DOM object gets updated, which sounds very inefficient, but because of how fast the virtual DOM can update, it is insignificant. 

Once the virtual DOM has updated, React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update, then by figuring out exactly which virtual DOM objects have changed (called ‘diffing’), React knows which objects to change in the real DOM. 


