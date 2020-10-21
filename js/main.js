'use strict'


function drawImg2() {
    var img = new Image()
    img.src = 'img/square/1.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}