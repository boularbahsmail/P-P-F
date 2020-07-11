const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
mybutton = document.getElementById("myBtn");

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 70) {
		header.style.backgroundColor = '#fff';
		header.style.boxShadow = "0 2px 5px 0 #eee";
	}
	else {
		header.style.backgroundColor = 'transparent';
		header.style.boxShadow = "0 0px 0px 0 lightgray";
	}

});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

	function onClickMenu(){
		document.getElementById("menu").classList.toggle("change");
		document.getElementById("nav").classList.toggle("change");
		document.getElementById("menu-bg").classList.toggle("change-bg");
	  }

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


document.getElementById('zero').addEventListener('click', () => {
	document.getElementById('tit').innerHTML = "Ismail Boularbah"
})

document.getElementById('one').addEventListener('click', () => {
	document.getElementById('tit').innerHTML = "Ismail Boularbah - Skills"
})

document.getElementById('two').addEventListener('click', () => {
	document.getElementById('tit').innerHTML = "Ismail Boularbah - Projects"
})

document.getElementById('three').addEventListener('click', () => {
	document.getElementById('tit').innerHTML = "Ismail Boularbah - Contact"
})
