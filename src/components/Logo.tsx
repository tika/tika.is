import React from "react";

export function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={className}
            fill="none"
            viewBox="0 0 700 700"
        >
            <path fill="#A1D0DB" d="M180 180H550V550H180z"></path>
            <path
                fill="#000"
                stroke="#000"
                d="M226.784 200.571c64.701-3.48 68.199 52.203 68.199 52.203 0 30.064-3.108 45.916-11.133 76.566-2.109 8.053-7.408 30.087-9.694 38.282-4.123 14.775-8.409 29.814-12.398 45.243-25.197 97.447-53.151 154.871-47.214 198.374 15.388 112.759 106.669 85.265 150.385 55.683-22.732-1.74-24.481-24.361-24.481-24.361-1.625-9.701 3.443-47.663 22.733-114.848a5656.985 5656.985 0 0018.522-66.124 5993.277 5993.277 0 009.457-34.947c10.283-38.48 18.421-70.633 20.984-83.381 6.596-32.819-68.257-79.466-79.332-90.487 0 0 171.371 33.063 232.574-13.92C668.558 155.328 647.632 70.642 627.231 37c-69.947 140.949-125.905 95.706-327.002 90.486-141.494-3.673-219.226 74.825-213.98 125.288 0 0 75.834-48.723 140.535-52.203z"
            ></path>
        </svg>
    );
}
