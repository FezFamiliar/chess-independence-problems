import React, {Component} from 'react'
import '../css/square.css'

class Square extends Component {


  constructor(props)
  {
      super(props);
      this.state = {
  
          color: '#2E2D88'
      }

  }

    place_piece = (props) => {
      console.log(this.props.Piece);
        return (this.props.IsValid) ? <img src={"./" + this.props.Piece + '.png'} height={80} width={80} alt={this.props.Piece}/> : '';
    }

    // place_queen = (props) => {
    //   console.log(this.props.Piece);
    //     return (this.props.IsValid) ? <img src={"./" + this.props.Piece + '.png'} height={80} width={80} alt="queen"/> : '';
    // }


    // place_rook = (props) => {
    //   console.log(this.props.Piece);
    //   return (this.props.IsValid) ? <img src={"./" + this.props.Piece + '.png'} height={80} width={80} alt="rook"/> : '';
    // }


    // place_bishop = (props) => {
    //   console.log(this.props.Piece);
    //   return (this.props.IsValid) ? <img src={"./" + this.props.Piece + '.png'} height={80} width={80} alt="bishop"/> : '';
    // }

    
    // place_knight = (props) => {
    //   console.log(this.props.Piece);
    //   return (this.props.IsValid) ? <img src={"./" + this.props.Piece + '.png'} height={80} width={80} alt="knight"/> : '';
    // }

    render() {
      return <div style={this.props.style}>{this.place_piece(this.props)}</div>;
    }


}

export default Square;