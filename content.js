$(document).on("copy", function () {
    var copiedText = window.getSelection().toString();
    chrome.runtime.sendMessage({ type: "copiedText", text: copiedText });
});
