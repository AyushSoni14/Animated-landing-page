var tl=gsap.timeline()
tl.from(".logo,.section2 a,.section3 a,.getstarted",{
y: -100,
duration:1,
delay:0.2,
stagger:0.2
})
tl.from("#main h1",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.2
})
tl.from(".i",{
    opasity:0,
    scale:0,
    duration:1,
    stagger:0.5
})