// Todo: add more colours
const colours = ["bg-red-100", "bg-blue-100", "bg-green-100"];

// Given a string, x, return a colour from an array
export function getTagColour(x: string) {
    let sum = 0;

    for (let i = 0; i < x.length; i++) {
        sum += x.charCodeAt(i);
    }

    return colours[
        Math.floor(parseFloat(`0.${sum.toFixed(0)}`) * colours.length)
    ];
}
