import React from 'react';
import type { SVGProps } from 'react';

const IconCheck = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
            <mask
                id="mask0_5984_5576"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24">
                <rect width="24" height="24" fill="currentColor" />
            </mask>
            <g mask="url(#mask0_5984_5576)">
                <path
                    d="M9.55021 15.15L18.0252 6.675C18.2252 6.475 18.4627 6.375 18.7377 6.375C19.0127 6.375 19.2502 6.475 19.4502 6.675C19.6502 6.875 19.7502 7.1125 19.7502 7.3875C19.7502 7.6625 19.6502 7.9 19.4502 8.1L10.2502 17.3C10.0502 17.5 9.81687 17.6 9.55021 17.6C9.28354 17.6 9.05021 17.5 8.85021 17.3L4.55021 13C4.35021 12.8 4.25437 12.5625 4.26271 12.2875C4.27104 12.0125 4.37521 11.775 4.57521 11.575C4.77521 11.375 5.01271 11.275 5.28771 11.275C5.56271 11.275 5.80021 11.375 6.00021 11.575L9.55021 15.15Z"
                    fill="currentColor"
                />
            </g>
        </svg>
    );
};

export default IconCheck;
