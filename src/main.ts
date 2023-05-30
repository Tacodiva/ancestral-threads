import { showPopup } from './info_box';
import { THINGS } from './thing';

const SVG_NS = "http://www.w3.org/2000/svg";

export const eleContainer = document.getElementById("container")!;
export const eleLoading = document.getElementById("loading")!;
export const eleMain: SVGSVGElement = document.getElementById("main") as any;
export const eleMainContent: SVGGElement = document.getElementById("main-content") as any;

export const eleCollageScaleFactor = 1.2
export const eleCollageWidth = 3840 * eleCollageScaleFactor;
export const eleCollageHeight = 2160 * eleCollageScaleFactor;

export const eleCollage = eleMainContent.appendChild(document.createElementNS(SVG_NS, "image"));
eleCollage.addEventListener("load", (e) => {
    eleCollage.style.width = `${eleCollageWidth}px`;
    eleCollage.style.height = `${eleCollageHeight}px`;

    for (const thing of THINGS) {
        const eleThing = eleMainContent.appendChild(document.createElementNS(SVG_NS, "g"));
        eleThing.classList.add("thing");
        const eleThingTransform = eleMain.createSVGTransform();
        eleThing.transform.baseVal.appendItem(eleThingTransform);
        eleThingTransform.setTranslate(thing.pos[0] * eleCollageScaleFactor, thing.pos[1] * eleCollageScaleFactor);

        const background = eleThing.appendChild(document.createElementNS(SVG_NS, "rect"));
        background.style.width = `${530 * eleCollageScaleFactor}px`;
        background.style.height = `${630 * eleCollageScaleFactor}px`;

        eleThing.addEventListener("click", (e) => {
            showPopup(thing);
        });
    }
    
    eleContainer.style.display = "";
    eleLoading.remove();
});
eleCollage.setAttribute("href", "collage.png");

