function myFunction() {
	//get Iframe element ready for javascript manipulation
	var frm = document.getElementById("frmin");
	//get display element ready for javascript manipulation
	var dsp = document.getElementById("srcout");
	//find Iframe's HTML (root) element, [0] because I'm using getElementsByTagName which returns node list so I have to chose the 1st one, and put its outer content (i.e. with outer tags) to display, i.e. dsp.innerText. I use innerText because I want a text output not formatted as html.
	//var iframeSrc 
	dsp.innerText = frm.contentDocument.getElementsByTagName('html')[0].outerHTML;
	// dsp.innerText = iframeSrc;
	console.log("LOL");
	//crossDomain();
}

// function mockup(){
// 	var signUp = document.getElementById("signup").addEventListener("click", displaySignUp);
// 	var login = document.getElementById("login").addEventListener("click", displayLogin);
// }

// function displaySignUp(){
// 	alert("This is only a mockup! No sign up has not been implemented!");
// }

// function displayLogin(){
// 	alert("This is only a mockup! No login has not been implemented!");		
// }

//window.document.onload = mockup();

// var myConfObj = {
//   iframeMouseOver : false
// }
// window.addEventListener('blur',function(){
//   if(myConfObj.iframeMouseOver){
//     console.log('Wow! Iframe Click!');
//   }
// });

// document.getElementById('frmin').addEventListener('mouseover',function(){
//    myConfObj.iframeMouseOver = true;
// });
// document.getElementById('frmin').addEventListener('mouseout',function(){
//     myConfObj.iframeMouseOver = false;
// })

// helper method for cross browser differences
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {

//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, url, true);

//   } else if (typeof XDomainRequest != "undefined") {

//     // Otherwise, check if XDomainRequest.
//     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);

//   } else {

//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;

//   }
//   return xhr;
// }

// 	var xhr = createCORSRequest('GET', url);
// 	if (!xhr) {
// 	  throw new Error('CORS not supported');
// 	xhr.onload = function() {
// 	 var responseText = xhr.responseText;
// 	 console.log(responseText);
// 	 // process the response.
// 	};

// 	xhr.onerror = function() {
// 	  console.log('There was an error!');
// 	};
// }


// function crossDomain(){
// 	// get reference to window inside the iframe
// 	var wn = document.getElementById('frmin').contentWindow;
// 	// postMessage arguments: data to send, target origin
// 	wn.postMessage('Hello to iframe from parent!', 'https://studres.cs.st-andrews.ac.uk/');

// 	// Assign handler to message event
// 	if ( window.addEventListener ) {
// 	    window.addEventListener('message', handleMessage, false);
// 	} else if ( window.attachEvent ) { // ie8
// 	    window.attachEvent('onmessage', handleMessage);
// 	}
// }

// // message event handler (e is event object) 
// function handleMessage(e) {
//     // Reference to element for data display
//     var el = document.getElementById('display');
//     // Check origin
//     if ( e.origin === 'http://www.example.com' ) {
//         // Retrieve data sent in postMessage
//         el.innerHTML = e.data;
//         // Send reply to source of message
//         e.source.postMessage('Message received', e.origin);
//     }
// }
