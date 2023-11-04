const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


gsap.from(".nlink", {
stagger : .1,
y: 20,
duration: 2,
ease : "power3",
opacity: 0


})




Shery.textAnimate("#headings h1", {

  style: 2,
  delay:3,
  y:15,
  duration: 4,
  ease : "cubic-bezier(0.23,1,0.320,1)",
  multiplier: 0.1,
});




gsap.from ( ".anim1",{
  y:50,
  opacity:0,
  stagger: .3,
  ease: "power4",
  duration:2
})



Shery.makeMagnet("#imgandtext img"/* Element to target.*/, {
  //Parameters are optional.
 
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .5,
});





Shery.imageEffect(".wimg", {
  style: 2, //Select Style
  // Debug Panel
  config: 
    {"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":0},"modeN":{"value":2},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":11050492},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666211994527904},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    /* Config made from debug panel */
  ,
  preset: "./presets/wigglewobble.json",
                           });




                           Shery.imageEffect("#picimg img", {
                            style: 6,
                            config:{"noiseDetail":{"value":11.57,"range":[0,100]},"distortionAmount":{"value":0.3,"range":[0,10]},"scale":{"value":100,"range":[0,100]},"speed":{"value":1,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7999754830126307},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
                          });

                          const video = document.querySelector("#future video");

                          video.addEventListener("click", function () {
                            if (video.style.opacity === "1") {
                              gsap.to(video, {
                                opacity: 0
                              });
                            } else {
                              gsap.to(video, {
                                opacity: 1
                              });
                            }
                          });
                          