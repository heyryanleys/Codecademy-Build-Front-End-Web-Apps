# Day 14 - Passing Information 2
In the last lesson s we passed information from a stateful, parent component to a stateless, child component. 

In this lesson, we’ll be expanding on that pattern.  **The stateless, child component will update the state of the parent component.** 

This works by:

	1. The parent component class defines a method that calls `this.setState()`. 

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}
```

	2. The parent component _binds_ the newly-defined method to the current instance of the component in its constructor.  This is to make sure that when passing the method to the child component, it will still update the parent component. 

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}
```

	3. Once the parent has defined a method that updates its state and bound to it, the parent then passes that method down to the child. 

```js
import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}
```

	4. Lastly, the child receives the passed-down function and uses it as an event handler. 

```js
// child.js
import React from 'react';

export class Child extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names">
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
```

```js
// parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name={this.state.name} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
```

In child.js above, there is a dropdown menu of 3 names.  Our goal is to make the parent class update with the corresponding name when it is selected in the dropdown. 

In order do to this, wee need to update the Child’s `this.props.name`. 

In Parent, a Child class is rendered and is passed in a name prop that is the same value that the Child class displays in its h1. 

Our first step is to define a new function that can change this.state.name in the parent.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
  }
  
  changeName(newName){
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
```

Parent must then pass pass this function down to child so that child can use it in an event listener on the dropdown menu. 

First, we need to bind the changeName function to the constructor function within Parent. 

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this)
  }
  
  changeName(newName){
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
```

Then, changeName needs to be passed down to child bu adding a second attribute to `<Child />` in parent.js 

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this)
  }
  
  changeName(newName){
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
```

Back in child.js, an onChange attribute needs to be added to the `<select>` tag and a the changeName function needs to be passed anew name as an argument in order to update the prop.  We can accomplish this by adding a new function. 

This new function should take an event object as an argument, extract the name that we want from that event object, and then call the event handler, passing in the extracted name.  (Codecademy says this seems like a lot (they’re not wrong!), but it happen so often it will soon feel intuitive). 

The first step is that in child.js, before the render function, we need to define a new function that can be passed an _event object_. 

```js
handleChange(e) {
	const name = e.target.value;
	this.props.onChange(name);
}
```

Now we’ve defined a new function that can take an _event ojbect_ and use it to correctly update the parent’s state. 

As with all methods that we pass in React, we must first bind `this` to our new method to the current instance of child using a constructor. 

```js
import React from 'react';

export class Child extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
    const name = e.target.value;
    this.props.onChange(name)
  }
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.props.onChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
```

Lastly, in the Child’s render function, we need change the event handler from `{this.props.onChange}` to `{this.handleChange}` and we’re good to go!

```js
import React from 'react';

export class Child extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
    const name = e.target.value;
    this.props.onChange(name)
  }
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
```