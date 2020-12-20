chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // if (tab.status !== "complete") {
  //   return;
  // }
  if (tab.url.includes(`diavgeia.gov.gr`) && (tab.url.includes(`/decision/`) || tab.url.includes(`/doc/`))) {
    console.log(`this is a diavgeia valid ADA page`);
    chrome.browserAction.setPopup({
        tabId: tabId,
        popup: `../html/diavgeia_popup.html`
    });
  } else {
    console.log(`this is NOT a diavgeia valid ADA page`);
      chrome.browserAction.setPopup({
          tabId: tabId,
          popup: `../html/popup.html`
      });
  }
});