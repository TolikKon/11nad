const myButton = document.querySelector('button');
const image = document.querySelector('img');

const images = ['img/mike2.jpg','img/mike3.png','img/Mike4.jpg','imgMikeshrek.png'];

myButton.addEventListener('click', changeImage);

function changeImage() {


    console.log(image)
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = images[randomIndex];

   
}



