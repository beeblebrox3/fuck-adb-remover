chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.querySelector("#fuck-adb-enabled").remove(); console.log("fooooo")'
  });
});
