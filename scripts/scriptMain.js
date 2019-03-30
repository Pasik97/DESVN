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
  var header = document.getElementsByTagName("header")[0];

  desvn.style.opacity = 1;
  design.style.opacity = 1;
  if(window.innerWidth > 1000)
    design.style.paddingTop = "45px";
  else
    design.style.paddingTop = "15px";
  social.style.opacity=1;
  social.style.marginBottom = "44px";
}

function pageChange(){
  var windowHeight = window.innerHeight;

  if(numbers[0].getBoundingClientRect().top-windowHeight > -200){
    numbers[0].style.opacity=1;
    numbers[0].style.marginTop = "0px";
    numbers[1].style.opacity=0;
    numbers[1].style.marginBottom = "0px";
  }
  if(numbers[0].getBoundingClientRect().top-windowHeight < -windowHeight){
    numbers[0].style.opacity=0;
    numbers[0].style.marginTop = "-15px";
    numbers[1].style.opacity=1;
    numbers[1].style.marginBottom = "15px";
  }

  //page About
  var number = parseInt(numbers[2].textContent);

  if(numbers[2].getBoundingClientRect().top - windowHeight < -200 && number==0){
    numbers[2].style.opacity=0;
    numbers[2].style.marginTop = "-15px";
    numbers[3].style.opacity=1;
    numbers[3].style.marginBottom = "15px";
  }
  if(numbers[2].getBoundingClientRect().top - windowHeight > -200 && number==1){
    numbers[2].style.opacity=1;
    numbers[2].style.marginTop = "0px";
    numbers[3].style.opacity=0;
    numbers[3].style.marginBottom = "0px";
  }
  if(numbers[2].getBoundingClientRect().top - windowHeight < -windowHeight-15){
    numbers[2].innerHTML = "01";
    numbers[3].innerHTML = "02";
  }
  if(numbers[2].getBoundingClientRect().top - windowHeight > -10){
    numbers[2].innerHTML = "00";
    numbers[3].innerHTML = "01";
  }

  //page Projects
  number = parseInt(numbers[4].textContent);

  if(numbers[4].getBoundingClientRect().top - windowHeight < -200 && number==1){
    numbers[4].style.opacity=0;
    numbers[4].style.marginTop = "-15px";
    numbers[5].style.opacity=1;
    numbers[5].style.marginBottom = "15px";
  }
  if(numbers[4].getBoundingClientRect().top - windowHeight > -200 && number==2){
    numbers[4].style.opacity=1;
    numbers[4].style.marginTop = "0px";
    numbers[5].style.opacity=0;
    numbers[5].style.marginBottom = "0px";
  }
  if(numbers[4].getBoundingClientRect().top - windowHeight < -windowHeight-15){
    numbers[4].innerHTML = "02";
    numbers[5].innerHTML = "03";
  }
  if(numbers[4].getBoundingClientRect().top - windowHeight > -10){
    numbers[4].innerHTML = "01";
    numbers[5].innerHTML = "02";
  }

  //page CV
  number = parseInt(numbers[6].textContent);

  if(numbers[6].getBoundingClientRect().top - windowHeight < -200 && number==2){
    numbers[6].style.opacity=0;
    numbers[6].style.marginTop = "-15px";
    numbers[7].style.opacity=1;
    numbers[7].style.marginBottom = "15px";
  }
  if(numbers[6].getBoundingClientRect().top - windowHeight > -120 && number==3){
    numbers[6].style.opacity=1;
    numbers[6].style.marginTop = "0px";
    numbers[7].style.opacity=0;
    numbers[7].style.marginBottom = "0px";
  }
  if(numbers[6].getBoundingClientRect().top - windowHeight < -windowHeight-15){
    numbers[6].innerHTML = "03";
    numbers[7].innerHTML = "04";
  }
  if(numbers[6].getBoundingClientRect().top - windowHeight > -10){
    numbers[6].innerHTML = "02";
    numbers[7].innerHTML = "03";
  }

  //page Contact
  number = parseInt(numbers[8].textContent);
  if(numbers[8].getBoundingClientRect().top-windowHeight > 0){
    numbers[8].style.opacity=1;
    numbers[8].style.marginTop = "0px";
    numbers[9].style.opacity=0;
    numbers[9].style.marginBottom = "0px";
  }
  if(numbers[8].getBoundingClientRect().top-windowHeight < -80){
    numbers[8].style.opacity=0;
    numbers[8].style.marginTop = "-15px";
    numbers[9].style.opacity=1;
    numbers[9].style.marginBottom = "15px";
  }
}


hamburger.addEventListener("click", showNav);
window.addEventListener("load", showSocialandTitles);
window.addEventListener("scroll",pageChange);
