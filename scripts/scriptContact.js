function validate(form){
  var name = document.getElementsByName("name");
  var phoneNumber = document.getElementsByName("phone-number");
  var mail = document.getElementsByName("mail");
  var comment = document.getElementsByName("comment");
  var validateInfo = document.getElementsByClassName("validate")[0];
  var messageStart = "Następujące pola wymagają uzupełnienia: ";
  var message = "Następujące pola wymagają uzupełnienia: ";

  if(name[0].value == ""){
    message = message + "Imię, "
    name[0].style.borderColor = "red";
    name[0].classList.add("wrongData");
  }else{
    name[0].style.borderColor = "white";
    name[0].classList.remove("wrongData");
  }

  if(phoneNumber[0].value == ""){
    message = message + "Numer telefonu, "
    phoneNumber[0].style.borderColor = "red";
    phoneNumber[0].classList.add("wrongData");
  }else{
    phoneNumber[0].style.borderColor = "white";
    phoneNumber[0].classList.remove("wrongData");
  }

  if(mail[0].value == ""){
    message = message + "Adres e-mail, "
    mail[0].style.borderColor = "red";
    mail[0].classList.add("wrongData");
  }else{
    mail[0].style.borderColor = "white";
    mail[0].classList.remove("wrongData");
  }

  if(comment[0].value == ""){
    message = message + "Twoja wiadomość "
    comment[0].style.borderColor = "red";
    comment[0].classList.add("wrongData");
  }else{
    comment[0].style.borderColor = "white";
    comment[0].classList.remove("wrongData");
  }

  if(message != messageStart){
    validateInfo.style.opacity = "1";
    validateInfo.innerHTML = ""+message;
    return false;
  }else{
    validateInfo.style.opacity = "0";
  }
  return true;

}

function showFooterElements(){
  var windowHeight = window.innerHeight;
  var title = document.getElementsByClassName("content-title-contact")[0];
  var content = document.getElementsByClassName("contact-info")[0];
  var form = document.getElementsByClassName("mail-form")[0];

  if(title.getBoundingClientRect().top - windowHeight < -100){
    title.style.opacity = "1";
  }

  if(content.getBoundingClientRect().top - windowHeight < -250){
    content.style.opacity = "1";
    content.style.marginRight = "30px";
    form.style.opacity = "1";
  }
}

window.addEventListener("scroll",showFooterElements);
