import { css, cx } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { applyStyle } from "../utils";








const classes = {
  img: css({ maxW: "100%", height: "380px", objectFit: "cover", lg: { height: "460px" } }),
  brandContainer: css({ mb: "12", lg: { mb: "16" } }),
  brand: css({ maxW: "100%" }),
};

export function Hero() {
  return (
    <section style={applyStyle("color")}>
      <div className={cx(container(), classes.brandContainer)}>
      
    

     
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="3000pt" height="auto" viewBox="0 400 11100 500"fill="none"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M721 6454 l-21 -27 0 -1401 c0 -1108 3 -1406 13 -1426 24 -48 60 -51
452 -48 380 3 391 4 417 51 10 17 14 143 16 537 2 328 7 519 13 525 6 6 163
12 415 15 l406 5 19 24 c19 23 20 39 17 292 -3 246 -4 269 -22 288 -19 21 -25
21 -413 21 -380 0 -394 1 -413 20 -19 19 -20 33 -20 243 0 215 1 225 21 243
20 18 49 19 649 24 508 4 630 8 643 19 30 24 37 84 37 331 0 206 -3 249 -16
268 l-15 22 -1089 0 -1089 0 -20 -26z"   fill="currentColor"/>
<path d="M3286 6458 c-14 -20 -16 -173 -16 -1435 l0 -1412 24 -28 24 -28 1074
-3 c590 -2 1088 0 1107 3 18 4 44 17 57 30 l24 24 0 274 c0 273 0 274 -23 295
l-23 22 -671 0 c-597 0 -673 2 -687 16 -14 13 -16 48 -16 230 0 215 0 215 25
239 l24 25 389 0 c319 0 392 3 408 14 18 14 19 29 19 296 l0 282 -24 19 c-22
18 -44 19 -397 19 -257 0 -381 4 -398 11 -38 18 -46 58 -46 245 0 176 7 215
39 231 9 4 297 9 641 10 344 2 635 5 647 8 48 11 53 43 53 334 0 232 -2 272
-16 285 -14 14 -129 16 -1119 16 l-1104 0 -15 -22z"   fill="currentColor"/>
<path d="M5940 6460 c-20 -20 -20 -33 -20 -1429 0 -838 4 -1420 9 -1434 5 -13
18 -28 28 -33 22 -11 653 -18 742 -9 48 5 70 13 87 30 l24 24 0 1419 c0 1362
-1 1420 -18 1435 -17 15 -61 17 -425 17 -394 0 -408 -1 -427 -20z"   fill="currentColor"/>
<path d="M7251 6461 l-21 -21 0 -1415 0 -1416 24 -24 c14 -14 41 -26 68 -30
25 -4 319 -5 654 -2 641 5 696 8 898 56 596 143 975 569 1051 1186 45 362 -17
729 -168 990 -216 374 -571 591 -1097 671 -97 15 -212 18 -752 21 -634 5 -637
4 -657 -16z m1108 -612 c213 -18 346 -74 455 -190 131 -138 186 -322 186 -619
0 -213 -27 -360 -90 -495 -101 -218 -289 -334 -594 -365 -125 -13 -181 -8
-190 16 -3 9 -6 382 -6 829 0 910 -5 846 72 839 24 -2 99 -9 167 -15z"   fill="currentColor"/>
</g>
</svg>


        

        
        
        
      </div>
      <figure>
        
        <img
          alt="background hero"
          className={classes.img}
          height={500}
          loading="lazy"
          src="./feid1.png"
          width="100%"
        />
      </figure>
    </section>
  );
}
