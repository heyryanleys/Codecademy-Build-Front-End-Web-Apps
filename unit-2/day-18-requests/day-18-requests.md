# Day 18 - Requests
The are many reasons why JS is the preferred language of the web, but some of the most important reasons are JS non-blocking properties, or that it is an _asynchronous_ language. 

Imagine that you navigate to a webpage that has a large image file as its background— other than the entire page freezing while the image is retrieved from the source, JS can handle this using an _event loop_. 

Most websites have to make multiple requests to work fully, which forms a question as certain events occur.  Typically, each message is run completely before moving on to the next one, which might cause the user to wait a long time between actions. 

To avoid this, with JS, long messages are broken into smaller messages that are added to the queue when they are ready to be run.  In the case of requesting information from another site, we separate the request from what we want to do with the response using _asynchronous JS and XML_, or _AJAX_.

```js
function fun() {
  console.log('hi');
  setTimeout(() => {
    console.log('how are you');
  }, 2500);
  console.log('hi 2');
}

fun();
```

In the above code, the output of the function would be

```
hi
hi 2
how are you
```

AJAX involves requesting data over the web, which is done using HTTPS requests. 

There are four commonly used types of HTTPS requests
	1. GET
	2. POST
	3. PUT
	4. DELETE

Today we’ll only be writing GET and POST requests. 

GET requests receive information from other sites by sending a query.  POST requests can change information on another site and will receive information or data in response. 

There are a lot of differences between the way GET and POST requests are made.  A GET request is like a search— if you navigate to Google and search for something, the url changes to have a string attached to it that looks like 

`www.google.com/#q=your+search`

This URL requesting google to retrieve a list of your search terms. 

POST requests instead introduce new information to another website.  Rather than sending this information in the URL of the request, it is sent as part of the body of the request (more on this later).

```js
// GET

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('GET', url);
xhr.send();


// POST

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({
  id: '200'
});
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('POST', url);
xhr.send(data);

```

When AJAX was first formalized by the W3C in 2006, it required the use of an `HMLHttpRequest` object (or XHR), which is a JS object that is often used to retrieve data.  There are several steps to creating an AJAX request using an XHR object. 

```js

// creates new object
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint'

// handles response
xhr.responseType = 'json';
xhr.onreadystatechange = function(){
	if (xhr.readyState === XMLHttpRequest.DONE){
		// code to run
	}
};

// opens request and sends object
xhr.open('GET', url);
xhr.send();
```

On the first line above we created an XHR object by typing new and then the type of the object.  This is called the _new operator_.

The object is saved in a. Const called xhr— throughout this request we’l be accessing properties of this object. 

On the next line we save the URL which we’re going to make our request in a const called url.  

We then set the responseType of the xhr object to json.  

Onreadystatechange is an event handler that is called whenever the value of the readyState property changes. We set it equal to an anonymous function which will handle the response to our request. 

In the function we first check to see is the ready state of our xhr object is equal to XMLHttpRequest.DONE.  If that evaluates to be true, the code in the block executes.  

We then call the .open method on our xhr object and pass it two arguments— ‘GET’ (the type of request), and url (the URL we’re querying).  .open creates and structures the reuqest— it tells the request what method to use and what url to query. 

Finally we call the .send method on our xhr object and pass it no arumgnets.  This is because data sent in Get request is sent as part of the URL.  Calling the .send method sends the xhr object with its relevant information to the API URL. 

We’re now going to use the boilerplate code from above with some modifications to expand a URL that has been shortened using the Google URL Shortener API. 

Starting code from Codecademy:

```js
// Include data for accessing Google APIs

const apiKey = '<Your Key Here>';
const projection = 'FULL';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {

}

function shortenUrl() {

}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);

```

We then add in our API key (removed for these notes), add a url const and add some code to the expandURL function that adds the two query parameters to the API url.  We need to tell Google which short URL we want to expand and we need to prove our API key, which is how we get permission from Google to use this service. 

