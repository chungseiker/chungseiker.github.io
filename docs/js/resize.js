function resizePhoto() {
	var myPhoto = document.getElementById("my_photo");
	var pFrame  = document.getElementById("photo_frame");
	
	if (pFrame.clientWidth < myPhoto.clientWidth)
		myPhoto.width = pFrame.clientWidth;
}

window.onload = resizePhoto;
window.onresize = resizePhoto;