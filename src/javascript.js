const getRandomSize = (min, max, randomFactor) => {

    return randomFactor * (max - min) + min;
}

const randomizeColor = () => {

    const hexaChar = '0123456789ABCDEF';
    let hexaColor = '#';

    for (let i=0;i<6;i++) {
        hexaColor += hexaChar[Math.floor(Math.random() * 16)];
    }
    return hexaColor;
}


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let squareSize = 200;
let square = generateNewSquare();

window.onload = () => { 
  document.body.appendChild(square);
}

const splitSquareOnClick = () => {

    squareSize = squareSize / 2;

    for(let i = 0;i<4;i++) {
        const newSquare = generateNewSquare();
        document.body.appendChild(newSquare);
    }
}

const generateNewSquare = () => {
    const randomTop = getRandomSize(0, windowHeight, Math.random());
    const randomLeft = getRandomSize(0, windowWidth, Math.random());
    const newSquare = document.createElement('div');
    newSquare.setAttribute('class', 'square');
    newSquare.setAttribute("onclick","splitSquareOnClick();");

    const newSize = squareSize;
    newSquare.style.width = newSize + 'px';
    newSquare.style.height = newSize + 'px';
    newSquare.style.top = randomTop + 'px';
    newSquare.style.left = randomLeft + 'px';
    newSquare.style.backgroundColor = randomizeColor();
    return newSquare;
}
