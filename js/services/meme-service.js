'use strict'

console.log('Hi servise');

let gMeme = {}
let gCurrLine = gMeme.selectedLineIdx;


function createMeme(imgId) {
    let meme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        selectedImgUrl: `img/${imgId}.jpg`,
        lines:
            [
                {
                    txt: 'Hello there!',
                    x: 250,
                    y: 100,
                    size: 50,
                    font: 'impact',
                    align: 'center',
                    color: 'white',
                    stroke: 'black',
                    lineWidth: 2,
                    // shadowColor: 'white',
                    // blur: 12,
                },
            ]
    }
    gMeme = meme;
    // console.log('gMeme', gMeme);

}

function getMeme() {
    return gMeme;
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

function getLine(posX, posY) {
    return { txt: 'Your text here', x: posX, y: posY, size: 50, font: 'impact', align: 'center', color: 'white', stroke: 'black', lineWidth: 2};
}

function addLine() {
    // console.log('gMeme', gMeme);
  
    if ((gMeme.selectedLineIdx === 0)) {
        gMeme.lines.push(getLine(250, 450));
    } else if (gMeme.selectedLineIdx === 1) {
        gMeme.lines.push(getLine(250, 275));
    } else if (gMeme.selectedLineIdx === 2) {
        gMeme.lines.push(getLine(250, 187.5));
    }
    else if (gMeme.selectedLineIdx === 3) {
        gMeme.lines.push(getLine(250, 362.5));
    }
    let i = gMeme.selectedLineIdx;
    drawText(gMeme.lines[i].txt, gMeme.lines[i].x, gMeme.lines[i].y,);
    gMeme.selectedLineIdx++

}

function deleteLine() {
    let i = gMeme.selectedLineIdx;
    gMeme.lines[i].txt = '';
    gMeme.selectedLineIdx--
    renderCanvas();
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
            gMeme.lines[gMeme.selectedLineIdx].x = 150;
            break;
        case 'center':
            gMeme.lines[gMeme.selectedLineIdx].align = 'direction';
            gMeme.lines[gMeme.selectedLineIdx].x = 250;
            break;
        case 'right':
            gMeme.lines[gMeme.selectedLineIdx].align = 'direction';
            gMeme.lines[gMeme.selectedLineIdx].x = 350;
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
