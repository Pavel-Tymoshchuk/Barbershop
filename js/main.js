let link = document.querySelector('.login-link');
let popup = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");
let overlay = document.querySelector(".modal-overlay");
let login = popup.querySelector("[name=login]");
let password = popup.querySelector("[name=password]");
let form = popup.querySelector("form");
let mapLink = document.querySelector(".map-link");
let mapPopup = document.querySelector(".modal-map");
let mapClose = document.querySelector(".modal-close-map");
let gallery = document.querySelectorAll(".gallery__inner_item");
let galleryBack = document.getElementById("gallery-back");
let galleryForward = document.getElementById("gallery-forward");


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-show");
	login.focus(); 
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function() {
	popup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
	if(!login.value || !password.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27) {

	if(popup.classList.contains("modal-show")) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		overlay.classList.remove("modal-show");
		}
	}
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-map-show");
	overlay.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-map-show");
	overlay.classList.remove("modal-map-show");
})

overlay.addEventListener("click", function() {
	mapPopup.classList.remove("modal-map-show");
	overlay.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27) {
		if(mapPopup.classList.contains("modal-map-show")) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-map-show");
			overlay.classList.remove("modal-map-show");t
		}
	}
});

// for(var i=0; i < gallery.length; i++) {
// 	gallery[i].style.zIndex = gallery.length - i;
//  }
var currentSlide = 0;

function nextSlide() {
    goToSlide(currentSlide+1);
}
 
function previousSlide() {
    goToSlide(currentSlide-1);
}
 
function goToSlide(n) {
    gallery[currentSlide].className = 'gallery__inner_item';
    currentSlide = (n + gallery.length) % gallery.length;
    gallery[currentSlide].className = 'gallery__inner_item gallery__inner_item_next';
}

galleryForward.addEventListener("click",function(event){
	nextSlide();
});

galleryBack.addEventListener("click",function(event){
	previousSlide();
});