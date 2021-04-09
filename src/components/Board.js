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
            queen_total: 92,
            color: '#2E2D88'
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

    handleChangeBoardColorEvent = () => {

        let colors = ['#0247FE', '#008000', '#DE5D83', '#00BFFF', '#9932CC', '#893F45', '#FFD300', '#2E2D88'];
        let rand = Math.floor(Math.random() * 10) % colors.length;
      
        this.setState({color: colors[rand]});
    }

    render() {

      return (
      <div className="board">
            {this.state.board.map((col, i) => 
            (
                col.map((item, j) => {
                        return ((i + j) % 2 == 1) ? (item == 1) ? <Square style={{ backgroundColor: this.state.color }} IsValid={true}/> : <Square style={{ backgroundColor: this.state.color }}/> : (item == 1) ? <Square IsValid={true}/> : <Square />
                }))
            )}      
            <button onClick={this.handleNextEvent}>next</button>
            ---
            <button onClick={this.handleBackEvent}>back</button>
            ---
            <button onClick={this.handleChangeBoardColorEvent}>Change board</button>
      </div>
     
      )
    }
}

export default Board;