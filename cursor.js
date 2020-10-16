// Get "Cursor" element and inject the svg to create the cursor
document.getElementsByTagName("cursor")[0].insertAdjacentHTML("afterbegin", `
<div class="cursor-ball cursor-ball-outer">
<svg height="30" width="30">
  <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
</svg>
</div>
<div class="cursor-ball cursor-ball-inner">
<svg height="10" width="10">
  <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
</svg>
</div>
`);

// Set some variables
const $outerBall = document.querySelector(".cursor-ball-outer");
const $innerBall = document.querySelector(".cursor-ball-inner");
const $hoverable = document.querySelectorAll("a");

// Listeners for mouse leave + hovering on a hoverable
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverable.length; i++) {
  $hoverable[i].addEventListener("mouseenter", onMouseHover);
  $hoverable[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Smoothly move the mouse
function onMouseMove(e) {
  TweenMax.to($outerBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($innerBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// When you hover over a hoverable / enter hover state
function onMouseHover() {
  TweenMax.to($outerBall, .3, {
    scale: 4
  })
}

// When you leave hover state
function onMouseHoverOut() {
  TweenMax.to($outerBall, .3, {
    scale: 1
  })
}