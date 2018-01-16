# Day 10 - Components and Props
## Components
This lesson focuses on learning how React components can interact with one another.  A React application can contain dozens, or even hundreds, of components.   Each component might be small and relatively unremarkable on its own.  When combined, however, they can form complex ecosystems of information. 

In other words, React apps are made out of components, but what makes React special is the way they interact. 

Here is a .render() method that returns an HTML-like JSX element:

```js
class Example extends React.Component {
	render(){
		reutn <h1> Hello World </h1>
	}
}
```

So far, we’ve seen render methods return divs, paragraphs, and h1 tags. 

Render methods can also return another kind of JSX: _component instances_ 

```js
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
```

In the example above, Crazy renders and <OMG /> class

When a component renders another component, what happens is very similar when ReactDOM.render() renders a component. 

```js
import React from 'react';
import ReactDOM from 'react-dom';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
```

When you use React.js, every JS file in your application is invisible to every other JS file by default.  You must import the other JS files in order to be able to render components from them.

`import {NavBar} from ‘./NavBar.js'`

When you use an import statement, and the string at the end begins with either a . Or a /, then import will treat that string as a file path.  Import will follow that file path and import the file that it finds. If you file doesn’t have an extension, then .js is assumed, so you could write

`import {NavBar} from ‘./NavBar`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar'

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
```

When you import a variable from a file that is not the current file, and you have to also export that variable in the other file. 

Like we’ve learned before, a common way to export this variable would be using named exports.   

In one file, place the keyword export immediately before  something that you want to export. 

```js
export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  SCUM:     'http://www.ccs.neu.edu/home/shivers/rants/scum.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};
```

## Props
In this lesson, we’ll learn how a parent component can pass information to a child component, using an object called _props_ (short for properties).

