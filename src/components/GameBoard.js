import React, { Component } from 'react';
import '../styles/gameBoard.css';
import GameBoardBackground from './GameBoardBackground';

export default class GameBoard extends Component {
  render() {
    return(
      <div className="GameBoard">
        <GameBoardBackground/>
      </div>
    )
  }
}
