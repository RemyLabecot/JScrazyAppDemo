import * as script from '../src/script';

test('generateRandomSquarePosition must return valid position', () => {
    expect(script.generateRandomSquarePosition(400, 1, 500, 500)).toStrictEqual([100, 100]);
});

/*test('splitSquareOnClick must split square size by 2', () => {

    document.body.innerHTML = `<div id="1" class="square" onclick="splitSquareSize(this.id)" style="top: 42.467px; left: 260.931px; width: 400px; height: 400px;"></div>`;

    expect(script.splitSquareSize(1)).toBe('200px');
});*/
