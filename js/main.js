// write Our JavaScript in here 
alert("Hello from Main.JS!");

var image =[
    "images/adorable-cat.jpg", //0
    "images/cat1.jpg",         //1
    "images/cat2.jpg",         //2
    "images/cat3.jpg",         //3
    "images/cat4.jpg",         //4
    "images/cat5.jpg",         //5
                               //6
];

var btn = document.querySelector("button");
var images = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
   if(counter=== 6) {
   	counter = 0;
   }

  images.src = image[counter]
   counter = counter + 1;
});