export default function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],//0
        [3, 4, 5],//1
        [6, 7, 8],//2
        [0, 3, 6],//3
        [1, 4, 7],//4
        [2, 5, 8],//5
        [0, 4, 8],//6
        [2, 4, 6],//7
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {winner: squares[a], line:lines[i]};
        }
    }
    return null;
}