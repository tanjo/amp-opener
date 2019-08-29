function openAmp(url) {
  chrome.tabs.create({ url : url});
}

chrome.browserAction.onClicked.addListener(function(activeTab) {
  chrome.tabs.executeScript({code: "document.querySelector('head > [rel=\"canonical\"]').href;"}, function(url) {
    openAmp(url[0]);
  });
});