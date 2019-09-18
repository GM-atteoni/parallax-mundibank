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
    $(".third-container").on('mousemove', function(e){
        centerX = $(this).width();
        centerY = $(this).height();
        
        moveX = (centerX - e.offsetX)/90;
        moveY = (centerY - e.offsetY)/90;
        
        $(".app-phones").css("transform", 'rotateY('+ (moveX/2) + 'deg) rotateX('+ (moveY/2) + 'deg)')
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
               TweenMax.to("#firstTransitionDiv", 0.6, {transform:"0%", ease: Sine.easeInOut});
                //Cria o parallax
                tl = new TimelineLite();
                tl.
                   to(".home-scroll", 0.2, {autoAlpha: 0, top: '43em', ease: Expo.easeIn}).
                   to("#svgOla", 0.4, {right: "-10%", ease: Sine.easeIn}).
                   to("#text-home", 0.3, {y: -20, autoAlpha:1, ease: Sine.easeInOut});
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

            //Quando atinge o fundo
            if($('.flex-cont').scrollTop() == ($(window).height() - $('.flex-cont').height())){
                console.log('ok');
            }
        })
    }, 4000);

    //Animação Scroll
    const controller = new ScrollMagic.Controller();

    //animação de fechar o home
    let tlHome = new TimelineLite();
    tlHome.add('hide') 
    .to("#svgOla", 0.5, {top: 0, ease: Sine.easeInOut}, 'hide')
    .to("#text-home", 0.5, {bottom: '30%', ease: Sine.easeInOut}, 'hide')

    //Cena fechar home
    const sceneHome = new ScrollMagic.Scene({
        triggerElement: '.second-step',
        duration: 700,
        triggerHook: 0.9
    })
    .setTween(tlHome)
    .addTo(controller);

    //animação big-mundi 1
    let tlBig1 = new TimelineLite();
    tlBig1.add('left') 
    .to('#big-mundi', 1.5, {left: -290, onStart: playSecond})

    //Cena big-mundi 1
    const sceneBigMundi1 = new ScrollMagic.Scene({
        triggerElement: '.second-step',
        duration: 450
    })
    .setTween(tlBig1)
    .addTo(controller);

    //animação big-mundi 2 -- do lugar certo até só sobrar bank
    let tBigMundi2 = new TimelineLite();
    tBigMundi2
    .to('#big-mundi', 3, {left: -1247})
    .to('#big-mundi', 3, {top: 1252, onStart: playThirdText});

    //Cena big-mundi 2
    const sceneBigMundi2 = new ScrollMagic.Scene({
        triggerElement: '.third-step',
        duration: 700,
        triggerHook: 0.9
    })
    .setTween(tBigMundi2)
    .addTo(controller);

    //Animação colunas
    let tlColumns = new TimelineLite();
    tlColumns.add('grow') 
    .from('.column1', 1, {scaleY: 3}, 'grow')
    .from('.column2', 1, {scaleY: 3}, 'grow')
    .from('.column3', 1, {scaleY: 1.6}, 'grow')
    .from('.column4', 1, {scaleY: 1.1}, 'grow')
    .from('.column5', 1, {scaleY: 1.7}, 'grow')
    .from('.column6', 1, {scaleY: 1.5}, 'grow')
    .from('.column7', 1, {scaleY: 3}, 'grow')

    //Cena columns
    const sceneColumns = new ScrollMagic.Scene({
        triggerElement: '.third-step',
        duration: 700,
    })
    .setTween(tlColumns) 
    .addTo(controller);

    //animação text do terceiro
    const tTextThird = new TimelineLite();
    tTextThird
    .from('.third-text-1', 0.8, {autoAlpha: 0, left: 50}, '+=0.2')
    .from('.third-text-2', 0.8, {autoAlpha: 0, right: 50}, '-=0.5')
    .from('.third-text-3', 0.4, {autoAlpha: 0}, '-=0.7');

    tTextThird.pause();

    function playThirdText() {
        tTextThird.play();
    }

    //animação segunda página
    const tlSecond = new TimelineLite(); 
    tlSecond
    .from('.textLeftSection', 0.6, {left: 40, autoAlpha: 0})
    .from('.textLeftSection p', 0.8, {left: -90, autoAlpha: 0});

    tlSecond.pause();

    function playSecond() {
        tlSecond.play();
    }

};

