# Day 16 - Objects
Javascript **objects** are containers that can store data and functions.  Data store in an object is not ordered, and it can only be accessed by calling its associated **key**.

**key-value** pairs look like this:

```js
let restauraunt = {
name: 'Italian Bistro',
seatingCapactiy: 120,
hasDineInSpecial: true,
entrees: ['Penne','Chicken parm','Pesto linguine']
};
```

If you break that example down once step at a time: 

The variable named restaurant stores the **object**, which is created between the Curley braces. 

Name, seatingCapacity, hasDineInSpecial, and entrees are all **keys**, which are separated from their value with a colon, and are separated from each other by a comma. 

The most common way to access a key’s value is to use dot notation. 

`console.log(restaurant.entrees);`

Which put out the output:

`[‘Penne’,’Chicken parm’,’Pesto linguine’]`

Aside from dot notation, you can also access a key’s value with bracket notion. 

`console.log(restaurant[‘entrees’])`

A reason you might use bracket notation over dot notation is because you can use variables inside the brackets to select the keys of an object. 

```js
let meal = 'none';
let time = 12;

const resaurantSpecials = {
breakfast: 'OJ is free with pancakes',
lunch: 'Free apps',
none: 'Currently no specials'
};

if (time < 11) {
meal = 'breakfast';
} else if (time  < 17) {
meal = 'lunch'
}

console.log(resaurantSpecials[meal]);
```

Another example: 

```js
let person = {
  name: 'Ryan',
  age: 24,
  weekendAlarm: 'No alarms',
  weekAlarm: 'Alarm set to 7AM',
}

let day = 'Friday'
let alarm;

if (day === 'Saturday' || day === 'Sunday'){
  alarm = 'weekendAlarm'
} else {
  alarm = 'weekAlarm'
}

console.log(person[alarm])

console.log(person['name']);
console.log(person['age'])
```

Often you will want to add an item to an object after it’s been created.  We can do this by assigning a value to a new key that’s attached to our object, because objects are mutable (even if it’s attached to a const variable).

```js
const restaurant = {
	name: 'Italian bistro',
	seatingCapacity: 120,
	hasDineInSpecial: true,
	entrees: ['Penne','Spaghetti','Ziti']
}

// Adding appetizers with bracket notation
restaurant['appetizers'] = ['Antipasto','Bread'],

//Adding desserts with dot notation
restaurant.desserts = ['Cake','More cake']
```

Because objects are mutable, you can also modify a key’s value by assigning a new value to it later in the code. 

``` js
let person = {
  name: 'Ryan',
  age: 24,
  weekendAlarm: 'No alarms',
  weekAlarm: 'Alarm set to 7AM',
}

person.hobbies = ['Running','Coding']
person.hobbies = ['Swimming’]

console.log(person.hobbies)
// Output: [ ‘Swimming’ ]
```

In the above code, we’ve paired **keys** with strings, numbers, booleans, and arrays. You can also pair a function with a key (although they are called methods within a key-function pair).

Codecademys example:

```js
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant: () => {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurant: () => {
    return 'Lock the door, flip the open sign. We are closed.'
  }
};

console.log(restaurant.openRestaurant());

console.log(restaurant.closeRestaurant());
```

With a version of JS that was released in 2015 (ES6), they changed the syntax you can use to create methods. 

Instead of 

```js
sayHello: () => {
	return 'Hello There!'
}
```

You can simply write:

```js
sayHello(){
	return 'Hello There!'
}
```

In an object, it becomes very useful to create methods that operate on the data within that object.

Here is another Codecademy example:

```js
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant() {
		if(hasDineInSpecial){
			return 'Unlock the door and write the specials'
		} else {
			return 'Unlock the door but don't post any specials
		}
	}
};

console.log(restauraunt.openRestaurant)
	
```

While that code may look like it would work, it would return an error because the **hasDineInSpeical is outside of the methods scope**.

