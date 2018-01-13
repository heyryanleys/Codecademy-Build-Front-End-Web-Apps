const menu = {
  _courses : {
  	_appetizers: [],
  	_mains: [],
  	_desserts: [],
    set appetizers(newApp){
    	this._appetizers.push(appetizers)
 		 },
    set mains(newMain){
			this._mains.push(mains)
    },
    set desserts(newDessert){
			this._desserts.push(desserts)
    },
    get appetizers(){
			return this._appetizers
    },
    get mains(){
			return this._mains
    },
    get desserts(){
			return this._desserts
    },
  },
  get courses(){
  	return {
      appetizers: this.courses._appetizers,
      mains: this.courses._mains,
      desserts: this.courses._desserts
    }
	},
  addDishToCourse(courseName,dishName,dishPrice){
  	 let dish = {
      name: dishName,
      price: dishPrice
    }
     this._courses[courseName].push(dish)
	},
  getRandomDishFromCourse(courseName){
  	let dishes = this._courses[courseName];
    return dishes[Math.floor(Math.random() * dishes.length)];
	},
  generateRandomMeal(){
  	let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price
    return `You ordered ${appetizer.name}, ${main.name}, and ${dessert.name} for ${totalPrice}`
	}
}

menu.addDishToCourse('appetizers','Chips', 3);
menu.addDishToCourse('mains','Pizza', 5);
menu.addDishToCourse('desserts','Cake', 7);
menu.addDishToCourse('appetizers','Bread', 2);
menu.addDishToCourse('mains','Pasta', 6);
menu.addDishToCourse('desserts','Brownie', 4);
let meal = menu.generateRandomMeal();
console.log(meal)
