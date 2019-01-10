function resizePhoto() {
	var myPhoto = document.getElementById("my_photo");
	var pFrame  = document.getElementById("photo_frame");
	
	if (pFrame.clientWidth < myPhoto.clientWidth)
		myPhoto.width = pFrame.clientWidth;
	else
		myPhoto.width = 360;
}

window.onload = resizePhoto;
window.onresize = resizePhoto;