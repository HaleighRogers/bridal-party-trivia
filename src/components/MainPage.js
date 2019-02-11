import React, { Component } from 'react';
import '../styles/mainPage.css';
import Background from './Background';
import GameBoard from './GameBoard';

export default class MainPage extends Component {
  render() {
    return(
      <div className="MainPage">
        <Background/>
        <GameBoard/>
      </div>
    )
  }
}
