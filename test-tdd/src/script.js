
window.onload = () => {

    const position = generateRandomSquarePosition(400, Math.random(), window.innerHeight, window.innerWidth);
    const square = document.getElementById('1');
    square.style.top = position[0] + 'px';
    square.style.left = position[1] + 'px';
};

const generateRandomSquarePosition = (squareSize, randomFactor, windowHeight, windowWidth) => {

    const distanceOfTop = (windowHeight - squareSize) * randomFactor;
    const distanceOfLeft = (windowWidth - squareSize) * randomFactor;

    return [distanceOfTop, distanceOfLeft];
};

module.exports = generateRandomSquarePosition;