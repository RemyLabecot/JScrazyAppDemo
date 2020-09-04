window.onload = () => {

    // Random position of the first square on load
    const square = document.getElementById('1');
    const position = generateRandomSquarePosition(400, Math.random(), window.innerHeight, window.innerWidth);

    square.style.top = position[0] + 'px';
    square.style.left = position[1] + 'px';
};

const split = (id) => {

    const square = getSquareById(id);
    const newSquareSize = splitSquareSize(square);

    for(let i=0;i<4;i++) {
        const newSquare = generateNewSquare(newSquareSize, square.id);
        document.body.appendChild(newSquare);
    }
};

const generateNewSquare = (squareSize, id) => {
    // A REFACTO
    const position = generateRandomSquarePosition(squareSize, Math.random(), window.innerHeight, window.innerWidth);
    const newSquare = document.createElement('div');

    newSquare.setAttribute('class', 'square');
    newSquare.style.top = position[0] + 'px';
    newSquare.style.left = position[1] + 'px';
    newSquare.style.width = squareSize;
    newSquare.style.height = squareSize;
    newSquare.id = Number(id) + 1;

    return newSquare;
};

const generateRandomSquarePosition = (squareSize, randomFactor, windowHeight, windowWidth) => {

    const distanceOfTop = (windowHeight - squareSize) * randomFactor;
    const distanceOfLeft = (windowWidth - squareSize) * randomFactor;
    return [distanceOfTop, distanceOfLeft];
};

const splitSquareSize = (square) => {

    const squareSize = square.offsetHeight / 2;
    return squareSize + 'px';
};

const getSquareById = (id) => {return document.getElementById(id);};

const randomizeColor = () => {

    const hexaChar = '0123456789ABCDEF';
    let hexaColor = '#';

    for (let i=0;i<6;i++) {
        hexaColor += hexaChar[Math.floor(Math.random() * 16)];
    }
    return hexaColor;
};

module.exports = {generateRandomSquarePosition, splitSquareSize, getSquareById};
