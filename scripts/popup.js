let copy_ada_button = document.getElementById('copy_ada_button');
let load_ada_button = document.getElementById('load_ada_button');
let ada_page_info = document.getElementById('ada_page_info');

chrome.tabs.query({active:true,currentWindow:true},function(tabArray){
    if (tabArray[0].url.includes(`diavgeia.gov.gr`) && (tabArray[0].url.includes(`/decision/`) || tabArray[0].url.includes(`/doc/`))) {
        copy_ada_button.disabled = false;
        copy_ada_button.title = `Πατήστε για αντιγραφή του αριθμού ΑΔΑ στο clipboard`;
        ada_page_info.innerText = `Αριθμός ΑΔΑ σελίδας:`;
    } else {
        copy_ada_button.disabled = true;
        copy_ada_button.title = `Ενεργό μόνο σε σελίδες αναρτήσεων της Διαύγειας`;
    }
    // if (navigator.clipboard.readText() != "") {
    //     load_ada_button.disabled = false;
    // // } else {
    // //     load_ada_button.disabled = true;
    // }
});

