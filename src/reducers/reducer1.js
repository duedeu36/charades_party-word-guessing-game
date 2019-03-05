const initialState = {
  players: [
    { id: 1, name: 'Bob', score: 3, active: false },
    { id: 2, name: 'Karl', score: 1, active: false },
    { id: 3, name: 'Alex', score: 7, active: false }
  ],
  words: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  playedWords: ['Katze', 'Auto', 'Aschenbecher']
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case 'INPUT_VALUE':
    //   return {
    //     ...state,
    //     inputValue: inputValue
    //   };
    case 'ADD_PLAYERS':
      let players = [...state.players];
      players.push({
        id: players.length + 1,
        name: action.data,
        score: 0,
        active: false
      });
      console.log(state.players);
      return {
        ...state,
        players: players
      };
    case 'SELECT_PLAYER':
      {
        let players = [...state.players];
        let randomPlayer = players[Math.floor(Math.random() * players.length)];
        console.log(randomPlayer);
      }

      return {
        ...state,
        players: players
      };
    case 'ADD_WORDS':
      alert();
      let words = [...state.words];
      words.push(action.data);
      return {
        ...state,
        words: words
      };
    case 'PLAYED_WORDS':
      alert();
      let playedWords = [...state.playedWords];
      playedWords.push(action.data);
      return {
        ...state,
        playedWords: playedWords
      };
    default:
      return state;
  }
}
