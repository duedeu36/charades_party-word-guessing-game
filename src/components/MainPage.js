import React, { Component } from 'react';
import UsedWords from './UsedWords';
import ScoreBoard from './ScoreBoard';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class MainPage extends Component {
  state = {
    words: [],
    randomWords: [],
    inputValue: ''
  };

  inputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  addWordHandler = () => {
    this.state.words.push(this.state.inputValue);
    console.log('words: ', this.state.words);
  };

  randomWordHandler = () => {
    var words = [...this.state.words];
    console.log('words: ', words);
    var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log('randomWord: ', randomWord);
    for (var i = 0; i < words.length; i++) {
      if (words[i] === randomWord) {
        words.splice(i, 1);
      }
    }
    this.setState({
      words: words,
      randomWord: randomWord
    });
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
                <button className="btn btn-info" style={{}}>
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
        <UsedWords />
        <ScoreBoard />
        <Link to="/" className="float-right mb-5">
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    );
  }
}

export default MainPage;
