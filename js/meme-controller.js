'use strict'

var gCtx;
var gCanvas;

function onInit() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');

    createMeme()
    renderMeme()
}




function renderMeme() {
    var img = new Image()
    img.src =  gMeme.selectedImgUrl;    // <-----
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText('hello', 50, 50)
    }
}


function drawText(text, x, y) {
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.lineWidth = '2'
    gCtx.font = '48px Ariel'
    gCtx.textAlign = 'start'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}




// function onEditImage(){

// }