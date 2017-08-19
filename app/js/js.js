function hendler() {
	var hamburger = document.querySelector('.hamburger');
	var ul 		  = document.querySelector('.advantages-main__ul');
	var posts     = ul.children;
	var wrapper   = document.querySelectorAll('.advantages-main__info');
	var prev      = document.querySelector('.prev');
	var next      = document.querySelector('.next');
	var batton    = document.querySelector('.header-info__btn');
	var form      = document.querySelector('.header-info__popup');



	function openMenu(){
		var menu = hamburger.nextElementSibling;
		menu.classList.toggle('open');
	}

	function openPopup(event){
		var target = event || event.target && event.srcElement;
		form.classList.toggle('open');
		var cross = document.querySelector('.header-info__popup--cross');
		cross.onclick = function(){
			this.parentNode.classList.toggle('open');
		}
	}

	function advantages(event) {
		var target = event.target || event && event.srcElement;


		if(target.tagName.toLowerCase() == 'li'){
			var li = target.getAttribute('data-tools');
			var getLi = target;

			for (var i = 0; i < posts.length; i++) {
				posts[i].classList.remove('choose-advantages');
			}

			getLi.classList.add('choose-advantages');

			for(var i = 0; i < wrapper.length; i++) {
				wrapper[i].classList.remove('open');
				if(li == i){
					wrapper[i].classList.add('open');
				}
			}

		}
	}

	function getUp() {

		var li =document.querySelector('.choose-advantages');
		var nextLi = li.previousElementSibling;

		if(nextLi.classList.contains('advantages-main__ul--li')){
			console.log('nextLi',nextLi);
			li.classList.remove('choose-advantages');
			nextLi.classList.add('choose-advantages');

			var data = nextLi.getAttribute('data-tools');

			for(var i = 0; i < wrapper.length; i++) {
				wrapper[i].classList.remove('open');
				if( data == i){
					wrapper[i].classList.add('open');
				}
			}
			
		}
	}

	function getDown(){

		var li =document.querySelector('.choose-advantages');
		var nextLi = li.nextElementSibling;

				
		if(nextLi.classList.contains('advantages-main__ul--li')){
			li.classList.remove('choose-advantages');
			nextLi.classList.add('choose-advantages');
			var data = nextLi.getAttribute('data-tools');

			for(var i = 0; i < wrapper.length; i++) {
				wrapper[i].classList.remove('open');
				if( data == i){
					wrapper[i].classList.add('open');
				}
			}
		}
	}

	batton.addEventListener('click',openPopup);
	next.addEventListener('click',getDown);
	prev.addEventListener('click',getUp);
	hamburger.addEventListener('click',openMenu);
	ul.addEventListener('click',advantages);
}
document.addEventListener('DOMContentLoaded',hendler);