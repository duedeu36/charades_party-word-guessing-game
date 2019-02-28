import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

class ScoreBoard extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Otto</td>
              <td>33</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Thornton</td>
              <td>22</td>
            </tr>
            <tr>
              <th>3</th>
              <td>the Bird</td>
              <td>41</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.reducer1.players
});

// const mapDispatchToProps = dispatch => ({
//   nextPlayer: () => dispatch({ type: 'NEXT_PLAYER' })
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(ScoreBoard);
