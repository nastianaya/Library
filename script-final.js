const reviewBlocks = document.querySelectorAll('.img-block');

const arrowLeft = document.querySelector('.btn-slider-left');
const arrowRight = document.querySelector('.btn-slider-right');
const photo = document.querySelector('.about-slider-img');
let position = 0;


arrowLeft.addEventListener('click', ()=>{
       if(position > -400 * (reviewBlocks.length - 1)) 
        position -= 400;
        photo.style.left = position + "px";
        
})

arrowRight.addEventListener('click', ()=>{    
        if (position < 0)
        position += 400;
        photo.style.left = position + "px";   
})



