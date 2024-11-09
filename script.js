const hamMenu = document.querySelector('.ham-menu')
const nav = document.querySelector('nav')
const navLink = document.querySelectorAll('nav a')
const cancelBtn = document.querySelector('.nav-cancel')

hamMenu.addEventListener('click',()=>{ 
    nav.style.display = 'flex'
})
cancelBtn.addEventListener('click',()=>{ 
    nav.style.display = 'none'
})
nav.addEventListener('click',(e)=>{ 
    if(e.target.tagName === "A" && window.screen.width <= 765 ) {  
        nav.style.display = 'none'
    } 
})


