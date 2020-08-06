mybutton = document.getElementById("myBtn");
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 400) {
		mybutton.style.transform = "scale(1)";
	} else {
		mybutton.style.transform = "scale(0)";
	}
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
