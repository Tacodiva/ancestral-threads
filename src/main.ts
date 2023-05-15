import { showPopup } from './info_box';
import { THINGS } from './thing';

const SVG_NS = "http://www.w3.org/2000/svg";

export const eleContainer = document.getElementById("container")!;
export const eleLoading = document.getElementById("loading")!;
export const eleMain: SVGSVGElement = document.getElementById("main") as any;
export const eleMainContent: SVGGElement = document.getElementById("main-content") as any;

export const eleCollageWidth = 4000;
export const eleCollageHeight = 4000;

export const eleCollage = eleMainContent.appendChild(document.createElementNS(SVG_NS, "image"));
eleCollage.addEventListener("load", (e) => {
    eleCollage.style.width = `${eleCollageWidth}px`;
    eleCollage.style.height = `${eleCollageHeight}px`;

    for (const thing of THINGS) {
        const eleThing = eleMainContent.appendChild(document.createElementNS(SVG_NS, "g"));
        eleThing.classList.add("thing");
        const eleThingTransform = eleMain.createSVGTransform();
        eleThing.transform.baseVal.appendItem(eleThingTransform);
        eleThingTransform.setTranslate(...thing.pos);

        const background = eleThing.appendChild(document.createElementNS(SVG_NS, "rect"));
        background.style.width = "200px";
        background.style.height = "200px";

        eleThing.addEventListener("click", (e) => {
            showPopup(thing);
        });
    }
    
    eleContainer.style.display = "";
    eleLoading.remove();
});
eleCollage.setAttribute("href", "collage.png");

