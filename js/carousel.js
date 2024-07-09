

function locolenis(){
    class Example {
      constructor(options) {
        this.root = options.root;
    
        this.init();
    
        //setTimeout(this.showImages.bind(this), 1000);
      }
    
      init() {
    
    
        let list = document.querySelectorAll(".scrollsection .item");
        let imgBoxs = document.querySelectorAll("[data-scroll-speed]")
    
        gsap.to(list, {
          ease: "none",
          scrollTrigger: {
            trigger: ".scroll-animations-example",
            start: "center bottom",
            onEnter: () => this.showImages() ,
            onLeaveBack: () => this.hideImages() ,
            
          }
        })
    
    
        let scrollTween = gsap.to(list, {
          xPercent: -100 * (list.length - 10),
          ease: "none",
          scrollTrigger: {
            trigger: ".scroll-animations-example",
            start: "center center",
            scrub: 1,
            end: "+=300%",
            pin: true,
                   
          }
        })
    
        imgBoxs.forEach(function (imgBox) { 
    
          gsap.timeline({
              scrollTrigger: {
                trigger: imgBox,
                start: "center right",
                end: 'center left',
                containerAnimation: scrollTween,
                scrub: true,
              }
            })
            .to("[data-scroll-speed]", {
              x: (i, el) => -(el.getAttribute("data-scroll-speed")) * 50,
            }, 0)
    
    
        })
    
    
    
        this.images = this.root.querySelectorAll('.image');
    
        //[].forEach.call을 사용하면 배열이 아닌 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)에도 forEach를 적용할 수 있음
    
      }
      
    
      showImages() {
        [].forEach.call(this.images, image => {
          image.classList.remove('-clicked');
          image.classList.add('-active');
        });
      }
    
      hideImages() {
        [].forEach.call(this.images, image => {
          image.classList.remove('-active');
        });
    
        setTimeout(this.showImages.bind(this), 2000);
      }
    }
    
    
    
    window.addEventListener('DOMContentLoaded', event => {
      const example = new Example({
        root: document.querySelector('.scroll-animations-example')
      });
    
    });
}
locolenis()