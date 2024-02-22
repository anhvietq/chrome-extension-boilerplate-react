// backgroundScript.js

// Function to send a message to the content script
function sendAutofillMessage(tabId, formData) {
    chrome.tabs.sendMessage(tabId, {
        type: 'AUTOFILL_FORM_DATA',
        formData,
    });
}

// Event listener to respond to the context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
    // Get the LinkedIn URL from your form data
    const linkedinUrl = 'https://www.linkedin.com/';

    // Call the function to send the message
    sendAutofillMessage(tab.id, { linkedinUrl });
});
