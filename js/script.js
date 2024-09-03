/*When you click on an image of one of the three cups, it will change the image of the largest cup to the image you clicked on.*/
document.querySelectorAll('.image-slider img').forEach(images => {
	images.onclick = () => {
		var src = images.getAttribute('src');
		document.querySelector('.main-home-image').src = src;
	}
})

let navbar = document.querySelectorAll(".navbar a");
let bodyId = document.querySelector("body").id;

for(let link of navbar){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}



















