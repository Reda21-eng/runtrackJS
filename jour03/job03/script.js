const game = document.getElementById('game');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');
let tiles = [1, 2, 3, 4, 5, 6, 7, 8, null]; // null représente la case vide
let solved = [1, 2, 3, 4, 5, 6, 7, 8, null];

function initGame() {
    // Mélanger les tuiles
    tiles = tiles.sort(() => Math.random() - 0.5);
    renderBoard();
}

function renderBoard() {
    game.innerHTML = '';
    tiles.forEach((tile, index) => {
        const img = document.createElement('img');
        img.className= tile ? 'tile' : 'empty';
        //img.textContent = tile || '';
        img.src= "./images/logo1.PNG"
        img.addEventListener('click', () => moveTile(index));
        game.appendChild(div);
    });
}

function moveTile(index) {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [
        emptyIndex - 1, emptyIndex + 1, // gauche, droite
        emptyIndex - 3, emptyIndex + 3  // haut, bas
    ];

    if (validMoves.includes(index)) {
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
        renderBoard();
        checkWin();
    }
}

function checkWin() {
    if (tiles.every((tile, i) => tile === solved[i])) {
        message.style.display = 'block';
        game.style.pointerEvents = 'none'; // Bloquer les clics
        restartBtn.style.display = 'block';
    }
}

restartBtn.addEventListener('click', () => {
    message.style.display = 'none';
    restartBtn.style.display = 'none';
    game.style.pointerEvents = 'auto';
    initGame();
});

initGame();