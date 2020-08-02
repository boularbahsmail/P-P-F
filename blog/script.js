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


document.querySelector("#dark").addEventListener('click',() => {
	document.body.style.backgroundColor = "#001";
	document.body.style.color = "#fff";
	document.getElementById('h2').style.color = "#fff";
	document.getElementById("light").style.display = "block";
	document.getElementById("dark").style.display = "none";
	document.querySelector("#a").style.color = "#fff";
	document.querySelector("#b").style.color = "#fff";
	document.querySelector("#c").style.color = "#fff";
	document.querySelector("#d").style.color = "#fff";
	document.querySelector("#aa").style.color = "#fff";
	document.querySelector("#bb").style.color = "#fff";
	document.querySelector("#cc").style.color = "#fff";
	document.querySelector("#aaa").style.color = "#fff";
	document.querySelector("#bbb").style.color = "#fff";
	document.querySelector("#ccc").style.color = "#fff";
	document.querySelector("#aaaa").style.color = "#fff";
	document.querySelector("#bbbb").style.color = "#fff";
	document.querySelector("#cccc").style.color = "#fff";
})

document.querySelector("#light").addEventListener('click',() => {
	document.body.style.backgroundColor = "#fff";
	document.body.style.color = "#444";
	document.getElementById('h2').style.color = "#001";
	document.getElementById("light").style.display = "none";
	document.getElementById("dark").style.display = "block";
	document.querySelector("#a").style.color = "#001";
	document.querySelector("#b").style.color = "#001";
	document.querySelector("#c").style.color = "#001";
	document.querySelector("#d").style.color = "#001";
	document.querySelector("#aa").style.color = "#001";
	document.querySelector("#bb").style.color = "#001";
	document.querySelector("#cc").style.color = "#001";
	document.querySelector("#aaa").style.color = "#001";
	document.querySelector("#bbb").style.color = "#001";
	document.querySelector("#ccc").style.color = "#001";
	document.querySelector("#aaaa").style.color = "#001";
	document.querySelector("#bbbb").style.color = "#001";
	document.querySelector("#cccc").style.color = "#001";
})