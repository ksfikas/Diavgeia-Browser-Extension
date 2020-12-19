chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.status !== "complete") {
    return;
  }
  if (tab.url.includes(`diavgeia.gov.gr`) && (tab.url.includes(`/decision/`) || tab.url.includes(`/doc/`))) {
    console.log("diavgeia!");
    chrome.browserAction.setPopup({
        tabId: tabId,
        popup: 'diavgeia_popup.html'
    });
  } else {
    console.log("NOT diavgeia!");
      chrome.browserAction.setPopup({
          tabId: tabId,
          popup: 'popup.html'
      });
  }
});