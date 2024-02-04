const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


gsap.from('#nlink', {
    stagger: .2,
    duration: 1,
    ease: Power3,
    y: 10,
    opacity: 0
})


gsap.from(".headings h2" , {
    stagger: .3,
    duration: 2,
    ease: Power3,
    y: 20,
    opacity: 0
  });

gsap.from('#anim2', {
    y:50,
    stagger:.3,
    opacity: 0,
    ease: Expo,
    duration: 2
})

gsap.from('.imgentext img', {
    y:70,
    ease: Expo,
    duration: 2
})

Shery.imageEffect('.imgentext img', {
    style: 3,
    config: {"uFrequencyX":{"value":11.45,"range":[0,100]},"uFrequencyY":{"value":12.21,"range":[0,100]},"uFrequencyZ":{"value":15.27,"range":[0,100]},"geoVertex":{"range":[1,64],"value":50.53},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
})

Shery.imageEffect('#golu img', {
    style: 5,
    config: {"a":{"value":1.98,"range":[0,30]},"b":{"value":0.69,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect('.bimg', {
    style: 5,
    gooey: true,
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.238791269403514},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.85,"range":[1,15]},"durationOut":{"value":0.66,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":14}},"discard_threshold":{"value":0.49,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.05,"range":[0,2]},"noise_scale":{"value":0,"range":[0,100]}}
})


document.querySelector('.btn').addEventListener('mouseover', ()=>{
    gsap.to('.future video', {
        opacity: 1,
        duration: 1.5,
        ease: Power4,
    })
})

document.querySelector('.btn').addEventListener('mouseleave', ()=>{
    gsap.to('.future video', {
        opacity: 0,
        duration: 1,
        ease: Power4,
    })
})