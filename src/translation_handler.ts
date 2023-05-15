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

window.addEventListener("mousedown", (e) => {
    if (drag) return;
    drag = {
        mouseStart: { x: e.x, y: e.y },
        translationStart: { x: translation.x, y: translation.y }
    };
    e.preventDefault();
});

window.addEventListener("mousemove", (e) => {
    if (!drag) return;

    const dx = drag.mouseStart.x - e.x;
    const dy = drag.mouseStart.y - e.y;

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

    e.preventDefault();
});

window.addEventListener("mouseup", (e) => {
    drag = null;
});