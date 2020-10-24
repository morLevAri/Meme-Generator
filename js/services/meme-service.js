'use strict'

console.log('Hi servise');

var gMeme = {}
var gCtx;
var gCurrLine = gMeme.selectedLineIdx;


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
                    // shadowColor: 'white',
                    // shadowBlur: 0,
                },
            ]
    }
    gMeme = meme;
    // console.log('gMeme', gMeme);

}

function drawText(text, x, y) {
    // console.log('gCtx', gCtx);
    let i = gMeme.selectedLineIdx;
    gCtx.font = gMeme.lines[i].size + 'px ' + gMeme.lines[i].font;
    gCtx.textAlign = gMeme.lines[i].align;
    gCtx.fillStyle = gMeme.lines[i].color;
    gCtx.strokeStyle = gMeme.lines[i].stroke;
    gCtx.lineWidth = gMeme.lines[i].lineWidth;
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
    document.querySelector('.editor-content').style.display = 'none';
    onInit();

}

function setMemeText(text) {
    let i = gMeme.selectedLineIdx;
    gMeme.lines[i].txt = text;

}

function changeArrow() {

    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0;
        return;
    }
    gMeme.selectedLineIdx++;

}

function renderLine(posX, posY) {

    return { txt: 'puki', x: posX, y: posY, size: 50, font: 'impact', align: 'center', color: 'white', stroke: 'black', lineWidth: 2.5 };

}

function addAsentence() {
    // console.log('gMeme', gMeme);
    if ((gMeme.selectedLineIdx === 0)) {
        gMeme.lines.push(renderLine(250, 450));
    } else if (gMeme.selectedLineIdx === 1) {
        gMeme.lines.push(renderLine(250, 250));
    } else if (gMeme.selectedLineIdx === 2) {
        gMeme.lines.push(renderLine(250, 170));
    }
    else if (gMeme.selectedLineIdx === 3) {
        gMeme.lines.push(renderLine(250, 330));
    }
    let i = gMeme.selectedLineIdx;
    drawText(gMeme.lines[i].txt, gMeme.lines[i].x, gMeme.lines[i].y,);
    gMeme.selectedLineIdx++

}

function deleteLine() {
    let i = gMeme.selectedLineIdx;
    gMeme.lines[i].txt = '';
    renderMeme();
    gMeme.selectedLineIdx--
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
            gMeme.lines[gMeme.selectedLineIdx].align = 'direction';
            gMeme.lines[gMeme.selectedLineIdx].x = 100;
            break;
        case 'center':
            gMeme.lines[gMeme.selectedLineIdx].align = 'direction';
            gMeme.lines[gMeme.selectedLineIdx].x = 250;
            break;
        case 'right':
            gMeme.lines[gMeme.selectedLineIdx].align = 'direction';
            gMeme.lines[gMeme.selectedLineIdx].x = 400;
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
