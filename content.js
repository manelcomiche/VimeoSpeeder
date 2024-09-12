// content.js
function modifyVimeoSpeed(speed) {
    let iframes = document.querySelectorAll('iframe');

    iframes.forEach(iframe => {
        if (iframe.src.includes('player.vimeo.com/video')) {
            let url = new URL(iframe.src);
            url.searchParams.set('speed', speed);
            iframe.src = url.toString();
        }
    });
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "changeSpeed") {
        modifyVimeoSpeed(request.speed);
    }
});