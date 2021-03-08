let button_right = document.getElementById('button_right');
let button_left = document.getElementById('button_left');
let massage_view_1 = document.getElementById('massage_view_1');
let massage_view_2 = document.getElementById('massage_view_2');
let massage_view_3 = document.getElementById('massage_view_3');


function right_click() {
	if(massage_view_1.className === 'massage_view_1') {

		massage_view_1.setAttribute('class', 'hidden');
    massage_view_2.setAttribute('class', 'massage_view_2');

	} else if (massage_view_2.className === 'massage_view_2') {

		massage_view_2.setAttribute('class', 'hidden');
    massage_view_3.setAttribute('class', 'massage_view_3');

	} else if (massage_view_3.className === 'massage_view_3') {

		massage_view_3.setAttribute('class', 'hidden');
    massage_view_1.setAttribute('class', 'massage_view_1');
	}
}

function left_click() {
  if(massage_view_1.className === 'massage_view_1') {

		massage_view_1.setAttribute('class', 'hidden');
		massage_view_3.setAttribute('class', 'massage_view_3');

  } else if (massage_view_2.className === 'massage_view_2') {

		massage_view_2.setAttribute('class', 'hidden');
		massage_view_1.setAttribute('class', 'massage_view_1');

  } else if (massage_view_3.className === 'massage_view_3') {

		massage_view_3.setAttribute('class', 'hidden');
		massage_view_2.setAttribute('class', 'massage_view_2');
	}
}


