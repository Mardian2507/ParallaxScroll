let bg = document.getElementById("bg");
let bgstone = document.getElementById("bgstone");
let bird = document.getElementById("bird");
let me = document.getElementById("me");
let my = document.getElementById("my");
let text = document.getElementById("text");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  bg.style.top = value * 0.8 + "px";
  bgstone.style.top = value * 1.5 + "px";
  bird.style.left = -value * 0.5 + "px";
  me.style.top = value * 0.6 + "px";
  my.style.top = value * 0.4 + "px";
  text.style.marginRight = value * 2.3 + "px";
  text.style.marginTop = value * 1.5 + "px";
});
