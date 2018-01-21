# Day 13 - Passing Information 1
This lesson is about passing props from a stateful parent component to a stateless child component, as well as when to use props versus state. 

This programming pattern uses two React components: a stateful component, and a stateless component.  Stateful descriptor any component that has a state property.  In this pattern, a stateful component passes its state down to a stateless component. 

First, we need two component classes: a stateful class and a stateless class. 

```js import React from 'react';
import ReactDOM from 'react-dom';


class Parent extends React.Component{
  render(){
    return <div></div>
  }
}

```

The above class will be our stateful class, so we need to set its initial state with a construct method. 

```js
// parent.js
import React from 'react';
import ReactDOM from 'react-dom';


class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state = { name: 'Frarthur' }
  }
  
  render(){
    return <div></div>
  }
}


```

Above we can now see that we have a stateful component class named Parent.  Now we will make a stateless component class. 

```js
// child.js
import React from 'react';

export class Child extends React.Component{
  render(){
    return <h1></h1>;
  }
}
```

Child is going to receive a prop called name, and display that prop on the screen.  It’s important to remember to properly export and import child.js to parent.js so <Parent /> can render the class. 

```js
// parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child'

class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state = { name: 'Frarthur' }
  }
  
  render(){
    return <Child name={this.state.name} />
  }
}

ReactDOM.render(
	<Parent />,
  document.getElementById('app')
)
```

```js
// child.js
import React from 'react';

export class Child extends React.Component{
  render(){
    return <h1>Hey, my name is {this.props.name}</h1>;
  }
}
```

Above, you can see that in parent.js, you first create a Parent class that adds the property `name: ‘Frarthur` to the Parent class.  In child.js a sateless class is made that returns the code `<h1>Hey, my name is {this.props.name}</h1>`.  And exports it to be imported by parent.js.  Back in parent.js, the Child class is rendered and the name property is set to the Parent’s property of ‘Frarthur’.

Yesterday we learned that c component can change it’s state by calling `this.setState()`, but **a component should never update this.props**.  

For example:
```js
import React from 'react';

class Bad extends React.Component {
  render() {
    this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
    return <h1>{this.props.message}</h1>;
  }
}
```

The above code should never be used.  **A React component should use props to store information that can be changed, but can only be changed by a different component.**

**A React component should use states to store information that the component itself can change**

