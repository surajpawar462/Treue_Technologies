var zoomImgBox = document.getElementById("zoomImgBox");
var zoomImg = document.getElementById("zoomImg");

function openFullImg(pic){
                    zoomImgBox.style.display="flex";
                    zoomImg.src=pic;
}

function closeFullImg(){
                    zoomImgBox.style.display="none";
}