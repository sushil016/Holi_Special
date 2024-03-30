gsap.from(".navbar2 h3",{
    y: -50,
    opacity:0,
    duration:1,
    dealy:0.6,
    stagger: 0.2

})
  
gsap.from(".heading",
{
    x:-500,
    opacity:0.5,
    duration:1.8,
    dealy:1
})

gsap.from(".main h2",{
    x:500,
    opacity:0.5,
    duration:2,
    
})
gsap.from(".main h3",{
    y:300,
    opacity:0.3,
    duration:2,

})
gsap.from(".port",
{
    y:-300,
    opacity: 0.5,
    duration: 2,

})




gsap.from("#myimg img",{
      rotate:45,
      opacity:0,
      duration:1,
      delay:1.5
})

gsap.to("#holi",{
    scale:2,
    duration:2,
    delay:1
})