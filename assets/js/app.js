window.addEventListener("load", function(event) {
  event.preventDefault();
  var header = document.createElement("header");
  var divContainer = document.createElement("nav")
  var divImage = document.createElement("div");
  var divIcon = document.createElement("div");
  var divSign = document.createElement("div");
  divContainer.className = "container"
  divImage.className = "image";
  divIcon.className = "icon";
  divSign.className = "sign";
  document.body.appendChild(header);
  header.appendChild(divContainer);
  divContainer.appendChild(divImage)
  divContainer.appendChild(divIcon);
  divContainer.appendChild(divSign);

  var imgMedium = document.createElement("img");
  imgMedium.width = "100";
  imgMedium.src = "assets/img/medium.png";
  divImage.appendChild(imgMedium);

  var imgCoders = document.createElement("img");
  imgCoders.width = "80";
  imgCoders.src = "assets/img/coders.jpg"
  divImage.appendChild(imgCoders);

  var divTwitter = document.createElement("div");
  var spanTwitter = document.createElement("span");
  divTwitter.className = "div-icon";
  spanTwitter.classList.add("icon-twitter-with-circle");
  divIcon.appendChild(divTwitter);
  divTwitter.appendChild(spanTwitter);

  var divFacebook = document.createElement("div");
  var spanFacebook = document.createElement("span");
  divFacebook.className = "div-icon";
  spanFacebook.classList.add("icon-facebook-with-circle");
  divIcon.appendChild(divFacebook);
  divFacebook.appendChild(spanFacebook);

  var spanSign = document.createElement("span");
  spanSign.innerText = "Sign in / Sign up";
  divSign.appendChild(spanSign);

  var section = document.createElement("section")
  var divWriter = document.createElement("div");
  var news = document.createElement("article");
  divWriter.className = "div-writer";

/*  var imgWriter = document.createElement("img");
  imgWriter.width = "70";
  imgWriter.src = "assets/img/belen.jpg";*/

document.body.appendChild(section);
section.appendChild(divWriter);
//divWriter.appendChild(imgWriter);
section.appendChild(news);
});
