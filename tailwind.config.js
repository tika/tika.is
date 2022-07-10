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
        },
    },
    plugins: [],
};
