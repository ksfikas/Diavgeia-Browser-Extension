copy_ada_to_clipboard.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let url = tabs[0].url;

        console.log('current url:', url);
        
        let url_array = url.split("/");
        let ada = url_array[url_array.length-1];
        ada = ada.split("?")[0];
        ada = decodeURIComponent(ada);
        console.log('current ADA:', ada);

        navigator.clipboard.writeText(ada).then (function (){
          let notification_image = "images/diavgeia_all_logo.png";
          let notification_text = "Επέκταση Διαύγειας";
          let notification = new Notification(`Ο ΑΔΑ: ${ada} αντιγράφηκε στο clipboard`, {body: notification_text, icon: notification_image});
          console.log('ADA:', ada, 'copied to clipboard');
        }, function(){
          console.error('ADA:', ada, 'was NOT copied to clipboard!');
        })        
    });
};