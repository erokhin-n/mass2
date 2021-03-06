"use strict";

let header = document.getElementById('header');
let massage_view_1 = document.getElementById('massage_view_1');
let massage_view_2 = document.getElementById('massage_view_2');
let massage_view_3 = document.getElementById('massage_view_3');
let desc_cont = document.getElementById('description_cont');
let desc_head = document.getElementById('desc_head');
let desc_text = document.getElementById('desc_text');
let img = document.getElementById('desc_img');
let header_mass_views = document.getElementById('header_mass_views');
let about_sect = document.getElementById('about_sect');
let button_right = document.getElementById('button_right');
let button_left = document.getElementById('button_left');
let button_up = document.getElementById('button_up');
let view_1 = document.getElementById('head_view_1');
let	view_2 = document.getElementById('head_view_2');
let	view_3 = document.getElementById('head_view_3');
let contact_cont = document.getElementById('contact_cont');
let close_but = document.getElementById('close_but');
let contacts = document.getElementById('contacts');
let close_cont = document.getElementById('close_cont');
let curtain = document.getElementById('curtain');
let massage_sect = document.getElementById('massage_sect');

window.addEventListener('scroll', function() {
  let scroll_px = document.documentElement.scrollTop;
  let scroll_height = document.documentElement.scrollHeight;
  let scroll_procent = Math.floor((scroll_px / scroll_height) * 100);
  let scroll_proc = document.getElementById('scroll_proc');

  if (scroll_procent > 30){
  	button_up.setAttribute('class', 'button_up');
  } else if (scroll_procent < 30 && button_up.className === 'button_up') {
  	button_up.setAttribute('class', 'button_up_hide');
  	setTimeout(()=>{
  	  button_up.setAttribute('class', 'hidden');	
  	}, 400);	
  } 

  if (scroll_procent >= 31) {
    button_right.setAttribute('class', 'button_right');
    button_left.setAttribute('class', 'button_left');
  }  else if (scroll_procent < 22 && button_right.className === 'button_right' && button_left.className === 'button_left') {
    button_right.setAttribute('class', 'button_right_hide');
    button_left.setAttribute('class', 'button_left_hide');
  	setTimeout(()=>{
  	  button_right.setAttribute('class', 'hidden');
  	  button_left.setAttribute('class', 'hidden');	
  	}, 400);
  }
});

function scroll_up() {
	header.scrollIntoView({behavior: "smooth"});
}


function right_click(){
	if(massage_view_2.className === 'hidden' && massage_view_3.className === 'hidden') {
    massage_view_1.setAttribute('class', 'massage_view_hide_r');
	  setTimeout(()=>{
		  massage_view_1.setAttribute('class', 'hidden');
		  massage_view_2.setAttribute('class', 'massage_view_2_r');
	  }, 200);
  } else if (massage_view_1.className === 'hidden' && massage_view_3.className === 'hidden') {
  	massage_view_2.setAttribute('class', 'massage_view_hide_r');
	  setTimeout(()=>{
		  massage_view_2.setAttribute('class', 'hidden');
		  massage_view_3.setAttribute('class', 'massage_view_3_r');
	  }, 200);
  } else if (massage_view_1.className === 'hidden' && massage_view_2.className === 'hidden') {
    massage_view_3.setAttribute('class', 'massage_view_hide_r');
	  setTimeout(()=>{
		  massage_view_3.setAttribute('class', 'hidden');
		  massage_view_1.setAttribute('class', 'massage_view_1_r');
	  }, 200);
  }
}


function left_click(){
  if( massage_view_2.className === 'hidden' && massage_view_3.className === 'hidden') {
    massage_view_1.setAttribute('class', 'massage_view_hide_l');
	  setTimeout(()=>{
		  massage_view_1.setAttribute('class', 'hidden');
		  massage_view_3.setAttribute('class', 'massage_view_3_l');
	  }, 200);
  } else if (massage_view_1.className === 'hidden' && massage_view_2.className === 'hidden') {
  	massage_view_3.setAttribute('class', 'massage_view_hide_l');
	  setTimeout(()=>{
		  massage_view_3.setAttribute('class', 'hidden');
		  massage_view_2.setAttribute('class', 'massage_view_2_l');
	  }, 200);
  } else if (massage_view_3.className === 'hidden' && massage_view_1.className === 'hidden') {
  	massage_view_2.setAttribute('class', 'massage_view_hide_l');
	  setTimeout(()=>{
		  massage_view_2.setAttribute('class', 'hidden');
		  massage_view_1.setAttribute('class', 'massage_view_1_l');
	  }, 200);
  }
}

 
function head_mass_show() {
	header.setAttribute('class', 'header header_blur');
	close_but.setAttribute('class', 'head_close');
	cover_curtain();
	setTimeout(()=> {
		view_1.setAttribute('class', 'head_view');
	}, 200);
	setTimeout(()=> {
		view_2.setAttribute('class', 'head_view');
		header_mass_views.setAttribute('class', 'header_massage_views');
	}, 400);
	setTimeout(()=>{
		view_3.setAttribute('class', 'head_view');
	}, 600);
}