To address this issue, that is when the **this** keyword comes in handy to access properties inside the same object. 

```js
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant() {
		if(this.hasDineInSpecial){
			return 'Unlock the door and write the specials'
		} else {
			return 'Unlock the door but don't post any specials
		}
	}
};

console.log(restauraunt.openRestaurant)
```

This only refers to the object that well it inside. 

For example,. If we have: 

```js
let myObj = {
	name: 'Ryan',
	sayHello(){
		return `${this.jname} says hello!`
	}
}
```

And we call `myObj.sayHello()` our method would print `Ryan Says Hello!` Because this is called inside of myObj, it limits the score of the properties inside myObj. 

You can bring the property into another object like so:

```js
let yourObj = {
	name: Timer
}

yourObj.sayHello = myObj.sayHello();
```

Now if you were to call `yourObj.sayHello()` it would return `Timer says hello!`.

**Getter** and **Setter** methods are often used within objects. Getter and setter methods get and set the properties inside of an object. You might want to use these methods for getting and setting properties as opposed to getting and setting them directly because you can:

	1. Check if new data is valid before setting a property
	2. Perform an action on the data while you are getting or setting a property
	3. Control which properties can be set and retrieved.

If you look back on the restaurant object from earlier:

```js
let restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto']
}
```

The seatingCapacity key holds the number 120.  This is used by the employees to use it to calculate the number of available seats on any given time during the evening because Available seats = Capacity - Seats Taken.

If the restaurant adds an extra rom to improve the seating capacity by 30 people, they employees must change the seatingCapacity value within the restaurant object. 

If when you were writing the program you anticipated that seatingCapacity would change, you can use getters and setters in your program. 

To do this, they would need to write code that checks if the newly set seatingCapacity value is valid (for example, intends to be 150 not ‘One hundred fifty’).   You could do that using the following method:

```js
let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto']

	set SeatingCapacity(newCapacity){
		if (typeof newCapacity === 'number'){
			this._seatingCapacity = newCapacity;
			console.log(`${newCapacity} is a valid input.`);
		} else {
			console.log(`${newCapacity} needs to be a number`);
		}
	}
}
```

If we go through this step by step:

	1. We prepend the property names with underscores indicate a property or value should not be modified directly by other code. Good practice is to prepend all properties with an underscore within an object and create setters for all attributes you need to access later in your code. 
	2. The setSeatingCapacity **setter**  method accepts newCapacity as a variable.  The newCapacity variable holds the new value that we will store in _seatingCapacity. 
	3. Within the seatingCapacity setter we use a condition statement to make sure that newCapacity variable is a number. 

Here is an example I completed in Codecademy.  There is a person object and we want to change the age of person with a setter. 

```js
let person = {
  _name: 'Lu Xun',
  _age: 137

};
```

This code solves that example: 

```js
let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(newAge){
    if(typeof newAge === 'number'){
      this._age = newAge;
    } else {
      return 'Invalid input'
    }
  
	}
};
```

To use a setter method, you call it the same way we edit properties, but instead of editing the property directly you use a setter. 

Here is the restaurant example again:

```js
let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
      console.log(`${newCapacity} is valid input.`);
    } else {
        console.log(`Change ${newCapacity} to a number.`);
    }
}
``` 

To call the setter method you would write

```js

restaurant.seatingCapacity = 24

```

Now that we’ve set the properties, we need a way to access them, which is what **getters** are used for. 

Example from Codecademy: 

```js
let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._seatingCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },

  get seatingCapacity() {
    console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
    return this._seatingCapacity;
  }
}
```

In the example above, the getter method logs something to the console and returns the value saved to _seatingCapacity.  

Another example:

```js
let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(newAge){
    if(typeof newAge === 'number'){
      this._age = newAge;
    } else {
      return 'Invalid input'
    }
  
	},
  get age(){
 	 console.log(`${name} is ${age} years old.`);
   return this._age;
   console.log(this.age)
	}
};

person.age = 39
```