let isOpen = false;
let botCall = false;
const chatPath = `M2640 5069 c-438 -48 -834 -216 -1171 -497 -378 -316 -645 -773 -733
-1256 -18 -100 -36 -259 -36 -324 0 -43 -4 -52 -27 -67 -54 -36 -216 -202
-283 -290 -335 -443 -413 -1035 -204 -1543 l35 -82 -107 -308 c-99 -282 -108
-313 -108 -382 -1 -112 46 -190 146 -245 46 -26 63 -30 128 -29 69 0 101 10
382 108 l308 107 83 -35 c192 -79 363 -111 602 -110 193 0 284 12 442 60 299
90 582 281 775 521 l50 63 59 0 c194 0 541 83 758 181 35 16 69 29 75 29 6 0
207 -68 446 -151 276 -95 456 -152 493 -156 203 -20 383 157 364 356 -3 34
-64 225 -156 494 -83 241 -151 443 -151 449 0 7 25 74 56 150 103 257 154 521
154 807 0 248 -30 438 -106 672 -252 769 -922 1338 -1724 1464 -125 19 -431
27 -550 14z m479 -315 c822 -119 1463 -763 1582 -1589 19 -131 17 -418 -4
-535 -35 -195 -99 -393 -173 -542 -21 -42 -34 -82 -34 -106 0 -24 61 -215 160
-503 88 -255 160 -474 160 -485 0 -12 -6 -24 -13 -27 -7 -2 -228 69 -490 159
-263 90 -492 164 -509 164 -17 0 -81 -23 -142 -51 -402 -185 -835 -227 -1254
-120 -577 148 -1063 583 -1275 1141 -83 219 -119 415 -119 651 0 172 11 275
43 419 168 745 787 1315 1548 1425 125 18 392 18 520 -1z m-2370 -2297 c82
-397 307 -799 610 -1090 317 -304 679 -491 1116 -578 l60 -11 -54 -49 c-245
-219 -605 -338 -936 -309 -166 15 -294 49 -447 118 -115 52 -98 55 -453 -67
-176 -60 -321 -109 -322 -108 -1 1 48 146 108 322 122 355 119 338 67 453 -16
37 -41 99 -55 137 -126 363 -71 791 143 1110 49 74 134 178 140 172 2 -2 13
-47 23 -100z"/>
<path d="M1927 3720 c-138 -27 -169 -188 -53 -274 27 -21 36 -21 978 -24 l951
-2 42 24 c101 60 98 200 -6 261 -33 20 -53 20 -954 22 -506 0 -937 -2 -958 -7z"/>
<path d="M1895 3086 c-17 -7 -43 -28 -58 -45 -72 -86 -29 -211 83 -241 26 -7
342 -10 969 -8 925 3 930 3 958 24 97 72 97 186 0 258 -28 21 -32 21 -975 23
-772 2 -953 0 -977 -11z"/>
<path d="M1877 2448 c-40 -23 -77 -86 -77 -129 0 -42 42 -111 80 -131 32 -17
73 -18 635 -18 581 0 601 1 633 20 52 32 74 76 69 138 -4 61 -28 99 -78 124
-31 17 -82 18 -629 18 -593 0 -595 -1 -633 -22z`;
const closePath = `M1215 3986 c-41 -18 -83 -69 -91 -111 -17 -90 -42 -61 609 -712 l602
-603 -602 -602 c-653 -654 -626 -622 -608 -715 9 -49 69 -109 118 -118 93 -18
61 -45 715 608 l602 602 603 -602 c653 -653 621 -626 714 -608 49 9 109 69
118 118 18 93 45 61 -608 715 l-602 602 602 603 c653 653 626 621 608 714 -9
49 -69 109 -118 118 -93 18 -61 45 -715 -608 l-602 -602 -598 597 c-331 331
-610 602 -625 608 -38 14 -85 12 -122 -4z`;

const getRightSVG = (isChat) => {
    const path = isChat == true ? chatPath : closePath;
    return `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="40px" height="40px" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="${window.config.iconColor}" stroke="none">
<path d="${path}"/>
</g>
</svg>`;
};

const ssBot = document.createElement("div");
ssBot.id = "socialsparsh-bot";
ssBot.style.position = "fixed";
ssBot.style.bottom = window.config.bottom;
ssBot.style.right = window.config.right;
ssBot.style.display = "flex";
ssBot.style.flexDirection = "column-reverse";
ssBot.style.alignItems = "flex-end";
ssBot.style.zIndex = 11111;
const ssbFrame = document.createElement("iframe");
ssbFrame.id = "ssb-frame";
ssbFrame.height = window.config.height;
ssbFrame.width = window.config.width;
ssbFrame.style.border = "0px";
ssbFrame.style.borderRadius = "5px";
ssbFrame.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
ssbFrame.style.display = "none";
ssbFrame.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
ssbFrame.style.transition = "0.24s all";
ssBot.append(ssbFrame);
const divv = document.createElement("div");
divv.width = "40px";
divv.height = "40px";
divv.innerHTML = getRightSVG(true);
button.append(divv);
ssBot.append(button);
button.style.border = "0";
button.style.height = "60px";
button.style.width = "60px";
button.style.outline = "none";
button.style.background = "rgb(144,188,255)";
button.style.background = window.config.color;
button.style.borderRadius = "50%";
button.style.cursor = "pointer";
button.style.marginTop = "10px";
button.title = window.config.name;
button.onclick = () => {
    isOpen
        ? (divv.innerHTML = getRightSVG(true))
        : (divv.innerHTML = getRightSVG(false));
    ssbFrame.style.display = isOpen ? "none" : "block";
    button.title = isOpen ? `${window.config.name}` : "Close";
    isOpen = !isOpen;
    if (!botCall) {
        ssbFrame.src = `https://bot.socialsparsh.com/?id=${window.config.id}`;
    }
    botCall = true;
};
document.body.append(ssBot);
ssBot.append(ssbFrame);
