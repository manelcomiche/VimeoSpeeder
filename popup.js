// popup.js

document.getElementById("activate").addEventListener("click", () => {
    sendMessageToContentScript();
});

function sendMessageToContentScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "changeSpeed", speed: 1 });
    });
}