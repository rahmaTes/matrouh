var i=0;
var slidesimage = ["1.jpg", "5.jpg", "ageeba.jpg","13.jpg"];
var slideshow = function(){
     document.slideshow.src = slidesimage[i];
     if(i< slidesimage.length-1){
     i++ ;}
     else{
         i=0;
     }
     setTimeout("slideshow()", 2000);
}
slideshow()