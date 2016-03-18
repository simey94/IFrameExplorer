/**
 *  Author: Michael Sime (120011995)
 *  File: background.js
 *  Function: Adds an onClick listener to the browser action
 *	which will execute the JQuery script and in a callback 
 *	execute iframeExplorer.js.
 */

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  	chrome.tabs.executeScript({file: "jquery.js"}, function(tab){
            chrome.tabs.executeScript({file: "iframe_explorer.js"});
    });
});