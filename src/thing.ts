
export interface Thing {
    pos: [number, number];
    header: string;
    body: string;
}

export const THINGS: Thing[] = [

    {
        pos: [1500, 1500],
        header: "Hello, World",
        body: "This is the first thing on the website!"
    },
    {
        pos: [2000, 1500],
        header: "Hello, World 2",
        body: "This is the second thing on the website!"
    }

];