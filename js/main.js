gsap.registerPlugin(Flip, ScrollTrigger)

function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        // console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}
lenis()


///////////////////////////////////////////////////////////////////////
// 🌟 effect 

gsap.to(".rotate",{
    rotationY: 360,
    repeat: -1,
    duration: 2,
    ease: "linear"
})

gsap.to(".down",{
    scrollTrigger:{
      trigger:".main",
      start:"top top",
      scrub:1.9
    },
    yPercent:90
})


// 🌟 Color Change BTN
function ColorChangeBTN(){
    let colorBTN=document.querySelector(".color-Change-btn")
    let main=document.querySelector("main")

    colorBTN.addEventListener("click", () => {
        main.classList.toggle("Non-color")
    })

    gsap.to(colorBTN,{
        scrollTrigger:{
          trigger:".main",
          start:"top top",
          scrub:1.9
        },
        xPercent:-90
      })
}
ColorChangeBTN()

///////////////////////////////////////////////////////////////////////
// 🌟 hoverImg
function hoverImg() {
    let container = document.querySelector('.items');
    let imageIndex = 1;
    let animationTimeout = null; // : 비어있음.
    let currentlyPlaying = false;

    function addNewItem(x, y) {
        let newItem = document.createElement("div");
        newItem.className = "item";

        let img = document.createElement('img')
        img.src = `./image/hoverImg/${imageIndex}.png`
        newItem.appendChild(img)

        imageIndex = (imageIndex % 7) + 1
        container.appendChild(newItem)

        newItem.style.left = `${x - 75 }px`;
        newItem.style.top = `${y - 100 }px`;

        manageItemLimit();
    }

    function manageItemLimit() {
        while (container.children.length > 20)
            container.removeChild(container.firstChild)
    }

    function startAnimation() {
        if (currentlyPlaying || container.children.length === 0) {
            return;
        }

        currentlyPlaying = true;
        gsap.to('.item', {
            y: 1000,
            scale: 0.5,
            opacity: 0,
            duration: 5,
            stagger: 0.25, // : 0.025초 간격을 두고 하나씩 떨어진다.
            onComplete: function () { // 위의 애니메이션이 끝나고 나면 할일
                currentlyPlaying=false;
            }
        })
    }

    container.addEventListener("mousemove", function (event) {
        addNewItem(event.clientX, event.clientY)
    })
}
hoverImg()

///////////////////////////////////////////////////////////////////////
// 🌟 footer 
function headerClick(){
    let kakaoBtn=document.querySelector(".kakao-click")
    let kakao=document.querySelector(".kakao")

    kakaoBtn.addEventListener("click",()=>{
        gsap.to(kakao,{x:-350})
    })
    kakao.addEventListener("click",()=>{
        gsap.to(kakao,{x:350})
    })

}
headerClick()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// 💛 preload

//proloading not scroll
function showLoadingScreen() {
    document.body.classList.add('loading');
    window.scrollTo(0, 0);
}
function hideLoadingScreen() {
    document.body.classList.remove('loading');
}
showLoadingScreen();

function preload(){
    let container=document.querySelector('#progress')
    let progressBar=document.querySelector('.progress-bar')
    let progressText=document.querySelector('.progress-text')
    let imgLoaded=0;
    let imgTotal = 1200;
    let current = 0;
    let progressTimer;
    let topValue;

    progressTimer=setInterval(updateProgress,1000/60)
    function updateProgress(){
        imgLoaded++;
        // console.log(imgLoaded) : 1000이 넘어도 무한 반복 한다.
        let target=(imgLoaded/imgTotal)*100;
        // %로 바꾸는 과정, imgLoaded(1씩 증가) / imgTotal(1000) *100(%)
        // console.log(target)
        current+= (target - current)*0.01
        // current = current + (target - current)*0.01
        // 로딩이 길어서 조절하기 위함
        progressBar.style.width=current + "%"
        progressText.innerHTML=Math.ceil(current)  + "%" // Math.ceil() : 소수점은 생략한다 
        // %에 비례하여 실행
    
        if (current > 99.9) {
            clearInterval(progressTimer)
            container.classList.add("progress-complete")
            progressBar.style.width = "100%";
            gsap.to(container, {
              duration: 0.5,
              yPercent: -100,
              ease: "none",
              onUpdate: function scrollPrevent() {
                showLoadingScreen();
                sp = requestAnimationFrame(scrollPrevent) //2번줄
                setTimeout(() => {
                  cancelAnimationFrame(sp);
                  hideLoadingScreen(); //6번줄
                }, 10);
              },
        
            })
          }
    }

}
preload()