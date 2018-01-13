# Day 20 - Browser Compatibility and Transpilation
A common thing developers need to pay attention to is that the JS syntax you use and the syntax that browsers recognize are not always the same.

In 2015 the organization responsible for standardizing JS (called Ecma) released EcmaScript2015, also know as ES6.  When it was released, developers quickly adopted to the new ES6 syntax, as it improved readability and efficiency, but since ES6 wasn’t yet supported by most web browsers, devs ran into browser compatibility issues. 

There are two important tools for dealing with this issue

	1.  caniuse.com is a website that provides data on web browser compatibility for HTML, CSS and JS features. 
	2. babel.com is a JS library that you can use to convert new unsupported ES6 code into older versions that are recognized by most browsers. 

Below, a lot of the code will be going back and forth between ES6 and ES5.

```js
var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
```

The above code would not work in a browser that does not yet support ES6. 

ES6 is more similar to the syntax of other object-oriented programming languages, it is more readable and address a lot of ES5 bugs. 

```js
// ES5

var pasta = "Spaghetti";

var meat = "Pancetta"; 

var sauce = "Eggs and cheese"; 

var carbonara = 'You can make carbonara with ' + pasta + ', ' + meat + ', and a sauce made with ' + sauce '.'
```

Because ES6 is backwards compatible, a collection of JS programs developed a library called Babel that transpires ES6 into ES5. 

Too run babel on an entire project you first have to place your ES6 JS file in a directory called src. 

Before you add Babel to your project directory though you need to run npm init which creates a package.json file in the root directory which contains

	1. Meta data about your project
	2. A list of node packages required for the project
	3. Key-value pairs for command line scripts

Once you’ve installed babble to your dev dependencies, you need to specify the initial JS version inside a file amend .babelrc. 

Inside .babelrc you need define the preset for your source JS file which specifies the version of your initial JS file. 

To specify that we are transpiring code from an ES6+ source, we have to add this JS to the .babelrc file

```js
{
	"presets": ["env"]
}
```

Lastly, you need to specify a script in package.json that initiates the ES6 to ES5  transpiration. 

Inside of package.json there isa property named “Script” that holds an object for specifying command line shortcuts.  We will add this to the scripts object

`"build": "babel src -d lib"`

Babel calls babel, src instructs babel to transpire all JS in the src directory, -d instructs babel to write the transpiled code to a directory and lib writes the transpiled code to a directory called lib.

Once this is ready, you can transpile your code by calling build from the command line

`npm run build`

Babel then transpiles the code into a file with the same name in the lib folder. 