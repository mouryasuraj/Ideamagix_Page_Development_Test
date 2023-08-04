// show and hide FAQs
let question1 = document.getElementById('question1');
let question2 = document.getElementById('question2');
let question3 = document.getElementById('question3');
let question4 = document.getElementById('question4');
let answer1 = document.getElementById('answer1')
let answer2 = document.getElementById('answer2')
let answer3 = document.getElementById('answer3')
let answer4 = document.getElementById('answer4')
let sign1 = document.getElementById('sign1')
let sign2 = document.getElementById('sign2')
let sign3= document.getElementById('sign3')
let sign4 = document.getElementById('sign4')
question1.addEventListener('click', show1);
question2.addEventListener('click', show2);
question3.addEventListener('click', show3);
question4.addEventListener('click', show4);

function show1(){
    if(answer1.style.display === 'none'){
        answer1.style.display='block'
        sign1.innerHTML = '-'
    }
    else{
        answer1.style.display='none'
        sign1.innerHTML = '+'
    }
}
function show2(){
    if(answer2.style.display === 'none'){
        answer2.style.display='block'
        sign2.innerHTML = '-'
    }
    else{
        answer2.style.display='none'
        sign2.innerHTML = '+'
    }
}
function show3(){
    if(answer3.style.display === 'none'){
        answer3.style.display='block'
        sign3.innerHTML = '-'
    }
    else{
        answer3.style.display='none'
        sign3.innerHTML = '+'
    }
}
function show4(){
    if(answer4.style.display === 'none'){
        answer4.style.display='block'
        sign4.innerHTML = '-'
    }
    else{
        answer4.style.display='none'
        sign4.innerHTML = '+'
    }
}

let menubar = document.getElementById('menubar')
let closebar = document.getElementById('closebar')

menubar.addEventListener('click', ()=>{
    let menu = document.getElementById('menu');
    // menu.style.top = '0em';
    // menu.style.right = '0em';
    menu.style.display = 'block'
})
closebar.addEventListener('click', ()=>{
    let menu = document.getElementById('menu');
    // menu.style.top = '-100em'
    menu.style.display = 'none'
})


// Slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    stagePadding:60,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

