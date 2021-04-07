import React, {Component} from 'react'
import '../css/board.css'
import Square from './Square'
import NextButton from './NextButton'
import { perm } from '../utils/permutate.js';

class Board extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            board: [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
            ],
            index: 0
        }

    }

    handleClick = () => {

        this.setState({board: perm[3]});
    }

    render() {

      return (
      <div className="board">
            {this.state.board.map((col, i) => 
            (
                col.map((item, j) => {
                        return ((i + j) % 2 == 1) ? (item == 1) ? <Square className={'square'} IsValid={true}/> : <Square className={'square'}/> : (item == 1) ? <Square IsValid={true}/> : <Square />
                }))
            )}      
            <button onClick={this.handleClick}>next</button>
      </div>
     
      )
    }
}

export default Board;