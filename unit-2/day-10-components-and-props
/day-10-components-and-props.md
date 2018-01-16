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

Render methods can also return another kind of JSX: /component instances/

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
In this lesson, we’ll learn how a parent component can pass information to a child component, using an object called /props/ (short for properties).

We just learned that components can interact by having one component render another component. In t his lessons, we’ll learn another way that components can interact: a component can pass information to another component, using props.

Every component has something called props.  A component’s props is an object (like everything else it seems like :)).  It holds information about that component.

Top see a component’s props object, you can use the expressions `this.props`.

Codecademy’s example:

```js
render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}
```

Most of the props of a component are not that important, but there are some that are extremely valuable.

You can pass information to a React component by giving that component an attribute: `<MyComponent foo=“bar” />`

Let’s say we wanted top pass a component to the message “This is some top secret info.”, we could do it by writing `<Example message=“This is some top secret info.” />`.

As new can see, to pass information to a component, you need a name for the information you want to pass (above the name is message, but we can use any name we want).

You can also pass in information that isn’t a thing using `{}`

Ex. `<Greeting myInfo={[“top”,”secret”,”message”]} />` `<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />`

After passing a information to a components props object, we often want a component to display the information that we passed. You can do that by:

	1. Find the components class that is going to receive that information
	2. Include `this.props.name-of-information` in that component classes’s render method’s return statement.

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Ryan' />,
  document.getElementById('app')
);
```

We’ve now learned to pass a prop to a component,

`<Greeting firstName=“ryan” />`

And how to access and display a passed-in prop

```js
render(){
	return <h1>Hi {this.props.firstName}!</h1>
}
```

The most common use of props is to pass information to a component from a different component.

Below we are going to pass a prop to a component instance called <Greeting /> from a component instance called <App />.

If <App /> is going to pass a prop to <Greeting />, then <App /> is going to render <Greeting />

Since <Greeting /> is going to be rendered by another component, it needs to be exported and the imported.

Once that happens, <Greeting /> has to be added to App’s render method, which is where you will add the prop you want to pass.

Once we’ve done that and we run the app, <App /> will render <Greeting /> and pass it a prop!


```js
// Greeting.js
import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}
```

```js
// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './Greeting'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="ryan" />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

You can do more with props than just display them, you can also use props to make decisions.  For example, below is some code that would check a components prop to see if the attribute name = Wolfgang Amadeus Mozart, and display different text depending on if it is or isn’t

```js
import React from 'react';

export class Welcome extends React.Component {
  render() {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
      	<h2>
      	  hello sir it is truly great to meet you here on the web
      	</h2>
      );
    } else {
      return (
      	<h2>
      	  WELCOME "2" MY WEB SITE BABYYY!!!!!
      	</h2>
      );
    }
  }
}
```

We can, and often will, pass functions as props.  It is especially common to pass event handler functions as props.

You have to define an event handler before you can pass one anywhere.  You can define an event handler as a method on the component class, just like the Redner method.  Almost all functions that you define in React will be defined this way, as methods in a class.

For example, in the code below you will see an event handler declared before the render method, and then it is called upon in the render method.

```js
import React from 'react';

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk(){
  	let speech = '';
  	for (let i = 0; i < 10000; i++) {
    	speech += 'blah ';
  	}
  	alert(speech);
  },

  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
```

Now that we defined a method on the talker called talk, well want to pass that function to another component.  You can do this by creating an attribute on the component and making the value equal to this.function

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button talk={this.talk} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
```

Now that we’ve passed a function from <Talker /> to <Button />, but in order to have the function called on the elements within the <Button /> component, we’ll need to attach talk to the element within <Button /> as an event handler.

Here is our code that holds the Button component.

```js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button>
        Click me!
      </button>
    );
  }
}
```

In order to have it so that when the button is clicked the talk function is called, we ned to attach talk to the button as an event handler.

We do that the same way we attach any event handler to a JSX element— we give it a special attribute (such as onClick or onHover), and the attributes value should be the event handler that we want to attach.

```js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}
```

We should take a second to talk about naming things.  When we pass an event handler as props, as we did above, there are two names that you have to choose.  Both naming choices occur int he parent component class, that is the component class that defines the event handler and passes is (So above it would be the Talker component).

The first name that you have to choose is the name of the event handler itself.  If we look at Talker.js, we can see that our event handler is named `talk`.

The second name we have to choose is the name of the prop that you want to pass the event handler, we also chose `talk`  for this.

While these tow names can be whatever we want, there is a naming convention that they often follow.  First, think about the type of event you are listening for (for us, the type was a click).

If you are listening for a click event, then you can name your event handler handleClick, if you are looking for a keyPress event, then you can name your event handler handleKeyPress.

```js
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}
```

Our prop name should be the word `on`, plus our event type.  If we are listening for a quick event, then we want to name our prop `onCLick`, or if we are eating for a keypress, we should use `onKeyPress`.

```js
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }

  render() {
    return <Child onHover={this.handleHover} />;
  }
}
```

It’s important to note that while in HTML onClick is reserved for a certain function, that isn’t the case with React.

Every component’s props object has a property named /children/.

this.props.children will return everything in between a component’s opening and closing JSX tags.

So far, all of the components that we’ve seen have been self-closing gas such as `<MyComponent  />`, but they don’t have to be.  We could write <MyComponent> </MyComponent> and it would still work.  this.props.children would return everything in between those two tags.

```js
// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>

```

The above example’s this.props.children would equal the text “I am a child of BigButton”.

```js
<BigButton>
  <LilButton />
</BigButton>
```

this.props.children for the above would equal a <LilButton /> component.

```js
<BigButton />
```

this.props.children for the above would equal undefined.

If a component has more than one child between ints JSX tags, then this.props.children will return those children in an array.

You can also create defaultProps for a component so that if an elements expects to received a prop and it doesn’t, it will still display there default.

For example, the below code is expecting to receive a prop called text:

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:


ReactDOM.render(
  <Button />,
  document.getElementById('app')
);
```

We can give our component a class name defaultProps to fix this:

```js
class Example extends React.Component{
	render(){
		return <h1>{this.props.text}</h1>
	}
}

Example.defaultProps = { text: 'yo'};
```

With the above code, if the Example component doesn’t receive any test, it will display “yo”, and if it does, it will display whatever text it was passed.

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = {text: 'I am a button'}

ReactDOM.render(
  <Button />,
  document.getElementById('app')
);
```
