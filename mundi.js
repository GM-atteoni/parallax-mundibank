
window.onload = function() {
  TweenMax.to("#firstTransitionDiv", 0.5, {xPercent:-50, delay: 0.5});
  TweenMax.from(".border-top", 0.5, {height: 0, delay: 0.5});
  TweenMax.from(".border-bottom", 0.5, {height: 0, delay: 0.5});
  TweenMax.from(".border-left", 0.5, {width: 0, delay: 0.5});
  TweenMax.from(".border-right", 0.5, {width: 0, delay: 0.5});
  TweenMax.from("#svgOla", 1, {opacity: 0, delay: 0.5, ease: Expo.easeIn});

};