import React, { Component } from 'react';
import StartGameModal from './components/StartGameModal';
import MainPage from './components/MainPage';
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/game" component={MainPage} />
          <div className="content">
            <StartGameModal />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
