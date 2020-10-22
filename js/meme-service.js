'use strict'



var gMeme = []



function createMeme(imgId = 1, imgUrl = 'img/2.jpg') {  // <-----

    var meme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        selectedImgUrl: imgUrl,
        lines: [
            {
                txt: 'I never eat Falafel',
                size: 20,
                align: 'left',
                color: 'red'
            }
        ]
    }
    meme = gMeme;
}





