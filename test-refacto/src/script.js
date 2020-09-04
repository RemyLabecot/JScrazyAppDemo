let crazyModeSetTimeoutIdentifier;

window.onload = () => {

    // Generate first square
    document.body.appendChild(generateNewSquare(400, '0'));
};

window.ondblclick = () => {

    if (crazyModeSetTimeoutIdentifier > 0) {
        clearTimeout(crazyModeSetTimeoutIdentifier);
        crazyModeSetTimeoutIdentifier = 0;
    } else {
        activateCrazyMode();
    }
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
    const position = generateRandomSquarePosition(squareSize, Math.random(), window.innerHeight, window.innerWidth);
    newSquare.setAttribute('class', 'square');
    newSquare.style.top = position[0] + 'px';
    newSquare.style.left = position[1] + 'px';
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

const generateRandomSquarePosition = (squareSize, randomFactor, windowHeight, windowWidth) => {
    const distanceOfTop = (windowHeight - squareSize) * randomFactor;
    const distanceOfLeft = (windowWidth - squareSize) * randomFactor;
    return [distanceOfTop, distanceOfLeft];
};

const activateCrazyMode = () => {

    const elements = document.getElementsByClassName('square');
    for (let element of elements) {
        element.style.top = generateRandomSquarePosition(element.offsetHeight, Math.random(), window.innerHeight, window.innerWidth)[0] + 'px';
        element.style.left = generateRandomSquarePosition(element.offsetWidth, Math.random(), window.innerHeight, window.innerWidth)[1] + 'px';
    }
    crazyModeSetTimeoutIdentifier = setTimeout(() => {
        activateCrazyMode();
    }, 2000);
};
