const initialState = {
  players: [
    { id: 1, name: 'Bob', score: 3, active: false },
    { id: 2, name: 'Karl', score: 1, active: false },
    { id: 3, name: 'Alex', score: 7, active: false }
  ],
  words: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  playedWords: ['car', 'bottle', 'snowball'],
  randomWord: ''
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
    case 'ACTIVE_PLAYER':
      // players2 cannot be players
      let players2 = [...state.players];
      players2.map(player => {
        player.active = false;
      });
      let randomNumber = Math.floor(Math.random() * players2.length);
      let randomPlayer = players2[randomNumber];
      console.log(randomPlayer);
      players2[randomNumber].active = true;
      return {
        ...state,
        players: players2
      };
    case 'ADD_WORDS':
      let words = [...state.words];
      words.push(action.data);
      return {
        ...state,
        words: words
      };
    case 'DICE_WORDS':
      // words2 cannot be words
      let words2 = [...state.words];
      console.log(state.randomWord);
      console.log('spread operator words: ', words2);
      var randomWord = words2[Math.floor(Math.random() * words2.length)];
      console.log('randomWord: ', randomWord);
      console.log('spread operator words: ', words2);
      for (var i = 0; i < words2.length; i++) {
        if (words2[i] === randomWord) {
          words2.splice(i, 1);
        }
      };
      return {
        ...state,
        words: words2,
        randomWord: randomWord
      };
    case 'PLAYED_WORDS':
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
