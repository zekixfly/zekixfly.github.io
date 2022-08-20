import React, {Component} from 'react'
import Board from '../Board'
import calculateWinner from '../../calculateWinner'
import './index.css'

export default class Game extends Component {
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