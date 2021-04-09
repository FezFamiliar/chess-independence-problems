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
                [1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0],
            ],
            index: 1,
            queen_total: 92,
            color: '#2E2D88'
        }

    }

    handleNextEvent = () => {   
        console.log(perm);
        if(this.state.index < this.state.queen_total)
        {
            this.setState({board: perm[this.state.index], index: this.state.index + 1});
        }
    }

    handleBackEvent = () => {       
        
        if(this.state.index > 1 && this.state.index < this.state.queen_total)
        {
            this.setState({index: this.state.index - 1},
                    () => {

                        console.log('state index: ' + this.state.index);
                        let aux = this.state.index;
                        if(aux > 0)
                        {
                            this.setState({board: perm[--aux]});
                        }
                    
                    }
                );
        }
    }

    handleChangeBoardColorEvent = () => {

        let colors = ['#0247FE', '#008000', '#DE5D83', '#00BFFF', '#9932CC', '#893F45', '#FFD300', '#2E2D88'];
        let rand = Math.floor(Math.random() * 10) % colors.length;
      
        this.setState({color: colors[rand]});
    }

    render() {

      return (
          <>
            <p>permutation: {this.state.index} / {this.state.queen_total}</p>
            <button onClick={this.handleNextEvent}>next</button>
            <div className="board">
                    
                    {this.state.board.map((col, i) => 
                    (
                        col.map((item, j) => {
                                return ((i + j) % 2 == 1) ? (item == 1) ? <Square style={{ backgroundColor: this.state.color }} IsValid={true}/> : <Square style={{ backgroundColor: this.state.color }}/> : (item == 1) ? <Square IsValid={true}/> : <Square />
                        }))
                    )}
                    <button onClick={this.handleChangeBoardColorEvent}>Change board</button>
            </div>
            <button onClick={this.handleBackEvent}>back</button>
        </>
      )
    }
}

export default Board;