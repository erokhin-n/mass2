let button_right = document.getElementById('button_right');
let button_left = document.getElementById('button_left');
let massage_view = document.getElementById('massage_view');
let desc_head = document.getElementById('desc_head');
let desc_text = document.getElementById('desc_text');
let img = document.getElementById('desc_img');
let header_mass_views = document.getElementById('header_mass_views');


function slide_1(){
	massage_view.setAttribute('class', 'massage_view slide_anim_1');
	desc_head.innerHTML = 'первый вид массажа';
	desc_text.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod recusandae, voluptates architecto quisquam suscipit libero, molestias nam eos adipisci, nemo illo illum totam at quasi provident laborum exercitationem quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod recusandae, voluptates architecto quisquam suscipit libero, molestias nam eos adipisci, nemo illo illum totam at quasi provident laborum exercitationem quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. '
	img.setAttribute('class', 'desc_img img_1');
}

function slide_2(){
	massage_view.setAttribute('class', 'massage_view slide_anim_2');
	desc_head.innerHTML = 'второй вид массажа';
	desc_text.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod recusandae, voluptates architecto quisquam suscipit libero, molestias nam eos adipisci, nemo illo illum totam at quasi provident laborum exercitto quisquam suscipit libero, molestias nam eos adipisci, nemo illo illum totam at quasi provident laborum exercitationem quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. '
	img.setAttribute('class', 'desc_img img_2');
}

function slide_3(){
	massage_view.setAttribute('class', 'massage_view slide_anim_3');
	desc_head.innerHTML = 'третий вид массажа';
	desc_text.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod recusandae, voluptates architecto quisquam suscipit libero, molestias nam eoam eos adipisci, nemo illo illum totam at quasi provident laborum exercitationem quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. '
	img.setAttribute('class', 'desc_img img_3');
}

function right_click() {
	switch(img.className){
		case 'desc_img img_1':
		  slide_2();
		  break;
	  case 'desc_img img_2':
	    slide_3();
	    break;
	  case 'desc_img img_3':
	    slide_1();
	    break;
	}
}

function left_click() {
 switch(img.className){
		case 'desc_img img_1':
		  slide_3();
		  break;
	  case 'desc_img img_2':
	    slide_1();
	    break;
	  case 'desc_img img_3':
	    slide_2();
	    break;
	}
}

function head_mass_show() {
	header_mass_views.setAttribute('class', 'header_massage_views');
}

function close_views() {
	header_mass_views.setAttribute('class', 'hidden');
}

function scroll_to_view(event) {
	img.scrollIntoView({behavior: "smooth"});
	slide_2();
	let testEvent = event.target;
	console.log(testEvent);
}
