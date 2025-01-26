const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


function changeImage(newSrc) {
  document.getElementById("originnn").src = newSrc;
}

function restoreImage() {
  document.getElementById("originnn").src = "img/white.png";
}


function changeImagemodel(newSrc) {
  document.getElementById("originrimage").src = newSrc;
}

function restoreImagemodel() {
  document.getElementById("originrimage").src = "img/black2.png";
}

function changeImagemodel33(newSrc) {
    document.getElementById("model-thre").src = newSrc;
}

function restoreImagemodel33() {
    document.getElementById("model-thre").src = "img/black3.png";
}






/* paste this line in verbatim */
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
  action: "https://formspree.io/f/xoqogqyn",
  title: "How can we help?",
  fields: [
    { 
      type: "email", 
      label: "Email:", 
      name: "email",
      required: true,
      placeholder: "send me your email "
    },
    {
      type: "textarea",
      label: "Message:",
      name: "name",
      placeholder: "What's on your mind?",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});



let red01 = document.querySelector('.red01')

window.onscroll = function(){
  if(scrollY >= 300){
      red01.style.display ='block';
  }else{
      red01.style.display ='none';}}
  red01.onclick = function(){
      scroll({left:0,top:0,behavior:"smooth"})}


