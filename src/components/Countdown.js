import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

class Countdown extends Component {
  state = {
    seconds: 15
  };

  getSeconds = () => {
    return '0' + (this.state.seconds % 60);
  };

  getMinutes = () => {
    return Math.floor(this.state.seconds / 60);
  };
  
  handleStartCounter = () => {
    var _this = this;
    this.incrementer = setInterval(function() {
      _this.setState({
        seconds: _this.state.seconds - 1
      })
    }, 1000);
  };
  
  handleStopCounter = () => {
    clearInterval(this.incrementer);
  };

  timeOver = () =>{
    if(this.state.seconds == -1) {
      alert('Time over! Next player is John')
      this.state.seconds = 5;
      clearInterval(this.incrementer);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 onChange={this.timeOver()}>
            Time: {this.getMinutes()}:{this.getSeconds().slice(-2)}{' '}
            min
          </h2>{' '}
          <button className="btn btn-danger" onClick={this.handleStartCounter}>
            Start
          </button>
          <button className="btn btn-primary" onClick={this.handleStopCounter}>
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
