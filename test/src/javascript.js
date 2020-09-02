const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let squareSize = 200;
let crazyMode;

window.onload = () => {
  const square = generateNewSquare();
  document.body.appendChild(square);
};

window.ondblclick = () => {

    if (crazyMode > 0) {
        clearTimeout(crazyMode);
        crazyMode = 0;
    } else {
        activateCrazyMode();
    }
};

const splitSquareOnClick = () => {

    squareSize = squareSize / 2;

    for(let i = 0;i<4;i++) {
        const newSquare = generateNewSquare();
        document.body.appendChild(newSquare);
    }
};

const generateNewSquare = () => {
    
    const newSquare = document.createElement('div');
    const newSize = squareSize;

    newSquare.setAttribute('class', 'square');
    newSquare.onclick = splitSquareOnClick;

    newSquare.style.width = newSize + 'px';
    newSquare.style.height = newSize + 'px';
    newSquare.style.top = getRandomSize(squareSize, windowHeight, Math.random()) + 'px';
    newSquare.style.left = getRandomSize(squareSize, windowWidth, Math.random()) + 'px';
    newSquare.style.backgroundColor = randomizeColor();

    return newSquare;
};

const getRandomSize = (squareSize, max, randomFactor) => {

    const randomPosition = (randomFactor *  max);
    return  randomPosition > squareSize ? randomPosition - squareSize : randomPosition;
};

const randomizeColor = () => {

    const hexaChar = '0123456789ABCDEF';
    let hexaColor = '#';

    for (let i=0;i<6;i++) {
        hexaColor += hexaChar[Math.floor(Math.random() * 16)];
    }
    return hexaColor;
};

const activateCrazyMode = () => {
    const elements = document.getElementsByClassName('square');
    for (let element of elements) {
        element.style.top = getRandomSize(element.style.height, windowHeight, Math.random()) + 'px';
        element.style.left = getRandomSize(element.style.width, windowWidth, Math.random()) + 'px';
    }
     crazyMode = setTimeout(() => {
        activateCrazyMode();
    }, 2000);
};
