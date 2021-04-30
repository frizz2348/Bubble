var image = document.querySelector('.hero');
image.style.transition = `all 1.5s ease`;

function changeImage() {
    image.style.backgroundImage = `url('images/img_2.jpg')`;
    image.style.color = `rgba(3, 3, 3, .7)`;
    document.querySelector('h3').style.color = `rgba(4, 4, 4, .7)`;
    document.querySelector('button').style.backgroundColor =`rgb(191, 59, 201)`;
    document.querySelector('button').style.color = `rgb(230, 228, 228)`;
    document.querySelector('.butt').style.backgroundColor = `rgb(191, 59, 201)`;
    document.querySelector('.butt').style.color = `rgb(230, 228, 228)`;
}

function changeImage2() {
    image.style.backgroundImage = `url('images/img_3.jpg')`;
    image.style.color = `rgba(238, 56, 0, .8)`;
    document.querySelector('h3').style.color = `rgba(238, 236, 220, .7)`;
    document.querySelector('button').style.backgroundColor =`rgb(218, 186, 186)`;
    document.querySelector('button').style.color = `rgb(9, 9, 9)`;
    document.querySelector('.butt').style.backgroundColor =`rgb(218, 186, 186)`;
    document.querySelector('.butt').style.color = `rgb(9, 9, 9)`;
}

function changeImage3() {
    image.style.backgroundImage = `url('images/img_4.jpg')`;
    image.style.color = `rgba(255, 255, 255, 0.7)`;
    document.querySelector('h3').style.color = `rgb(90, 218, 218)`;
    document.querySelector('button').style.backgroundColor =`rgb(90, 218, 218)`;
    document.querySelector('button').style.color = `rgb(0, 8, 8)`;
    document.querySelector('.butt').style.backgroundColor = `rgb(90, 218, 218)`;
    document.querySelector('.butt').style.color = `rgb(0, 8, 8)`;
}

function changeImage4() {
    image.style.backgroundImage = `url('images/img_1.jpg')`;
    image.style.color = `white`;
    document.querySelector('h3').style.color = `white`;
    document.querySelector('button').style.backgroundColor = `transparent`;
    document.querySelector('button').style.color = `white`;
    document.querySelector('.butt').style.backgroundColor = `transparent`;
    document.querySelector('.butt').style.color = `white`;
}
setInterval(changeImage, 10000);
setInterval(changeImage3, 15000);
setInterval(changeImage2, 20000);
setInterval(changeImage4, 25000);