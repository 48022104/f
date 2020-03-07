var pic_change = document.getElementById("pic_change");
var pics = document.getElementsByClassName("pic_change_in");
var dots = document.getElementsByClassName("dot_in");
var dot = document.getElementById("dot");
var pic_w = document.getElementById("pic_change").getElementsByClassName("word");

for( var i = 0; i < pics.length; i++) {
	
    pic_w[i].index= i;
	dots[i].index = i;
	pics[i].index = i;
	dots[i].onclick = function() {
		for(i = 0; i < pics.length; i++) {
			dots[i].className = "dot_in";
			pics[i].className = "pic_change_in";
		}
		this.className = "dot_in dot_in_choosed";
		pics[this.index].className = "pic_change_in pic_change_in_choosed";
	};
	pic_w[i].style.top = (pic_change.offsetHeight - pic_w[i].offsetHeight)/2 +"px"	

	dot.style.width = (i + 25) * 5 + "px";

}

function next() {
	var t = null;
	for(var i = 0; i < pics.length; i++) {
		if(pics[i].className == "pic_change_in pic_change_in_choosed") {
			t = i;
		}
	}
	pics[t].className = "pic_change_in";
	dots[t].className = "dot_in";
	if(t == pics.length - 1) {
		pics[0].className = "pic_change_in pic_change_in_choosed";
		dots[0].className = "dot_in dot_in_choosed";

	} else {
		pics[t + 1].className = "pic_change_in pic_change_in_choosed";
		dots[t + 1].className = "dot_in dot_in_choosed";
	}

}

function prev() {
	var t = null;
	for(var i = 0; i < pics.length; i++) {
		if(pics[i].className == "pic_change_in pic_change_in_choosed") {
			t = i;
		}
	}
	pics[t].className = "pic_change_in";
	dots[t].className = "dot_in";
	if(t == 0) {
		pics[pics.length - 1].className = "pic_change_in pic_change_in_choosed";
		dots[dots.length - 1].className = "dot_in dot_in_choosed";

	} else {
		pics[t - 1].className = "pic_change_in pic_change_in_choosed";
		dots[t - 1].className = "dot_in dot_in_choosed";
	}
}

setInterval("next()", 10000);

