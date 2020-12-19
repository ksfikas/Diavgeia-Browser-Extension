chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostContains: 'diavgeia.gov.gr', pathContains: '/decision/' },
            }),
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostContains: 'diavgeia.gov.gr', pathContains: '/doc/' },
            }),
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });