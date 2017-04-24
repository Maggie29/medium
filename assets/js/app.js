window.addEventListener("load", function(event) {
  event.preventDefault();
  var header = document.createElement("header");
  var divImage = document.createElement("div");
  var divIcon = document.createElement("div");
  var divSign = document.createElement("div");
  divImage.className = "image";
  divIcon.className = "icon";
  divSign.className = "sign";
  document.body.appendChild(header);
  header.appendChild(divImage);
  header.appendChild(divIcon);
  header.appendChild(divSign);

  var imgMedium = document.createElement("img");
  imgMedium.width = "100";
  imgMedium.src = "assets/img/medium.png";
  divImage.appendChild(imgMedium);

  var imgCoders = document.createElement("img");
  imgCoders.width = "80";
  imgCoders.src = "assets/img/coders.jpg"
  divImage.appendChild(imgCoders);

  var spanTwitter = document.createElement("span");
  spanTwitter.classList.add("icon-twitter-with-circle");
  divIcon.appendChild(spanTwitter);
  var spanFacebook = document.createElement("span");
  spanFacebook.classList.add("icon-facebook-with-circle");
  divIcon.appendChild(spanFacebook);


});
