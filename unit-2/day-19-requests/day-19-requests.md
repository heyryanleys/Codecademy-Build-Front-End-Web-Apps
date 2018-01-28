# Day 19 - Requests
Asynchronously requesting and responding to data is such a new and integral part of what developers do with JS that a new type of object, Calle d a_Promise_ was added to JS in ES6.

A Promise is an object that acts as a placeholder for data that has been requested but hasn’t been received yet.  Eventually a Promise will _resolve_ to the value request or to a reason why the request failed. 

If the requested information or any error except a network error is received, the Promise is _fulfilled_ and calls a function to handle response.  If there is a network error, the Promise is rejected and will call a function to handle the error. 

We’re going to go over how to use the `fetch()` function , which uses Promises to handle requests.  We’ll also go over how to use the `then()` method to handle fulfilled and rejected Promises.  Finally, we’ll make use of this all simpler using the `aysnc` and `await` keywords. 

```js
// fetch GET

// sends request
fetch('http://api.com/endpoint').then(response => {
	
	// converts response object to JSON
	if (response.ok) {
		return response.json();
	}

	// handles errors
	throw new Error('Request failed!');
}, networkError => console.log(networkError.message)

	// handles success
).then(jsonResponse => {
		// code to execute with jsonResponse
});
```

On the first line we call the fetch function and pass it a single argument (the API endpoint).  Because this is still la GET request, this URL will contain the URL to the API and may also contain query parameters such as an API key, a client ID, or other information necessary to make the request. 

The fetch() function

	1. Creates a _request object_ using the information provided to it. 
	2. Send that request object to the URL provided 
	3. Returns a Promise the resolves to a response object, which contains a lot of information, including the information requested. 

Because fetch is a web API, it’s not supported by all browsers.  To ensure that all users can run code that uses fetch, we can add a _polyfill_ that will be used if the user don’t have fetch support. 

We chain a `.then` method to the closing parentheses of the fetch function.  This is where the asynchrony of JS comes in— the fetch function makes the request and returns the response, and we don’t call the function that will handle the response until it has been received. 

.then takes two callback functions as parameters, the first of which handles success and the second of which handles failure. 

The first callback function takes response as a parameter— response is the resolution of the Promise returned by the fetch function . 

On the next line, we use a conditional statement to check the ok property of the response object.  If it evaluates to a truth value, we call the .json method on the response object.  This method takes the information from the response and converts it to a JSON object whose properties and values we can then access. 

Because the .json method takes time to implement, it returns a Promise that will eventually resolve with the desired JSON object.  We will then chain another .then method call to use the converted response object.  We return `response.json()`.

Outside of the code block of the conditional statement , we write `throw new Erorr(‘request failed’)`.  This error will only be thrown if response.json is not returned because the response was not ok. 

We then create the second callback function, which takes a single parameter, networkError.  This function will bony be called if there is a network error, such as a 500 error.  In this function’s code block, we log `networkError.message` to the console so that we can determine what went wrong.  The .then method is closed o the next line with a closing parenthesis. 

At the end of the first then method we chain another then method that take a single callback fucntion as an argument.  This callback function’s parameter is `jsonResponse` and this function will handle the jsonResponse object.  This is an object that contains the information we requested from the API and we can use that information on our website. 

```js
fetch('https://api-to-call.com/endpoint').then(function(response){
  if(response.ok){
    return response.json()
  }
  throw new Error('Request failed!');
}, function(networkError){
  console.log(networkError.message)
}).then(function(jsonResponse){
  return jsonResponse
});
```

Above is the boilerplate code for a GET request using fetch and then.  We’re now going to use that boilerplate code with some changes to expand a URL that has been shortened using the Google URL Shortener API. 

When we send the request to the API we need to conclude some information at the end of the API url.  

`https://www.googleapis.com/urlshortener/v1/url?shortUrl=http://goo.gl/fbsS`

We can see above the URL is actually the URL to the API, plus the parameter shortUrl, pls a short URL.  When making our request, we will add our API key using the key parameter as well. 

```js
// Include data for accessing Google APIs
const apiKey = 'abc123';
const url = 'https://www.googleapis.com/urlshortener/v1/url'
;

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key='+ apiKey;
  fetch(urlToExpand).then(function(response){
    if (response.ok){
      return response.json();
    }
    throw new Error('Request failed!');
  },function(networkError){
    console.log(networkError.message)
  })

};


function shortenUrl() {

};

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
};

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
};

$expandButton.click(expand);
$shortenButton.click(shorten);

```

Previously we created the query URL called fetch and passed it the query URL and a setting object, then changed a .then method and passed it two functions as arguments (one to handle the Promise if it resolves, and one to handle network errors if the Promise is rejected). 

The first callback function that we passed to .then returns a Promise— however we want to be able to access this information within the Promise.  That’s what we’re going to chain yet another .then method. 

```js
function expandUrl() {
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key='+ apiKey;
  fetch(urlToExpand).then(function(response){
    if (response.ok){
      return response.json()
    }
    throw new Error('Request failed!');
  },function(networkError){
    console.log(networkError.message)
  }).then(function(jsonResponse){
    $responseField.append('<p> Your expanded URL is </p><p> ' + jsonResponse.longUrl + '</p>');
return jsonResponse;
  })
};
```

Above we’ve written a GET request using the fetch method and handles Promises to expand a URL.  We’re now going to construct a POST request and, later in this project, we’ll shorten a URL using the Google URL Shortener API. 

```js
// fetch POST

// sends request
fetch('http;//api.com/endpoint', {
	method: 'POST',
	body: JSON.stringify({id:200})
}).then(response => {

	// converts response object to JSON
	if(response.ok){
		return response.json();
	}

	// handles errors
	throw new Error('Request failed!')
}, networkError => console.log(networkError.message)

	// handels success
).then(jsonResponse => {
	// code to executue
}
```

