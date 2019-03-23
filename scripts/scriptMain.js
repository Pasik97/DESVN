const hamburger = document.getElementById("hamburger");
var navShown = false;
var aboutUp = false;
var numbers = document.getElementsByClassName("number");

function showNav(){

  const nav = document.getElementsByClassName("nav-list")[0];

  if(navShown){
    nav.classList.add("hide-nav");
    nav.classList.remove("show-nav");
    hamburger.classList.remove("open");
    hamburger.classList.add("close");
    navShown = false;
  }
  else{
    nav.classList.add("show-nav");
    nav.classList.remove("hide-nav");
    hamburger.classList.add("open");
    hamburger.classList.remove("close");
    navShown = true;
  }

}

function showSocialandTitles(){
  var desvn = document.getElementsByClassName("desvn")[0];
  var design = document.getElementsByClassName("design")[0];
  var social = document.getElementsByClassName("social")[0];

  desvn.style.opacity = 1;
  desvn.style.marginTop = "-15px";
  design.style.opacity = 1;
  design.style.marginTop = "35px";
  social.style.opacity=1;
  social.style.marginBottom = "44px";
}

function pageChange(){
  var windowHeight = window.innerHeight;
  console.log(numbers[0].getBoundingClientRect().top-windowHeight);

  if(numbers[0].getBoundingClientRect().top-windowHeight > -200){
    numbers[0].style.opacity=1;
    numbers[0].style.marginTop = "0px";
    numbers[1].style.opacity=0;
    numbers[1].style.marginBottom = "0px";
  }else{
    if(numbers[0].getBoundingClientRect().top-windowHeight < -windowHeight){
      numbers[0].style.opacity=0;
      numbers[0].style.marginTop = "-15px";
      numbers[1].style.opacity=1;
      numbers[1].style.marginBottom = "15px";
    }
  }

  if(numbers[2].getBoundingClientRect().top - windowHeight < -90){
    numbers[2].style.opacity=0;
    numbers[2].style.marginTop = "-15px";
    numbers[3].style.opacity=1;
    numbers[3].style.marginBottom = "15px";
  }else{
    if(numbers[2].getBoundingClientRect().top - windowHeight > 0){
      numbers[2].style.opacity=1;
      numbers[2].style.marginTop = "0px";
      numbers[3].style.opacity=0;
      numbers[3].style.marginBottom = "0px";
    }
  }
}

hamburger.addEventListener("click", showNav);
window.addEventListener("load", showSocialandTitles);
window.addEventListener("scroll",pageChange);
