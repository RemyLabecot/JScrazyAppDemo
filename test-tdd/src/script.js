
window.onload = () => {

    const position = generateRandomSquarePosition(400, Math.random(), window.innerHeight, window.innerWidth);
    const square = document.getElementById('1');
    square.style.top = position[0] + 'px';
    square.style.left = position[1] + 'px';
    square.style.width = 400 + 'px';
    square.style.height = 400 + 'px';
};

const generateRandomSquarePosition = (squareSize, randomFactor, windowHeight, windowWidth) => {

    const distanceOfTop = (windowHeight - squareSize) * randomFactor;
    const distanceOfLeft = (windowWidth - squareSize) * randomFactor;
    return [distanceOfTop, distanceOfLeft];
};

const splitSquareSize = (square) => {

    const squareSize square.offsetHeight / 2;
    return squareSize + 'px';
};

const getSquareById = (id) => {return document.getElementById(id);};

module.exports = {generateRandomSquarePosition, splitSquareSize};