On the first line of code, the fetch function is called.  We pass it two arguments, the URL of the API to call and a settings object.  The settings object includes the method, POST, and an additional property— body.  The value of body is the data that we need to send to the API passed to the JSON.stringify() method as an argument.  Depending on the API, we may include other information in the setting object as well. 

```js
fetch('https://api-to-call.com/endpoint',{
  method: 'POST',
  body: JSON.stringify({id:'200'})
}).then(function(response){
  if (response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
},function(networkError){
  console.log(networkError.message);
}).then(function(jsonResponse){
  return jsonResponse
})
```

Above is the boilerplate code we’re going to use to update the google URL shortener API project we’ve been working on to shorten a URL using POST.

```js
function shortenUrl() {
	const urlWithKey = url + '?key=' + apiKey;
	const urlToShorten = $inputField.val();
  fetch(urlWithKey,{
    method: 'POST',
    headers: { 
      "Content-type": "application/json"
    },
    body: JSON.stringify({longUrl: urlToShorten}),
  }).then(function(response){
    if(response.ok){
      return response.json();
    } throw new Error('Request failed!')
  }, function(networkError){
  	console.log(networkError.message)	
  }).then(function(jsonResponse){
    $responseField.append('<p> Your shortened URL is </p><p>' + jsonResponse.id + '</p>');
return jsonResponse;
  });
}
```

So far we’ve build a working app that uses the Google URL Shortener API to shorten or expand an URL entered by a user. 

Like our lesson yesterday, both of our requests required a lot of similar boilerplate, which means that there is probably a more concise way to do it.   The same requests we’ve been writing by requesting information with fetch() and chaining then() to take advantage of the asynchronous properties of JS can be condensed using two new function keywords introduced in ES7: `async` and `await`.

Because async and await are in ES7 and not supported by all browsers, it’s essential to make sure our code is transpired to an earlier aversion of JS. 

```js
// async await GET

async function getData(){
	try{

		// sends request
		let response = await fetch('https://api.com/endpoint');
	
	// handles successful response
	if (response.ok) {
		let jsonResponse = await response.json();
		// code to execute
	}

	// handles unsuccessful response
	throw new Error('Request failed!');
	} catch (error) {
		console.log(error);
	}
}
```

On the first line we use the async keyword to create the `getData()` function.  The async keyword creates a function that will return a Promise. 

We use a try/catch statement to separate the code that will handle success from the code that will handle errors. Inside the try code block, we use the fetch function to send a request tot eh URL provided.  Like before, the fetch function creates a request object and returns a Promise that will ultimately resolve to a response object. 

We use the await keyword to tell the program to continue moving through the message queue while the Promise resolves.  When this happens, the object is saved to a variable called response. 

The conditional statement that checks the ok property of the response object is the same as in the previous two cases.  We await the resolution of calling the json method on the response object, and save the new JSON object to a variable called jsonResponse.  We then return jsonResponse.

Finally, in the block of the `catch(error)` statement, we log the error to the console. 

We’re now going to reconstruct the code from the pervious exercise so that we can write a complete GET request using async and await. 

```js
async function expandUrl(){
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  try{
    let response = await fetch(urlToExpand);
    if(response.ok){
      let jsonResponse = await response.json()
      $responseField.append('<p> Your expanded URL is </p><p>' + jsonResponse.longUrl+ '</p>');
return jsonResponse;
    }
  } catch(error){
    console.log(error);
  }
}
```

We can also construct a POST request using async and await. 

```js
async function getdata)({
	try{

		// sends request
		let response = await fetch('https:api.com/endpoint',{
			method: 'POST',
			body: JSON.stringify({id:200})
		});

		// handles successful response
		if (response.ok) {
			let jsonResponse = await response.json();
			// code to execute
		}

		// handles unsuccessful response
		throw new Error('Request failed!');
	} catch (error){
		console.log(error);
	}
}
```

On the first line, we use the async keyword to create the getData() function.  The async keyword creates a function that will return a Promise. 

We then use a try/catch statement to separate the code that will handle success from the code that will handle errors.  Inside the try code block, we use the fetch function to send a request to the URL provided.  We pass a settings object as an argument to the fetch function.  The settings object includes the method and the body of the request. 

Just like before, the fetch function creates a request object and returns a Promise that will ultimately resolve to a response object. 

We use the await keyword to wait for the resolution of the Promise.  When this happens, the object is saved to a variable called response. 

The conditional statement that checks the ok property of the response object is the same as in the previous three cases.  We await the resolution of calling the json method on the response objected save the new JSON object to a variable called jsonReponse. 

```js
async function getData(){
  try{
    let response = await fetch('https://api-to-call.com/endpoint',{
      method: 'POST',
      body: JSON.stringify({id: 200})
    })
    if (response.ok){
      let jsonResponse = await response.json();
      return jsonResponse
    }
    throw new Error('Request failed!')
  } catch(error){
    console.log(error)
  }
}
```

```js
async function shortenUrl(){
  const urlToShorten = $inputField.val();
	const urlWithKey = url + '?key=' + apiKey;
  try{
    let response = await fetch(urlWithKey, {
      method:'POST',
      body: JSON.stringify({longUrl: urlToShorten}),
      headers: { "Content-type": "application/json" }
    });
    if(response.ok){
      let jsonResponse = await response.json();
      $responseField.append('<p> Your shortened URL is </p><p>' + jsonResponse.id + '</p>');
return jsonResponse;
    }
  } catch(error){
    console.log(error);
  }
}
```





