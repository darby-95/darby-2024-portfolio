function smoothTEXT(){
    const elts = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2") };
      
      const texts = [
      "My",
      "hobby",
      "is",
      "SPORTS",
      "TRAVEL",
      "ART",
      ":)",
      ];
      
      const morphTime = 1;
      const cooldownTime = 0.25;
      
      let textIndex = texts.length - 1;
      let time = new Date();
      let morph = 0;
      let cooldown = cooldownTime;
      
      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
      
      function doMorph() {
        morph -= cooldown;
        cooldown = 0;
      
        let fraction = morph / morphTime;
      
        if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 1;
        }
      
        setMorph(fraction);
      }
      
      function setMorph(fraction) {
      
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      
        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      
        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
      }
      
      function doCooldown() {
        morph = 0;
      
        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";
      
        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
      }
      
      function animate() {
        requestAnimationFrame(animate);
      
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;
      
        cooldown -= dt;
      
        if (cooldown <= 0) {
          if (shouldIncrementIndex) {
            textIndex++;
          }
      
          doMorph();
        } else {
          doCooldown();
        }
      }
    
      animate();
}
smoothTEXT()

function flip(){
// Image Gallery (첫번째 갤러리)

let triggerFlipOnScroll = (galleryEl, option) => {
  let settings = {
      flip: {
          // 애니메이션이 되는 동안 객체가 부드럽게 움직이는 효과
          absolute: false,
          // 떠났을때 absolute를 적용할것인가
          absoluteOnLeave: false,
          // 크기 조절 
          scale: true,
          // 다른거 쓸데없이 계산하지마라! 
          simple: true
      },
      scrollTrigger: {
          start: "center center",
          end: "+=200%" // 속도가 너무 느리면 값을 낮추면 된다.
      }
  }

  settings = Object.assign({}, settings, option) // 1)
  // console.log(settings) : {flip: {…}, ScrollTrigger: {…}}

  let galleryCaption = galleryEl.querySelector(".caption");
  let galleryItems = galleryEl.querySelectorAll(".gallery__item");


  // L 최종 상태 캡처
  galleryEl.classList.add("gallery--switch");

  // F 초기 상태 캡처
  // props는 css의 속성값을 말한다.
  let flipstate = Flip.getState([galleryItems, galleryCaption], {
      props: 'filter,opacity'
  })


  // class를 통해 gsap.to를 이용하기 위해 만든것이기 때문에
  // 최종상태만 파악하게하고 클래스명은 바로 제거한다.

  galleryEl.classList.remove("gallery--switch");



  let tl = Flip.to(flipstate, {
      ease: "none",
      absolute: settings.flip.absolute,
      absoluteOnLeave: settings.flip.absoluteOnLeave,
      scale: settings.flip.scale,
      simple: settings.flip.simple,
      stagger:settings.stagger,
      scrollTrigger: {
          trigger: galleryEl,
          start: settings.scrollTrigger.start,
          end: settings.scrollTrigger.end,
          pin: galleryEl.parentNode,
          scrub: 1,
      }

  })

}



let scroll=()=>{
  let galleries=[
      {id:"#gallery-1",options:{flip:{absoluteOnLeave:true,scale:false}}},
      {id:"#gallery-4"},
      {id:"#gallery-5"},
      {id:"#gallery-7"},
  ]
  galleries.forEach((gallery)=>{
      let galleryElement=document.querySelector(gallery.id);
      triggerFlipOnScroll(galleryElement,gallery.options)
  })

}
scroll()




}
flip()

gsap.to(".up",{
  scrollTrigger:{
    trigger:".ART",
    start:"top top",
    scrub:1.9
  },
  yPercent:-700,
  opacity:1
})