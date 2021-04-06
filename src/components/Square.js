import React, {Component} from 'react'
import '../css/square.css'

class Square extends Component {

    place_queen(props) {
        return (this.props.IsValid) ? <img src="./queen.png" height={80} width={80} alt="queen"/> : '';
    }

    render() {
      return <div className={this.props.className}>{this.place_queen(this.props)}</div>;
    }


}

export default Square;