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

```js
import Airplane from './airplane';

function displayFuelCapacity(){
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ' : ' + element.fuelCapacity);
  })
}

displayFuelCapacity();
```

In ES6 there is a second common approach to export modules— in addition to the default exports above there are named exports which allow us to export data through the use of variables.

Codecademy’s example:

```js
let specialty = '';
function isVeg(){
};
function isLowSod(){
};

export { specialty, isVeg };
```

When we use named exports, we are not setting the properties on an object, each export is stored in its own variable.

Specialty is a string object, while isVeg and isLowSod are objects in the form of functions— *In JS, every function is a function object*

`export { specialty, isVeg};` exports the objects by their variable names.

```js
let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots','flightAttendants','engieers','medicalAssistance','sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots','flightAttendants']
 }
];

let flightRequirements = {
  requiredStaff: 4
}

function meetsStaffRequirements(availableStaff, requiredStaff){
  if (availableStaff.length >= requiredStaff){
    return true
  } else {
    return false
  }
}

export { availableAirplanes, flightRequirements, meetsStaffRequirements };
```

To import objects stored in a variable, we use the import keyword and include the variables in a set of `{}`.

```js
imnport {specialty,isVeg } from './menu';
console.log(specialty);
```

Above, specialty and isVegetarian are imports, which means we can use these objects within our code.

```js
let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots','flightAttendants','engieers','medicalAssistance','sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots','flightAttendants']
 }
];

let flightRequirements = {
  requiredStaff: 4
}

function meetsStaffRequirements(availableStaff, requiredStaff){
  if (availableStaff.length >= requiredStaff){
    return true
  } else {
    return false
  }
}

export { availableAirplanes, flightRequirements, meetsStaffRequirements };
```

Named exports are also distinct in that they can be exported as son as they are declared by placing the keyword export in front of variable declarations.

```js
export let specialty = '';
export function isVeg(){
};
function isLowSod(){
};
```

Above, the export keyword allows us to export the first two objects upon declaration, so we no longer need the export statement at the bottom of our file.

```js
export let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots','flightAttendants','engieers','medicalAssistance','sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300,
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots','flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200,
 }
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
}

export function meetsSpeedRangeRequirements(maxSpeed,minSpeed,requiredSpeedRange){
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange){
    return true
  } else {
    return false
  };
}

export function meetsStaffRequirements(availableStaff, requiredStaff){
  if (availableStaff.length >= requiredStaff){
    return true
  } else {
    return false
  }
}

```

To import variables that are declared, we would use the same syntax that describes the variable name, so even though the way we export named exports, we import them by their name still

```js
import { availableAirplanes,flightRequirements,meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

function displayFuelCapacity(){
  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ' : ' + element.fuelCapacity);
  })
}

function displayStaffStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' +  meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
  });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();

```

Named exports also offer a way to change the name of variables when we export or import them— we can do this using the *as* keyword.

```js
let specialty = '';
let isVeg = function(){
};
let isLowSod = function(){
};

export { specialty as chefsSpecial, isVeg as isVeggie, isLowSodium }
```

The as keyword allows us to give a variable name an alias so isVeg when imported will be called isVeggie.

To import names export aliases with the as keyword, we add the aliased variable in our import statement

`import { chefsSpecial, isVeg } from ‘./menu’`

You can also import the entire module as an alias

```js
import * as Carte. from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium
```

We can also use named exports and default exports together.

```js
let speialty = '';
function isVeg(){
};
function isLowSod(){
};
function isGlutenFRee(){
};

export { specialty as chefsSpecial, isVeg as isVeggie };
export default isGlutenFree;
```

Above, we use the keyword export to export the named exports at the bottom of the file, but we also export isGlutenFree using export default.

Similarly, we can import using a mix and match of types of imports

```js
imports { specialty, isVeggie, isLowSod } from './menu'

import GlutenFree from './menu'
```

```js
import { availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

function displayFuelCapacity(){
  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ' : ' + element.fuelCapacity);
  })
}

function displayStaffStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' +  meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
  });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();

```