```js
// Include data for accessing Google APIs

const apiKey = 'abc123';
const url = 'https://www.googleapis.com/urlshortener/v1/url'
const projection = 'FULL';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
}

function shortenUrl() {

}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);

```

We then go through and fill in the rest of the expandURL function with the code from our boiler plate. 

```js
function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val();
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json'
  xhr.onreadystatechange = function(){
    if (xhr.readyState === XMLHttpRequest.DONE){
    console.log(xhr.response);
  	}
  }
  xhr.open('GET', urlToExpand);
  xhr.send();
}
```

## XHR POST Requests
In the last exercise we wrote a GET request using AJAX to expand a URL that had been shortened using the Google URL Shortener API.

Now we’re going to go over how to construct POST requests and, in a few exercises, we’ll shorten a URL using the Google URL Shortener API. 

Remember that in a GET request, the query information (what we’re asking the server to run) is generally spent as part of the URL whereas in a POSTR request, the information is sent to the server as part of the body of the request.  This information is created and saved in the data constant and sent tot he API as an argument passed to the .send() method. 

```js
const xhr = new XMLHTttpRequest();
const url = 'http://api-to-call/endpoint';

// converts data to a string
const data = JSON.stringify({id: '200'});

// handles response
xhr.responseType = 'json'
xhr.onreadystatechange = function() {
	if (xhr.readyState === XMLHttpRequest.DONE){
		// code to execute
	}
};

// opens request and sends object
xhr.open('POST', url);
xhr.send(data);
```

The first two lines above are the same as a GET request, but the third line is new.  The data that we want to send to our API must be formatted properly.  The particular properties and values sent will depend the API you’re using and the information you wish to send and retrieve. 

The object containing this data is passed to the `JSON.stringify` method, which will format the object as a string.  This is saved to a const called data. 

Everything else remains the same until the final two lines.  When we call the .open method on the xhr object, we pass the argument POST instead of GET, and final we pass the `data` string to the .send method. 

Using the code from above, and some information from the google api shortener documentation, we can create a similar program as we did before but instead this shortens urls rather than making them longer. 

```js
// Include data for accessing Google APIs

const apiKey = 'abc123';
const url = 'https://www.googleapis.com/urlshortener/v1/url'
const projection = 'FULL';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val();
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json'
  xhr.onreadystatechange = function(){
    if (xhr.readyState === XMLHttpRequest.DONE){
    $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
  	}
  }
  xhr.open('GET', urlToExpand);
  xhr.send();
}

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
	const urlToShorten = $inputField.val();
  const data = JSON.stringify({longUrl: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
      console.log(xhr.response);
      $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
    }
  }
  xhr.open('POST', urlWithKey);
  xhr.setRequestHeader('Content-Type','application/json');
  xhr.send(data);
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);

```

## Ajax GET Request
So far, we have a working app that uses the Google URL Shortener API to shorten or expand a URL entered by the user. 

Both of the requests required a lot of similar boilerplate and, as is common with tasks that are repeated frequently in programming, there is a simpler way. 

The same requests that we’ve been writing by constructing XMLHttpRequest objects and using vanilla JS to send the request and handle the response can be written much more simply using some methods from the jQuery library. 

 `$.ajax()`  its a method provided by the jQuery library to specifically handle AJAX requests. All parts oft request are included in a single object that is passed to the method as an argument. 

```js
$.ajax({
	// settings
	url: 'http://api-to-call.com/endpoint',
	type: 'GET',
	dataType:'json',
	success(response){
		// code to execute
	},
	error(jqXHR, status, errorThrown){
		// code to execute if fails
	}
});
```

The first property in the setting object is url and its value is the endpoint of the API.  The second property is the type of request (in this case it’s optional as the default type is GET).  The next property specifies the dataType which is json in this example.

We then include the success function which will handle there response if our request is successful.  We create it with a single parameter (response).  Inside the function’s code block, we will specify what to do with the response object. 

