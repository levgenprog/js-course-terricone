let counter = 0;//-1  6
showSlides(0);
function switchSlides(diff){
    counter += diff;
    showSlides(counter);
}

setInterval(() => showSlides(counter+=1), 3000)

function showSlides(n){
    counter = n;
    const slides = document.getElementsByClassName('slide');
    if(counter < 0){
        counter = slides.length - 1;
    }else if(counter === slides.length){
        counter = 0;
    }
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.display = 'none';
    }
    slides[counter].style.display = 'flex';
}

const slidesRaw = [
    {
        'img': 'img/slide/1.jpg',
        'txt': 'first'
    },
    {
        'img': 'img/slide/2.jpg',
        'txt': 'Second'
    }
]

class SlideShow{
    constructor(array){
        this.slides= []
        array.forEach(e => {
            let slide = new Slide(e['img'], e['txt'])
            this.slides.push(slide)
        });
    }
}

class Slide{
    constructor(){
        this.element = document.createElement('div');
    }
}

