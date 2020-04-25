import Constants from '../../util/Constants';

/**
* initialize3PackCard => to initialize card of 3 deck
* startGame => to start game
* updateCounter => to update counter
* stopRestartGame => to stop restart game
* drawCardRandomPlayer=> to draw card random for player
* drawCardRandomDealer=> to draw card random for Dealer
* drawCardRandom => to draw card random in starting
*/

export const initialize3PackCard = (deckCard3) => {
  return {
    type: Constants.INIT_CARD,
    payload: deckCard3,
  };
};

export const startGame = () => {
  return {
    type: Constants.START_GAME,
    payload: true,
  };
};

export const updateCounter = (counter) => {
  return {
    type: Constants.COUNTER,
    payload: counter,
  };
};

export const stopRestartGame = () => {
    return {
      type: Constants.STOP_RESTART_GAME,
      payload: "",
    };
  };


export const drawCardRandomPlayer = (
  deckCard3,
  score,
  myCards,
  dealerScore,
) => {
  let tmpDeckCard = deckCard3;
  let tmpScore = score;
  let cardCount = 1;
  let tmpMyCards = myCards;
  while (cardCount <= 1) {
    const min = 0;
    const max = 155;
    const randomNumber = min + Math.random() * (max - min);
    const randomNumberInt = parseInt(randomNumber);
    if (!tmpDeckCard[randomNumberInt].WITHDRAW) {
      tmpDeckCard[randomNumberInt].WITHDRAW = true;
      tmpDeckCard[randomNumberInt].PLAYER = true;
      tmpScore += tmpDeckCard[randomNumberInt].VALUE;
      tmpMyCards.push(tmpDeckCard[randomNumberInt]);
      cardCount++;
    }
  }

  let winner = '';
  if (tmpScore > 21) {
    winner = 'DEALER';
  } else if (tmpScore == 21) {
    winner = 'PLAYER';
  } else if (tmpScore >= 19 && tmpScore < 21) {
    if (tmpScore > dealerScore) {
      winner = 'PLAYER';
    } else {
      winner = 'DEALER';
    }
  }
  return {
    type: Constants.DRAW_CARD_PLAYER,
    playerScore: tmpScore,
    PackCard3: tmpDeckCard,
    playerCards: tmpMyCards,
    winner: winner,
  };
};

export const drawCardRandomDealer = (
  deckCard3,
  score,
  myCards,
  playerScore,
) => {
  let tmpDeckCard = deckCard3;
  let tmpScore = score;
  let cardCount = 1;
  let tmpMyCards = myCards;
  while (cardCount <= 1) {
    const min = 0;
    const max = 155;
    const randomNumber = min + Math.random() * (max - min);
    const randomNumberInt = parseInt(randomNumber);
    if (!tmpDeckCard[randomNumberInt].WITHDRAW) {
      tmpDeckCard[randomNumberInt].WITHDRAW = true;
      tmpDeckCard[randomNumberInt].DEALER = true;
      tmpScore += tmpDeckCard[randomNumberInt].VALUE;
      tmpMyCards.push(tmpDeckCard[randomNumberInt]);
      cardCount++;
    }
  }

  let winner = '';
  if (tmpScore > 21) {
    winner = 'PLAYER';
  } else if (tmpScore === 21) {
    winner = 'DEALER';
  } else if (tmpScore >= 19 && tmpScore < 21) {
    if (tmpScore > playerScore) {
      winner = 'DEALER';
    } else {
      winner = 'PLAYER';
    }
  }

  return {
    type: Constants.DRAW_CARD_DEALER,
    dealerScore: tmpScore,
    PackCard3: tmpDeckCard,
    dealerCards: tmpMyCards,
    winner: winner,
  };
};

export const drawCardRandom = (deckCard3) => {
  let tmpDeckCard = deckCard3;
  let cardCount = 1;
  let playerScore = 0;
  let dealerScore = 0;
  let playerCards = [];
  let dealerCards = [];
  while (cardCount <= 2) {
    const min = 0;
    const max = 155;
    const randomNumber = min + Math.random() * (max - min);
    const randomNumberInt = parseInt(randomNumber);
    if (!tmpDeckCard[randomNumberInt].WITHDRAW) {
      tmpDeckCard[randomNumberInt].WITHDRAW = true;
      if (cardCount == 1 || cardCount == 4) {
        tmpDeckCard[randomNumberInt].PLAYER = true;
        playerScore += tmpDeckCard[randomNumberInt].VALUE;
        playerCards.push(tmpDeckCard[randomNumberInt]);
      } else {
        tmpDeckCard[randomNumberInt].DEALER = true;
        dealerScore += tmpDeckCard[randomNumberInt].VALUE;
        dealerCards.push(tmpDeckCard[randomNumberInt]);
      }
      cardCount++;
    }
  }
  let winner = '';
  if (playerScore > 21) {
    winner = 'DEALER';
  } else if (dealerScore > 21) {
    winner = 'PLAYER';
  } else if (playerScore ===21) {
    winner = 'PLAYER';
  } else if (dealerScore === 21) {
    winner = 'DEALER';
  } else if (dealerScore >= 19 && dealerScore < 21) {
    if (dealerScore > playerScore) {
      winner = 'DEALER';
    } else {
      winner = 'PLAYER';
    }
  } else if (playerScore >= 19 && playerScore < 21) {
    if (playerScore > dealerScore) {
      winner = 'PLAYER';
    } else {
      winner = 'DEALER';
    }
  }
  return {
    type: Constants.INIT_SCORE,
    playerScore: playerScore,
    dealerScore: dealerScore,
    round: 1,
    PackCard3: tmpDeckCard,
    isStartGame: true,
    dealerCards: dealerCards,
    playerCards: playerCards,
    winner: winner,
  };
};
