const images = [
    'images/pixels-1.jpg',
    'images/pixels-2.jpg',
    'images/pixels-3.jpg',
    'images/pixels-4.jpg',
    'images/pixels-5.jpg',
    'images/pixels-6.jpg',
    'images/pixels-7.jpg',
]


let imgIndex = 0;
setInterval(()=> {
    const imgEle = document.getElementById('sliderImg');
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    // console.log(imgUrl);
    imgEle.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000);