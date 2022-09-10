let exchangeText = document.getElementById('exchange')
let countriesText = document.getElementById('countries') 
let usersText = document.getElementById('users')

let exchange = 20
let countries = 185
let users = 0
let interval = 0

let cryptoCon = document.querySelectorAll(".crypto-con"); // all crypto elements

cryptoCon.forEach((crypto) => { // loop through each crypto element 
    crypto.addEventListener('click', () => {
        cryptoCon.forEach(elem =>{
            elem.classList.remove('current') // remove current class from all crypto containers
        })
        crypto.classList.add('current') // add current class to clicked crypto container
    })});





// elements that will need animation 
let left = document.querySelectorAll(".from-left"); 
let right = document.querySelectorAll(".from-right");
let scale = document.querySelectorAll(".scale-small");
let bottom = document.querySelectorAll(".from-bottom");
let icons = document.querySelectorAll(".from-left-icons");


function counter(){
    let inView = icons[1].getBoundingClientRect().top - window.innerHeight;
    if (inView >= -1000 && inView <= 0){ // when element is within this view range
        if(interval < 1){//run this code only when interval is NOT active
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
else{
    // if element is not within range reset to default values
    exchange = 20 
    countries = 185
    users = 0  
}
}



window.addEventListener('scroll', animation); // on every scroll run the animation function

function animation() {
    for (let i = 0; i < bottom.length; i++) { 
        let elem = bottom[i] // element that requires bottom animation
        let inView = elem.getBoundingClientRect().top - window.innerHeight + 100;
        if (inView >= -1000 && inView <= 0) {// when element is within this view range
           elem.classList.add('slideBottom')
        } else {
            elem.classList.remove('slideBottom')
        }
    }

    for (let i = 0; i < left.length; i++) {
        let elem = left[i] // element that requires left animation
        let inView = elem.getBoundingClientRect().top - window.innerHeight + 100;
        if  (inView >= -1000 && inView <= 0) {// when element is within this view range
           elem.classList.add('slideLeft')
        } else {
            elem.classList.remove('slideLeft')
        }
    }

    for (let i = 0; i < right.length; i++) {
        let elem = right[i] // element that requires right animation
        let inView = elem.getBoundingClientRect().top - window.innerHeight + 100;
        if  (inView >= -1000 && inView <= 0) {// when element is within this view range
           elem.classList.add('slideRight')
        } else {
            elem.classList.remove('slideRight')
        }
    }

    for (let i = 0; i < scale.length; i++) {
        let elem = scale[i] // element that requires scale animation
        let inView = elem.getBoundingClientRect().top - window.innerHeight + 100;
        if (inView >= -1000 && inView <= 0) {// when element is within this view range
           elem.classList.add('scale')
        } else {
            elem.classList.remove('scale')
        }
    }

    for (let i = 0; i < icons.length; i++) {
        let elem = icons[i] // element that requires left animation
        let inView = elem.getBoundingClientRect().top - window.innerHeight + 100
        if (inView >= -1000 && inView <= 0) {// when element is within this view range
           elem.classList.add('slideLeft')
        } else {
            elem.classList.remove('slideLeft')
        }
    }

counter(); // run counter function
}

animation();

// Open and Close Menu
let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')
let menuBox = document.querySelector('.menu')

openMenu.addEventListener('click',()=>{
    menuBox.classList.add('slideInMenu')
})

closeMenu.addEventListener('click',()=>{
    menuBox.classList.remove('slideInMenu')
})







 