$(function () {
    chrome.storage.local.get("copiedText", function (items) {
        if (items.copiedText) {
            $("#copiedText").text(items.copiedText);
        } else {
            $("#copiedText").text("Nothing copied yet!");
        }
    });
});
