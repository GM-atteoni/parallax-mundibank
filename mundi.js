window.onload = function() {
  tiraOverflowLinguica();  
  TweenMax.to("#firstTransitionDiv", 0.5, {xPercent:-50, delay: 5.7});
  TweenMax.from(".border-top", 0.5, {height: 0, delay: 4.8});
  TweenMax.from("#little-mundi", 0.5, {autoAlpha: 0, delay: 5.2});
  TweenMax.from(".border-bottom", 0.5, {height: 0, delay: 4.8});
  TweenMax.from(".border-left", 0.5, {width: 0, delay: 4.8});
  TweenMax.from(".border-right", 0.5, {width: 0, delay: 4.8});
  TweenMax.to("#svgOla", 1, {autoAlpha: 1, delay: 5.7, ease: Expo.easeIn});
  TweenMax.to("#face-icon", 0.4, {autoAlpha: 1, height: 25, delay: 6.2, ease: Expo.easeIn});
  TweenMax.to("#in-icon", 0.4, {autoAlpha: 1, height: 25, delay: 6.6, ease: Expo.easeIn});
  TweenMax.to("#insta-icon", 0.4, {autoAlpha: 1, height: 25, delay: 7, ease: Expo.easeIn});
  TweenMax.to(".home-scroll", 1, {autoAlpha: 1, top: '41em', delay: 6.0, ease: Expo.easeInOut});
  //   Vai para o topo, implementar depois
  // TweenLite.to('.container-linguica', 0.8, {scrollTo: {y:0, autoKill:false}, ease: Power3.easeInOut})

  //Loader 
  dot = $('.dot');
  loader = $('#loader');
  timelineLoader = new TimelineMax({repeat: 3, onComplete: colocaOverflowLinguica});


  function tiraOverflowLinguica(){
    $('.container-linguica').css("overflow-y", "hidden");
  }

  function colocaOverflowLinguica(){
    $('.container-linguica').css("overflow-y", "unset");
  }

    // Balanço cartões
    $(".app-phones").on('mousemove', function(e){
        centerX = $(this).width();
        centerY = $(this).height();
        
        moveX = (centerX - e.offsetX)/90;
        moveY = (centerY - e.offsetY)/90;
        
        $(".app-phones").css("transform", 'rotateY('+ moveX + 'deg) rotateX('+ moveY + 'deg)')
    })

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
  
    setTimeout(() => {
        $(window).bind('scroll',function(){
            //Se é o primeiro scroll
            if (!window.wasScrolled){
               //Manda o vermelho para a direita
               TweenMax.to("#firstTransitionDiv", 1, {transform:"0%", ease: Sine.easeInOut});
                //Cria o parallax
                tl = new TimelineLite();
                tl.
                   to(".home-scroll", 0.2, {autoAlpha: 0, top: '43em', ease: Expo.easeIn}).
                   to("#svgOla", 0.4, {right: "-7%", ease: Sine.easeIn}).
                   to("#svgOla", 0.6, {right: "-10%", ease: Sine.easeIn}).
                   to("#text-home", 0.5, {y: -20, autoAlpha:1, ease: Sine.easeInOut});
                window.wasScrolled = true;
            }
    
            //pos é a posição da barra de scroll
            // var pos = $(window).scrollTop();
            // //Quando atinge o topo
            //     if (pos == 0) {
            //         window.wasScrolled = false;
            //         //Volta o vermelho para esquerda
            //         TweenMax.to("#firstTransitionDiv", 1, {xPercent:-50, ease: Sine.easeInOut, delay: 0.4});
            //         //cria parallax
            //         tl = new TimelineLite();
            //             tl.
            //             to("#text-home", 0.4, {y: 20, autoAlpha:0, ease: Sine.easeInOut}).
            //             to("#svgOla", 0.3, {right: "-13%", ease: Sine.easeIn}).
            //             to("#svgOla", 0.7, {right: "-10%", ease: Sine.easeOut})
            //     }
        })
    }, 4000);

};

