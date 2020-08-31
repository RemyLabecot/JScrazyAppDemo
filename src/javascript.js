const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let squareSize = 200;

window.onload = () => {
  let square = generateNewSquare();
  document.body.appendChild(square);
}

window.ondblclick = () => {
    activateCrazyMode();
}

const splitSquareOnClick = () => {

    squareSize = squareSize / 2;

    for(let i = 0;i<4;i++) {
        const newSquare = generateNewSquare();
        document.body.appendChild(newSquare);
    }
}

const generateNewSquare = () => {
    
    const newSquare = document.createElement('div');
    const newSize = squareSize;

    newSquare.setAttribute('class', 'square');
    newSquare.setAttribute("onclick","splitSquareOnClick();");

    newSquare.style.width = newSize + 'px';
    newSquare.style.height = newSize + 'px';
    newSquare.style.top = getRandomSize(0, windowHeight, Math.random()) + 'px';
    newSquare.style.left = getRandomSize(0, windowWidth, Math.random()) + 'px';
    newSquare.style.backgroundColor = randomizeColor();

    return newSquare;
}

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

const activateCrazyMode = () => {

    let elements = document.getElementsByClassName('square');
    for (let element of elements) {
        element.style.top = getRandomSize(0, windowHeight, Math.random()) + 'px';
        element.style.left = getRandomSize(0, windowWidth, Math.random()) + 'px';
    }
    setTimeout(() => {
        activateCrazyMode();
    }, 2000);
}
