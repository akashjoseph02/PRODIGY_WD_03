const ticTacToe = document.getElementById('ticTacToe');
const message = document.getElementById('message');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

ticTacToe.addEventListener('click', (event) => {
    const cell = event.target;
    const cellIndex = cell.dataset.index;

    if (cellIndex !== undefined && gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWinner();
        switchPlayer();
    }
});

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            message.textContent = `${currentPlayer} wins!`;
            break;
        }
    }

    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        message.textContent = "It's a draw!";
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
