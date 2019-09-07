''
window.onload = function() {
  TweenMax.to("#firstTransitionDiv", 0.5, {xPercent:-50, delay: 5.7});
  TweenMax.from(".border-top", 0.5, {height: 0, delay: 5.5});
  TweenMax.from(".border-bottom", 0.5, {height: 0, delay: 5.5});
  TweenMax.from(".border-left", 0.5, {width: 0, delay: 5.5});
  TweenMax.from(".border-right", 0.5, {width: 0, delay: 5.5});
  TweenMax.to("#svgOla", 1, {autoAlpha: 1, delay: 5.7, ease: Expo.easeIn});
  
  //   Vai para o topo, implementar depois
  // TweenLite.to('.container-linguica', 0.8, {scrollTo: {y:0, autoKill:false}, ease: Power3.easeInOut})

  //Loader 
  dot = $('.dot');
  loader = $('#loader');
  timelineLoader = new TimelineMax({repeat: 3, onStart: tiraOverflowLinguica, onComplete: colocaOverflowLinguica});


  function tiraOverflowLinguica(){
    $('.container-linguica').css("overflow-y", "hidden");
  }

  function colocaOverflowLinguica(){
    $('.container-linguica').css("overflow-y", "auto");
  }

  timelineLoader.staggerFromTo(dot, 
                               0.3, 
                               {y: 0, autoAlpha: 0}, 
                               {y: 20, autoAlpha: 1, ease: Back.EaseInOut}, 
                               0.2)
                .fromTo(loader, 
                        0.3,
                        {autoAlpha: 1, scale: 1.3},
                        {autoAlpha: 0, scale: 1, ease: Power0.easeNone},
                        0.9);

  window.wasScrolled = false;
    $('.container-linguica').bind('scroll',function(){
        //Se é o primeiro scroll
        if (!window.wasScrolled){
           //Manda o vermelho para a direita
           TweenMax.to("#firstTransitionDiv", 1, {transform:"0%", ease: Sine.easeInOut});
            //Cria o parallax
            tl = new TimelineLite();
            tl.to("#svgOla", 0.4, {right: "-7%", ease: Sine.easeIn}).
               to("#svgOla", 0.6, {right: "-10%", ease: Sine.easeIn}).
               to("#text-home", 0.5, {y: -20, autoAlpha:1, ease: Sine.easeInOut});
        }
        window.wasScrolled = true;

        //pos é a posição da barra de scroll
        var pos = $('.container-linguica').scrollTop();
        //Quando atinge o topo
            if (pos == 0) {
                //Volta o vermelho para esquerda
                TweenMax.to("#firstTransitionDiv", 1, {xPercent:-50, ease: Sine.easeInOut, delay: 0.4});
                //cria parallax
                tl = new TimelineLite();
                    tl.
                    to("#text-home", 0.4, {y: 20, autoAlpha:0, ease: Sine.easeInOut}).
                    to("#svgOla", 0.3, {right: "-13%", ease: Sine.easeIn}).
                    to("#svgOla", 0.7, {right: "-10%", ease: Sine.easeOut});
                window.wasScrolled = false;
            }
    })

};

