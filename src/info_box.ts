import { Thing } from "./thing";

const elePopup = document.getElementById("popup")!;
const elePopupHeader = document.getElementById("popup-header")!;
const elePopupBody = document.getElementById("popup-body")!;
const elePopupClose = document.getElementById("popup-close")!;

export function showPopup(thing: Thing) {
    elePopupHeader.innerText = thing.header;
    elePopupBody.innerText = thing.body;
    elePopup.style.opacity = "1";
}

elePopupClose.addEventListener("click", (e) => {
    elePopup.style.opacity = "0";
});