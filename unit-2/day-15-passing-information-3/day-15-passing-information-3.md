# Day 15 - Passing Information 3
In passing information 1 we learned a React pattern that passes down a prop from a stateful parent component to a stateless child component. In the second lesson we learned that the pattern in lesson 1 is actually part of larger pattern, which is when a stateful parent component passes down an event handler to a stateless child component, and the child component then uses that event handler to update its parent’s state. 

In this lesson, we’ll expand on the pattern one more time and learn how a child component can update it’s parent state, and the parent then passes that state to a _sibling_ component. 

One of the first things that we learned about components is that they should only have one job.  However, in the last lesson, the child had two jobs. 

	1. Child displayed a name
	2. Child offered a way to change that name.

What we should do is divide Child into two, one component for displaying the name, and a different component for allowing a user to change the name. 

```js
// parent.js
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

```js
// child.js
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}
```

```js
// sibling.js
import React from 'react';

export class Sibling extends React.Component {
  render() {

    return (
      <div>
        <h1>Hey, my name is Frarthur!</h1>
        <h2>Don't you think Frarthur is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked Frarthur!</h2>
      </div>
    );
  }
}
```

In Child.js, we notice that since last time, the line of code `<h1> Hey, my name is {this.props.name}!</h1>` has disappeared. 

The new version of Child renders a dropdown menu for changing the name and _that’s it_.

Sibling.js is now a class that will display the name (or at least, after it’s edited to do so). 

This is part of an essential new concept— we will have one stateless component display information, and another stateless component that offers the ability to change that information. 

If you look in sibling.js, we can now see that a `<Sibling />` has been called on line 27.  Sibling’s job is to display the selected name, the name which is store in Parent’s state— this means that Parent will have to pass the name to Sibling to that Sibling can display it. 

```js
  render() {
    return (
      <div>
        <Child 
          onChange={this.changeName} />
        <Sibling
          name={this.state.name} />
      </div>
    );
  }
```

Now each of those components are doing one thing— child is changing the name while sibling is displaying the name.

The last step is to make it so that sibling displays the name prop. 

```js
import React from 'react';

export class Sibling extends React.Component {
  render() {
	let name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}
```