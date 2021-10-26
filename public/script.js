function scale(){
var scale = 'scale(1)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
 document.body.style.msTransform =   100;       // IE 9
 document.body.style.transform = scale;     // General
}