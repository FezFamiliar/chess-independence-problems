import React, {Component} from 'react'
import '../css/board.css'
import Square from './Square'
import NextButton from './NextButton'
import { Link } from 'react-router-dom'

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
            color: '#2E2D88',
            piece: 'queen'
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

    handlePieceChange = (p) => {

        this.setState({piece:p})
    }

    render() {

      return (
          <>
            <ul id="sidebar">
                <Link to={{pathname: '/rooks'}} className='menu-bars' key="rook" onClick={() => this.setState({piece: 'rook'})}>
                    Rooks
                </Link>
                <Link to={{pathname: '/bishops'}} className='menu-bars' key="bishop" onClick={() => this.setState({piece: 'bishop'})}>
                    Bishops
                </Link>
                <Link to={{pathname: '/queens'}} className='menu-bars' key="queen"  onClick={() => this.setState({piece: 'queen'})}>
                    Queens
                </Link>
                <Link to={{pathname: '/knights'}} className='menu-bars' key="knight" onClick={() => this.setState({piece: 'knight'})}>
                    Knights
                </Link>
            </ul>
            <p>permutation: {this.state.index} / {this.state.queen_total}</p>
            <button onClick={this.handleNextEvent}>next</button>
            <div className="board">
                    
                    {this.state.board.map((col, i) => 
                    (
                        col.map((item, j) => {
                                return ((i + j) % 2 == 1) ? (item == 1) ? <Square style={{ backgroundColor: this.state.color }} IsValid={true} Piece={this.state.piece}/> : <Square style={{ backgroundColor: this.state.color }} Piece={this.state.piece}/> : (item == 1) ? <Square IsValid={true} Piece={this.state.piece}/> : <Square />
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