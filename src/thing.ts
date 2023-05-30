
export interface Thing {
    pos: [number, number];
    header: string;
    body: string;
    comic: string | null;
}

export const THINGS: Thing[] = [
    {
        pos: [2630, 250],
        header: "Thelma Shannon",
        body: `She moving from the Nullarbor plain to Mambray creek on a two day train trip.
        She and her family got distracted and the train with all her belongings left without her.
        Her radio broke in the middle of the desert and the man who came to fix it turned out to be the love of her life.
        She killed a rabbit with a shotgun on her honeymoon in the Northern Territory to cook and eat.
        She has 5 children and 9 grandchildren who all get together to see her for Christmas every year.`,
        comic: null
    },
    {
        pos: [700, 1260],
        header: "Joe Tourrisi",
        body: `Joe's roots stem from the historic city of Syracuse, Sicily. His family migrated to Australia when he was in primary school.
He studied hard in the University of Melbourne to earn a degree in chemical engineering.
Fresh out of university one of his first tasks as a consultant was at the marplex international lab.
He ran for a position as a councillor in the City of Moonee Valley in 2013. 
He claims he's never made a single mistake in his practice since the incinerator incident.`,
        comic: "Joe_Tourrisi.pdf"
    },
    {
        pos: [700, 250],
        header: "Ngoc Ba",
        body: ``,
        comic: "Ever_Since.pdf"
    },
    {
        pos: [2550, 1260],
        header: "Royden Kenneth",
        body: ``,
        comic: "Royden_Kenneth.pdf"
    }
];