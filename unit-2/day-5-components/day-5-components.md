# Day 5 - Components
React applications are made out of _components_, which are small reusable chunks of code that is responsible for one job, which is often to render some HTML. 

Codecademy’s example:

```js
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```

`import React from ‘react’;`   This line of code creates a new variable named React, and its value is a particular, imported JS object. 

```js
// create a variable named React:
import React from 'react';
// evaluate this variable and get a particular, imported JavaScript object:
React // { imported object properties here... }
```

This imported object contains methods that we need in order to use React (Called the React library).

`import ReactDOM from ‘react-dom'` also imports a JS object, but the methods imported from react-do are meant for interacting with the DOM.  The methods imported from react don’t deal with the DOM at all, they don’t engage with anything that isn’t part of React. 

In addition to React components being small, reusable chunks of code that are responsible for one job (often involving rendering HTML), every component must also come from a component class. 

A component class is kind of like a factory that creates components.  If you have a component class, then you can use that class to produce as many components as you want.

In order to make a component class, you use a based class from the React library called `React.Component`.

`React.Component` is a JS class.  In order to create your own component class you must subclass `React.Component`, which you can do using the syntax `class YourComponentName extends React.Component {}`

```js
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

We now know that the code above is declaring a new component class, which is like a factory for building React components. 

When you declare a new component class, you need to give that component a name (such as MyComponentClass). 

Component class variable must being with capital letters, and adhere to UpperCamelCase. 

The body of the component class will act as a set of instructions, explaining to your component class how it should build a React component. 

```js
{
	render() {
		return <h1>Hellow world</h1>;
	}
}
```

The only required property you have to include in the body of the component class is the `render`  method, which must contain a return statement (which often returns a JSX expression). 

Once your combine all of the things above, you have a working component class that is ready to follow the instructions and make some react components.  To do this, you use the following line of code:

`<MyComponentClass />`

To make a React component you write a JSX element.  Instead of naming your JSX element something like h1 or div, like we’ve done before, we give it the same name as a component class.. 

Since JSX elements can be either HTML-liike or component instances, that is why you must user UpperCamelCase to essentially say “I am a component instance, not an html tag”.

```js
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
<MyComponentClass />
```

Whenever you make a component (like my calling `<MyComponentClass />`, that component in hearts all of the methods of its component class.  Since MyComponentClass only has one method (`MyComponentClass.render()`), MyComponentClass also now has a method named render. 

You could make million different `<MyComponentClass />` instances, and each one would inherit the exact same render method. 

In order to render a component, that component needs to have a method named render.  Since ours does, all that we need to do is call it.   This looks differs that we would probably expect however.

To call a component’s render method, you pass that component to `ReactDOM.render()`.

```js
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app)
);
```

Above, `ReactDOM.render()` will tell `<MyCompopnentClass />` to call its render method, which will return the JSX elect inside of it, and then take that resulting JSX element and add it to the virtual DOM. 

```js
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
ReactDOM.render(
	<MyComponentClass />,
  document.getElementById('app')
);
```