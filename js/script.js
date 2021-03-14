let header = document.getElementById('header');
let button_right = document.getElementById('button_right');
let button_left = document.getElementById('button_left');
let massage_view = document.getElementById('massage_view');
let desc_head = document.getElementById('desc_head');
let desc_text = document.getElementById('desc_text');
let img = document.getElementById('desc_img');
let header_mass_views = document.getElementById('header_mass_views');
let about_me = document.getElementById('about_me');
let button_up = document.getElementById('button_up');
let view_1 = document.getElementById('head_view_1');
let	view_2 = document.getElementById('head_view_2');
let	view_3 = document.getElementById('head_view_3');
let close_but = document.getElementById('close_but');

window.addEventListener('scroll', function() {
  let scroll_px = document.documentElement.scrollTop;
  let scroll_height = document.documentElement.scrollHeight;
  let scroll_procent = Math.floor((scroll_px / scroll_height) * 100);
  let scroll_proc = document.getElementById('scroll_proc');
  scroll_proc.innerHTML = scroll_procent;
  console.log(scroll_procent);
  if (scroll_procent > 15){
  	button_up.setAttribute('class', 'button_up');	
  } else if (scroll_procent < 15) {
  	button_up.setAttribute('class', 'hidden');	
  }
});
   
function scroll_up() {
	header.scrollIntoView({behavior: "smooth"});
}

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
	header.setAttribute('class', 'header header_blur')
	close_but.setAttribute('class', 'head_close');
	setTimeout(()=> {
		view_1.setAttribute('class', 'head_view_1');
	}, 200);
	setTimeout(()=> {
		view_2.setAttribute('class', 'head_view_2');
	}, 400);
	setTimeout(()=>{
		view_3.setAttribute('class', 'head_view_3');
	}, 600);
}

function close_views() {
	view_3.setAttribute('class', 'head_v_opac_3');
	console.log('1');
	setTimeout(()=> {
		view_2.setAttribute('class', 'head_v_opac_2');
		console.log('2')
	}, 200);
	setTimeout(()=> {
		view_1.setAttribute('class', 'head_v_opac_1');
		console.log('3')
	}, 400);
	setTimeout(()=>{
		header_mass_views.setAttribute('class', 'hidden_views');
		close_but.setAttribute('class', 'head_close_opac');
		header.setAttribute('class', 'header');
		console.log('4');
	}, 600);
	// setTimeout(()=> {
	// 	
	// 	console.log('5');
	// }, 800);
	console.log('over');
}

function scroll_to_view(event) {
  img.scrollIntoView({behavior: "smooth"});
  let click_event = event.target;
  switch (click_event.textContent){
    case "первый вид массажа":
      slide_1();
      break;
    case "второй вид массажа":
      slide_2();
      break; 
    case "третий вид массажа":
      slide_3();
      break; 
    case "обо мне":
      about_me.scrollIntoView({behavior: "smooth"});    
  }
}


