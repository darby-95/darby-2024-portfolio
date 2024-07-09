function responsiveBtn(){
    // ✨ responsiveBtn 
    let computerBtns=document.querySelectorAll(".respon-com")
    let taBtns=document.querySelectorAll(".respon-ta")

    let conComs=document.querySelectorAll(".move-com")
    let pCons=document.querySelectorAll(".move-p")

    computerBtns.forEach(computerBtn=>{
        computerBtn.addEventListener("click",()=>{
            conComs.forEach(conCom=>{
                gsap.to(conCom, {xPercent: 0, duration: 1, opacity:1 });
            })
            pCons.forEach(pCon=>{
                gsap.to(pCon, {xPercent: -100, duration: 1, opacity:0 });
            })
        })
    })
    
    taBtns.forEach(taBtn=>{
        taBtn.addEventListener("click",()=>{
            conComs.forEach(conCom=>{
                gsap.to(conCom, {xPercent: -150, duration: 1, opacity:0 });
            })
            pCons.forEach(pCon=>{
                gsap.to(pCon, {xPercent: 0, duration: 1, opacity:1 });
            })
        })
    })

    let figmaImgBtn=document.querySelector(".figma-img")
    let figmaImg=document.querySelector(".pigma-move")

    figmaImgBtn.addEventListener("click",()=>{
        gsap.to(figmaImg, {xPercent: 80, duration: 1, opacity:1 });
    })
    figmaImg.addEventListener("click",()=>{
        gsap.to(figmaImg, {xPercent: -80, duration: 1, opacity:0 });
    })

}
responsiveBtn()

function pageImgChange(){
    let responsives=document.querySelectorAll(".content1 .responsive")
    let flexGrids = document.querySelectorAll(".content1 .flex-grid");

    let ComImg=document.querySelector(".content1 .com-img-box")
    let PadImg=document.querySelector(".content1 .pad-img-box")
    let PhoneImg=document.querySelector(".content1 .phone-img-box")
    
    responsives.forEach(responsive => {
        responsive.addEventListener("mouseover", () => {
            ComImg.style.backgroundImage = `url('./image/webpage/responsive-com.png')`;
            PadImg.style.backgroundImage = `url('./image/webpage/responsive-ta.png')`;
            PhoneImg.style.backgroundImage = `url('./image/webpage/responsive-mob.png')`;
            
        });
    });
    flexGrids.forEach(flexGrid => {
        flexGrid.addEventListener("mouseover", () => {
            ComImg.style.backgroundImage = `url('./image/webpage/flexGrid-com.png')`;
            PadImg.style.backgroundImage = `url('./image/webpage/flexGrid-ta.png')`;
            PhoneImg.style.backgroundImage = `url('./image/webpage/flexGrid-mob.png')`;
        });
    });
}
pageImgChange()

function tagHeuerWeb() {
    let heuerBtns = document.querySelectorAll(".heuerBtn");
    let heuerImgBox = document.querySelector(".heuerImgBox");
    
    let heuerImgs = ["./image/webpage/tagheuer1.png", "./image/television/spline.gif", "./image/webpage/tagheuer-1.mp4", "./image/webpage/tagheuer2.png"];
    
    function BtnClickEvent(heuerImg) {
        heuerImgBox.src = heuerImg;
        gsap.to(heuerImgBox, { xPercent: 130, duration: 1, opacity: 1 });
    }
    
    heuerBtns.forEach((heuerBtn, i) => {
        heuerBtn.addEventListener("click", () => {
            BtnClickEvent(heuerImgs[i]);
        });
    });

    heuerImgBox.addEventListener("click",()=>{
        gsap.to(heuerImgBox, { xPercent: -130, duration: 1, opacity: 1 });
    })

    document.querySelector(".button3").addEventListener("click",()=>{
    document.querySelector(".webPortfolio .content10 .com-img-box video").src="./image/webpage/tagheuer-1.mp4"
    })
    document.querySelector(".button5").addEventListener("click",()=>{
    document.querySelector(".webPortfolio .content10 .com-img-box video").src="./image/webpage/tagheuer-last.mp4"
    })
}

tagHeuerWeb();