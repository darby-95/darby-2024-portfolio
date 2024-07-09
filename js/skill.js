gsap.fromTo(
  ".myskill",
  {
    y: 100,
    scale: 0.7,
    rotation: 15,
  },
  {
    scrollTrigger: {
      trigger: ".myskill",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
    y: 0,
    scale: 1,
    duration: 1,
    rotation: 0,
    ease: "power3.out",
  }
);

function skillTV() {
  let showImg = document.querySelector(".showImg"),
    ptag = document.querySelector(".skill .wrap .desc"),
    bgImageUrls = [
      "./image/webpage/figma-cap.png",
      "./image/television/spline.gif",
      "./image/art-pic/ring.JPG",
      "./image/television/hanacard.png",
      "./image/television/scss.png",
      "./image/webpage/php.png",
      "./image/webpage/react-todolist.jpg",
      "./image/television/mysql.jpg",
      "./image/television/cad.png",
    ],
    descs = [
      `사용자 인터페이스(UI) 디자인, 웹 및 앱 디자인, 컴포넌트 기능과 스타일 시스템 구현, 프로토타이핑 등을 사용할 수 있습니다.<br><br>도형, 선, 텍스트, 이미지 등을 조합하여 다양한 디자인 요소를 구축할 수 있습니다.`,
      `곡선과 곡면을 정밀하게 생성 및 수정하여 3D 모델링 형상을 제작하고 애니메이션 효과를 넣어 입체적으로 표현할 수 있습니다.`,
      `정밀한 곡선과 곡면을 생성 및 수정하여 3D 모델링 형상을 구현할 수 있습니다.<br><br>다양한 텍스처를 조합하여 실물에 가까운 디테일을 재현하며, 3D 프린팅 기술을 통해 이를 실물로 제작할 수 있습니다.<br><br>해당 사진은 Rhino 소프트웨어로 3D 모델링을 한 후, 3D 프린터를 사용해 실물로 출력하고, 은을 녹여 주조한 후 직접 폴리싱한 작품을 전문 촬영 업체에서 촬영한 것입니다. `,
      `HTML과 CSS를 이용하여 레이아웃, 이미지, 텍스트 등의 요소를 유동적으로 표현하고, 이를 조정하여 사용자의 화면 크기에 맞춘 반응형 웹 디자인도 가능합니다.<br><br>함수의 정의와 호출, 객체와 프로퍼티, 배열 등의 개념, DOM 조작, 이벤트 처리와 데이터 통신에 대한 작업을 할 수 있습니다.`,
      `믹스인(Mixins), 확장(Extends), 함수(Functions) 등 다양한 기능을 사용할 수 있습니다.<br><br>이를 통해 코드의 재사용성을 높이고, 스타일링 작업을 효율적으로 수행할 수 있습니다.`,
      `JSX, 컴포넌트, 가상 DOM, 상태(State)와 속성(Props), 라이프사이클 메서드, 이벤트 처리, 상태 관리, 라우팅, API 연동, 최적화 등을 다룰 수 있습니다.`,
      `데이터 처리 - 데이터베이스 연결, 쿼리 실행, 결과 처리 등<br><br>웹페이지 생성 - HTML과의 통합, 템플릿 엔진 사용, 폼 처리 등을 다루며, 데이터를 출력하고 사용자 입력을 처리하는 방법,<br><br>세션 및 쿠키 관리 - 사용자의 상태 유지, 로그인 기능 구현, 데이터 저장 등을 작업할 수 있습니다.`,
      `데이터베이스 설치 및 구성, 데이터베이스관리(테이블 생성, 수정, 삭제 및 데이터 조작 작업을 수행하는 쿼리와 명령어)작업을 수행할 수 있습니다.`,
      `정밀한 도면 작성과 설계를 할 수 있고 3D 모델링 기능을 통해 제품의 외관과 기능을 시각화할 수 있습니다.`,
    ];

  const skills = document.querySelectorAll(".skill-list p");

  function addMouseoverEffect(skill, bgImageUrl, desc) {
    skill.addEventListener("mouseover", () => {
      skill.style.fontWeight = "bold";
      showImg.style.backgroundImage = `url('${bgImageUrl}')`;
      showImg.style.backgroundPosition = `bottom center`;
      ptag.innerHTML = `${desc}`;
      ptag.classList.add("active");
    });

    skill.addEventListener("mouseout", () => {
      skill.style.fontWeight = "lighter";
      showImg.style.backgroundImage = "./image/television/none.gif";
      showImg.style.backgroundPosition = `top center`;
      ptag.innerHTML = `Please Select list`;
      ptag.classList.remove("active");
    });
  }

  skills.forEach((skill, i) => {
    addMouseoverEffect(skill, bgImageUrls[i], descs[i]);
  });
}
skillTV();

function themechangerline() {
  // 🌟 Theme Changer
  let themeChanger = () => {
    let skill = document.querySelector(".designSkill");
    let offsets = document
      .querySelector("#theme-changer")
      .getBoundingClientRect();
    skill.style.backgroundColor = offsets.top < 0 ? "#f8f6f0" : "#5a7873";
    skill.style.transition = "0.3s";
  };
  window.addEventListener("scroll", themeChanger);
  window.addEventListener("load", themeChanger);
}
themechangerline();

function TypingText() {
  function decodeText() {
    var text = document.getElementsByClassName("decode-text")[0];

    var state = [];
    for (var i = 0, j = text.children.length; i < j; i++) {
      text.children[i].classList.remove("state-1", "state-2", "state-3");
      state[i] = i;
    }

    var shuffled = shuffle(state);

    for (var i = 0, j = shuffled.length; i < j; i++) {
      var child = text.children[shuffled[i]];
      classes = child.classList;

      var state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
      if (classes.contains("text-animation")) {
        setTimeout(firstStages.bind(null, child), state1Time);
      }
    }
  }

  function firstStages(child) {
    if (child.classList.contains("state-2")) {
      child.classList.add("state-3");
    } else if (child.classList.contains("state-1")) {
      child.classList.add("state-2");
    } else if (!child.classList.contains("state-1")) {
      child.classList.add("state-1");
      setTimeout(secondStages.bind(null, child), 100);
    }
  }

  function secondStages(child) {
    if (child.classList.contains("state-1")) {
      child.classList.add("state-2");
      setTimeout(thirdStages.bind(null, child), 100);
    } else if (!child.classList.contains("state-1")) {
      child.classList.add("state-1");
    }
  }

  function thirdStages(child) {
    if (child.classList.contains("state-2")) {
      child.classList.add("state-3");
    }
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  decodeText();

  setInterval(function () {
    decodeText();
  }, 10000);
}
gsap.to(".designSkill .decode-text", {
  scrollTrigger: {
    trigger: ".decode-text",
    start: "top 50%",
    scrub: 1.9,
    //markers:true,
    onEnter: TypingText(),
  },
});

let designSkillButton = document.querySelector(".designSkill button");

// ScrollTrigger 설정을 생성합니다.
ScrollTrigger.create({
  trigger: ".designSpline",  // 트리거 요소를 지정합니다.
  start: "100% center",  // 스크롤 시작 위치를 지정합니다.
  onEnter: () => {
      designSkillButton.click();  // 버튼 클릭 이벤트를 트리거합니다.
  },
  onLeaveBack:()=>{
    designSkillButton.click(); 
  }
});


function flipabsolute() {
  const thumbs = document.querySelectorAll(".designSkill .item");
  const modal = document.querySelector(".modal");
  const toggle = document.querySelector(".designSkill button");
  const modalImage = modal.querySelector(".modal-image");
  const wrapper = document.querySelector(".grid-wrapper");
  let activeThumb;

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      // 🌟 capture
      // thumb을 바깥에서 쓸 수 없기 때문에 변수 activeThumb 을 만들어 Thumb 안에 넣었다.
      activeThumb = thumb;
      thumb.classList.add("active-thumb");
      thumb.dataset.flipId = "img"; // <div class="item" data-flip-id="img"></div>
      gsap.set(thumb, {
        opacity: 0,
      });

      // START.
      const state = Flip.getState([thumb, modalImage], {
        props: "borderRadius,aspectRatio,boxShadow",
      });

      // END
      modalImage.querySelector("img").setAttribute("src", thumb.dataset.url);
      modal.classList.add("active");
      modalImage.style.display = "block";
      Flip.from(state, {
        duration: 0.25,
        ease: "sin.inOut",
      });
    });
  });

  modal.addEventListener("click", () => {
    gsap.set(activeThumb, {
      opacity: 1,
    });
    const state = Flip.getState([activeThumb, modalImage], {
      props: "borderRadius,aspectRatio,boxShadow",
    });
    modal.classList.remove("active");

    // END
    Flip.from(state, {
      duration: 0.25,
      absolute: true,
      ease: "sine,inOut",
      onComplete: () => {
        // 완수 됐을때 할일,
        modalImage.querySelector("img").setAttribute("src", "");
        activeThumb.classList.remove("active-thumb");
      },
    });
  });

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("grid-view-on");
    // START
    let state = Flip.getState(".grid-wrapper, .item-wrapper");

    // END
    wrapper.classList.toggle("stack");

    Flip.from(state, {
      absolute: true, // absolute 된것처럼 모양이 바뀐다.
      duration: 0.5,
      ease: "sine",
      stagger: 0.05,
    });
  });
}
flipabsolute();

