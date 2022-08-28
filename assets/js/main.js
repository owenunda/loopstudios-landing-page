



//=========== menu ===========// 
const iconCloce = document.getElementById("iconClose")
const headernav = document.querySelector(".header--nav")
const iconMenu = document.querySelector(".fa-bars")

iconCloce.addEventListener("click", ()=>{
    headernav.classList.remove("show__contain")
})
iconMenu.addEventListener("click", () =>{
    headernav.classList.add("show__contain")
})

// ================================
