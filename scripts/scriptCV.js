function showCV(){
  var windowHeight = window.innerHeight;
  var cv = document.getElementsByClassName("content-title")[0];

  if(cv.getBoundingClientRect().top - windowHeight < -100){
    cv.style.opacity = "1";
    cv.style.marginLeft = "0px";

  }
}

window.addEventListener("scroll",showCV);
