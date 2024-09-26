const cells = document.querySelectorAll('[data-cell]');
const statusDisplay = document.querySelector('.status');
const restartButton = document.getElementById('restartButton');
let isXNext = true; // true means X's turn, false means O's turn
let board = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(e) {
    const cell = e.target;
    const index = Array.from(cells).indexOf(cell);

    if (board[index] !== '' || checkWinner()) return;

    board[index] = isXNext ? 'X' : 'O';
    cell.textContent = board[index];
    isXNext = !isXNext;
    updateStatus();
    if (checkWinner()) {
        statusDisplay.textContent = `Player ${isXNext ? 'O' : 'X'} has won!`;
    } else if (!board.includes('')) {
        statusDisplay.textContent = 'It\'s a draw!';
    }
}

function updateStatus() {
    statusDisplay.textContent = `Player ${isXNext ? 'X' : 'O'}'s turn`;
}

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === (isXNext ? 'O' : 'X'));
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => (cell.textContent = ''));
    isXNext = true;
    updateStatus();
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', resetGame);
