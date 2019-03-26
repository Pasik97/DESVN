const hamburger = document.getElementById("hamburger");
var navShown = false;
var aboutUp = false;
var numbers = document.getElementsByClassName("number");
//dla forEach musi byc querySelectorAll
const projects = document.querySelectorAll(".project");
var infoShown = false;

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
}

function figureInfoShow(){
  var infoFigure = this.getElementsByClassName("figure-info")[0];
  var position = this.clientHeight - infoFigure.clientHeight;
  infoFigure.style.top= position + "px";
}

function figureInfoHide(){
  var infoFigure = this.getElementsByClassName("figure-info")[0];
  infoFigure.style.top="100%";
}

function infoShow(){

  if(!infoShown){
    var info = this.getElementsByClassName("info")[0];
    info.style.display = "block";
    this.style.flexBasis = "100%";
    this.style.order = "0";
    this.getElementsByClassName("figure-info")[0].style.display = "none";
    this.getElementsByTagName("img")[0].style.display = "none";
    infoShown = true;
    this.scrollIntoView(true);
  }
}

function isShow(){

  if(infoShown){
    for(var i = 0; projects.length-2; i++){
      var info = projects[i].getElementsByClassName("info")[0];
      info.style.display = "none";
      projects[i].style.flexBasis = "auto";
      projects[i].style.order = "1";
      projects[i].getElementsByClassName("figure-info")[0].style.display = "block";
      projects[i].getElementsByTagName("img")[0].style.display = "block";
      infoShown = false;
    }
  }
}

function showElements(){
  var windowHeight = window.innerHeight;
  var cv = document.getElementsByClassName("content-title")[0];

  if(cv.getBoundingClientRect().top - windowHeight < -70){
    cv.style.opacity = "1";
    cv.style.marginLeft = "0px";

  }
}

projects.forEach(project => project.addEventListener("mousemove", figureInfoShow));
projects.forEach(project => project.addEventListener("mouseout", figureInfoHide));
projects.forEach(project => project.addEventListener("click", isShow));
projects.forEach(project => project.addEventListener("click", infoShow));

hamburger.addEventListener("click", showNav);
window.addEventListener("load", showSocialandTitles);
window.addEventListener("scroll",pageChange);
window.addEventListener("scroll",showElements);
