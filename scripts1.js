let flag = 0;
let slides = 0;

function controller(x){
    flag = flag + x;
    slideshow(flag); 
    
}
slideshow(flag); 
function slideshow(num){
    slides = document.getElementsByClassName('slide');
    for(let y of slides){
        y.style.display='none';
    }
    if(num==slides.length){
        num=0;
        flag = 0
        
    }
    if(num < 0){
        num=3;
        flag = 3
    }
       
    slides[num].style.display = 'block';  
    console.log(num);
    }

let i = 0;
function infi(){
    slideshow(i)
    i++;
   if(i==slides.length){
       i=0;
    }
}
setInterval(infi, 5000);  