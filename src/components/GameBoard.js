import React, { Component } from 'react';
import '../styles/gameBoard.css';
import GirlBoardBackground from './GirlBoardBackground';
import BoyBoardBackground from './BoyBoardBackground';

export default class GameBoard extends Component {
  render() {
    return(
      <div className="GameBoard">
        <GirlBoardBackground/>
        <BoyBoardBackground/>
      </div>
    )
  }
}