// 🌟 Path
// function penSVG(){

//     let tl=gsap.timeline({
//         scrollTrigger:{
//           trigger:".designSpline",
//           start:"top top",
//         //   end:"bottom bottom",
//           scrub:1,
//           pin:true,
//           markers:true
//         }
//     })
//     tl.to(path1,{strokeDashoffset:0},"pen")
//     tl.to(".pen",{offsetDistance:'100%'},"pen")

//     //////////////////////////////////////////////////////////////
//     // 🌟 펜 방향
//     window.addEventListener("wheel",myFunction)

//     let pen=document.querySelector('.pen')
//     function myFunction(event){
//         let y=event.deltaY;
//         console.log(y)

//         if(y>0){
//             pen.style.transform=`rotate(0deg)`;
//         }else{
//             pen.style.transform=`rotate(180deg)`;
//         }

//     }

// }
// penSVG()

// 🌟 가로 스크롤
// function splineScroll() {
//   let splineScrolls = document.querySelectorAll(".designSpline .design-spline");
//   let splineScroll = gsap.to(splineScrolls, {
//     xPercent: -100 * (splineScrolls.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".designSpline",
//       start: "200% top",
//       scrub: 1,
//       end: "+=300%",
//       pin: true,
//       markers: true,
//       onEnter: () => {
//         gsap.to(".designSpline", { top: 0, duration: 0 });
//       },
//       onEnterBack: () => {
//         gsap.to(".designSpline", { top: 0, duration: 0 });
//       },
//       onUpdate: (self) => {
//         const progress = self.progress;
//         gsap.to(path1, {
//           strokeDashoffset: path1Length * (1 - progress),
//         });
//         gsap
//           .timeline(".animation", {
//             xPercent: -100 * progress,
//           })
//           .to(".pen", { offsetDistance: 100 * progress + "%" }, "<");
//       },
//     },
//   });
// }

