import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { connect } from 'react-redux';

class PlayedWords extends Component {
  render() {
    return (
      <div className="container">
        <div className="mb-3 bg bg-light p-3">
          {this.props.playedWords.map(words => {
            return (
              <button className="btn btn-warning disabled">{words}</button>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playedWords: state.reducer1.playedWords
});

// const mapDispatchToProps = dispatch => ({
//   nextPlayer: () => dispatch({ type: 'NEXT_PLAYER' })
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(PlayedWords);
