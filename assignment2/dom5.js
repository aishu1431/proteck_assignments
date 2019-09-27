
var images = ['/Users/aishwaryareddy/Downloads/1025539-pikachu.png', 
'/Users/aishwaryareddy/Downloads/dancing-dave-minion-510835__340.jpg',
'https://cdn.windowsreport.com/wp-content/uploads/2017/12/animation-software-kids.png',
'https://d1xfgk3mh635yx.cloudfront.net/sites/default/files/styles/original/public/image/attached/1025539-pikachu.png?itok=n20SjGLV'];

var index=0;


function changeImage(status){
	if (status=="next"){
		if (index < images.length-1) {
			index++;
		}
		else {
			index = index%(images.length-1);
		}
	}
	else{
		if(index <= 0){
			index=images.length-1;
		}
		else{
			index--;
		}
	}
		document.getElementById("demo").src =  images[index];
}
