'use strict'
console.log('Hi-controller');

var gCanvas;

function onInit() {  // מה קורה כשהעמוד נטען
    // console.log('enter init');
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    createMeme(1);
    drawImgFromlocal();
    renderMeme();
    renderGallery();
}

function showCanvas(event) {
    clearCanvas();
    createMeme(event);
    renderMeme();
    document.querySelector('main').style.display = 'none';
}

function renderMeme() {
    // console.log('gMeme' ,gMeme);
    var img = new Image();
    img.src = gMeme.selectedImgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        
        //לעשות לולאה!

        drawText(gMeme.lines[0].txt, gMeme.lines[0].x, gMeme.lines[0].y,);
        drawText(gMeme.lines[1].txt, gMeme.lines[1].x, gMeme.lines[1].y,);
        // drawText(gMeme.lines[2].txt, gMeme.lines[2].x, gMeme.lines[2].y,)
        // drawText(gMeme.lines[3].txt, gMeme.lines[3].x, gMeme.lines[3].y,)

    }
    
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
    renderMeme();
}

function onAddAsentence(){
    addAsentence();
    renderMeme();

}

function onDeleteText() {
    deleteText();

}

function onSetFontSize(size) {
    setFontSize(size);
    renderMeme();
}

function onMoveText(dif) {
    moveText(dif);
    renderMeme();
}

function onAlignText(direction){
    alignText(direction);
    renderMeme();
}

function onFontChange(value){
    fontChange(value);
    renderMeme();
}

function onOutlineChange(value){
    outlineChange(value);
    renderMeme();
}

function onColorChange(value){
    colorChange(value);
    renderMeme();
}

// --------------------------

// function shareMeme(this){}






