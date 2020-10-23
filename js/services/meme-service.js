'use strict'

// console.log('Hi');

var gMeme = {}



function createMeme() { 

    var meme = {
        selectedImgId: 1,
        selectedLineIdx: 0,
        selectedImgUrl:'img/3.jpg',
        lines: [
            {
                x: 250,
                y: 100,
                txt: 'Hello',
                size: 50,
                align: 'center',
                color: 'red',
                stroke: 'white'
            }
        ]
    }
    gMeme = meme;
}
// console.log('createMeme', gMeme);





function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img.jpg'
}



