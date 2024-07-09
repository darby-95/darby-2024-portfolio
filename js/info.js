function info() {
    // 🌟 down 
    gsap.to(".smile", {
        scrollTrigger: {
            trigger: ".infomation",
            start: "-30% top",
            scrub: 1.9,
            duration:5
        },
        xPercent: -150,
        rotate:-45
    })

        // 🌟 left 
        gsap.to(".text", {
            scrollTrigger: {
                trigger: ".infomation",
                start: "-70% top",
                end:"bottom bottom",
                scrub: 1.9,
            },
            opacity:1,
            xPercent: -100,
        })
}
info()