function close_views() {
	view_3.setAttribute('class', 'head_v_opac');
	header_mass_views.setAttribute('class', 'head_mass_down');
	// console.log('1');
	setTimeout(()=> {
		view_2.setAttribute('class', 'head_v_opac');
		// console.log('2')
	}, 200);
	setTimeout(()=> {
		view_1.setAttribute('class', 'head_v_opac');
		// header_mass_views.setAttribute('class', 'header_massage_views_opac')
		// console.log('3')
	}, 400);
	setTimeout(()=>{
		close_but.setAttribute('class', 'head_close_opac');
		header_mass_views.setAttribute('class', 'hidden_views');
		header.setAttribute('class', 'header header_no_blur');
		cover_curtain_hide();
		// console.log('4');
	}, 600);
}

function scroll_to_view(event) {
	massage_sect.scrollIntoView({behavior: "smooth"});
  let click_event = event.target;
  switch (click_event.textContent){
    case "???????????? ?????? ??????????????":
      massage_view_2.setAttribute('class', 'hidden');
      massage_view_3.setAttribute('class', 'hidden');
      massage_view_1.setAttribute('class', 'massage_view_1_l');
      break;
    case "???????????? ?????? ??????????????":
      massage_view_1.setAttribute('class', 'hidden');
      massage_view_3.setAttribute('class', 'hidden');
      massage_view_2.setAttribute('class', 'massage_view_2_r');
      break; 
    case "???????????? ?????? ??????????????":
      massage_view_1.setAttribute('class', 'hidden');
      massage_view_2.setAttribute('class', 'hidden');
      massage_view_3.setAttribute('class', 'massage_view_3_l');
      break; 
    case "?????? ??????":
      about_sect.scrollIntoView({behavior: "smooth"}); 
      break;   
  }
}

function show_contact() {
  header.setAttribute('class', 'header header_blur');
  contacts.setAttribute('class', 'contacts');
  close_cont.setAttribute('class', 'close_cont');
  contact_cont.setAttribute('class', 'contact_cont');
  cover_curtain();
}

function close_contact(){
	header.setAttribute('class', 'header header_no_blur');
	contacts.setAttribute('class', 'contacts_opac');
	close_cont.setAttribute('class', 'close_cont_opac');
	contact_cont.setAttribute('class', 'contact_cont_hide');
	setTimeout(()=>{
	  contacts.setAttribute('class', 'hidden');
	  close_cont.setAttribute('class', 'hidden');
	  contact_cont.setAttribute('class', 'hidden');
	  cover_curtain_hide();
	}, 400)
} 

function cover_curtain() {
  curtain.setAttribute('class', 'cover_curtain');
}

function cover_curtain_hide() {
	curtain.setAttribute('class', 'hidden');
}

const cordX = [];
const cordY = [];

massage_sect.addEventListener('touchstart', touchSt);
massage_sect.addEventListener('touchend', touchOf);

function touchSt(event) {
	cordX[0] = event.changedTouches[0].clientX;
	cordY[0] = event.changedTouches[0].clientY;
} 


function touchOf(event) {
	cordY[1] = event.changedTouches[0].clientY;
  cordX[1] = event.changedTouches[0].clientX;

  let st = cordX[0];
  let end = cordX[1];
  let stY = cordY[0];
  let endY = cordY[1];
  let y = stY - endY;
  if (st > end && st - end > 300 && y > -100 && y < 100) {
  	right_click();
  	console.log(`???????????? ${y}`);
  } else if (st < end && end - st > 300 && y > -100 && y < 100) {
  	left_click();
  	console.log(`?????????? ${y}`);
  } else {
  	console.log(`???????? ${y}`);
  }
}
 

!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();