function splineScroll() {
  let splineScrolls = document.querySelectorAll(".designSpline .design-spline");
  let path1 = document.querySelector("#path"); // path1 요소 선택
  let path1Length = path1.getTotalLength(); // path1의 총 길이 계산

  // path1 초기 설정
  path1.style.strokeDasharray = path1Length;
  path1.style.strokeDashoffset = path1Length;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".designSpline",
      start: "200% top",
      end: `+=900% top`,
      scrub: 1.9,
      pin: true,
     // markers: true,
      onEnter: () => {
        gsap.to(".designSpline", { top: 0, duration: 0 });
      },
      onEnterBack: () => {
        gsap.to(".designSpline", { top: 0, duration: 0 });
      },
      onLeave: () => {
        gsap.to(".designSpline", { top: "80vh", duration: 0 });
      },
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(path1, {
          strokeDashoffset: path1Length * (1 - progress),
        },0);
        gsap.to(splineScrolls, {
          xPercent: -100 * (splineScrolls.length - 1) * progress,
          ease: "none",
        },0);
        gsap.to(".designSpline .animation", {
          xPercent: -100 * (progress * 0.8),
          ease: "none",
        },0);
        gsap.to(".pen", {
          offsetDistance: 100 * progress + "%",
          ease: "none",
        },0);
      },
    },
  });

}

// 함수 호출
splineScroll();



function webSiteScroll() {
  const contentElements = [...document.querySelectorAll(".content--sticky")];
  const totalContentElements = contentElements.length;

  const scroll = () => {
    contentElements.forEach((el, position) => {
      const isLast = position === totalContentElements - 1;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        })
        .to(
          el,
          {
            ease: "none",
            startAt: {
              filter: "brightness(100%) contrast(100%)",
            }, //startAt 옵션은 애니메이션이 시작될 때 요소의 초기 스타일을 설정
            filter: isLast ? "none" : "brightness(60%) contrast(135%)",
            yPercent: isLast ? 0 : -15,
          },
          0
        )
        .to(
          el.querySelector(".content__img"),
          {
            ease: "power1.in",
            yPercent: -40,
            rotation: -20,
          },
          0
        );
    });
  };

  window.addEventListener("load", () => {
    scroll();
  });
}
webSiteScroll();
