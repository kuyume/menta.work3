'use strict';
let imageOutId = 0;
let imageInId = 1;
const imgset = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg"    /* 最後にカンマは不要 */
];
const fadeOutImg = document.getElementById('fadeOutObj');
const fadeInImg = document.getElementById('fadeInObj');
function image(){

  if(imageOutId >= imgset.length){
    imageOutId = 0;
  }
  if(imageInId >= imgset.length){
    imageInId = 0;
  }
  fadeOutImg.src = "images/"+imgset[imageOutId];
  fadeInImg.src = "images/"+imgset[imageInId];


  fadeOutImg.classList.add('fadeOut');
  fadeInImg.classList.add('fadeIn');

  imageOutId++;
  imageInId++;
  setTimeout(remove, 9000);
}
function remove(){
  fadeOutImg.classList.remove('fadeOut');
  fadeInImg.classList.remove('fadeIn');
}
image();
setInterval(image, 10000);

