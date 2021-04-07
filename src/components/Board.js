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
            index: 0,
            queen_total: 92
        }

    }

    handleNextEvent = () => {       // print the board, then increment the index
        
        if(this.state.index < this.state.queen_total)
        {
            this.setState({board: perm[this.state.index], index: this.state.index + 1});
        }
    }

    handleBackEvent = () => {           // first decremenet the index, then print the board
        
        if(this.state.index > 0 && this.state.index < this.state.queen_total)
        {
            this.setState({board: perm[this.state.index], index: this.state.index - 1});
        }
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
            <button onClick={this.handleNextEvent}>next</button>
            dfd
            <button onClick={this.handleBackEvent}>back</button>
      </div>
     
      )
    }
}

export default Board;