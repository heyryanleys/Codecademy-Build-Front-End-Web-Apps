# Day 17 - Classes
Classes are a tool that are used to quickly produce similar objects.  For example, an object representing a dog named Haley might look like

```js
contst Haley = {
	_name: Haley,
	_behavior: 0,

	get name(){
		return this._name;
	},
	get behavior(){
		return this._behavior;
	},
	incrementBehavior(){
		this._behavior++;
	}
}
```

If we were to own a dog day care we might want to create a catalog of all of the dogs who belong to the daycare.  Rather than using the code above for every dog that joins the daycare, we can create a Dog class that serves as s template for creating new Dog objects. 

```js
class Dog{
	constructor(name){
		this._name = name;
		this._behvavior = 0;
	}
	get name(){
		return this._name
	}
	get behavior(){
		return this._behavior
	}
	incrementBehavior(){
		this._behavior++
	}
};

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

```

Classes and object syntax look similar, but it’s important to remember than a class uses a **constructor** method which is called every time a new instance of a class is created. 

Looking at the code above:
	> Dog is the name of the class (classes are capitalized and Camel Cased)
	> The constructor method is invoked whenever we create a new instance of our Dog class
	> This constructor method accepts on argument (name)
	>Within the constructor method we use the `this` keyword.  In the context of a class, `this` refers to an instance of that class, so within the Dog class we can use `this` to set the value of the Dog instance’s name property to the name argument (very similar to how `this` is used in objects).
	> 

Very simple example:

```js
class Surgeon{
  constructor(name,department){
	  // Even though _name doesn't exist, you can create it by simply using the folloiwng code
    this._name = name;
    this._department = department;
  }
}
```

To create an instance of a class, you use the keyword `new`

```js
class Surgeon{
	contructor(name, department){
		this._name = name;
		this._department = department;
	}
}

const surgeonCurry = new Surgeon('Curry','Cardiovascular');
```

Classes really become useful when you introduce getters and setters to them.  Getter syntax is very similar with classes and objects, but unlike objects there is no commas between the methods within classes. 

```js
// Creates class for surgeon
class Surgeon {
	// Create constructor that takes in name and department
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
	// Gets name argument and returns it to _name
  get name(){
    return this._name
  }
  
	// Gets department argument and returns it to _department
  get department(){
    return this._department
  }
  
	// Returns remainingVacationDays getter function to _remainingvacationdays
  get remainingVacationDays(){
    return this._remainingVacationDays
  }
  
	// Function that subtracts days off from remaining vacation days and returns it to _remainingVacationDays
  takeVacationDays(daysOff){
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
```

You then can call methods and getters on instances (Remember,  you saved your instances to variables), the same way you would with objects.

```js
console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainigVacationDays);
```

With classes, you can use **inheritance** to solve the problem of duplicating classes that are similar but not the same. 

For example, if you have a dog daycare with a program that looks like

```js
class Dog{
	constructor(name){
		this._name = name;
		this._bevavior = 0;
	}
	get name(){
		return this._name
	}
	get behavior(){
		return this._behavior
	}
	incrementBehavior(){
		return _behavior++
	}	
}
```

And a program for a cat daycare that look like

```js
class Cat {
	constructor(name,usesLitter){
		this._name = name;
		this._behavior = 0
		this._usesLitter = usesLitter
	}
	get name(){
		return this._name;
	}
	get usesLitter(){
		return this._usesLitter
	}
	get behavior(){
		return this._behavior
	}
	incrementLitter(){
		return this._usesLitter
	}
	incrementBehavior(){
		reutnr this._behavior++
	}
}
```

When multiple classes share properties or methods, they become candidates for **inheritance** which is used to decrease the amount of code that is needed to be written. 
With inheritance, you can create a parent class (or a **superclass**) whit properties and methods that you know multiple child (**subclasses**) will use. 

```js
class Animal{
	constructor(name){
		this._name = name;
		this._behavior = behavior
	}
	get name(){
		return this._name
	}
	get behavior(){
		return this._bevhaior
	}
	incrementBevhaior(){
		return this._behavior++
	}
}
```

Now that we have a print class, we have to **extend** them to our subclasses.

```js
// The extends keyword makes methods of the animal class avaliable in the cat class
class Cat extends Animal{
	constructor(name, usesLitter){
		// Lets JS to use the name argument from the superclass
		super(name);
		this._usesLitter = usesLitter;
	}
}
```

With a constructor function, if you are calling a super method is must always happen before you use a this keyword to access local properties. 

Example

```js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  get certifications(){
    return this._certifications
  }
  addCertification(newCertification){
    this._certifications.push(newCertification)
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics')
console.log(nurseOlynyk.certifications)
```

Sometimes you may want to have  methods that aren’t available in individual instances, but that can be called directly from the class. 

For an example, you may want to have “Date” be in you masterclass so that your subclasses all have access to it, but you might not want to call it with an instance.

This is when **static** methods can be used. 

For example

```js
class Animal {
	constructor(name){
		this._name = n ame;
		this._behavior = 0;
	}
	static generateName(){
		const names = ['Angel','Spike','Buffy','Willow','Tara'];
		const randomNumber = Math.floor(Math.random() * 5);
		return names[randomNumber]
	}
}
```

In the example above, a static method called generateName is create that returns a random name w hen it’s called.  Because of the static keyword, you can only access generateName by appending it to the Animal class, it would not work if you tried to apply it to an instance of the class or any subclasses. 

