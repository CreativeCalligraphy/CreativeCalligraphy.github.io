
var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
	images[i] = new Image()
	images[i].src = preload.arguments[i]
    }
}


var which = ""
var current_pic = 1;
pics = ["pic1.jpg",
	"IMG_1518.jpg",
	"IMG_1596.jpg",
	"IMG_4292.JPG",
	"unnamed.jpg",
	"pic2.jpg",
       ]


window.onload = function() {

    preload( "logo.png" );

    document.getElementById('footer').style.opacity = "1";

    setTimeout(function() {
    	document.getElementById('logo').style.height = "40%";
    }, 1000);

    setTimeout(function() {
    	document.getElementById('logo').style.height = "40%";
    	document.getElementById('logo').style.opacity = "1";
    }, 2500);

    setTimeout(function() {
    	document.getElementById('selector_container').style.opacity = "1";
    }, 3000);


    setDivButtons();
};

function setDivButtons(){
    var about = document.getElementById('about');
    var gallery = document.getElementById('gallery');
    var pricing = document.getElementById('pricing');
    var last = document.getElementById('last');
    var next = document.getElementById('next');

    about.style.cursor = 'pointer';
    about.onclick = function() {
	collapse("expandable_pricing");
	collapse("expandable_gallery");
	toggle("expandable_about");
    };

    gallery.style.cursor = 'pointer';
    gallery.onclick = function() {
	collapse("expandable_about");
	collapse("expandable_pricing");
	toggle("expandable_gallery");
    };

    pricing.style.cursor = 'pointer';
    pricing.onclick = function() {
	collapse("expandable_about");
	collapse("expandable_gallery");
	toggle("expandable_pricing");

    };

    next.style.cursor = 'pointer';
    next.onclick = function() {
	nextClick();
    };

    last.style.cursor = 'pointer';
    last.onclick = function() {
	lastClick();
    };

}


function nextClick(){
    
    current_pic ++;
    if (current_pic >= pics.length)
	current_pic = 0;

    var pic = document.getElementById("gallery_pic");
    pic.src = pics[current_pic];
    var gal = document.getElementById("expandable_gallery");
    gal.style.height = getHeight(element);
    
}

function lastClick(){
    
    current_pic --;
    if (current_pic < 0)
	current_pic = pics.length-1;

    var pic = document.getElementById("gallery_pic");
    pic.src = pics[current_pic];
    var gal = document.getElementById("expandable_gallery");
    gal.style.height = getHeight(element);
    
    
}


function getStyle(oElm, strCssRule){
    var strValue = "";
    if(document.defaultView && document.defaultView.getComputedStyle){
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    }
    else if(oElm.currentStyle){
        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
}

function getHeight(element){
    var el = document.getElementById(element);
    var old = el.style.height
    el.style.height = 'auto';
    var height = getStyle(el,"height");
    el.style.height = old;
    return height;
}

function collapse(element){
    var el = document.getElementById(element);
    el.style.height = '';
    el.style.padding = '';
    el.style.overflow = 'hidden';

}


function expand(element){
    var el = document.getElementById(element);
    el.style.padding = '30px';
    el.style.height = getHeight(element);
    setTimeout(function() {
	el.style.overflow = 'auto';	
    }, 1000);
    
}


function toggle(element){
    var el = document.getElementById(element);
    if (el.style.height) {
	collapse(element);
    } else {
	expand(element);

    } 

}
