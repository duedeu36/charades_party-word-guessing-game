import React, { Component } from 'react';
import PlayedWords from './PlayedWords';
import ScoreBoard from './ScoreBoard';
import Countdown from './Countdown';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { connect } from 'react-redux';

class MainPage extends Component {
  state = {
    // words: [],
    // randomWords: [],
    inputValue: ''
  };

  inputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  addWordHandler = () => {
    this.props.words.push(this.state.inputValue);
    // this.props.addWords(this.props.words);
    console.log('reducer words: ', this.props.words);
  };

  activePlayerHandler = () => {
    this.props.activePlayer();
  };

  diceWordHandler = () => {
    this.props.diceWords();
    this.props.playedWords(this.props.randomWord);
  };

  render() {
    return (
      <div className="container" style={{ maxWidth: '700px' }}>
        <div className="row">
          <div className="col align-self-center">
            <div className="mt-5">
              <h1 className="p-3 bg-light text-center">
                {this.props.randomWord}
              </h1>
            </div>

            <div className="container">
              <div className="row">
                <input
                  className="w-100"
                  style={{
                    padding: '10px',
                    fontSize: '30px',
                    textAlign: 'center'
                  }}
                  placeholder="Enter words here"
                  onChange={this.inputValue}
                />
                <Countdown />
              </div>
            </div>
            <div className="m-3">
              <button
                className="btn btn-primary"
                style={{}}
                onClick={this.addWordHandler}
              >
                Add word
              </button>{' '}
              <button
                className="btn btn-info"
                style={{}}
                onClick={this.activePlayerHandler}
              >
                Random player
              </button>{' '}
              <button
                className="btn btn-success"
                style={{}}
                onClick={this.diceWordHandler}
              >
                Dice word
              </button>{' '}
              <button className="btn btn-danger" style={{}}>
                Delete word
              </button>{' '}
            </div>
          </div>
        </div>
        <ScoreBoard />
        <PlayedWords />
        <Link to="/" className="float-right mb-5">
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  words: state.reducer1.words,
  randomWord: state.reducer1.randomWord
  // players: state.reducer1.players
});

const mapDispatchToProps = dispatch => {
  return {
    playedWords: played => dispatch({ type: 'PLAYED_WORDS', data: played }),
    addWords: words => dispatch({ type: 'ADD_WORDS', data: words }),
    activePlayer: () => dispatch({ type: 'ACTIVE_PLAYER' }),
    diceWords: () => dispatch({ type: 'DICE_WORDS' })
  };
};

export default connect(
  // null,
  mapStateToProps,
  mapDispatchToProps
  // null
)(MainPage);
