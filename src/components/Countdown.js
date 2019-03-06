import React, { Component } from 'react';

class Countdown extends Component {
  state = {
    secondsCountdown: 120
  };

  getSeconds = () => {
    return '0' + (this.state.secondsCountdown % 60);
  };

  getMinutes = () => {
    return '0' + Math.floor(this.state.secondsCountdown / 60);
  };

  handleStartCounter = () => {
    setInterval(function() {
      this.setState({
        secondsCountdown: -1
      });
    }, 1000);
  };

  handleStopCounter = () => {
    alert('stopping');
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>
            Time: {this.getMinutes().slice(-2)}:{this.getSeconds().slice(-2)}{' '}
            min
          </h2>{' '}
          <button className="btn btn-danger" onClick={this.handleStartCounter}>
            Start
          </button>
          <button className="btn btn-primary" onClick={this.handlerStopCounter}>
            Stop
          </button>
        </div>
      </div>
    );
  }

  // componentDidMount() {
  //   this.myInterval = setInterval(() => {
  //     this.setState(prevState => ({
  //       countdown: prevState.countdown - 1
  //     }));
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.myInterval);
  // }
}

export default Countdown;
