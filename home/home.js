'use strict';
var imageOutId = 0;
var imageInId = 1;
var opacityOutLv = 100;
var opacityInLv = 0;
var imgset = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg"    /* 最後にカンマは不要 */
];
const fadeOutImg = document.getElementById('fadeOutObj');
const fadeInImg = document.getElementById('fadeInObj');
function decr(){
  opacityOutLv -= 0.08;
  fadeOutImg.style.opacity = opacityOutLv/100;
}
function incr(){
  opacityInLv += 0.2;
  fadeInImg.style.opacity = opacityInLv/100;
}
function image(){
  imageOutId++;
  imageInId++;
  if(imageOutId >= imgset.length){
    imageOutId = 0;
  }
  if(imageInId >= imgset.length){
    imageInId = 0;
  }
  fadeOutImg.src = "images/"+imgset[imageOutId];
  fadeInImg.src = "images/"+imgset[imageInId];
  opacityOutLv = 100;
  opacityInLv = 0;
}
setInterval(image, 10000);
setInterval(incr, 10);
setInterval(decr, 10);