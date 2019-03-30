const projects = document.querySelectorAll(".project");
var infoShown = false;
var closeButtonsInfo = document.querySelectorAll(".info-close-button");
var slideIndex = 1;
var modal = document.getElementsByClassName('modal')[0];
var slides = document.getElementsByClassName("slide");
var modalImg = document.getElementsByClassName("modal-content")[0];
var closeModal = document.getElementsByClassName("closeModal")[0];

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

function closeInfo(){
  var infos = document.getElementsByClassName("info");
  var projectPhotos = document.getElementsByClassName("project-photo");
  var projectFigureInfo = document.getElementsByClassName("figure-info");
  var allProjects = document.getElementsByClassName("project");
  var i;
  for(i=0; i<infos.length;i++){
    infos[i].style.display = "none";
    projectPhotos[i].style.display = "flex";
    projectFigureInfo[i].style.display = "block";
    allProjects[i].style.order = "1";
    allProjects[i].style.flexBasis = "auto";
  }
}

function displaySlides(){
  var carousel = this.querySelectorAll(".carousel")[0];
  var slideNumber = this.querySelectorAll(".display-photo");

  var next = carousel.querySelectorAll(".next")[0];
  next.addEventListener("click",plusSlides(1));

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  showSlides();

  function showSlides(n) {
    var i;
    var nPhoto = carousel.getElementsByClassName("number-photo");
    var slides = carousel.getElementsByClassName("slide");
    var dots = carousel.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slideNumber[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");
    slideNumber[slideIndex-1].style.display = "block";
  }
}

function showSlideBig(){
  modal.style.display = "block";
  modalImg.src = this.getElementsByTagName('img')[0].src;
}


closeModal.onclick = function() {
  modal.style.display = "none";
}
var i=0;
for(i=0; i<slides.length-1;i++){
  slides[i].addEventListener("click", showSlideBig);
}

Array.prototype.forEach.call(closeButtonsInfo, button => button.addEventListener("click", closeInfo));
Array.prototype.forEach.call(projects, project => project.addEventListener("mousemove", figureInfoShow));
Array.prototype.forEach.call(projects, project => project.addEventListener("mouseout", figureInfoHide));
Array.prototype.forEach.call(projects, project => project.getElementsByClassName("project-photo")[0].addEventListener("click", isShow));
Array.prototype.forEach.call(projects, project => project.addEventListener("click", infoShow));
Array.prototype.forEach.call(projects, project => project.addEventListener("click", displaySlides));
