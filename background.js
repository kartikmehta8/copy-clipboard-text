chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "copiedText") {
        chrome.storage.local.set({ copiedText: request.text });
    }
});