Lastly, we include an error function which will handle the response if our request is not successful.  This function is created with there parameters— jqXHR, status, and errorThrown.  jqXHR is the XHR response object returned by the $.ajax() method and hit will contain information about the error. 

Using this, we can refactor our earlier GET request by writing:

```js
function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val();
  $.ajax({
    url: urlToExpand,
    type: 'GET',
    dataType: 'json',
    success(response){
  		$responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
    },
    error(jqXHR, status, errorThrown){
    	console.log(jqXHR)
  	}
  })
}
```

## Ajax POST Request
Of course, we can do the similar thing for POST requests. 

```js
$.ajax({
  url: 'https://api-to-call.com/endpoint',
  type: 'POST',
  data: JSON.stringify({id: 200}),
  dataType: 'json',
  success(response){
    console.log(response)
  },
  error(jqXHR, status, errorThrown){
    console.log(jqXHR)
  }
})
```

```js
function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
	const urlToShorten = $inputField.val();
	$.ajax({
    url: urlWithKey,
    type: 'POST',
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response){
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },
    error(jqXHR, status, errorThrown){
      console.log(jqXHR)
    }
  })
}
```

## AJAX requests with $.get()
The jQuery library provides other methods that allow us to write fewer lines of code to accomplish the same goals. 

```js
$.get('https://api-to-call.com/endpoint', response => {...}, 'json');
```

In the example above, we use the $.get() method to write a GET request— however we’ve gone from nearly a dozen lines of code at the beginning of this lesson to one or two. 

In the above example:
	1. `$.get(` opens the method call 
	2. `’https://api-to-call.com/endpoint'` is the URL to which we’re making our request.
	3. The second parameters, `response => {…}` is an arrow function.  This is the success callback function.  Between the curly braces, specify what to do with the response if it is successful, such as logging in to the console or appending it to the body of the HTML. 
	4. The third parameter, `’json'` is the response format. 

If the request we are making requires settings in addition tot he parameters described above, the structure of the $.get() method is a bit different.  Rather than passing separate arguments, we would pass a single setting s object containing all of the arguments— much like we did with the $.ajax() method.  In that case we can omit the type property. 

Using this information, we can even further refactor the GET method from the start.

```js
function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val();
	$.get(urlToExpand, response => {
    $responseField.append('<p>Your expanded url is: </p><p>' +
  response.longUrl + '</p>')
  }, 'json');
}
```

## AJAX requests with $.post()
Just like with the `$.get()`, we can use jQuery to make writing AJAX POST request simpler

```js
$.post('https://api-to-call.com/endpoint', {data}, response => {...}, 'json');
```

Above…

	1. `$.post(` opens the method call
	2.  `'https://api-to-call.com/endpoint'` is the UTL to which we’re making our request
	3. The {data} object is what we’ll use to send data with our request
	4. `response => {...}` is an arrow function that acts as the success call back function 
	5. `’json'` is the reposes format. 

Below we’re going to refactor the POST request again using jQuery.  BecausePOST requests to the Google ULR Shortener API require the contentType property, and that is not one of the four parameters in the method signature, w’re going to use a different method signature— one that allows settings like `$.ajax()` does, which means a lot of the code will stay the same. 

```js
function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
	const urlToShorten = $inputField.val();
	$.post({
    url: urlWithKey,
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response){
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },
    error(jqXHR, status, errorThrown){
      console.log(jqXHR)
    }
  })
}
```

## AJAX Requests with .getJSON()
There are other helper methods that can reduce the amount of boilerplate code necessary.  If we know, for example, that we want our data type to be JSON, we can use the `$.getJSON()` method in place of the `$.get()` method. 

```js
// before
function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val();
	$.get(urlToExpand, response => {
    $responseField.append('<p>Your expanded url is: </p><p>' +
  response.longUrl + '</p>')
  }, 'json');
}

// after
function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val();
	$.getJSON(urlToExpand, response => {
    $responseField.append('<p>Your expanded url is: </p><p>' +
  response.longUrl + '</p>')
  });
}
```
