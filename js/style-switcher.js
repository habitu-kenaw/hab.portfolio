const styleswitcherToggle=document.querySelector(".style-swicther-toggler");
styleswitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-swicther").classList.toggle("open");
})

//hide style-switche on scrool
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-swictherr").classList.contains("open")){
        document.querySelector(".style-swicther").classList.remove("open");
    }
})

const alternatestyle= document.querySelector(".alternatte-style");
function setActiveStyle(color){


    alternatestyle.forEach((style)=>{
        if(color==style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }

    })
}
           // dark page
const daynight= document.querySelector(".day-night");
daynight.addEventListener('click',()=>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun");
        
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon");
        
    }
})
