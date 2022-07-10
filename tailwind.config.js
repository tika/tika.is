/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Jost", "sans-serif"],
        },
        extend: {
            colors: {
                theme: "#8ECBCF",
            },
            minWidth: {
                48: "calc(48 * 0.25rem)",
                32: "calc(32 * 0.25rem)",
            },
        },
    },
    plugins: [],
};
