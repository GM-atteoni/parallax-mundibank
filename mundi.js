
window.onload = function() {
  TweenMax.to("#firstTransitionDiv", 0.3, {xPercent:-50});
  TweenMax.from(".border-top", 0.3, {height: 0});
  TweenMax.from(".border-bottom", 0.3, {height: 0});
  TweenMax.from(".border-left", 0.3, {width: 0});
  TweenMax.from(".border-right", 0.3, {width: 0});

};