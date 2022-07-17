// Todo: add more colours
const colours = [
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
];

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
