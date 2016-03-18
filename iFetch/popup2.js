/**
 *  Author: Michael Sime (120011995)
 *  File: popup2.js
 *  Function: Contains all of the code for the popup.html file
 *   facilitates interactivity of copy buttons, search buttons and
 *  displays all IFrame source
 */

/**
 *  Gets URL of current tab using chrome.tabs API. Executes
 *  getPageSource script including error handling. 
 */

function onWindowLoad() {
  // Setup HTML elements as vars to be used throughout script
  var message = document.querySelector('#message');
  var iframeCount = document.querySelector('#iframeCount');

  // Initalise tabs query object
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  // Execute tabs query object
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];

    // Get the URL from the tab object
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    // Set URL in HTML
    document.getElementById('url').textContent = "The URL you are browsing is: " + url;

    // Execute the getPageSource script and collect response with onMessage handler
    chrome.tabs.executeScript(null, {
      file: "getPageSource.js"
    }, function() {
      // Handle error of injecting into an extensions page or the webstore/NTP
      if (chrome.runtime.lastError) {
        document.getElementById('copySrcButton').style.visibility = "hidden";
        document.getElementById('copySrcLabel').style.visibility = "hidden";
        message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
      }
    });
  });
}

/**
 *  Recives the source of the current tab and parses the IFrame objects,
 *  which are then printed to popup page.
 */

chrome.runtime.onMessage.addListener(function(request, sender) {
  
  if (request.action == "getSource") {
    
    // Regex to extract IFrame from full HTML src
    var iframes = request.source.match(/(<iframe.*?>.*?<\/iframe>)/g);
    

    if(iframes == null){
      // If there are no IFrames
      iframeCount.innerText += "Sorry no iFrames were found on this page!";
    } else {
      // Otherwise print number of IFrames
      iframeCount.innerText += "Number of iFrames on this page: " + iframes.length + "\n";
    }

    // Print IFrame objects in an ordered list
    var listIndex = 1;
    for(var i = 0; i < iframes.length; i++){
      message.innerText += listIndex + ") " + iframes[i];
      listIndex ++;
      message.innerHTML += "<br /> <br />"; 
    }
  }
});

/**
 *  Creates an onClick listener for the copy all 
 *  IFrames button.
 */

document.addEventListener('DOMContentLoaded', function () {
  var copySrcButton = document.getElementById('copySrcButton');
  copySrcButton.addEventListener('click', copySrcButtonClickHandler);
});

/**
 *  Handles the functionality for the copy all
 *  IFrame button.
 */

function copySrcButtonClickHandler(){
  var button = document.getElementById("copySrcButton"); 
  
  // Setup text to be copied  
  var range1 = document.createRange();  
  range1.selectNode(message);  
  window.getSelection().addRange(range1);  

  try {  
    // Execute the copy command  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy command was ' + msg);  
  } catch(err) {  
    console.log('Unable to copy');  
  }  

  window.getSelection().removeAllRanges();  
};

/**
 *  Creates an onClick listener for the copying 
 *  of search results. Hides search elements and
 *  copy button until user presses search button.
 */

document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('searchButton');
  document.getElementById("searchLabel").style.visibility = "hidden";
  document.getElementById("copyButton").style.visibility = "hidden";
  document.getElementById("copySearchLabel").style.visibility = "hidden";
  el.addEventListener('click', clickHandler);
});

/**
 *  Handles search functionality and copying of results
 *  via button.  
 */

function clickHandler(){
  // Make search elements visible
  document.getElementById("searchLabel").style.visibility = "visible";
  document.getElementById("copyButton").style.visibility = "visible";
  document.getElementById("copySearchLabel").style.visibility = "visible";
  
  // Get and display search term
  document.getElementById('message').style.display = "block";
  var searchTerm = document.getElementById('mySearch').value;
  var iframes = document.getElementById('message').innerText;
  var previousSearch = document.getElementById('searchTerm').innerText =  "You searched for: " + searchTerm;
  var message = document.querySelector('#message');

  // Put iframes into array to search
  var iframesArray = iframes.match(/(<iframe.*?>.*?<\/iframe>)/g);
  var count = 0;
  searchMessage.innerText = "";

  var listIndex = 1;
  for(var i =0; i < iframesArray.length; i++){
    var frame = iframesArray[i];
    // If the IFrame object includes searchTerm
    if(frame.includes(searchTerm)){
      // Display it in search results
      count ++;
      var output = listIndex + ") ";
      var boldOutput = output.bold();
      searchMessage.innerHTML += boldOutput;
      searchMessage.innerText += frame + "\n" + "\n";
      listIndex ++;
    } 
  }

  // If there are no results hide search result UI elements
  if(count == 0){
    document.getElementById("searchLabel").style.visibility = "hidden";
    document.getElementById("copyButton").style.visibility = "hidden";
    document.getElementById("copySearchLabel").style.visibility = "hidden";
    document.getElementById("searchMessage").innerText = "No IFrames matched your search!";
  }
  // Output number of search results returned
  var searchCount = document.getElementById("searchIframesCount").innerText = "After search number of iFrames:  " + count.toString();
}

window.onload = onWindowLoad;