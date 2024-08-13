let menuBtn = document.querySelector('.menu img');
let smallerScreenMenuOptions = document.querySelector('.smaller-screens-options');

menuBtn.addEventListener('click', ()=>{
    smallerScreenMenuOptions.style.display = 'block';
});

document.addEventListener('click', (event)=>{
    if (!menuBtn.contains(event.target) && !smallerScreenMenuOptions.contains(event.target)){
        hideSmallerScreenMenuOptions();     
    }
});

document.addEventListener('DOMContentLoaded', ()=>{
    let timeSpan = document.getElementById('time');
    timeSpan.innerHTML = new Date().getFullYear();
});

let smallScreenFeaturesBtn = document.getElementById('features-btn');

smallScreenFeaturesBtn.addEventListener('click', ()=>{
    hideSmallerScreenMenuOptions();
});

let smallerScreenPricingBtn = document.getElementById('pricing-btn');

smallerScreenPricingBtn.addEventListener('click', ()=>{
    hideSmallerScreenMenuOptions();
});

let smallerScreenContactBtn = document.getElementById('contact-btn');

smallerScreenContactBtn.addEventListener('click', ()=>{
    hideSmallerScreenMenuOptions();
});

function hideSmallerScreenMenuOptions(){
    smallerScreenMenuOptions.style.display = 'none';
}

