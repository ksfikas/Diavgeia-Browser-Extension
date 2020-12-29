// Credits: Konstantinos Sfikas, PhD
// Source Code: https://github.com/ksfikas/Diavgeia-Browser-Extension
// Contact: ksfikas83@gmail.com

let card_copy_ada_button = document.getElementById('card_copy_ada_button');
let card_load_ada_button = document.getElementById('card_load_ada_button');
let card_copy_ada_text = document.getElementById('card_copy_ada_text');
// let ada_page_info = document.getElementById('ada_page_info');

chrome.tabs.query({active:true,currentWindow:true},function(tabArray){
    if (tabArray[0].url.includes(`diavgeia.gov.gr`) && (tabArray[0].url.includes(`/decision/`) || tabArray[0].url.includes(`/doc/`))) {
        let url = tabArray[0].url;
        let ada = extract_ada_from_url(url);

        card_copy_ada_button.disabled = false;
        card_copy_ada_text.innerHTML = `Αντιγραφή του ΑΔΑ: <mark>${ada}</mark> της προβαλλόμενης πράξης στο πρόχειρο`;
    } else {
        //card_copy_ada_button.disabled = true;
    }
    // if (navigator.clipboard.readText() != "") {
    //     load_ada_button.disabled = false;
    // // } else {
    // //     load_ada_button.disabled = true;
    // }
});

