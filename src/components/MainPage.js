import React, { Component } from 'react';
import PlayedWords from './PlayedWords';
import ScoreBoard from './ScoreBoard';
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

  selectPlayer = () => {
    this.props.selectPlayer();
  };

  randomWordHandler = () => {
    var words = [...this.props.words];
    console.log('spread operator words: ', words);
    var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log('randomWord: ', randomWord);
    for (var i = 0; i < words.length; i++) {
      if (this.props.words[i] === randomWord) {
        this.props.words.splice(i, 1);
      }
    }

    this.setState({
      randomWord: randomWord
    });
    this.props.playedWords(this.state.randomWord);
  };

  render() {
    return (
      <div className="container" style={{ maxWidth: '700px' }}>
        <div className="row">
          <div className="col align-self-center">
            <div className="mt-5">
              <h1 className="p-3 bg-light text-center">
                {this.state.randomWord}
              </h1>
            </div>
            <div className="">
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
                  onClick={this.selectPlayer}
                >
                  Random player
                </button>{' '}
                <button
                  className="btn btn-success"
                  style={{}}
                  onClick={this.randomWordHandler}
                >
                  Dice word
                </button>{' '}
                <button className="btn btn-danger" style={{}}>
                  Delete word
                </button>{' '}
              </div>
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
  players: state.reducer1.players
});

const mapDispatchToProps = dispatch => {
  return {
    playedWords: played => dispatch({ type: 'PLAYED_WORDS', data: played }),
    addWords: words => dispatch({ type: 'ADD_WORDS', data: words }),
    selectPlayer: selectPlayer =>
      dispatch({ type: 'SELECT_PLAYER', data: selectPlayer })
  };
};

export default connect(
  // null,
  mapStateToProps,
  mapDispatchToProps
  // null
)(MainPage);
