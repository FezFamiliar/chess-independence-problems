import React, {Component} from 'react'
import '../css/board.css'
import Square from './Square'
import { perm, permutate } from '../utils/permutate.js';

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
            index: 1

        }
        this.k = 0;
        this.v = [0, 0, 0, 0, 0, 0, 0, 0];
        this.flag = Array(8).fill(false);
        this.n = this.v.length;
        permutate(this.k, this.n, this.v, this.flag);
    }

    init(perm) {

        for (let i = 0; i < 8; ++i) {
            for (let j = 0; j < 8; ++j) {

                if((i + j) % 2  == 1)
                {
                    this.state.board[i][j] = (perm[0][i][j] == 1) ? <Square className={'square'} IsValid={true} /> : <Square className={'square'} />
                }
                else
                {
                    this.state.board[i][j] =  (perm[0][i][j] == 1) ? <Square IsValid={true} /> : <Square />
                }
            }
        }

       return this.state.board;
    }

    next = () => {
        console.log(perm);
        this.setState({ index: this.state.index + 1});
    }

    render() {

      return (
      <div className="board">            
            {this.init(perm)}      
            <button onClick={this.next.bind(this)}> next</button>
      </div>
      )
    }
}

export default Board;