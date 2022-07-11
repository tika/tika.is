/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Jost", "sans-serif"],
        },
        extend: {
            colors: {
                theme: "#a1d0db",
            },
            minWidth: {
                48: "calc(48 * 0.25rem)",
                32: "calc(32 * 0.25rem)",
            },
            keyframes: {
                chroma: {
                    "0%, 100%": { color: "#a1d0db" },
                    "50%": { color: "#445559" },
                },
            },
            animation: {
                chroma: "chroma 5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
