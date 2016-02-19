// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({file: "jquery.js"}, function(tab){
            chrome.tabs.executeScript({file: "myscript.js"});
    });
});