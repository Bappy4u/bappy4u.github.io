document
  .getElementById("copyright")
  .appendChild(document.createTextNode(new Date().getFullYear()));

// responsive
function changeCaseStudy(x) {
  if (x.matches) {
    // If media query matches
    document.getElementById("m-caseStudy").innerText = "c.study";
  } else {
    document.getElementById("m-caseStudy").innerText = "case study";
  }
}
var media600 = window.matchMedia("(max-width: 600px)");

window.addEventListener("resize", changeCaseStudy(media600));
