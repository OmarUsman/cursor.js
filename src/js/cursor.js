document.getElementsByTagName("cursor")[0].insertAdjacentHTML("afterbegin", `
<div class="cursor-ball ball-outer">
<svg height="30" width="30">
  <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
</svg>
</div>
<div class="cursor-ball ball-inner">
<svg height="10" width="10">
  <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
</svg>
</div>
`);
const $outerBall = document.querySelector(".ball-outer"),
  $innerBall = document.querySelector(".ball-inner"),
  $hoverables = document.querySelectorAll("a");
document.body.addEventListener("mousemove", onMouseMove);
for (let e = 0; e < $hoverables.length; e++) $hoverables[e].addEventListener("mouseenter", onMouseHover), $hoverables[e].addEventListener("mouseleave", onMouseHoverOut);

function onMouseMove(e) {
  TweenMax.to($outerBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  }), TweenMax.to($innerBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

function onMouseHover() {
  TweenMax.to($outerBall, .3, {
    scale: 4
  })
}

function onMouseHoverOut() {
  TweenMax.to($outerBall, .3, {
    scale: 1
  })
}