'use strict'
console.log('Hi-controller');

var gCtx;
var gCanvas;

function onInit() {
    console.log('enter init');
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    createMeme()
    drawImgFromlocal()
    renderMeme()
}



function showCanvas() { //renderMeme?
    document.querySelector('main').style.display = 'none';
}


function renderMeme() {
    // console.log('gMeme' ,gMeme);
    var img = new Image()
    img.src = gMeme.selectedImgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(gMeme.lines[0].txt, gMeme.lines[0].x, gMeme.lines[0].y,)
    }
}



function drawText(text, x, y) {
    gCtx.strokeStyle = 'blue'
    gCtx.fillStyle = 'white'
    gCtx.lineWidth = '2'
    gCtx.font = gMeme.lines[0].size + 'px ' + 'Ariel'
    gCtx.textAlign = gMeme.lines[0].align
    gCtx.fillText(gMeme.lines[0].txt, x, y)
    gCtx.strokeText(text, x, y)
}



function drawImgFromlocal() {
    var img = new Image()
    img.src = gMeme.selectedImgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
}





// function onEditImage(){

// }