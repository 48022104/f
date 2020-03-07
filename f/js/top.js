var tips = document.getElementsByClassName("tips");
var navs = document.getElementsByClassName("nav_in");

for(var i = 0; i < navs.length; i++) {
	navs[i].index = i;
	tips[i].index = i;

	navs[i].onmouseout = function() {
		tips[this.index].style.display = "none"
	}

	navs[i].onmouseover = function() {
		tips[this.index].style.display = "block"
		if(tips[this.index].innerHTML == "") {
			tips[this.index].style.display = "none"
		}
	}
	tips[i].style.left = (80 - tips[i].offsetWidth) / 2 + "px";
	tips[i].style.display = "none"

}

var n_m = document.getElementById("nav_m");
var n_list = document.getElementById("nav_list");
var n_in = document.getElementsByClassName("nav_m_in_list")

n_m.onclick = function() {
	if(n_list.style.display == "none") {
		n_list.style.display = "block"
	} else {
		n_list.style.display = "none"
	}
}


var back = document.getElementById("backtop");
	var bodyw = document.body.clientWidth;
	back.style.display = "none";
	window.onscroll = function() {
		
		var allh = window.screen.availHeight;
	    var alls = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	    if((alls + allh) > allh*1.3 & bodyw < 800  ){
	    	back.style.display = "block";
	    }else{
	    	back.style.display = "none";
	    }
	}
	
	back.onclick = function(){
		this.style.display = "none";
		document.documentElement.scrollTop = 0;
		window.pageYOffset = 0;
		document.body.scrollTop = 0;
		
	}