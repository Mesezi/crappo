let exchangeText = document.getElementById('exchange')
let countriesText = document.getElementById('countries')
let usersText = document.getElementById('users')

let exchange = 20
let countries = 185
let users = 0

let interval = 0

// Function to run at irregular intervals
function incrementCount() {
    if(interval < 1){
        interval = setInterval(() => {
            if(users < 10){
                users++
                usersText.innerText = users
            }

            if(exchange < 30){
                exchange++
                exchangeText.innerText = exchange
            } 

            if(countries < 195){
                countries++
                countriesText.innerText = countries
            } 
        
        }, 200);  
    }
} 


let cryptoCon = document.querySelectorAll(".crypto-con");

cryptoCon.forEach((crypto, index) => {
    crypto.addEventListener('click', () => {
        cryptoCon.forEach(elem =>{
            elem.classList.remove('current') // remove current class from all crypto containers
        })
        crypto.classList.add('current') // add current class to clicked crypto container
    })});




let left = document.querySelectorAll(".from-left");
let right = document.querySelectorAll(".from-right");
let scale = document.querySelectorAll(".scale-small");
let bottom = document.querySelectorAll(".from-bottom");
let icons = document.querySelectorAll(".from-left-icons");


function counter(){
    let distInView = icons[1].getBoundingClientRect().top - window.innerHeight + 80;
    if (distInView >= -900 && distInView <= 0){
        incrementCount();
}
else{
    exchange = 20 
    countries = 185
    users = 0  
}
}



window.addEventListener('scroll', animation); 
function animation() {
    for (let i = 0; i < bottom.length; i++) {
        let elem = bottom[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 80;
        if (distInView >= -900 && distInView <= 0) {
           elem.classList.add('slideBottom')
        } else {
            elem.classList.remove('slideBottom')
        }
    }

    for (let i = 0; i < left.length; i++) {
        let elem = left[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 80;
        if  (distInView >= -900 && distInView <= 0) {
           elem.classList.add('slideLeft')
        } else {
            elem.classList.remove('slideLeft')
        }
    }

    for (let i = 0; i < right.length; i++) {
        let elem = right[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 80;
        if  (distInView >= -900 && distInView <= 0) {
           elem.classList.add('slideRight')
        } else {
            elem.classList.remove('slideRight')
        }
    }

    for (let i = 0; i < scale.length; i++) {
        let elem = scale[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 80;
        if (distInView >= -900 && distInView <= 0) {
           elem.classList.add('scale')
        } else {
            elem.classList.remove('scale')
        }
    }

    for (let i = 0; i < icons.length; i++) {
        let elem = icons[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 80
        if (distInView >= -900 && distInView <= 0) {
           elem.classList.add('slideLeft')
        } else {
            elem.classList.remove('slideLeft')
        }
    }

    
counter();
}

animation();


let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')
let menuBox = document.querySelector('.menu')

openMenu.addEventListener('click',()=>{
    menuBox.classList.add('slideInMenu')
})

closeMenu.addEventListener('click',()=>{
    menuBox.classList.remove('slideInMenu')
})







 