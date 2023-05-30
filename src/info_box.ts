import { Thing } from "./thing";

const elePopup = document.getElementById("popup")!;
const elePopupHeader = document.getElementById("popup-header")!;
const elePopupBody = document.getElementById("popup-body")!;
const elePopupClose = document.getElementById("popup-close")!;
const elePopupComic = document.getElementById("popup-comic")!;

export function showPopup(thing: Thing) {
    elePopupHeader.innerText = thing.header;
    elePopupBody.innerHTML = "";
    for (const line of thing.body.split("\n")) {
        if (line.trim().length == 0) continue;
        const li = elePopupBody.appendChild(document.createElement("li"));
        li.innerText = line;
    }
    elePopupComic.innerHTML = "";
    if (thing.comic) {
        const a = elePopupComic.appendChild(document.createElement("a"));
        a.setAttribute("href", thing.comic);
        a.innerText = "Click here to read the comic.";
    }
    elePopup.style.opacity = "1";
}

elePopupClose.addEventListener("click", (e) => {
    elePopup.style.opacity = "0";
});