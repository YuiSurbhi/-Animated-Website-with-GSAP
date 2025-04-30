function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    duration:0.7,
    delay:1,
    opacity:0,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5, 
},"-=0.3")

tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4, 
})

tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5
}, "-=0.3")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})
}

page1Animation()


function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top -60",
            scrub:2
        }
    })
    
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5
    })
    
    // line 1 with line2
    tl2.from(".line1",{
        x:-300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".line2",{
        x:300,
        opacity:0,
        duration:1
    },"anim1")
    
    // line3 with line4
    tl2.from(".line3",{
        x:-300,
        opacity:0,
        duration:1
    },"anim2")
    tl2.from(".line4",{
        x:300,
        opacity:0,
        duration:1
    },"anim2")
}

page2Animation()

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            start:"top 50%",
            end:"top -60",
            scrub:2
        }
    })

    tl3.from(".section3",{
        scale:0.95,
        opacity:0,
        duration:0.5,
        ease:"power2.out"
    })
}

page3Animation()

function page4Animation(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".section4",
            scroller:"body",
            start:"top 50%",
            end:"top -60",
            scrub:2
        }
    })

    tl4.from(".casestudy",{
        y:30,
        opacity:0,
        duration:1
    })

    tl4.from(".tin",{
        y:50,
        opacity:0,
        duration:0.5,
        stagger:0.2,
        ease:"power2.out"
    })
}

page4Animation()