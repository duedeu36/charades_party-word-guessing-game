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
    // case 'INPUT_VALUE':
    //   return {
    //     ...state,
    //     inputValue: inputValue
    //   };
    case 'ADD_PLAYERS':
      alert();
      let players = [...state.players];
      players.push({
        // id: 4,
        name: action.data,
        score: 0
      });
      console.log(state.players);
      return {
        ...state,
        players: players
      };
    default:
      return state;
  }
}
