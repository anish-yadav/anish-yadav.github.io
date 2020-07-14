
window.onscroll = changeBG
window.onload = changeBG
const navbar = document.getElementById('navbar')
const home = document.getElementById('home')
const about = document.getElementById('about')

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
    console.log(Math.abs(homefromTop) < home.clientHeight/2)
    if(Math.abs(homefromTop) < home.clientHeight/2){
        document.body.classList.remove('bg-dark','bg-2','bg-1')
        hideNavbar()
    }
    else if (aboutfromTop < clinetHeight/2) {
        document.body.classList.remove('bg-dark','bg-2','bg-1')
        document.body.classList.add('bg-dark')
        showNavbar('bg-dark')
    }
    else {
        document.body.classList.remove('bg-1','bg-dark','bg-2')
        document.body.classList.add('bg-1')
        showNavbar('bg-1')
    }
}

