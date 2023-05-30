import { eleCollageHeight, eleCollageWidth, eleMain, eleMainContent } from "./main";

const eleMainContentTranslation = eleMain.createSVGTransform();
eleMainContent.transform.baseVal.appendItem(eleMainContentTranslation);

interface Vec2 {
    x: number;
    y: number;
}

interface DragInfo {
    mouseStart: Vec2;
    translationStart: Vec2;
}

var translation = {
    x: window.innerWidth / 2 - (eleCollageWidth) / 2,
    y: window.innerHeight / 2 - (eleCollageHeight) / 2
};

eleMainContentTranslation.setTranslate(translation.x, translation.y);

var drag: DragInfo | null = null;

window.addEventListener("touchstart", (e) => {
    if (drag) return;
    drag = {
        mouseStart: { x: e.touches[0].pageX, y: e.touches[0].pageY },
        translationStart: { x: translation.x, y: translation.y }
    };
    e.preventDefault();
});

window.addEventListener("mousedown", (e) => {
    if (drag) return;
    drag = {
        mouseStart: { x: e.x, y: e.y },
        translationStart: { x: translation.x, y: translation.y }
    };
    e.preventDefault();
});

function move(drag: DragInfo, x: number, y: number) {
    const dx = drag.mouseStart.x - x;
    const dy = drag.mouseStart.y - y;

    translation = {
        x: drag.translationStart.x - dx,
        y: drag.translationStart.y - dy
    };

    if (translation.x > 0) translation.x = 0;
    if (translation.y > 0) translation.y = 0;

    if (window.innerWidth - translation.x > eleCollageWidth)
        translation.x = window.innerWidth - eleCollageWidth;
    if (window.innerHeight - translation.y > eleCollageHeight)
        translation.y = window.innerHeight - eleCollageHeight;


    eleMainContentTranslation.setTranslate(translation.x, translation.y);

}

window.addEventListener("mousemove", (e) => {
    if (e.shiftKey) console.log((e.x - translation.x) + ", " + (e.y - translation.y));
    if (!drag) return;
    move(drag, e.x, e.y);
    e.preventDefault();
});

window.addEventListener("mouseup", (e) => {
    drag = null;
});

window.addEventListener("touchmove", (e) => {
    if (!drag) return;
    move(drag, e.touches[0].pageX, e.touches[0].pageY);
    e.preventDefault();
});

window.addEventListener("touchend", (e) => {
    drag = null;
});