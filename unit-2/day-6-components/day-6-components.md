# Day 6 - Components
Take for example the following HTML code:

```html
<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>
```

One way to make a React component that renders this HTML would be by using the following code:

```js
import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);
```

It’s important to note that above we see we can use return with parentheses to return a lot more code than just by writing return and including the line of code after it. 

Another example

```js
import React from 'react';
import ReactDOM from 'react-dom';


const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component{
  render(){
    return(
      <div>
        <h1>{owl.title}</h1>
        <img 
          src={owl.src} 
          alt={owl.title}/>
      </div>
    )
  }
}

ReactDOM.render(
	<Owl />,
  document.getElementById('app')
)
```

As we talked about before, a render function must have a return return statement, but that isn’t the only thing it can have. 

A render function can also be a fine place to put simple calculations that need to happen right before a component renders.  Here is Codecademy’s example of some calculations inside of a render function. 

```js
class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render(){
    const friend = friends[0]
    return(
    	<div>
        <h1>{friend.title}</h1>
        <img 
          src={friend.src} />
      </div>
    )
  }
}

ReactDOM.render(
	<Friend />,
  document.getElementById('app')
);
```

You can also use a conditional statement inside of a render function. 

Codecademy’s example:

```js
import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);
```

It’s important to note that just like the variable we declared in the last example, the conditional happens within the render method but before the return statement. 

```js
import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render(){
    if (fiftyFifty){
      return <h1>Tonight I'm going out WOO0</h1>
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>
    }
  }
}

ReactDOM.render(
	<TonightsPlan />,
  document.getElementById('app')
);
```

Just like in JS, the word `this` is also used a lot in React— especially inside of a the body of a component class declaration. 

Codecademy’s example:
```js
class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  }
}
```

Above, the `this` keyword refers an to an instance of IceCreamGuy, so `this.food` is calling IceCreamGuy.food.   Technically, this is actually referring to the object on which this’s enclosing method (in this case .render) is classed. However, it’s almost inevitable that this object will be an instance of IceCreamGuy. 

It also at first appears that it would need to be `this.food()` rather than `this.food`, but because .food is a getter method you don’t need the parentheses. 

```js
import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
	get name(){
    return 'Ryan';
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));
```

Render functions often contain event listeners as well.  For example:

```js
render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}
```

An event _handler_ is a function that gets called in response to an event (so in the above example, onOver is the event listener, and myFunc() is the event handler.

In React, you define event handlers as methods on a component class, like this:

```js
class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}
```