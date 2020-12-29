// Credits: Konstantinos Sfikas, PhD
// Source Code: https://github.com/ksfikas/Diavgeia-Browser-Extension
// Contact: ksfikas83@gmail.com

function extract_ada_from_url(url) {
  console.log(`current url: ${url}`);
        
  let url_array = url.split(`/`);
  let ada = url_array[url_array.length-1];
  ada = ada.split(`?`)[0];
  ada = decodeURIComponent(ada);
  console.log(`current ADA: ${ada}`);

  return ada;
}

card_copy_ada_button.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let url = tabs[0].url;
        let ada = extract_ada_from_url(url);
                
        navigator.clipboard.writeText(ada).then (function (){
          let notification_image = `../images/icon_128.png`;
          let notification_text = `Επέκταση Διαύγειας`;
          let notification_message = `Ο ΑΔΑ: ${ada} αντιγράφηκε στο πρόχειρο`;
          var opt = {
            iconUrl: notification_image,
            type: `basic`,
            title: notification_text,
            message: notification_message,
            isClickable: false,
          };
          chrome.notifications.clear('copy_notification');
          chrome.notifications.create('copy_notification', opt);

          console.log(`ADA: ${ada} copied to clipboard`);
        }, function(){
          console.error(`ADA: ${ada} was NOT copied to clipboard!`);
        })        
    });
};