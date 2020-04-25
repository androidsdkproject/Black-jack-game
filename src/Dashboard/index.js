import {Container, View} from 'native-base';
import {ImageBackground, Alert} from 'react-native';
import MyHeader from '../component/Header';
import {menu, hit, stand} from '../util/IconsList';
import React from 'react';
import {connect} from 'react-redux';
import {
  initialize3PackCard,
  startGame,
  drawCardRandom,
  updateCounter,
  drawCardRandomPlayer,
  drawCardRandomDealer,
  stopRestartGame
} from '../Redux/Actions';
import PackCards from '../util/1PackCards';
import assets from '../assets';
import Player from '../component/Player';
import locales from '../util/locales';
import CardList from '../component/CardList';
import HitStandButton from '../component/HitStandButton';
import styles from './styles';
import WinningPlayButton from '../component/WinningPlayButton';
import RNExitApp from 'react-native-exit-app';

/**
* this is dashboard component 
* used to player information
* card list
* winning information
*/

class dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialize3PackCard();
  }

  initialize3PackCard = async () => {
    let deckCard3 = [];
    for (let i = 0; i < 52 * 3; i++) {
      deckCard3[i] = {
        ...PackCards[i % 52],
        ID: i + 1,
        WITHDRAW: false,
        DEALER: false,
        PLAYER: false,
      };
    }
    this.props.initialize3PackCard(deckCard3);
  };

  callInterval = () => {
    this.props.startGame();
    this._interval = setInterval(() => {
      if (this.props.counter >= 5) {
        this.props.drawCardRandom(this.props.PackCard3);
        clearInterval(this._interval);
      } else {
        this.props.updateCounter(this.props.counter + 1);
      }
    }, 1000);
  };

  render() {
    return (
      <Container>
        <MyHeader
          iconType={menu.type}
          iconName={menu.name}
        
          onPressExit={() => {
            Alert.alert('Exit', 'Are you sure want to exit from application?', [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  RNExitApp.exitApp();
                },
              },
            ]);
          }}
          onPressStopRestartGame={() => {
            this.props.stopRestartGame();
          }}
          counter={this.props.counter}
          winner={this.props.winner}
          title={locales.home}
        />
        <ImageBackground source={assets.bg} style={styles.imageBg}>
          <View style={styles.container}>
            <View style={styles.hitView}>
              {this.props.winner === '' && this.props.counter >= 5 ? (
                <HitStandButton
                  onPress={() => {
                    this.props.drawCardRandomPlayer(
                      this.props.PackCard3,
                      this.props.playerScore,
                      this.props.playerCards,
                      this.props.dealerScore,
                    );
                  }}
                  name={locales.Hit}
                  iconName={hit.name}
                  iconType={hit.type}
                />
              ) : null}
            </View>
            <View style={styles.midContainer}>
              <CardList cardList={this.props.playerCards} />
              <WinningPlayButton
                winner={this.props.winner}
                counter={this.props.counter}
                isStartGame={this.props.isStartGame}
                onPress={() => {
                  this.callInterval();
                }}
              />
              <CardList cardList={this.props.dealerCards} />
            </View>
            <View style={styles.playerView}>
              {this.props.counter >= 5 ? (
                <View style={styles.playerSubView}>
                  <Player isPlayer={true} score={this.props.playerScore} />
                </View>
              ) : null}
              <View style={styles.standView}>
                {this.props.winner === '' && this.props.counter >= 5 ? (
                  <HitStandButton
                    onPress={() => {
                      this.props.drawCardRandomDealer(
                        this.props.PackCard3,
                        this.props.dealerScore,
                        this.props.dealerCards,
                        this.props.playerScore,
                      );
                    }}
                    name={locales.Stand}
                    iconName={stand.name}
                    iconType={stand.type}
                  />
                ) : null}
              </View>
              {this.props.counter >= 5 ? (
                <View style={styles.playerSubView}>
                  <Player isPlayer={false} score={this.props.dealerScore} />
                </View>
              ) : null}
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    PackCard3: state.home.PackCard3,
    round: state.home.round,
    maxRound: state.home.maxRound,
    playerScore: state.home.playerScore,
    dealerScore: state.home.dealerScore,
    winner: state.home.winner,
    currentRandomCardId: state.home.currentRandomCardId,
    isStartGame: state.home.isStartGame,
    counter: state.home.counter,
    playerCards: state.home.playerCards,
    dealerCards: state.home.dealerCards,
    winner: state.home.winner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialize3PackCard: (deckCard3) => {
      dispatch(initialize3PackCard(deckCard3));
    },
    stopRestartGame: () => {
      dispatch(stopRestartGame());
    },
    startGame: (deckCard3) => {
      dispatch(startGame(deckCard3));
    },
    drawCardRandom: (deckCard3) => {
      dispatch(drawCardRandom(deckCard3));
    },
    updateCounter: (value) => {
      dispatch(updateCounter(value));
    },
    drawCardRandomPlayer: (deckCard3, score, myCards, dealerScore) => {
      dispatch(drawCardRandomPlayer(deckCard3, score, myCards, dealerScore));
    },
    drawCardRandomDealer: (deckCard3, score, myCards, playerScore) => {
      dispatch(drawCardRandomDealer(deckCard3, score, myCards, playerScore));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
