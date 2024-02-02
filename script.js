
gsap.to('.animate',
{
transform:'scale(1.1)',
duration:1,
repeat:-1,
yoyo:true,
}
)
gsap.from('.hero-head span',

{

opacity:0,
stagger:0.1,
duration:2,
delay:1,
}
)
gsap.from('nav',{
    y:300,
  duration:3,
})

gsap.from('#typewriter',

{

opacity:0,
stagger:0.1,
duration:3,
delay:3,
}
)
