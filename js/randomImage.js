const myButton = document.querySelector('button');
const image = document.querySelector('img');

const images = ['img/mike2.jpg','img/mike3.png','img/mike4.jpg','img/mikeshrek.png'];

myButton.addEventListener('click', changeImage);

function changeImage() {


    console.log(image)
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = images[randomIndex];

   
}



