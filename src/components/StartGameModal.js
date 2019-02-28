import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ScoreBoard from './ScoreBoard';
import { connect } from 'react-redux';

class StartGameModal extends Component {
  state = {
    players: []
  };

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  addPlayersHandler = () => {};

  render() {
    return (
      <div>
        <Button color="danger text-uppercase p-3" onClick={this.toggle}>
          start the game!
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add some players!</ModalHeader>
          <ModalBody>
            <div>
              <input
                className="w-100"
                style={{
                  padding: '15px',
                  fontSize: '35px',
                  textAlign: 'center'
                }}
                placeholder="Enter player here"
              />
              <i
                className="fas fa-user-plus"
                style={{
                  cursor: 'pointer',
                  float: 'right',
                  color: 'rgb(0, 128, 255)',
                  fontSize: '35px',
                  margin: '15px'
                }}
                onClick={this.addPlayersHandler}
              />
            </div>
            <ScoreBoard />
          </ModalBody>
          <ModalFooter>
            <Link to="/game">
              <Button color="primary text-uppercase" onClick={this.toggle}>
                start
              </Button>{' '}
            </Link>
            <Button color="secondary text-uppercase" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.reducer1.players
});

// const mapDispatchToProps = dispatch => {
//   return {
//     players: () => dispatch({ type: 'SET_PLAYERS' })
//   };
// };

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(StartGameModal);
