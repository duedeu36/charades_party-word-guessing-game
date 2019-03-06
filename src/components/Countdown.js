import React, { Component } from 'react';

class Countdown extends Component {
  state = {
    countdown: 3
  };

  playSound = () => {
    if (this.state.countdown == -1) {
      alert('Game over! Next players turn.');
      // var snd = new Audio("file.wav");
      // snd.play();
      this.setState({
        countdown: 3
      });
    }
  };

  render() {
    return (
      <div>
        <h2 onChange={this.playSound()}>Time: {this.state.countdown}</h2>
      </div>
    );
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        countdown: prevState.countdown - 1
      }));
    }, 1000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.myInterval);
  // }
}

export default Countdown;
