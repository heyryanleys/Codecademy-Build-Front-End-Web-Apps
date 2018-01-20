# Day 12 - State
This lesson is about _state_ which is a way to store and update dynamic information in a React component.  With props and state we can create dynamic content in a React component.  

Dynamic information is information that can change.  React components often need dynamic information in order to Redner.  For example, if there is a component that displays the score of a basketball game, the score of the game may change over time which means our component will have to know the score in order to render in a useful way. 

There ware two ways for a component to get dynamic information: props and state.  Beside props and state, every value used in a component should always stay the same. 

Like props, a component’s state is not passed in from the outside.  A component decides its own state. 

To make a component have state, you can give it a state proper which should be declared inside of a constructor method, like this:

```js
class Example extends React.Component {
	constructor(props){
		super(props);
		this.state = { mood: 'decent' };
	}

	render (){
		return <div></div>
	}
}

<Example />
```

`this.state` should be equal to an object, like in the example above.  This object represents the initial state of any component instance. 

Example
```js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
	constructor(props){
    super(props);
    this.state = { title: 'Best App' };
  }
	
  render() {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
}
```

To read a components state, use the expressions `this.state.name-of-property`. 

```js
class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}
```

The above component class reads a property in its state from inside of its render function.  Just like `this.props` you can use `this.state` from any property defined inside of a component class. 

```js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
	constructor(props){
    super(props);
    this.state = { title: 'Best App' };
  }
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
```

A component can do more than just read its own state, it can also change its own state. 


A component changes its state by calling the function `this.setState()`.

`this.setState()` takes two arguments: an object that will update the component’s state, and a callback (you basically never need the callback according to Codecademy).

Codecademy’s example:
```js
import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      mood:   'great',
      hungry: false
    };
  }

  render() {
    return <div></div>;
  }
}

<Example />
```

In the code above, Example has a sate of `mood: ‘great’` and `hungry: false`.  

If Example were to call `this.setState({ hungry: true });` then hungry would change from false to true. 

Essentially, `this.setState()` takes an object, and merges that object with the component’s current state.  If there are properties in the current state that aren’t part of the object, then those properties remain how they are. 

The most common way to call `this.setState()`  is to call a custom function that _wraps_ a `this.setState()` call. 

Codecademy’s example:
```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }

  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}
```

You can see that `makeSomeFog()` contains a call to `this.setState()`.

There is also a strange line within the constructor function (`this.makeSomeFog = this.makeSomeFod.bind(this`).  This line is necessary because `makeSomeFog()`’s body contains the word `this`. 

Before getting into that, we’re going to walk through how a function wrapping `this.setState()`. Might work in practice. 

```js
// Mood.js
import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>Im feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));
```

In the code above, the user triggers an _event_ by clicking on `<button></button>`.  Once that happens,  it calls an /event handler/ function called `this.toggleMood()`.  Inside the body of the event handler, `this.setState()` is called which changes the component’s state. 

Because of how event handlers are bound in JS, `this.toogleMood()` loses it’s `this` when it is used on a line outside of it’s proper scope (Like on the line of code that says `<button onClick={this.toggleMood}></button>`.  The way to fix this is to bound the correct `this` to `this.toggleMood` using the line `this.toggleMood = this.toggleModd.bind(this)`. 

```js
import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor(){
    const newColor = this.state.color == green ? yellow : green
    this.setState({color : newColor})
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(
	<Toggle />,
  document.getElementById('app')
)
```

Above, it looks strange that on the line that when `this.change` color is called when the button is clicked that it isn’t rendered again to show a change.

That line changes a virtual DOM object’s color to the new `this.state.color`, which eventually causes a change in the screen.  Normally you would think that if you called `.changeColor()` you would also have to call `.render()` again because as it’s written `.changeColor()` would only change the color if you render again.  

Any time that you call `this.setState()`, the `.render()` function is called automatically as soon as the state has changed

It helps to think of `this.setState()` as being a `this.setState()` and a `.render()` function.  Because of this you can never call `this.setState()`  within a `.render()` function or you will create an infinite loop. 




