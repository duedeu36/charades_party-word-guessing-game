const initialState = {
  players: [
    { id: 1, name: 'Bob', score: 3 },
    { id: 2, name: 'Karl', score: 1 },
    { id: 3, name: 'Alex', score: 7 }
  ],
  playedWords: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLAYERS':
      let players = [...state.players];
      players.push({
        id: 4,
        name: 'John',
        score: 0
      });
      return {
        ...state,
        players: state.players
      };
    default:
      return state;
  }
}
