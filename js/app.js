/*
 * Archivo principal de JS
 */
 var scrollTop = 0;
 window.addEventListener("scroll", function(){
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    console.log(currentScroll);
    if (currentScroll > scrollTop){
      document.getElementById("nav-freelancer").classList.add("class","nav-height-scroll");
      document.getElementById("nav-freelancer").classList.add("class","cls-display-flex");
      document.getElementById("nav-freelancer").classList.add("class","cls-flex-direction");
      document.getElementById("nav-freelancer").classList.add("class","cls-justify-content");
      document.getElementById("nav-freelancer").classList.add("class","cls-align-items");
      document.getElementById("h1-nav-fl").classList.add("class", "h1-nav-scroll");
    }else {
      if(currentScroll <= 3){
       document.getElementById("nav-freelancer").classList.remove("class","nav-height-scroll");
       document.getElementById("nav-freelancer").classList.add("class","nav-height");
       document.getElementById("h1-nav-fl").classList.remove("class", "h1-nav-scroll");
       document.getElementById("h1-nav-fl").classList.add("class", "h1-nav");
      }
    }
    if(currentScroll>=652){
      document.getElementById("portfolioid").classList.add("class","li-nav-link");
    }else{
      if (currentScroll<=652) {
        document.getElementById("portfolioid").classList.remove("class","li-nav-link");
      }
    }
    if(currentScroll>=1375){
      document.getElementById("portfolioid").classList.remove("class","li-nav-link");
      document.getElementById("aboutid").classList.add("class","li-nav-link");
    }else{
      if (currentScroll<=1375) {
        document.getElementById("aboutid").classList.remove("class","li-nav-link");
      }
    }
    if(currentScroll>=1925){
      document.getElementById("aboutid").classList.remove("class","li-nav-link");
      document.getElementById("contactid").classList.add("class","li-nav-link");
    }else{
      if (currentScroll<=1925) {
        document.getElementById("contactid").classList.remove("class","li-nav-link");
      }
    }

    scrollTop = currentScroll;
 });

 window.addEventListener('load',function(){
   var imagenes = document.getElementsByClassName('anchor-portfolio');
   for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].addEventListener("click",function (e) {
        e.preventDefault();
        console.log(e.target.previousSibling);
      });
   }

 });
 function printModalHtml(parent,fotito){
  var divmodal = document.createElement("div");
  divmodal.setAttribute("class","modal");
  divmodal.setAttribute("id","myModal");
  divmodal.setAttribute("tabindex","-1");
  divmodal.setAttribute("role","dialog");
  divmodal.setAttribute("aria-hidden","true");

  var divmodaldialog = document.createElement("div");
  divmodaldialog.setAttribute("class","modal-dialog");
  divmodaldialog.setAttribute("role","document");

  divmodal.appendChild(divmodaldialog);

  divmodalcontent = document.createElement("div");
  divmodalcontent.setAttribute("class","modal-content");

  divmodaldialog.appendChild(divmodalcontent);

  var divmodalheader = document.createElement("div");
  divmodalheader.setAttribute("class","modal-header");

  var divmodalbody = document.createElement("div");
  divmodalbody.setAttribute("class","modal-body");

  var divmodalfooter = document.createElement("div");
  divmodalfooter.setAttribute("class","modal-footer");

  divmodalcontent.appendChild(divmodalheader);
  divmodalcontent.appendChild(divmodalbody);
  divmodalcontent.appendChild(divmodalfooter);

  var a1 = document.createElement("a");
  a1.setAttribute("class","close");
  a1.setAttribute("data-dismiss","modal");
  a1.setAttribute("aria-label","Close");

  divmodalheader.appendChild(a1);

  var span1 = document.createElement("span");
  span1.setAttribute("aria-hidden","true");
  span1.appendChild(document.createTextNode('x'));

  a1.appendChild(span1);

  var divImagen = document.createElement("div");
  divImagen.setAttribute("class","divImagen");

  var img1 = document.createElement("img");
  img1.setAttribute("src",fotito);

  divImagen.appendChild(img1);

  divmodalbody.appendChild(divImagen);

  var containerImg = document.createElement("div");
  containerImg.classList.add("container-img");

  var contenedorTexto = document.createElement("div");
  contenedorTexto.classList.add("contenedor-texto");
  var p = document.createElement("p");
  p.setAttribute("class","parrafoPet");
  p.appendChild(document.createTextNode(definicion));

  containerImg.appendChild(contenedorTexto);
  containerImg.appendChild(p);

  divImagen.appendChild(containerImg);

  parent.appendChild(divmodal);

}
