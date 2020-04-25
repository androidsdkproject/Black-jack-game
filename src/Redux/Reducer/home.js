import Constants from '../../util/Constants';

/**
* PackCard3 => 3 Deck Card List 
* playerScore => used to show player score
* dealerScore => used to show dealer score
* isStartGame => used to whether game start or not
* counter=> count down before starting game
* playerCards => to show player cards list
* dealerCards => to show dealer cards list
* winner=> to show winner 
*/

const iState = {
  PackCard3: [],
  playerScore: 0,
  dealerScore: 0,
  isStartGame: false,
  counter: 0,
  playerCards: [],
  dealerCards: [],
  winner: '',
};
const home = (state = iState, action) => {
  switch (action.type) {
    case Constants.INIT_CARD:
      return {
        ...state,
        PackCard3: action.payload,
      };
    case Constants.START_GAME:
      return {
        ...state,
        isStartGame: action.payload,
      };
    case Constants.COUNTER:
      return {
        ...state,
        counter: action.payload,
      };

      case Constants.STOP_RESTART_GAME:
      return {
        ...state,
        playerScore: 0,
        dealerScore: 0,
        isStartGame: false,
        dealerCards: [],
        playerCards: [],
        winner:"",
        counter:0
      };


    case Constants.INIT_SCORE:
      return {
        ...state,
        playerScore: action.playerScore,
        dealerScore: action.dealerScore,
        PackCard3: action.PackCard3,
        isStartGame: action.isStartGame,
        dealerCards: action.dealerCards,
        playerCards: action.playerCards,
        winner:action.winner
      };

    case Constants.DRAW_CARD_DEALER:
      return {
        ...state,
        dealerScore: action.dealerScore,
        PackCard3: action.PackCard3,
        dealerCards: action.dealerCards,
        winner:action.winner
      };

    case Constants.DRAW_CARD_PLAYER:
      return {
        ...state,
        playerScore: action.playerScore,
        PackCard3: action.PackCard3,
        playerCards: action.playerCards,
        winner:action.winner
      };
    default:
      return state;
  }
};

export default home;
