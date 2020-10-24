'use strict'
console.log('Hi controller');

var gCanvas;

function onInit() { 
    // console.log('enter init');
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    createMeme(1);
    drawImgFromlocal();
    renderMeme();
    renderGallery();
}

function showCanvas(event) {
    createMeme(event);
    renderMeme();
    document.querySelector('main').style.display = 'none';
    document.querySelector('.editor-content').style.display = 'block';
}

function renderMeme() {
    // console.log('gMeme' ,gMeme);
    var img = new Image();
    img.src = gMeme.selectedImgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        for (var i = 0; i < gMeme.lines.length; i++) {
            drawText(gMeme.lines[i].txt, gMeme.lines[i].x, gMeme.lines[i].y,);
        }
    }
}


function createLine() {

    addAsentence();
}

// --------------------------

function onToggleMenu() {
    toggleMenu();
}

// --------------------------

function onCloseCanvas() {
    closeCanvas();
}

function onSetMemeText(ev, text) {
    const { value } = ev.target;
    let i = gMeme.selectedLineIdx;
    gMeme.lines[i].txt = value;
    setMemeText(text);
    // console.log(text);
    renderMeme()
}

function onChangeArrow() {
    changeArrow();
}

function onAddAsentence() {
    addAsentence();
    renderMeme();
}

function onDeleteLine() {
    deleteLine();

}

function onSetFontSize(size) {
    renderMeme();
    setFontSize(size);

}

function onMoveText(dif) {
    moveText(dif);
    renderMeme();
}

function onAlignText(direction) {
    alignText(direction);
    renderMeme();
}

function onFontChange(value) {
    fontChange(value);
    renderMeme();
}

function onOutlineChange(value) {
    outlineChange(value);
    renderMeme();
}

function onColorChange(value) {
    colorChange(value);
    renderMeme();
}

// --------------------------

// function shareMeme(this){}






