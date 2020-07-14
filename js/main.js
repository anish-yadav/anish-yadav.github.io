
window.onscroll = changeBG
window.onload = changeBG
const navbar = document.getElementById('navbar')
const home = document.getElementById('home')
const about = document.getElementById('about')
const work1 = document.getElementById('work-1')
const work2 = document.getElementById('work-2')

const showNavbar = (color) => {
    navbar.classList.remove('hide')
    navbar.classList.remove('bg-dark','bg-1','bg-2','bg-3')
    navbar.classList.add(color)
}
const hideNavbar = () => {
    navbar.classList.add('hide')
    navbar.classList.remove('bg-dark','bg-1','bg-2','bg-3')
}

const clinetHeight = document.documentElement.clientHeight
function changeBG() {
    var scrollTop = document.documentElement.scrollTop
    //console.log(scrollTop)
    var homefromTop = home.offsetTop - scrollTop
    var aboutfromTop = about.offsetTop - scrollTop
    var work1fromTop = work1.offsetTop - scrollTop
    var work2FromTop = work2.offsetTop - scrollTop
    console.log(Math.abs(aboutfromTop) < about.clientHeight/2)
    if(Math.abs(homefromTop) < home.clientHeight/2){
        document.body.classList.remove('bg-dark','bg-2','bg-1')
        hideNavbar()
    }
    else if (Math.abs(aboutfromTop) < about.clientHeight/2) {
        document.body.classList.remove('bg-dark','bg-2','bg-1')
        document.body.classList.add('bg-dark')
        showNavbar('bg-dark')
    }
    else if (Math.abs(work1fromTop) < work1.clientHeight/2) {
        document.body.classList.remove('bg-dark','bg-2','bg-1')
        document.body.classList.add('bg-1')
        showNavbar('bg-1')
    }
    else if (Math.abs(work2FromTop) < work2.clientHeight/2) {
        document.body.classList.remove('bg-dark','bg-2','bg-1')
        document.body.classList.add('bg-2')
        showNavbar('bg-2')
    }
    else {
        document.body.classList.remove('bg-1','bg-dark','bg-2')
        document.body.classList.add('bg-1')
        showNavbar('bg-1')
    }
}

