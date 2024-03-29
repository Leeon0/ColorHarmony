import type { SVGProps } from "react";
function SvgBrand(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="48px"
      viewBox="0 0 48 48"
      width="48px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#A67C52" d="M7,26L7,26c0-4.418,3.582-8,8-8h5V5c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v13h5c4.418,0,8,3.582,8,8v0&#10;&#9;H7z"/>
<path fill="#EFD358" d="M7,26v20c4.694,0,8.5-3.582,8.5-8c0,4.418,3.806,8,8.5,8s8.5-3.582,8.5-8c0,4.418,3.806,8,8.5,8V26H7z"/>
    </svg>
  );
}

export default SvgBrand;
