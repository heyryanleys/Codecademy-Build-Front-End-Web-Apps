# Day 19 - Modules
JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another programs. 

They are useful for a number of reasons— by separating code with similar logic into files called modules we can:
	
	1. Fix and debug code more easily
	2. Reuse and recycle defined logic in different parts of our application
	3. Keep information private and protected from other modules
	4. Prevent pollution of the global namespace and potential naming collisions by cautiously selecting variables and behavior we load into a program.

This lesson starts with defining a module in one file and making the module available in another file using module.exports

Codecademy’s example:
```js
let Menu = {};
Menu.specialty = 'Beet Burger';

module.exports = Menu
```

The first line of the code creates an object that represents the module menu (the capitalized letter is often used to show that this will be a module rather than standard object…. I think)

module.exports = Menu exports the Menu object as a module.  `module` is a variable that represents the module and `.exports` exposes the module as an object.

The standard pattern used for exporting modules is

	1. Define an object to represent the module
	2. Add data or behavior to the module
	3. Export the module 

Example:
```js
let Airplane = {};
Airplane.myAirplane = "StarJet";
module.exports = Airplane
```

To make use of the exported module and the behavior we define within it, we have to import the module.  A common way to do this is with the require() function. 

For example, if we wanted the module to control the menu’s data and behavior, and we want to keep a separate file to handle placing an order, we would create a separate order.js file and import the menu module from menu.js to order.js using require ()

In order.js we would write

```js
const Menu = require('./menu.js');

function placeOrder(){
	console.log('My order is: ' + Menu.specialy);
}

placeOrder()
```

Above we imported the module by creating a variable with const called Menu and set it equal to the value of the require function.   

We could also wrap any collection of data and functions in an object and export the object using module.exports. 

For example, in menu.js we could write 

```js
let Menu = {};

module.exports = {
	specialty: 'Beet Burger',
	getSpecialty: function(){
		return this.specialy;
	}
}
```

In the above code, module.exports exposes the current module as an object with specialty and get Specialty as properties on the object,.

Then in order.js we would write

```js
const Menu = require('./menu.js');
console.log(Menu.getSpecialty());
```

Another example:

```js
// File: 2-airplane.js
let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function(){
    return this.myAirplane;
  }
};
```

And

```js
const Airplane = require('./2-airplane.js')

console.log(Airplane.displayAirplane())
```

As of ES6, JS has implemented a new more readable and flexible syntax for exporting modules.  These are usually broken down into one of two techniques, default export and named exports.

First we’ll start with default exports.  The default export syntax works very similar to module.exports, allowing us to export one module per file.

```js
let Menu = {}

export default Menu
```

Above, export default uses the JS export statement to export JS objects, functions, and primitive data types.  `Menu` refers to the name of the Menu object.

```js
const Airplane = {}

Airplane.availableAirplanes = [
  {
  	name: 'AeroJet',
  	fuelCapacity: 800
  },
  {
  	name: 'SkyJet',
  	fuelCapacity: 500
  }
]

export default Airplane;
```

Within ES6 you can also import using the following syntax:

```js
import Menu from './menu'
```

The import keyword begins the statement, the keyword Menu specifies the name of the variable to store the default export in, from specifies where to load from. 