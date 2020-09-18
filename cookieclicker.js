let cookieEl= document.getElementById('cookie')
let scoreEl= document.getElementById('score')
let cookieCount = 0 

function cookieClicked() {
    cookieCount = cookieCount + 1
    scoreEl.innerHTML= cookieCount
}
function shrink (){
cookieEl.classList.add('shrink')
}
function grow(){
cookieEl.classList.remove('shrink')
}

cookieEl.addEventListener('click', cookieClicked)
cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('mouseup', grow)