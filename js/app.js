const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 70) {
		header.style.backgroundColor = '#fff';
		header.style.boxShadow = "0 2px 5px 0 #eee";
		document.querySelector('#back2Top').style.display = 'block';
	} 
	else {
		header.style.backgroundColor = 'transparent';
		header.style.boxShadow = "0 0px 0px 0 lightgray";
		document.querySelector('#back2Top').style.display = 'none';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var time = new Date(),
	year = time.getFullYear();
	document.querySelector("#sign").innerHTML = "© boularbah-ismail - " + year;

	function onClickMenu(){
		document.getElementById("menu").classList.toggle("change");
		document.getElementById("nav").classList.toggle("change");
		document.getElementById("menu-bg").classList.toggle("change-bg");
	  }

/*Scroll to top when arrow up clicked BEGIN*/