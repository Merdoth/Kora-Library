// ---------------- Search Auto Complete Toogle --------------------

const autoCompleteContainer = document.querySelector(".search-container");
autoCompleteContainer.addEventListener("click", toggleAutoComplete);

function toggleAutoComplete() {
	autoCompleteContainer.classList.toggle("active");
}

// ---------------- Sidebar Toogle --------------------

function openNav() {
	document.getElementById("sidebar").style.width = "300px";
}

function closeNav() {
	document.getElementById("sidebar").style.width = "0";
}

// ---------------- Mobile Overlay Toogle --------------------

document.querySelectorAll(".carousel-mobile").forEach((item) => {
	item.addEventListener("click", function () {
		document.querySelector(".carousel-mobile").style.display = "none";
		document.querySelector(".overlay-mobile").style.display = "block";
		document.querySelector(".overlay-mobile-details").style.display = "block";
	});
});

document.querySelectorAll(".overlay-close").forEach((item) => {
	item.addEventListener("click", function () {
		document.querySelector(".overlay-mobile").style.display = "none";
		document.querySelector(".overlay-mobile-details").style.display = "none";
		document.querySelector(".carousel-mobile").style.display = "block";
	});
});
