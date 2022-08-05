import React, {Component} from 'react'
import Square from '../Square'
import { v4 as uuidv4 } from 'uuid'
import './index.css'

export default class Board extends Component {
  
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