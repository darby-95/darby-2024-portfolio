function myfavorite() {
    // 🌟 Image
    let myfavoriteImgs = document.querySelectorAll('.myfavorite-images')
    myfavoriteImgs.forEach(function (secImg) {
        let imgs = secImg.querySelectorAll('.img')
        let secImgParent = secImg.parentNode;

        imgs.forEach(function (img, index) {
            let imgDey = index * 0.5
            gsap.set(img, {
                y: 400
            })
            gsap.timeline({
                    scrollTrigger: {
                        trigger: secImgParent,
                        start: "-60% top",
                        end:"+=50%",
                        scrub: 2
                    }
                })
                .to(img, {
                    y: 0,
                    duration: 0.5,
                    delay: imgDey,
                    ease: "power3.out"
                })
        })
    })
}
myfavorite()

Splitting();

function text3d(){
      
document.querySelectorAll(".rotatingHeader").forEach((header,index)=>{

    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: "-700% top",
          scrub:1,
        },
      });

function initHeaders(header) {
  //let header = document.querySelector(".rotatingHeader");
  let original = header.querySelector("h1");
  let clone = original.cloneNode(true);
  header.appendChild(clone);
  gsap.set(clone, { yPercent: -100 });

//   let originalSplit = document.querySelectorAll("h1:first-child .char");
//   let cloneSplit = document.querySelectorAll("h1:last-child .char");
let originalSplit=Splitting({target:original})
let cloneSplit=Splitting({target:clone})

console.log(originalSplit)

  gsap.set(cloneSplit[0].chars, {
    rotationX: -90,
    opacity: 0,
    transformOrigin: "50% 50% -50",
  });

  let stagger= {each:0.05,delay:index * 0.8}

  tl.to(originalSplit[0].chars, { duration: 0.5, rotationX: 90, stagger:stagger,transformOrigin: "50% 50% -50" });
  tl.to(originalSplit[0].chars, { duration: 0.5, opacity: 0, stagger:stagger }, 0);

  tl.to(cloneSplit[0].chars, { duration: 0.5, stagger:stagger, opacity: 1 }, 0.001);
  tl.to(cloneSplit[0].chars, { duration: 0.5, rotationX: 0, stagger: stagger }, 0);
}

initHeaders(header);
})
}
text3d()
