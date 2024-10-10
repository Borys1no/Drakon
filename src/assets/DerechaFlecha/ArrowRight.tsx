import React from 'react';
import './ArrowRight.css'; // Assuming you move the styles to a separate CSS file

export const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg"
         className="svg-snoweb svg-theme-light"
         x="0"
         y="0"
         width="100%"
         height="100%"
         viewBox="0 0 100 100"
         preserveAspectRatio="xMidYMid meet">
        <clipPath id="clip-path">
            <rect x="0" y="0" width="100" height="100" rx="15" ry="15"></rect>
        </clipPath>

        <g clipPath="url(#clip-path)">
            <rect 
                className="svg-fill-tertiary"
                x="0"
                y="0"
                width="100"
                height="100"
                rx="15"
            />
            <g transform="translate(-22.50, -22.50) scale(1.45, 1.45)">
                <circle 
                    className="svg-fill-secondary svg-builder-circle"
                    cx="50"
                    cy="50"
                    r="50"
                />
            </g>
        </g>

        <g transform="translate(20.00, 20.00) scale(0.60, 0.60)">
            <path d="M67.4,36.1,81.4,50m0,0-14,13.9M81.4,50H18.6" 
                fill="none" 
                className="svg-stroke-primary" 
                strokeLinecap="round"
                strokeLinejoin="round" 
                strokeWidth="8"
            />
        </g>
    </svg>
);
