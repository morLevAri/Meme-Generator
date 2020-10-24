'use strict'

// console.log('Hi');

var gMeme = {}
var gCtx;

function createMeme(imgId) {
    var meme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        selectedImgUrl: `img/${imgId}.jpg`,
        lines:
            [
                {
                    txt: 'Hello',
                    x: 250,
                    y: 100,
                    size: 50,
                    font: 'impact',
                    align: 'center',
                    color: 'white',
                    stroke: 'black',
                    lineWidth: 2,
                },
                {
                    txt: 'There',
                    x: 250,
                    y: 450,
                    size: 50,
                    font: 'impact',
                    align: 'center',
                    color: 'white',
                    stroke: 'black',
                    lineWidth: 2,
                },


            ]
    }
    gMeme = meme;
    // console.log('gMeme', gMeme);

}

function drawText(text, x, y) {
    // console.log('gCtx', gCtx);

    gCtx.font = gMeme.lines[0].size + 'px ' + gMeme.lines[0].font;
    gCtx.textAlign = gMeme.lines[0].align;
    gCtx.fillStyle = gMeme.lines[0].color;
    gCtx.strokeStyle = gMeme.lines[0].stroke;
    gCtx.lineWidth = gMeme.lines[0].lineWidth;
    gCtx.fillText(text, x, y);      //<---
    gCtx.strokeText(text, x, y);   //<---
}

function renderGallery() {
    var strHTML = '';
    for (var i = 1; i <= 20; i++) {
        strHTML += `<div class="gallery-img"onclick="showCanvas(${i})">\n \t<img src="img/${i}.jpg">\t</div>\n`
    }
    document.querySelector('.gallery-grid').innerHTML = strHTML;
}

function drawImgFromlocal() {
    var img = new Image()
    img.src = gMeme.selectedImgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function closeCanvas() {
    document.querySelector('main').style.display = 'block';

}

function setMemeText(text) {
    let i = gMeme.selectedLineIdx;
    gMeme.lines[i].txt = text;

    // var elFocus = document.querySelector("#user-text");
    // elFocus.classList.add("focus");
    // console.log('elFocus', );

    // להוסיף מסגרת לטקסט
}

function changeArrow() {

    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0;
        return;
    }
    gMeme.selectedLineIdx++;

}

function createLine(posX, posY) {
    return { txt: 'puki', x: posX, y: posY, size: 50, font: 'impact', align: 'center', color: 'white', stroke: 'black', lineWidth: 2.5 };
}

function addAsentence() {
    console.log('gMeme', gMeme);
    gMeme.lines.push(createLine(250, 250));
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
    // drawText(gMeme.lines[2].txt, gMeme.lines[2].x, gMeme.lines[2].y,)
}

function deleteText() {
    clearCanvas();
    drawImgFromlocal();

}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function setFontSize(size) {
    let i = gMeme.selectedLineIdx;
    gMeme.lines[i].size = parseInt(size);
}

function moveText(dif) {
    let i = gMeme.selectedLineIdx;
    gMeme.lines[i].y += dif;

}

function alignText(direction) {
    switch (direction) {
        case 'left':
            gMeme.lines[gMeme.selectedLineIdx].align = 'left';
            gMeme.lines[gMeme.selectedLineIdx].x = 10;
            break;
        case 'center':
            gMeme.lines[gMeme.selectedLineIdx].align = 'center';
            gMeme.lines[gMeme.selectedLineIdx].x = 250;
            break;
        case 'right':
            gMeme.lines[gMeme.selectedLineIdx].align = 'right';
            gMeme.lines[gMeme.selectedLineIdx].x = 490;
            break;
    }

}

function fontChange(value) {
    gMeme.lines[gMeme.selectedLineIdx].font = value;
}

function outlineChange(value) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = value;
}

function colorChange(value) {
    gMeme.lines[gMeme.selectedLineIdx].color = value;
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme.jpg';
}
