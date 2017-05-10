/*
 * Archivo principal de JS
 */
 var scrollTop = 0;
 window.addEventListener("scroll", function(){
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > scrollTop){
      document.getElementById("nav-freelancer").classList.add("class","nav-height-scroll");
      document.getElementById("nav-freelancer").classList.add("class","cls-display-flex");
      document.getElementById("nav-freelancer").classList.add("class","cls-flex-direction");
      document.getElementById("nav-freelancer").classList.add("class","cls-justify-content");
      document.getElementById("nav-freelancer").classList.add("class","cls-align-items");
      document.getElementById("h1-nav-fl").classList.add("class", "h1-nav-scroll");
    }
    if(currentScroll <= 3){
     document.getElementById("nav-freelancer").classList.remove("class","nav-height-scroll");
     document.getElementById("nav-freelancer").classList.add("class","nav-height");
     document.getElementById("h1-nav-fl").classList.remove("class", "h1-nav-scroll");
     document.getElementById("h1-nav-fl").classList.add("class", "h1-nav");
    }
    scrollTop = currentScroll;
 });
