type ShimmerProps = { width: number, height: number };

const shimmer = ({ width, height }: ShimmerProps) => {
    return `<svg width=${width} height=${height} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="g">
                    <stop stop-color="#333" offset="20%" />
                    <stop stop-color="#222" offset="50%" />
                    <stop stop-color="#333" offset="70%" />
                </linearGradient>
            </defs>
            <rect width=${width} height=${height} fill="#333" />
            <rect id="r" width=${width} height=${height} fill="url(#g)" />
            <animate xlinkHref="#r" attributeName="x" from=${-width} to=${width} dur="1s" repeatCount="indefinite" />
        </svg>`;
}

export default function Shimmer(props: ShimmerProps) {
    return Buffer.from(shimmer(props)).toString("base64");
}