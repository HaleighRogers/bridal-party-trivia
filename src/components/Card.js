import React, {Component} from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state= {
      showCard: false
    }
  }

  render() {
    return(
      <div className="flip-card"
      onClick={() => this.setState({showCard: !this.state.showCard})}
      style={this.state.showCard ? {"transform" "rotateY(180deg)"} : {"transform": "rotateY(0deg)"}}
      >

      <div className="flipper" style={this.state.showCard ? {"transform": "rotatey(180deg)"} : {"transform": "rotateY(0deg)"}}>
        <div className="front">
          <p>{this.props.prize}</p>
        </div>
        <div className="back">
          <p
              style={this.state.showCard ? {"transform": "rotateY(180deg)"} : {"transform": "rotateY(0deg)"}}
          >
            {this.props.question}
          </p>
        </div>
      </div>
    </div>
    )
  }
}
