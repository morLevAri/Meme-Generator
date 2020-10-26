'use strict'
console.log('Hi controller');

let gCtx;
let gCanvas;


function onInit() {
    // console.log('enter init');
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    createMeme(1);
    renderGallery();
    renderCanvas();
}

function showCanvas(event) {
    createMeme(event);
    renderCanvas();
    document.querySelector('main').style.display = 'none';
    document.querySelector('.editor-content').style.display = 'block';
}

function renderCanvas() {
    // console.log('gMeme' ,gMeme);
    let img = new Image();
    img.src = gMeme.selectedImgUrl;
    var meme = getMeme();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        meme.lines.forEach(line => {
            drawText(line);
        });
    }
}


function drawText(line) {
    let text = line.txt;
    if (text = 'a') text = 'Your text here'
    gCtx.font = line.size + 'px ' + line.font;
    gCtx.textAlign = line.align;
    gCtx.fillStyle = line.color;
    gCtx.strokeStyle = line.stroke;
    gCtx.lineWidth = line.lineWidth;
    gCtx.fillText(line.txt, line.x, line.y);
    gCtx.strokeText(line.txt, line.x, line.y);
   
    // gCtx.shadowColor = line.shadowColor;
    // gCtx.shadowBlur = line.blur;
}




function renderGallery() {
    let strHTML = '';
    for (let i = 1; i <= 20; i++) {
        strHTML += `<div class="gallery-img"onclick="showCanvas(${i})">\n \t<img src="img/${i}.jpg">\t</div>\n`
    }
    document.querySelector('.gallery-grid').innerHTML = strHTML;
}


function onToggleMenu() {
    let i = document.querySelector('.mobile-nav');
    
    if (i.style.display === "block") {
      i.style.display = "none";
    } else {
      i.style.display = "block";
    }
  }


function onSetMemeText(ev, text) {
    const { value } = ev.target;
    let i = gMeme.selectedLineIdx;
    gMeme.lines[i].txt = value;
    // console.log(text);
    setMemeText(text);
    renderCanvas()
}

// --------------------------

function onCloseCanvas() {
    document.querySelector('main').style.display = 'block';
    document.querySelector('.editor-content').style.display = 'none';
    onInit();
}

function onChangeArrow() {
    changeArrow();
}

function onAddLine() {
    addLine();
    renderCanvas();
}

function onDeleteLine() {
    deleteLine();
}

function onSetFontSize(size) {
    setFontSize(size);
    renderCanvas();
}

function onMoveText(dif) {
    moveText(dif);
    renderCanvas();
}

function onAlignText(direction) {
    alignText(direction);
    renderCanvas();
}

function onFontChange(value) {
    fontChange(value);
    renderCanvas();
}

function onOutlineChange(value) {
    outlineChange(value);
    renderCanvas();
}

function onColorChange(value) {
    colorChange(value);
    renderCanvas();
}

// --------------------------

// function shareMeme(this){}






