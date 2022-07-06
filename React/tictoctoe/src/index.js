import { v4 as uuidv4 } from 'uuid'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

function Square(props) {
  // console.log(uuidv4());
  return (
    <button       
      className = {props.className}
      onClick = {props.onClick}
    >        
      {props.value}
    </button>    
  );
}


class Board extends React.Component {

  
  renderSquare(i) {
    let squareStyle = this.props.winSquare ? this.props.winSquare.includes(i) ? "square win-square" : "square": "square";
    
    return ( 
      <Square 
        className={squareStyle}
        value={this.props.squareArray[i]} 
        onClick={()=>{ this.props.onClick(i) }}
      />
    );
  }

  render() {
    let renSqrArr = [];
    for(let i=0; i<9; i=i+3) {
      renSqrArr.push(
        <div key={uuidv4()} className="board-row">
          {this.renderSquare(0+i)}
          {this.renderSquare(1+i)}
          {this.renderSquare(2+i)}
        </div>
      )
    }
    return (
      <div>
        { renSqrArr }
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history:  [{
        squares: Array(9).fill(null),
        position: null
      }],
      stepNumber: 0,
      oIsNext: true,
      
    }
  }  

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber+1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    let positionCurrent = current.position;
    if(calculateWinner(squares) || squares[i]) {   
      return;
    }
    positionCurrent =`(${Math.floor(i/3)+1}-${Math.floor(i%3)+1})`;

    squares[i] = this.state.oIsNext ? 'O' : 'X';
    this.setState({
      history:  history.concat([{
        squares: squares,
        position: positionCurrent
      }]),
      stepNumber: history.length,
      oIsNext: !this.state.oIsNext,      
    });
  }

  jumpTo(idx) {
    this.setState({
      stepNumber: idx,
      oIsNext: (idx % 2 ) === 0,
    });
  }

  render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);    

      const moves = history.map((step, move)=> {
        const desc = move ? `Go to move #${move}${history[move].position}` : `Go to game start`;
        return (
          <li key={move}>
            <button onClick={()=> this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });

    let status, winSquare;

    if(winner?.winner) {
      status = `Winner: ${winner.winner}`;
      // winner.line.map(sqrIdx=> document.getElementsByClassName('square')[sqrIdx].classList.add('win-square'));
      winSquare = winner.line;      
    }
    else if(this.state.stepNumber === 9 && winner === null) {
      status = `Tie！`;      
    }
    else {
      status = `Next Player: ${this.state.oIsNext ? 'O' : 'X'}`;  
    }


    return (
      <div className="game">
        <div className="game-board">
          <Board 
            winSquare = {winSquare}            
            squareArray = {current.squares} 
            onClick = {(i)=> {this.handleClick(i)}}
          />
        </div>
        <div className="game-info">                    
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
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
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
