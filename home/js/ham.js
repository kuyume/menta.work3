'use strict';

const nav = document.getElementById('nav');
const hamicon = document.getElementById('ham-icon');
hamicon.addEventListener('click', function(){
		const top = document.getElementById('top');
		const ham = document.getElementById('ham');
		const hamon = document.getElementById('ham-on');
		const ham_list = document.getElementsByClassName('top--container--nav--menu--contents__CONTENT');

		const hammain = Array.prototype.slice.call(document.getElementsByClassName('ham-main'));
		const hamsub = Array.prototype.slice.call(document.getElementsByClassName('ham-sub'));

		const topbar = document.getElementById('ham-line-1');
		const midbar = document.getElementById('ham-line-2');
		const botbar = document.getElementById('ham-line-3');

		const hamsns = document.getElementById('ham-sns');

		if(window.innerWidth <= 768){
			hamon.style.display = "block";
			hamsns.style.display = "block";
			for (var i = hammain.length - 1; i >= 0; i--) {
				hammain[i].style.fontSize = "1.95vw";
				hammain[i].style.lineHeight = "3vw";
			}
			for (var i = hamsub.length - 1; i >= 0; i--) {
				hamsub[i].style.fontSize = "1.69vw";
			}
			if(top.className != "TOP mar-up"){
			topbar.classList.remove('ham-turn_off_left');
			topbar.classList.add('ham-turn_on_left');
			botbar.classList.remove('ham-turn_off_right');
			botbar.classList.add('ham-turn_on_right');
			midbar.classList.remove('fadeIn-ham');
			midbar.classList.add('fadeOut-ham');
			nav.classList.remove('ham-up');
			top.classList.remove('mar-down');
			nav.classList.add('ham-down');
			top.classList.add('mar-up');
			ham.classList.add('db');
			hamon.classList.remove('fadeOut-ham');
			hamon.classList.add('fadeIn-ham');
			hamsns.classList.remove('fadeOut-ham');
			hamsns.classList.add('fadeIn-ham');
			}
			else{
			botbar.classList.remove('ham-turn_on_right');
			botbar.classList.add('ham-turn_off_right');
			topbar.classList.remove('ham-turn_on_left');
			topbar.classList.add('ham-turn_off_left');
			midbar.classList.remove('fadeOut-ham');
			midbar.classList.add('fadeIn-ham');
			nav.classList.remove('ham-down');
			top.classList.remove('mar-up');
			nav.classList.add('ham-up');
			top.classList.add('mar-down');
			hamon.classList.remove('fadeIn-ham');
			hamon.classList.add('fadeOut-ham');
			hamsns.classList.remove('fadeIn-ham');
			hamsns.classList.add('fadeOut-ham');
			}
		}

});