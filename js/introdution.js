function introdution (){
    // 🌟 효과
    let items = document.querySelectorAll('.introdution .list .item');
    let prevBtn = document.getElementById('prev');
    let nextBtn = document.getElementById('next');
    let lastPosition = items.length - 1;
    let firstPosition = 0;
    let active = 0;
    
    nextBtn.onclick = () => {
        active = active + 1;
        setSlider();
    }
    prevBtn.onclick = () => {
        active = active - 1;
        setSlider();
    }
    const setSlider = () => {
        let oldActive = document.querySelector('.introdution .list .item.active');
        if(oldActive) oldActive.classList.remove('active');
        items[active].classList.add('active');
        // 
        nextBtn.classList.remove('d-none');
        prevBtn.classList.remove('d-none');
        if(active == lastPosition) nextBtn.classList.add('d-none');
        if(active == firstPosition) prevBtn.classList.add('d-none');
    }
    setSlider();
    
    // set diameter
    const setDiameter = () => {
        let introdution = document.querySelector('.introdution');
        let widthSlider = introdution.offsetWidth;
        let heightSlider = introdution.offsetHeight;
        let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
        document.documentElement.style.setProperty('--diameter', diameter+'px');
    }
    setDiameter();
    window.addEventListener('resize', () => {
        setDiameter();
    })
}
introdution()

function sectionwrap(){
    let list = document.querySelectorAll(".section-wrap section");
    let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".section-wrap",
            start: "center center",
            scrub: 1,
            end: "+=200%",
            pin: true,
            pinSpace:true
        }
    })
}
sectionwrap()


