let crazyModeSetTimeoutIdentifier;

window.onload = () => {

    // Generate first square
    document.body.appendChild(generateNewSquare(400, '0'));
};

window.ondblclick = () => {

    if(shouldGoIntoCrazyMode()) {
        resetCrazyMode();
    } else {
        activateCrazyMode();
    }
};

const shouldGoIntoCrazyMode = () => {
    return crazyModeSetTimeoutIdentifier > 0;
};

const resetCrazyMode = () => {
    clearTimeout(crazyModeSetTimeoutIdentifier);
    crazyModeSetTimeoutIdentifier = 0;
};

const split = (event) => {

    const square = document.getElementById(event.target.id);
    const newSquareSize = square.offsetHeight / 2;

    for(let i=0;i<4;i++) {
        document.body.appendChild(generateNewSquare(newSquareSize, event.target.id));
    }
};

const generateNewSquare = (squareSize, id) => {

    const newSquare = document.createElement('div');
    newSquare.setAttribute('class', 'square');
    newSquare.style.top = generateRandomSize(squareSize, Math.random(), window.innerHeight) + 'px';
    newSquare.style.left = generateRandomSize(squareSize, Math.random(), window.innerWidth) + 'px';
    newSquare.style.width = squareSize + 'px';
    newSquare.style.height = squareSize + 'px';
    newSquare.style.backgroundColor = randomizeColor();
    newSquare.onclick = split;
    newSquare.id = parseInt(id, 10) + 1;

    return newSquare;
};

const randomizeColor = () => {

    const hexaChar = '0123456789ABCDEF';
    let hexaColor = '#';
    for (let i=0;i<6;i++) {
        hexaColor += hexaChar[Math.floor(Math.random() * 16)];
    }
    return hexaColor;
};

const generateRandomSize = (squareSize, randomFactor, windowSize) => {
    return (windowSize - squareSize) * randomFactor;
};

const activateCrazyMode = () => {

    const elements = document.getElementsByClassName('square');
    for (let element of elements) {
        element.style.top = generateRandomSize(element.offsetHeight, Math.random(), window.innerHeight) + 'px';
        element.style.left = generateRandomSize(element.offsetWidth, Math.random(), window.innerWidth) + 'px';
    }
    crazyModeSetTimeoutIdentifier = setInterval(() => {
        activateCrazyMode();
    }, 2000);
};
